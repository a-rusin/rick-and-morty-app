import { NavLink } from "react-router-dom";
import { navBarPath } from "../constants/navBarPaths";

export function Navbar() {
  return (
    <ul className="header-menu">
      <li>
        <NavLink to={navBarPath.home} className="menu-item">
          Главная
        </NavLink>
      </li>
      <li>
        <NavLink to={navBarPath.category} className="menu-item">
          Категории
        </NavLink>
      </li>
    </ul>
  );
}
