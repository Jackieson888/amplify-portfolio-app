import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { secret } from "@aws-amplify/backend";

export const handler = async () => {
  const region = 'us-west-2';
  const bucket = 'public-gallery-portfolio-app';

  const accessKeyId = secret("S3_ACCESS_KEY_ID").value();
  const secretAccessKey = secret("S3_SECRET_ACCESS_KEY").value();

  const s3 = new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  const allObjects: any[] = [];
  let continuationToken: string | undefined;

  do {
    const response = await s3.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        ContinuationToken: continuationToken,
        MaxKeys: 1000,
      })
    );

    if (Array.isArray(response.Contents)) {
      allObjects.push(...response.Contents);
    }

    continuationToken = response.IsTruncated
      ? response.NextContinuationToken
      : undefined;
  } while (continuationToken);

  return {
    count: allObjects.length,
    objects: allObjects.map((obj) => ({
      key: obj.Key ?? null,
      size: obj.Size ?? null,
      lastModified: obj.LastModified ?? null,
    })),
  };
};