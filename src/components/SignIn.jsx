import { TextInput, Button } from "@mantine/core";
import { IconAt, IconLockOpen } from "@tabler/icons-react";
import { useState } from "react";

const SignIn = ({ onSubmit }) => {
  const iconEmail = <IconAt size={16} />;
  const iconPassword = <IconLockOpen size={16} />;

  const [inputsValue, setInputsValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputsValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputsValue);
  };

  return (
    <>
      <h1 className="form-title">Авторизация</h1>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={iconEmail}
        radius="md"
        label="Почта:"
        placeholder="Почта"
        type="email"
        withAsterisk
        className="form-input"
        value={inputsValue.email}
        onChange={handleChange}
        name="email"
      />
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={iconPassword}
        radius="md"
        label="Пароль:"
        placeholder="Пароль"
        type="password"
        withAsterisk
        className="form-input"
        value={inputsValue.password}
        onChange={handleChange}
        name="password"
      />
      <div className="form-btns">
        <Button
          variant="filled"
          className="form-submit-btn"
          type="submit"
          fullWidth
          radius="md"
          onClick={handleSubmit}
        >
          Войти
        </Button>
      </div>
    </>
  );
};

export default SignIn;
