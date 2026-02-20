import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from '../features/portfolio/portfolioSlice';
import paymentReducer from '../features/payment/paymentSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    payment: paymentReducer,
    dashboard: dashboardReducer
  }
});