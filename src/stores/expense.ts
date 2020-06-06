import { createSlice, Dispatch } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { getExpense } from '../firebase/firestore';

const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    expense: [{ date: new Date(), formatedDate: dayjs().format('YYYY/M/D'), amount: 0 }],
  },
  reducers: {
    setExpense: (prevState, action) => {
      return { expense: action.payload };
    },
    resetExpense: () => {
      return {
        expense: [{ date: new Date(), formatedDate: dayjs().format('YYYY/M/D'), amount: 0 }],
      };
    },
  },
});

export const { setExpense, resetExpense } = expenseSlice.actions;
export const expenseReducer = expenseSlice.reducer;

export const fetchExpense = () => {
  return async (dispatch: Dispatch) => {
    const res = await getExpense();
    dispatch(setExpense(res));
  };
};
