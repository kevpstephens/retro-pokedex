import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PokedexPage from "./pages/PokedexPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> {/*Home page*/}
      <Route path="/pokedex" element={<Navigate to="/pokedex/25" />} />
      <Route path="/pokedex" element={<PokedexPage />} />
      <Route path="/pokedex/:id" element={<PokedexPage />} />
    </Routes>
  );
}

export default AppRouter;
