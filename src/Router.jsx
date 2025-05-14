import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PokedexPage from "./pages/PokedexPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pokedex" element={<PokedexPage />} />
    </Routes>
  );
}

export default AppRouter;
