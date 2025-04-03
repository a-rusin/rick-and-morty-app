import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const timerValue = 5;

export function NotFound() {
  const [expires, setExpires] = useState(timerValue);

  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/");
    }, timerValue * 1000);

    const intervalId = setInterval(() => {
      setExpires((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h1 className="page-name-title">
        Упс... <br />
        Ничего не найдено
      </h1>
      <br />
      Вы будете автоматические перенаправлены на главную страницу через{" "}
      {expires}...
    </>
  );
}
