import { defineBackend, secret } from '@aws-amplify/backend';
import { function as defineFunction } from "@aws-amplify/backend/function";
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';

defineBackend({
  auth,
  data,
  listS3Objects: defineFunction({
    entry: "./functions/listS3Objects/index.ts",
    environment: {
      S3_REGION: process.env.S3_REGION!,
      S3_BUCKET: process.env.S3_BUCKET!,
    },
    secrets: [
      secret("S3_ACCESS_KEY_ID"),
      secret("S3_SECRET_ACCESS_KEY"),
    ],
  }),
});
