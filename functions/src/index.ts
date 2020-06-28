import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

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
