import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../test-utils";
import WeatherHomePage from "../pages/WeatherHome/weatherHomePage";
import { WeatherTests } from "../interfaces/WeatherTest";

describe("Weather home page", () => {
  test("Show loader at time Request API! Check resolve answer", async () => {
    render(<WeatherHomePage />);
    const input = screen.getByLabelText("Search city");
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
    render(<WeatherHomePage />);
    const input = screen.getByLabelText("Search city");
    const buttonForSubmit = screen.getByText("Show");
    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    userEvent.type(input, "Incorrect data"); // incorrect data in input

    expect(input).toHaveValue("Incorrect data");
    expect(buttonForSubmit).not.toBeDisabled();

    userEvent.click(buttonForSubmit);

    const items = await waitFor(() =>
      screen.findByText(`Sorry, city with name Incorrect data not found`)
    );
    expect(items).toBeInTheDocument();
  });
});
