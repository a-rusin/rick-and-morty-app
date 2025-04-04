import { Route, Routes } from "react-router-dom";
import { LazyComponent } from "../components/LazyComponent";
import { CategoryLayout } from "../components/CategoryLayout";

export function CategoryRoutes() {
  return (
    <Routes>
      <Route element={<CategoryLayout />}>
        <Route index element={<div></div>} />
        <Route
          path=":category"
          element={<LazyComponent folder="components" name="CategoryItem" />}
        />
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
