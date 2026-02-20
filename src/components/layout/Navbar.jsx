import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function Navbar() {
  const brandName = useSelector((state) => state.dashboard.settings.brandName);

  return (
    <header className="nav-wrap">
      <div className="container nav">
        <h1>{brandName}</h1>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/works">Works</NavLink>
          <NavLink to="/checkout">Checkout</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
      </div>
    </header>
  );
}