import { createSlice } from '@reduxjs/toolkit';

const deviceSlice = createSlice({
  name: 'device',
  initialState: {
    device: 'largeScreen',
  },
  reducers: {
    widescreen: () => ({ device: 'widescreen' }),
    largeScreen: () => ({ device: 'largeScreen' }),
    computer: () => ({ device: 'computer' }),
    tablet: () => ({ device: 'tablet' }),
    mobile: () => ({ device: 'mobile' }),
  },
});

// export const { widescreen, largeScreen, computer, tablet, mobile } = deviceSlice.actions;
export const deviceActions = deviceSlice.actions;
export const deviceReducer = deviceSlice.reducer;
