import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CountriesPage } from "./pages/countriesPage/CountriesPage.jsx";
import { CountryDetail } from "./pages/countryDetail/CountryDetail.jsx";
import { ThemeProvider } from "./contexts/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CountriesPage />,
  },
  {
    path: "/country/:id",
    element: <CountryDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ThemeProvider>
);
