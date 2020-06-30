import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as vision from '@google-cloud/vision';
// const serviceAccount = require('../firebase.service-account.json');

admin.initializeApp();

export const visionSample = functions
  .region('asia-northeast1')
  .https.onRequest(async (request, response) => {
    // Creates a client
    const projectId = 'react-accountbook';
    const keyFilename = './vision.service-account.json';
    const client = new vision.ImageAnnotatorClient({ projectId, keyFilename });

    // Performs label detection on the image file
    const [result] = await client.labelDetection('./src/cat.jpg');
    const labels = result.labelAnnotations;
    if (labels) {
      console.log('Labels:');
      labels.forEach((label) => console.log(label.description));
      response.send(`${labels.map((label) => label.description)}`);
    }
  });

export const helloWorld = functions
  .region('asia-northeast1')
  .https.onRequest((request, response) => {
    response.send(`Hello ${request.query.text ? request.query.text : 'from Cloud Functions'}`);
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
