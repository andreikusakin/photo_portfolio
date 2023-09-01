import { useEffect, useState } from "react";
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const client = new S3Client({
  region: "us-east-1",
  credentials: fromCognitoIdentityPool({
    clientConfig: { region: "us-east-1" },
    identityPoolId: "us-east-1:9987b9a8-e4d3-45af-90be-498389b7fa53",
  }),
});

export async function fetchPhotos(galleryName) {
  const command = new ListObjectsV2Command({
    Bucket: "react-photo-portfolio-bucket",
    Prefix: galleryName + "/photo",
  });

  const { Contents: objects } = await client.send(command);

  if (objects.length > 0) {
    return generatePreSignedUrls(objects).then((urls) => urls);
  }

  return [];
}

const generatePreSignedUrls = async (objects) => {
  const urls = await Promise.all(
    objects.map(async (o) => {
      return await getSignedUrl(
        client,
        new GetObjectCommand({
          Bucket: "react-photo-portfolio-bucket",
          Key: `${o.Key}`,
        }),
        { expiresIn: 3600 }
      );
    })
  );

  return urls;
};
