import { createSlice } from '@reduxjs/toolkit';

const deviceSlice = createSlice({
  name: 'device',
  initialState: 'largeScreen',
  reducers: {
    whichDevice: (prevState, action) => {
      return action.payload;
    },
  },
});

export const { whichDevice } = deviceSlice.actions;
export const deviceReducer = deviceSlice.reducer;
