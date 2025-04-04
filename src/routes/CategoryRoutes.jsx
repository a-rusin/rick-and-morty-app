import { Route, Routes } from "react-router-dom";
import { CategoryLaout } from "../components/CategoryLayout";
import { CategoryItem } from "../components/CategoryItem";
import { LazyComponent } from "../components/LazyComponent";

export function CategoryRoutes({}) {
  return (
    <Routes>
      <Route element={<CategoryLaout />}>
        <Route index element={<div></div>} />
        <Route path=":category" element={<CategoryItem />} />
        <Route
          path=":category/:id"
          element={<LazyComponent folder="page" name="CatergoryItemDetails" />}
        />
        <Route
          path="*"
          element={<LazyComponent folder="page" name="NotFound" />}
        />
      </Route>
    </Routes>
  );
}
