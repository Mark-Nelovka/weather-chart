import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import WeatherHomePage from "./components/weatherHome";
const WeatherDetails = lazy(
  () =>
    import(
      "./components/weatherDetails" /* webpackChunkName: "WeatherDetails" */
    )
);

function App() {
  return (
    <main>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/weather-chart" element={<WeatherHomePage />} />
          <Route
            path="/weather-chart/:city/details"
            element={<WeatherDetails />}
          />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
