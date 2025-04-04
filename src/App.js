import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { LazyComponent } from "./components/LazyComponent";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      <main className="content">
        <ErrorBoundary>
          <Routes>
            <Route
              path="/"
              element={<LazyComponent folder="page" name="Main" />}
            />
            <Route
              path="/category/*"
              element={
                <ProtectedRoutes>
                  <LazyComponent folder="routes" name="CategoryRoutes" />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/login"
              element={<LazyComponent folder="page" name="Login" />}
            />
            <Route
              path="*"
              element={<LazyComponent folder="page" name="NotFound" />}
            />
          </Routes>
        </ErrorBoundary>
      </main>
    </>
  );
}

export default App;
