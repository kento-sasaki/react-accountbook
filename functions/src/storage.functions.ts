import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as vision from '@google-cloud/vision';
import * as path from 'path';
import * as os from 'os';
// import { addExpense } from '../../src/firebase/firestore';

export const onUploadImage = functions
  .region('asia-northeast1')
  .storage.object()
  .onFinalize(async (object) => {
    const fileBucket = object.bucket;
    const filePath = object.name;
    const bucket = admin.storage().bucket(fileBucket);
    console.log(fileBucket, filePath, object.contentType);

    if (filePath) {
      const fileName = path.basename(filePath);
      const tempFilePath = path.join(os.tmpdir(), fileName);
      await bucket.file(filePath).download({ destination: tempFilePath });
      console.log('Image downloaded locally to', tempFilePath);

      const projectId = 'react-accountbook';
      const credentials: { client_email: string; private_key: string } = {
        client_email: functions.config().vision_credentials.client_email,
        private_key: functions.config().vision_credentials.private_key.replace(/\\n/gi, '\n'),
      };

      const client = new vision.ImageAnnotatorClient({ projectId, credentials });

      // Performs label detection on the image file
      const [result] = await client.documentTextDetection(tempFilePath);
      const detections = result.textAnnotations;
      if (detections) {
        const regExpMatchArray = detections[0]?.description?.match(/\n合計\n[¥\d,]+\n/gu);
        if (regExpMatchArray) {
          console.log(regExpMatchArray[0]?.match(/\d+/g)?.join(''));
        }
      }
    }
  });
