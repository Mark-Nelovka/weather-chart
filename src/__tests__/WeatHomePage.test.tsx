import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WeatherHomePage from "../components/weatherHome";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { WeatherTests } from "../interfaces/WeatherTest";

describe("Weather home page", () => {
  test("Show loader at time Request API! Check resolve answer", async () => {
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
      timeout: 5000,
    });
    expect(card).toHaveTextContent(WeatherTests.city);
  });

  test("Show error page! Fetch API with rejected if write incorrect data in input", async () => {
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
    const buttonForSubmit = screen.getByText("Show");
    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    userEvent.type(input, "Incorrect data"); // incorrect data in input

    expect(input).toHaveValue("Incorrect data");
    expect(buttonForSubmit).not.toBeDisabled();

    userEvent.click(buttonForSubmit);

    const items = await waitFor(() => screen.findByText(/back to home page/i), {
      timeout: 5000,
    });
    expect(items).toHaveTextContent("Back to home page");
  });
});
