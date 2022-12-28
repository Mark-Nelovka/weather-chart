import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormSearchCity from "../components/Form";
import { Provider } from "react-redux";
import store from "../redux/store";
import { WeatherTests } from "../interfaces/WeatherTest";

describe("Form", () => {
  test("Check form", async () => {
    render(
      <Provider store={store}>
        <FormSearchCity />
      </Provider>
    );

    const input = screen.getByTestId(WeatherTests.searchInput);
    const buttonForSubmit = screen.getByRole("button");

    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    input.focus();

    expect(input).toHaveFocus();

    userEvent.type(input, WeatherTests.city);

    expect(input).toHaveValue(WeatherTests.city);
    expect(buttonForSubmit).not.toBeDisabled();
  });
});
