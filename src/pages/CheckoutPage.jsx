import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutSummary } from '../features/payment/components/CheckoutSummary';
import { addOrder } from '../features/dashboard/dashboardSlice';
import {
  resetPayment,
  submitPayment,
  updateCheckoutForm
} from '../features/payment/paymentSlice';

export function CheckoutPage() {
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.payment);
  const projects = useSelector((state) => state.portfolio.projects);

  const selectedProject = useMemo(
    () => projects.find((item) => item.id === payment.selectedProjectId),
    [projects, payment.selectedProjectId]
  );

  const onInput = (event) => {
    dispatch(updateCheckoutForm({ [event.target.name]: event.target.value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!selectedProject || !payment.clientName || !payment.email) {
      return;
    }

    dispatch(
      addOrder({
        id: Date.now().toString(),
        projectId: selectedProject.id,
        projectTitle: selectedProject.title,
        clientName: payment.clientName,
        amount: selectedProject.price,
        method: payment.method
      })
    );
    dispatch(submitPayment());
  };

  return (
    <main className="container section-space checkout-layout">
      <section className="checkout-form-wrap">
        <h2>Secure Checkout</h2>
        <p>Frontend payment flow (mock) with client details and payment method.</p>

        <form className="checkout-form" onSubmit={onSubmit}>
          <label>
            Client Name
            <input
              name="clientName"
              value={payment.clientName}
              onChange={onInput}
              placeholder="Enter full name"
            />
          </label>

          <label>
            Email
            <input
              name="email"
              value={payment.email}
              onChange={onInput}
              placeholder="name@example.com"
              type="email"
            />
          </label>

          <label>
            Payment Method
            <select name="method" value={payment.method} onChange={onInput}>
              <option value="card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </label>

          <div className="form-actions">
            <button type="submit">Pay Now</button>
            <button type="button" className="secondary" onClick={() => dispatch(resetPayment())}>
              Reset
            </button>
          </div>

          {payment.status === 'success' ? (
            <p className="success-msg">Payment completed successfully (mock).</p>
          ) : null}
        </form>
      </section>

      <CheckoutSummary project={selectedProject} />
    </main>
  );
}