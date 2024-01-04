import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Header() {
  const isOnline = useOnlineStatus();
  return (
    <nav className="header bg-red-100">
      <div className="logo-container">
        <img
          className="w-16 p-2 py-1 rounded-full"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>{isOnline ? '🟢':'🔴'}</li>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  );
}

const Title = ({ title }) => {
  return <h1 className="">{title}</h1>;
};
