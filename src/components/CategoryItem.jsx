import { Navigate, useNavigate, useParams } from "react-router-dom";
import * as data from "../data/index";

import { generateMarkUp } from "../utils/generateMarkUp";

export function CategoryItem() {
  const { category } = useParams();

  const categoryData = data[category];

  const navigate = useNavigate();

  if (!categoryData) {
    return <Navigate to="/404" />;
  }

  const handleClick = (id) => {
    navigate(`/category/${category}/${id}`);
  };

  return (
    <ul className="caterogy-list">
      {categoryData.map((item, indexItem) => {
        let elem = generateMarkUp(item, indexItem);
        return (
          <li key={item.id} className="caterogy-list-item">
            {elem}
            <button
              className="caterogy-list-item-btn"
              onClick={() => handleClick(item.id)}
            >
              Подробнее
            </button>
          </li>
        );
      })}
    </ul>
  );
}
