import { NavLink, useNavigate } from "react-router-dom";
import { navBarPath } from "../constants/navBarPaths";
import { useAuth } from "../context/authContext";
import { IconUser } from "@tabler/icons-react";

export function Navbar() {
  const { user, logOut } = useAuth();

  const navigate = useNavigate();

  const handleClickLogOut = () => {
    logOut(() => {
      navigate("/");
    });
  };

  const ImgUser = <IconUser size={16} />;

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
        {user ? (
          <div className="user-info">
            {user.name}
            {ImgUser}
            <button className="user-sign-out" onClick={handleClickLogOut}>
              Выйти
            </button>
          </div>
        ) : (
          <NavLink to={navBarPath.login} className="menu-item">
            Авторизация
          </NavLink>
        )}
      </div>
    </div>
  );
}
