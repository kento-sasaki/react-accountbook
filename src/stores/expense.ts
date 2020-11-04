import { createSlice, Dispatch } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { getExpenses } from '../firebase/firestore';

const expenseSlice = createSlice({
  name: 'expense',
  initialState: [
    {
      id: '0',
      date: new Date(),
      formatedDate: dayjs().format('YYYY/M/D'),
      amount: 0,
      tagLabel: 'その他',
      tagIcon: 'tag',
    },
  ],
  reducers: {
    setExpense: (prevState, action) => {
      return action.payload;
    },
    resetExpense: () => {
      return [
        {
          id: '0',
          date: new Date(),
          formatedDate: dayjs().format('YYYY/M/D'),
          amount: 0,
          tagLabel: 'その他',
          tagIcon: 'tag',
        },
      ];
    },
  },
});

export const { setExpense, resetExpense } = expenseSlice.actions;
export const expenseReducer = expenseSlice.reducer;

export const fetchExpense = (limit?: number) => {
  return async (dispatch: Dispatch) => {
    const res = await getExpenses(limit);
    dispatch(setExpense(res));
  };
};
