import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Landing from "./features/landing/pages/Landing";
import Login from "./features/auth/pages/Login";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import Dashboard from "./features/dashboard/pages/Dashboard";
import CharactersPage from "./features/characters/pages/CharactersPage";

// Components
import PrivateRoute from "./features/auth/components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar" element={<ForgotPassword />} />

        {/* API (déjala pública por ahora) */}
        <Route path="/characters" element={<CharactersPage />} />

        {/* Protegidas */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
