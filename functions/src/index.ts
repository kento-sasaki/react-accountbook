import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as vision from '@google-cloud/vision';

admin.initializeApp();

export const visionSample = functions
  .region('asia-northeast1')
  .https.onRequest(async (request, response) => {
    // Creates a client
    const projectId = 'react-accountbook';
    // const keyFilename = './vision.service-account.json';
    const credentials: { client_email: string; private_key: string } = {
      client_email: functions.config().vision_credentials.client_email,
      private_key: functions.config().vision_credentials.private_key.replace(/\\n/gi, '\n'),
    };
    const client = new vision.ImageAnnotatorClient({ projectId, credentials });

    console.log(credentials.private_key);
    // Performs label detection on the image file
    const [result] = await client.labelDetection('./src/cat.jpg');
    const labels = result.labelAnnotations;
    if (labels) {
      console.log('Labels:');
      labels.forEach((label) => console.log(label.description));
      response.send(`${labels.map((label) => label.description)} from GitHub Actions`);
    }
  });

export const helloWorld = functions
  .region('asia-northeast1')
  .https.onRequest((request, response) => {
    const str = '-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkq';

    response.send(
      `Hello ${request.query.text ? request.query.text : 'from Cloud Functions'}. GitHub Actions.`,
    );
    console.log(
      `Hello ${request.query.text ? request.query.text : 'from Cloud Functions'}. GitHub Actions.`,
    );
  });

export const onCreate = functions
  .region('asia-northeast1')
  .firestore.document('users/{userID}/expense/{expenseID}')
  .onCreate((snap, context) => {
    const newValue = snap.data();
    const amount: number = newValue.amount;
    console.log(amount);
    console.log(context);
  });

export const onCreateUser = functions
  .region('asia-northeast1')
  .auth.user()
  .onCreate(async (user) => {
    console.log(user.uid);
    await admin
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('user')
      .add({ email: user.email, uid: user.uid });
  });

export const onDeleteUser = functions
  .region('asia-northeast1')
  .auth.user()
  .onDelete(async (user) => {
    console.log(user.uid);
    await admin.firestore().collection('users').doc(user.uid).delete();
    console.log('success!!');
  });
