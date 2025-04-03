import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import characters from "../data/characters.json";
import locations from "../data/location.json";
import episodes from "../data/episode.json";
import { categoriesPath } from "../constants/categoriesPath";

export function CategoryItem() {
  const { category } = useParams();

  const isCategoryExist = categoriesPath[category];

  if (!isCategoryExist) {
    return <Navigate to="/404" />;
  }

  return <div>CategoryItem: {category}</div>;
}
