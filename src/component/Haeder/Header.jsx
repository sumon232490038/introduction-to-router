import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h1>this is header component</h1>
      <nav>
        <NavLink to="/contract">Contract</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
