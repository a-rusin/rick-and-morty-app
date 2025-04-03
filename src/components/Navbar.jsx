import { NavLink } from "react-router-dom";
import { navBarPath } from "../constants/navBarPaths";

export function Navbar() {
  return (
    <div className="header-menu">
      <div className="left-part">
        <div>
          <NavLink to={navBarPath.home} className="menu-item">
            Главная
          </NavLink>
        </div>
        <div>
          <NavLink to={navBarPath.category} className="menu-item">
            Категории
          </NavLink>
        </div>
      </div>
      <div className="right-part">
        {" "}
        <NavLink to={navBarPath.login} className="menu-item">
          Авторизация
        </NavLink>
      </div>
    </div>
  );
}
