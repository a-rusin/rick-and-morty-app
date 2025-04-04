import { useNavigate, useParams } from "react-router-dom";
import { generateMarkUp } from "../utils/generateMarkUp";
import { useEffect, useState, useRef, useCallback } from "react";
import { useCategory } from "../hooks/useCategory";
import { categoriesPath } from "../constants/categoriesPath";

export function CategoryItem() {
  const [pageNumber, setPageNumber] = useState(1);

  const { category } = useParams();
  const navigate = useNavigate();

  const observerRef = useRef();

  const categoryData = categoriesPath[category];

  useEffect(() => {
    setPageNumber(1);
  }, [category]);

  useEffect(() => {
    if (!categoryData) {
      navigate("/404");
    }
  }, []);

  const { items, isLoading, error, hasMore } = useCategory(
    category.slice(0, -1),
    pageNumber,
    category
  );

  const handleClick = (id) => {
    navigate(`/category/${category}/${id}`);
  };

  const lastNodeRef = useCallback(
    (node) => {
      if (isLoading) return;

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevState) => prevState + 1);
        }
      });

      if (node) {
        observerRef.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );
  return (
    <>
      <ul className="caterogy-list">
        {items &&
          items.map((item, indexItem) => {
            let elem = generateMarkUp(item, indexItem);
            return (
              <li
                key={item.id}
                className="caterogy-list-item"
                ref={items.length - 3 === indexItem + 1 ? lastNodeRef : null}
              >
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
      {isLoading && "Загрузка данных..."}
      {error}
    </>
  );
}
