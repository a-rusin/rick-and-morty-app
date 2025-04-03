import { Navigate, useParams } from "react-router-dom";
import * as data from "./../data";
import { generateMarkUp } from "../utils/generateMarkUp";

export function CatergoryItemDetails() {
  const { category, id } = useParams();

  const categoryData = data[category];

  const dataItem = categoryData
    ? categoryData.find((item) => item.id == id)
    : null;

  if (!categoryData || !dataItem) {
    return <Navigate to="/404" />;
  }

  return (
    <div>
      <h2>Детальная информация</h2>
      <br />
      {generateMarkUp(dataItem)}
    </div>
  );
}
