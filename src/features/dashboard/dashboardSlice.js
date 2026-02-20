import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  settings: {
    brandName: 'Yousef Refaee',
    heroTitle: 'Creative Digital Design That Converts',
    heroSubtitle: 'Branding, social content, and digital experiences crafted for modern businesses.'
  },
  orders: []
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateSettings(state, action) {
      state.settings = {
        ...state.settings,
        ...action.payload
      };
    },
    addOrder(state, action) {
      state.orders.unshift(action.payload);
    }
  }
});

export const { updateSettings, addOrder } = dashboardSlice.actions;
export default dashboardSlice.reducer;