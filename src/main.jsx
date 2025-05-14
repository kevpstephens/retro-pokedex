import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../src/styles/index.css";

import AppRouter from "./Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
