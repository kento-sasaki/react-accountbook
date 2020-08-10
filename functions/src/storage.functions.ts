import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as vision from '@google-cloud/vision';

export const onUploadImage = functions
  .region('asia-northeast1')
  .storage.object()
  .onFinalize(async (object, context) => {
    console.log('------------ START ------------');
    const filePath = `gs://${object.bucket}/${object.name}`;

    if (filePath && object.name) {
      const userId = object.name.split('/')[0];
      const projectId = 'react-accountbook';
      const credentials: { client_email: string; private_key: string } = {
        client_email: functions.config().vision_credentials.client_email,
        private_key: functions.config().vision_credentials.private_key.replace(/\\n/gi, '\n'),
      };

      const client = new vision.ImageAnnotatorClient({ projectId, credentials });

      // Performs label detection on the image file
      console.log('------------ VISION START ------------');
      const [result] = await client.documentTextDetection(filePath);
      console.log('------------ VISION FINISH ------------');

      const detections = result.textAnnotations;
      if (detections) {
        const regExpMatchArray = detections[0]?.description?.match(/\n合計\n[¥\d,]+\n/gu);
        if (regExpMatchArray) {
          console.log(regExpMatchArray[0]?.match(/\d+/g)?.join(''));

          console.log('------------ FIRESTORE START ------------');
          await admin
            .firestore()
            .collection('users')
            .doc(userId)
            .collection('expense')
            .add({
              createdAt: admin.firestore.FieldValue.serverTimestamp(),
              date: admin.firestore.Timestamp.fromDate(new Date()),
              amount: Number(regExpMatchArray[0]?.match(/\d+/g)?.join('')),
              tag: 'その他',
            });
          console.log('------------ FIRESTORE FINISH ------------');
        }
      }
    }
  });
