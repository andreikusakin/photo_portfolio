import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const {REACT_APP_AWS_IDENTITY_POOL_ID, REACT_APP_AWS_REGION, REACT_APP_AWS_BUCKET_NAME} = process.env;
console.log()
const client = new S3Client({
  region: REACT_APP_AWS_REGION,
  credentials: fromCognitoIdentityPool({
    clientConfig: { region: REACT_APP_AWS_REGION },
    identityPoolId: REACT_APP_AWS_IDENTITY_POOL_ID,
  }),
});

const generatePreSignedUrls = async (objects) => {
  const urls = await Promise.all(
    objects.map(async (o) => {
      return await getSignedUrl(
        client,
        new GetObjectCommand({
          Bucket: REACT_APP_AWS_BUCKET_NAME,
          Key: `${o.Key}`,
        }),
        { expiresIn: 3600 }
      );
    })
  );

  return urls;
};


export async function fetchPhotos(galleryName) {
  const command = new ListObjectsV2Command({
    Bucket: REACT_APP_AWS_BUCKET_NAME,
    Prefix: galleryName + "/photo",
  });

  const { Contents: objects } = await client.send(command);

  if (objects.length > 0) {
    return await generatePreSignedUrls(objects);
  }

  return [];
}

