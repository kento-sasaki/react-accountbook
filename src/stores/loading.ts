import { createSlice } from '@reduxjs/toolkit';

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: {
    isLoading: false,
  },
  reducers: {
    loading: () => {
      console.log('action: loading');

      return { isLoading: true };
    },
    loaded: () => {
      console.log('action: loaded');

      return { isLoading: false };
    },
  },
});

export const { loading, loaded } = isLoadingSlice.actions;
export const isLoadingReducer = isLoadingSlice.reducer;
