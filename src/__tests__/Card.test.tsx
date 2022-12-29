import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../test-utils";
import WeatherHomePage from "../pages/WeatherHome/weatherHomePage";
import { WeatherTests } from "../interfaces/WeatherTest";

describe("Card", () => {
  test("Delete card", async () => {
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

    const deleteCardButton = screen.getByTestId("delete-card-button");
    userEvent.click(deleteCardButton);

    expect(card).not.toBeInTheDocument();
  });
});
