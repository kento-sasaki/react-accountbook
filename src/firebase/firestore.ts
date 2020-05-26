import { firestore, auth } from "./index";

interface Expense {
  createdAt: Date;
  amount: number;
}

export const addIncome = async (amount: number, createdAt: Date) => {
  const { currentUser } = auth();
  await firestore()
    .collection("users")
    .doc(`${currentUser?.uid}`)
    .collection("income")
    .add({
      createdAt: firestore.Timestamp.fromDate(createdAt),
      amount,
    });
};

export const addExpense = async (amount: number, createdAt: Date) => {
  const { currentUser } = auth();
  await firestore()
    .collection("users")
    .doc(`${currentUser?.uid}`)
    .collection("expense")
    .add({
      createdAt: firestore.Timestamp.fromDate(createdAt),
      amount,
    });
};

export const getExpense = async () => {
  const { currentUser } = auth();
  const expenses: Expense[] = [];

  const querySnapshot = await firestore()
    .collection("users")
    .doc(`${currentUser?.uid}`)
    .collection("expense")
    .get();

  querySnapshot.forEach((doc) => {
    expenses.push({
      createdAt: doc.data().createdAt,
      amount: doc.data().amount,
    });
  });

  return expenses;
};
