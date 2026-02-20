import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedProjectId: null,
  clientName: '',
  email: '',
  method: 'card',
  status: 'idle'
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    selectProject(state, action) {
      state.selectedProjectId = action.payload;
    },
    updateCheckoutForm(state, action) {
      return {
        ...state,
        ...action.payload
      };
    },
    submitPayment(state) {
      state.status = 'success';
    },
    resetPayment(state) {
      state.status = 'idle';
      state.clientName = '';
      state.email = '';
      state.selectedProjectId = null;
    }
  }
});

export const { selectProject, updateCheckoutForm, submitPayment, resetPayment } =
  paymentSlice.actions;
export default paymentSlice.reducer;