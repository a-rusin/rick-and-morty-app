import { Route, Routes } from "react-router-dom";
import { CategoryLaout } from "../components/CategoryLayout";
import { NotFound } from "../page/NotFound";
import { CategoryItem } from "../components/CategoryItem";

export function CategoryRoutes({}) {
  return (
    <Routes>
      <Route element={<CategoryLaout />}>
        <Route index element={<div></div>} />
        <Route path=":category" element={<CategoryItem />} />
        <Route path=":category/:id" element={<div>:category/:id</div>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
