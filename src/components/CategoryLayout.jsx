import { NavLink, Outlet } from "react-router-dom";

export function CategoryLaout({}) {
  return (
    <>
      <h1>Страница категорий</h1>
      <ul>
        <li>
          <NavLink to="/category/characters">Персонажи</NavLink>
          <NavLink to="/category/episodes">Эпизоды</NavLink>
          <NavLink to="/category/locations">Локации</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
