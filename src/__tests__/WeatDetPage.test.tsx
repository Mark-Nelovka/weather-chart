import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WeatherHomePage from "../components/weatherHome";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import WeatherDetails from "../components/weatherDetails";
import { WeatherTests } from "../interfaces/WeatherTest";

describe("Weather details page", () => {
  test("Check title", async () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <WeatherHomePage />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
    const input = screen.getByTestId(WeatherTests.searchInput);
    const buttonForSubmit = screen.getByRole("button");
    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    userEvent.type(input, WeatherTests.city);

    expect(input).toHaveValue(WeatherTests.city);
    expect(buttonForSubmit).not.toBeDisabled();

    userEvent.click(buttonForSubmit);

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();

    const card = await waitFor(() => screen.findByText(WeatherTests.city), {
      timeout: 3000,
    });
    expect(card).toHaveTextContent(WeatherTests.city);

    const moreInfoButton = screen.getByText("More info");
    userEvent.click(moreInfoButton);

    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <WeatherDetails />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );

    const loaderInSecondPage = screen.getByTestId("loader");
    expect(loaderInSecondPage).toBeInTheDocument();

    const titleSecondPage = await waitFor(
      () => screen.findByText(WeatherTests.city),
      {
        timeout: 3000,
      }
    );
    expect(titleSecondPage).toHaveTextContent(WeatherTests.city);
  });
});
