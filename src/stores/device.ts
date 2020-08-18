import { createSlice } from '@reduxjs/toolkit';

const deviceSlice = createSlice({
  name: 'device',
  initialState: {
    device: 'largeScreen',
  },
  reducers: {
    whichDevice: (prevState, action) => {
      console.log(action.payload);

      return { device: action.payload };
    },
  },
});

export const { whichDevice } = deviceSlice.actions;
export const deviceReducer = deviceSlice.reducer;
