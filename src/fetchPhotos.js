import { useEffect, useState } from "react";
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";


export function useFetchPhotos(galleryName) {
    const [objects, setObjects] = useState([]);
    const [preSignedUrls, setPreSignedUrls] = useState([]);
  
    useEffect(() => {
      const client = new S3Client({
        region: "us-east-1",
        credentials: fromCognitoIdentityPool({
          clientConfig: { region: "us-east-1" },
          identityPoolId: "us-east-1:9987b9a8-e4d3-45af-90be-498389b7fa53",
        }),
      });
      const command = new ListObjectsV2Command({
        Bucket: "react-photo-portfolio-bucket",
        Prefix: galleryName + "/photo",
      });
      client.send(command).then(({ Contents }) => setObjects(Contents || []));
      
    }, []);
  
    // console.log(objects)
  
    useEffect(() => {
      if (objects.length > 0) {
        
        const generatePreSignedUrls = async () => {
          const client = new S3Client({
            region: "us-east-1",
            credentials: fromCognitoIdentityPool({
              clientConfig: { region: "us-east-1" },
              identityPoolId: "us-east-1:9987b9a8-e4d3-45af-90be-498389b7fa53",
            }),
          });
  
          const urls = await Promise.all(
            objects.map(async (o) => {
              return await getSignedUrl(client, new GetObjectCommand({ Bucket: "react-photo-portfolio-bucket", Key: `${o.Key}` }), { expiresIn: 3600 });
            })
          );
  
          setPreSignedUrls(urls);
        };
  
        generatePreSignedUrls();
      }
    }, [objects]);

    // console.log(preSignedUrls)

    return preSignedUrls;
}