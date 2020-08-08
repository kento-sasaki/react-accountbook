import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const onCreateUser = functions
  .region('asia-northeast1')
  .auth.user()
  .onCreate(async (user) => {
    console.log(user.uid);
    await admin
      .firestore()
      .collection('users')
      .doc(user.uid)
      .set({ email: user.email, uid: user.uid });
  });

export const onDeleteUser = functions
  .region('asia-northeast1')
  .auth.user()
  .onDelete(async (user) => {
    console.log(user.uid);
    await admin.firestore().collection('users').doc(user.uid).delete();
    console.log('success!!');
  });
