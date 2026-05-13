import { listS3Objects } from "@/amplify/functions/listS3Objects";

export async function GET() {
  const result = await listS3Objects();

  return Response.json(result);
}

