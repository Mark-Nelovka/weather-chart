import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WeatherHomePage from "../components/weatherHome";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { WeatherTests } from "../interfaces/WeatherTest";

describe("Card", () => {
  test("Delete card", async () => {
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

    const deleteCardButton = screen.getByTestId("delete-card-button");
    userEvent.click(deleteCardButton);

    expect(card).not.toBeInTheDocument();
  });
});
