import { createSlice, Dispatch } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { normalize, schema } from 'normalizr';
import { getExpenses } from '../firebase/firestore';
import { StoreExpense } from '../interfaces';

const initialState: {
  ids: string[];
  entities: Record<string, StoreExpense> | undefined;
} = {
  ids: ['0'],
  entities: {
    '0': {
      id: '0',
      date: new Date(),
      formatedDate: dayjs().format('YYYY/M/D'),
      amount: 0,
      tagLabel: 'その他',
      tagIcon: 'tag',
    },
  },
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    setExpense: (
      prevState,
      action,
    ): { ids: string[]; entities: Record<string, StoreExpense> | undefined } => {
      const myData = { expenses: action.payload };
      const mySchema = { expenses: [new schema.Entity('expenses')] };
      const normalizedData = normalize(myData, mySchema);

      return {
        ids: normalizedData.result.expenses,
        entities: normalizedData.entities.expenses,
      };
    },
    resetExpense: () => {
      return initialState;
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
