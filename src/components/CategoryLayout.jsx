import { NavLink, Outlet } from "react-router-dom";
import { categoriesPath } from "../constants/categoriesPath";

export function CategoryLaout({}) {
  return (
    <>
      <h1 className="page-name-title">Страница категорий</h1>
      <br />
      <p>Выберите категорию</p>
      <ul className="category-menu">
        <li className="category-menu-item">
          <NavLink
            to={"/category" + categoriesPath.characters}
            className="category-menu-url"
          >
            Персонажи
          </NavLink>
        </li>
        <li className="category-menu-item">
          <NavLink
            to={"/category" + categoriesPath.episodes}
            className="category-menu-url"
          >
            Эпизоды
          </NavLink>
        </li>
        <li className="category-menu-item">
          <NavLink
            to={"/category" + categoriesPath.locations}
            className="category-menu-url"
          >
            Локации
          </NavLink>
        </li>
      </ul>
      <div className="category-content">
        <Outlet />
      </div>
    </>
  );
}
