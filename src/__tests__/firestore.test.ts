import * as firebase from '@firebase/testing';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const projectId = 'react-accountbook';
const randomId = () => uuidv4();

const authenticatedFirestore = (auth: { uid: string; admin?: boolean } | undefined) => {
  return firebase.initializeTestApp({ projectId, auth }).firestore();
};

const serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();
const timestampFromDate = (year: number, month: number, date: number) => {
  return firebase.firestore.Timestamp.fromDate(new Date(year, month, date));
};

beforeAll(async () => {
  await firebase.loadFirestoreRules({
    projectId,
    rules: fs.readFileSync('./firestore.rules', 'utf8'),
  });
});

beforeEach(async () => {
  await firebase.clearFirestoreData({ projectId });
});

afterAll(async () => {
  await Promise.all(firebase.apps().map((app) => app.delete()));
});

describe('/users/{userId}/expense', () => {
  describe('read', () => {
    it('自分のデータなら読み取れる', async () => {
      const userId = randomId();
      const db = authenticatedFirestore({ uid: userId });
      const docRef = db.collection('users').doc(userId).collection('expense').doc();
      await firebase.assertSucceeds(docRef.get());
    });

    it('他人のデータは読み取れない', async () => {
      const userId = randomId();
      const db = authenticatedFirestore({ uid: userId });
      const docRef = db.collection('users').doc('bob').collection('expense').doc();
      await firebase.assertFails(docRef.get());
    });
  });

  describe('create', () => {
    it('正しいデータを登録できる', async () => {
      const userId = randomId();
      const db = authenticatedFirestore({ uid: userId });
      await firebase.assertSucceeds(
        db
          .collection('users')
          .doc(userId)
          .collection('expense')
          .add({
            createdAt: serverTimestamp(),
            date: timestampFromDate(2020, 1, 1),
            amount: 1000,
          }),
      );
      await firebase.assertSucceeds(
        db
          .collection('users')
          .doc(userId)
          .collection('expense')
          .add({
            createdAt: serverTimestamp(),
            date: timestampFromDate(2020, 1, 1),
            amount: 0, // 0円の支出も登録できる
          }),
      );
    });

    it('amountがないと登録できない', async () => {
      const userId = randomId();
      const db = authenticatedFirestore({ uid: userId });
      await firebase.assertFails(
        db
          .collection('users')
          .doc(userId)
          .collection('expense')
          .add({
            createdAt: serverTimestamp(),
            date: timestampFromDate(2020, 1, 1),
            amount: null,
          }),
      );
    });

    it('dateがないと登録できない', async () => {
      const userId = randomId();
      const db = authenticatedFirestore({ uid: userId });
      await firebase.assertFails(
        db.collection('users').doc(userId).collection('expense').add({
          createdAt: serverTimestamp(),
          date: null,
          amount: 1000,
        }),
      );
    });

    it('amountはnumberでないと登録できない', async () => {
      const userId = randomId();
      const db = authenticatedFirestore({ uid: userId });
      await firebase.assertFails(
        db
          .collection('users')
          .doc(userId)
          .collection('expense')
          .add({
            createdAt: serverTimestamp(),
            date: timestampFromDate(2020, 1, 1),
            amount: '1000',
          }),
      );
    });

    it('createdAt = request.timeでないと登録できない', async () => {
      const userId = randomId();
      const db = authenticatedFirestore({ uid: userId });
      await firebase.assertFails(
        db
          .collection('users')
          .doc(userId)
          .collection('expense')
          .add({
            createdAt: timestampFromDate(2020, 1, 1),
            date: timestampFromDate(2020, 1, 1),
            amount: 1000,
          }),
      );
    });
  });
});

describe('/users/{userId}/income', () => {
  describe('read', () => {
    it('自分のデータなら読み取れる', async () => {
      const userId = randomId();
      const db = authenticatedFirestore({ uid: userId });
      const docRef = db.collection('users').doc(userId).collection('income').doc();
      await firebase.assertSucceeds(docRef.get());
    });

    it('他人のデータは読み取れない', async () => {
      const userId = randomId();
      const db = authenticatedFirestore({ uid: userId });
      const docRef = db.collection('users').doc('bob').collection('income').doc();
      await firebase.assertFails(docRef.get());
    });
  });

  describe('create', () => {
    it('正しいデータを登録できる', async () => {
      const userId = randomId();
      const db = authenticatedFirestore({ uid: userId });
      await firebase.assertSucceeds(
        db
          .collection('users')
          .doc(userId)
          .collection('income')
          .add({
            createdAt: serverTimestamp(),
            date: timestampFromDate(2020, 1, 1),
            amount: 1000,
          }),
      );
      await firebase.assertSucceeds(
        db
          .collection('users')
          .doc(userId)
          .collection('income')
          .add({
            createdAt: serverTimestamp(),
            date: timestampFromDate(2020, 1, 1),
            amount: 0, // 0円の支出も登録できる
          }),
      );
    });

    it('amountがないと登録できない', async () => {
      const userId = randomId();
      const db = authenticatedFirestore({ uid: userId });
      await firebase.assertFails(
        db
          .collection('users')
          .doc(userId)
          .collection('income')
          .add({
            createdAt: serverTimestamp(),
            date: timestampFromDate(2020, 1, 1),
            amount: null,
          }),
      );
    });

    it('dateがないと登録できない', async () => {
      const userId = randomId();
      const db = authenticatedFirestore({ uid: userId });
      await firebase.assertFails(
        db.collection('users').doc(userId).collection('income').add({
          createdAt: serverTimestamp(),
          date: null,
          amount: 1000,
        }),
      );
    });

    it('amountはnumberでないと登録できない', async () => {
      const userId = randomId();
      const db = authenticatedFirestore({ uid: userId });
      await firebase.assertFails(
        db
          .collection('users')
          .doc(userId)
          .collection('income')
          .add({
            createdAt: serverTimestamp(),
            date: timestampFromDate(2020, 1, 1),
            amount: '1000',
          }),
      );
    });

    it('createdAt = request.timeでないと登録できない', async () => {
      const userId = randomId();
      const db = authenticatedFirestore({ uid: userId });
      await firebase.assertFails(
        db
          .collection('users')
          .doc(userId)
          .collection('income')
          .add({
            createdAt: timestampFromDate(2020, 1, 1),
            date: timestampFromDate(2020, 1, 1),
            amount: 1000,
          }),
      );
    });
  });
});
