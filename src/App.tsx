import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Loader from "./components/Loader";

import Header from "./components/Header";
import WeatherHomePage from "./components/weatherHome";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
const WeatherDetails = lazy(
  () =>
    import(
      "./components/weatherDetails" /* webpackChunkName: "WeatherDetails" */
    )
);

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/weather-chart" element={<WeatherHomePage />} />
            <Route path="/weather-chart/:city" element={<WeatherDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </main>
    </StyledEngineProvider>
  );
}

export default App;
