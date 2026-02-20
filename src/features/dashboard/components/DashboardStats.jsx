import { useSelector } from 'react-redux';

export function DashboardStats() {
  const projects = useSelector((state) => state.portfolio.projects);
  const orders = useSelector((state) => state.dashboard.orders);

  const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);

  return (
    <section className="stats-grid">
      <article>
        <p>Total Projects</p>
        <h3>{projects.length}</h3>
      </article>
      <article>
        <p>Total Orders</p>
        <h3>{orders.length}</h3>
      </article>
      <article>
        <p>Revenue (Mock)</p>
        <h3>${totalRevenue}</h3>
      </article>
    </section>
  );
}