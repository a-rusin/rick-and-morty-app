import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Main } from "./page/Main";
import { CategoryRoutes } from "./routes/CategoryRoutes";
import { NotFound } from "./page/NotFound";
import { Login } from "./page/Login";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/category/*"
            element={
              <ProtectedRoutes>
                <CategoryRoutes />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
