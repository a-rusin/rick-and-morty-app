import { NavLink, Outlet } from "react-router-dom";

export function CategoryLaout({}) {
  return (
    <>
      <h1 className="page-name-title">Страница категорий</h1>
      <ul className="category-menu">
        <li className="category-menu-item">
          <NavLink to="/category/characters" className="category-menu-url">
            Персонажи
          </NavLink>
        </li>
        <li className="category-menu-item">
          <NavLink to="/category/episodes" className="category-menu-url">
            Эпизоды
          </NavLink>
        </li>
        <li className="category-menu-item">
          <NavLink to="/category/locations" className="category-menu-url">
            Локации
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
