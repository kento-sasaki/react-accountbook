import { createSlice } from '@reduxjs/toolkit';

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: {
    isLoading: true,
  },
  reducers: {
    loading: () => ({ isLoading: true }),
    loaded: () => ({ isLoading: false }),
  },
});

export const { loading, loaded } = isLoadingSlice.actions;
export const isLoadingReducer = isLoadingSlice.reducer;
