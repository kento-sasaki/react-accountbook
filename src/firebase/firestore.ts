import dayjs from 'dayjs';
import { firestore, auth } from './index';
import { Expense } from '../interfaces';

export const addIncome = async (amount: number, date: Date) => {
  const { currentUser } = auth();
  await firestore().collection('users').doc(`${currentUser?.uid}`).collection('income').add({
    createdAt: firestore.FieldValue.serverTimestamp(),
    date,
    amount,
  });
};

export const addExpense = async (amount: number, date: Date) => {
  const { currentUser } = auth();
  await firestore()
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .collection('expense')
    .add({
      createdAt: firestore.FieldValue.serverTimestamp(),
      date: firestore.Timestamp.fromDate(date),
      amount,
    });
};

export const getExpense = async () => {
  const { currentUser } = auth();
  const expense: Expense[] = [];

  const querySnapshot = await firestore()
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .collection('expense')
    .orderBy('date', 'asc')
    .get();

  querySnapshot.forEach((doc) => {
    expense.push({
      id: doc.id,
      date: doc.data().date.toDate(),
      formatedDate: dayjs(doc.data().date.toDate()).format('YYYY/M/D'),
      amount: doc.data().amount,
    });
  });

  return expense;
};

export const createDatilyExpense = (allExpense: Expense[]) => {
  const formatedDateArray = allExpense
    .map((exp) => exp.formatedDate)
    .filter((formatedDate, i, self) => self.indexOf(formatedDate) === i);

  const dailyExpense = formatedDateArray.map((formatedDate) => {
    const amounts = allExpense
      .filter((exp1) => {
        return exp1.formatedDate === formatedDate;
      })
      .map((exp2) => exp2.amount);

    return { formatedDate, amounts };
  });

  return dailyExpense;
};

export const updateExpense = async (id: string, amount: number, date: Date) => {
  const { currentUser } = auth();
  await firestore()
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .collection('expense')
    .doc(id)
    .update({
      date: firestore.Timestamp.fromDate(date),
      amount,
    });
};
