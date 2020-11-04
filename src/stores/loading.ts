import { createSlice } from '@reduxjs/toolkit';

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: true,
  reducers: {
    loading: () => true,
    loaded: () => false,
  },
});

export const { loading, loaded } = isLoadingSlice.actions;
export const isLoadingReducer = isLoadingSlice.reducer;
