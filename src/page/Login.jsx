import { TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useAuth } from "../context/authContext";
import { useLocation, useNavigate } from "react-router-dom";

export function Login({}) {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const { signIn, register } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data) => {
    if (isLoginForm) {
      signIn(data, () => {
        const navTo = location.state ? location.state.from : "/";
        navigate(navTo);
      });
    } else {
      register(data, () => {
        setIsLoginForm(true);
      });
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-content">
        <form className="form">
          {isLoginForm ? (
            <SignIn onSubmit={onSubmit} />
          ) : (
            <SignUp onSubmit={onSubmit} />
          )}
        </form>
        {isLoginForm ? (
          <div className="change-mode">
            Еще нет аккаунта?{" "}
            <span onClick={() => setIsLoginForm(false)}>Регистрация</span>
          </div>
        ) : (
          <div className="change-mode">
            Уже есть аккаунт?{" "}
            <span onClick={() => setIsLoginForm(true)}>Войти</span>
          </div>
        )}
      </div>
    </div>
  );
}
