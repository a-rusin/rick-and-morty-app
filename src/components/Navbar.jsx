import { NavLink } from "react-router-dom";
import { internalPaths } from "../constants/internalPaths";

export function Navbar() {
  console.log(internalPaths);

  return (
    <ul>
      <li>
        <NavLink to={internalPaths.home}>Главная</NavLink>
        <NavLink to={internalPaths.category}>Категории</NavLink>
      </li>
    </ul>
  );
}
