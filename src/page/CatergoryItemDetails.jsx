import { Navigate, useNavigate, useParams } from "react-router-dom";
import { generateMarkUp } from "../utils/generateMarkUp";
import { categoriesPath } from "../constants/categoriesPath";
import { useEffect } from "react";
import { useCategory } from "../hooks/useCategory";

export function CatergoryItemDetails() {
  const { category, id } = useParams();

  const navigate = useNavigate();

  const categoryData = categoriesPath[category];

  const url = `${category.slice(0, -1)}/${id}`;

  const { items: item, isLoading, error } = useCategory(url);

  useEffect(() => {
    if (!categoryData || (!isLoading && !item)) {
      navigate("/404");
    }
  }, [isLoading]);

  return (
    <>
      {item && (
        <div>
          <h2>Детальная информация</h2>
          <br />
          {generateMarkUp(item)}
        </div>
      )}
      {isLoading && "Загрузка данных..."}
      {error}
    </>
  );
}
