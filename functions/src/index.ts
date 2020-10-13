import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export { onCreateUser, onDeleteUser } from './auth.functions';
export { onCreate } from './firestore.functions';

export const helloWorld = functions
  .region('asia-northeast1')
  .https.onRequest((request, response) => {
    response.send(
      `Hello ${request.query.text ? request.query.text : 'from Cloud Functions'}. GitHub Actions.`,
    );
    console.log(
      `Hello ${request.query.text ? request.query.text : 'from Cloud Functions'}. GitHub Actions.`,
    );
  });
