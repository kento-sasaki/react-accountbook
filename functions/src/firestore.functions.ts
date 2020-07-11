import * as functions from 'firebase-functions';

export const onCreate = functions
  .region('asia-northeast1')
  .firestore.document('users/{userID}/expense/{expenseID}')
  .onCreate((snap, context) => {
    const newValue = snap.data();
    const amount: number = newValue.amount;
    console.log(amount);
    console.log(context);
  });
