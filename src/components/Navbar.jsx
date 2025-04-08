import { NavLink, useNavigate } from "react-router-dom";
import { navBarPath } from "../constants/navBarPaths";
import { useAuth } from "../context/authContext";
import { IconLogout, IconUser } from "@tabler/icons-react";
import { Button, Group, Menu, UnstyledButton } from "@mantine/core";
import { useState } from "react";

export function Navbar() {
  const { user, logOut } = useAuth();

  const navigate = useNavigate();

  const handleClickLogOut = () => {
    logOut(() => {
      navigate("/");
    });
  };

  return (
    <div className="header-menu">
      <Group justify="space-between" h="100%">
        <Group h="100%" gap={10} visibleFrom="sm">
          <NavLink to={navBarPath.home} className="menu-item">
            Главная
          </NavLink>
          <NavLink to={navBarPath.category} className="menu-item">
            Категории
          </NavLink>
        </Group>
        <Group visibleFrom="sm">
          {user ? (
            <Menu
              width={100}
              position="bottom-end"
              transitionProps={{ transition: "pop-top-right" }}
              withinPortal
            >
              <Menu.Target>
                <UnstyledButton>
                  <Group gap={4}>
                    {user.name}
                    <IconUser size={16} />
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  onClick={handleClickLogOut}
                  leftSection={<IconLogout size={16} stroke={1.5} />}
                >
                  Выйти
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <Button onClick={() => navigate("/login")}>Войти</Button>
          )}
        </Group>
      </Group>
    </div>
  );
}
