import { NavLink } from "react-router-dom";
import { internalPaths } from "../constants/internalPaths";

export function Navbar() {
  console.log(internalPaths);

  return (
    <ul className="header-menu">
      <li>
        <NavLink to={internalPaths.home} className="menu-item">
          Главная
        </NavLink>
      </li>
      <li>
        <NavLink to={internalPaths.category} className="menu-item">
          Категории
        </NavLink>
      </li>
    </ul>
  );
}
