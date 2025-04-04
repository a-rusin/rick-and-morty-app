import { TextInput, Button, Radio, RadioGroup } from "@mantine/core";
import {
  IconAt,
  IconLockOpen,
  IconUser,
  IconUserScan,
} from "@tabler/icons-react";
import { useState } from "react";

const SignUp = ({ onSubmit }) => {
  const iconName = <IconUser size={16} />;
  const iconNickname = <IconUserScan size={16} />;
  const iconEmail = <IconAt size={16} />;
  const iconPassword = <IconLockOpen size={16} />;

  const [inputsValue, setInputsValue] = useState({
    name: "",
    nickname: "",
    email: "",
    sex: "male",
    password: "",
    repeatPassword: "",
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
      <h1 className="form-title">Регистрация</h1>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={iconName}
        radius="md"
        label="Имя:"
        placeholder="Имя"
        type="text"
        withAsterisk
        className="form-input"
        value={inputsValue.name}
        onChange={handleChange}
        name="name"
      />
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={iconNickname}
        radius="md"
        label="Никнейм:"
        placeholder="Никнейм"
        type="text"
        withAsterisk
        className="form-input"
        value={inputsValue.nickname}
        onChange={handleChange}
        name="nickname"
      />
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
      <RadioGroup
        value={inputsValue.sex}
        name="sex"
        label="Ваш пол: "
        withAsterisk
        className="form-input"
      >
        <Radio value="male" label="Мужсой" onClick={handleChange} />
        <Radio value="female" label="Женский" onClick={handleChange} />
      </RadioGroup>
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
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={iconPassword}
        radius="md"
        label="Повторите пароль:"
        placeholder="Повторите пароль"
        type="password"
        withAsterisk
        className="form-input"
        value={inputsValue.repeatPassword}
        onChange={handleChange}
        name="repeatPassword"
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
          Регистрация
        </Button>
      </div>
    </>
  );
};

export default SignUp;
