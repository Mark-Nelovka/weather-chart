import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../test-utils";
import FormSearchCity from "../components/Form";
import { WeatherTests } from "../interfaces/WeatherTest";

describe("Form", () => {
  test("Check form", async () => {
    render(<FormSearchCity />);

    const input = screen.getByLabelText("Search city");
    const buttonForSubmit = screen.getByTestId("button-form-submit");

    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    input.focus();

    expect(input).toHaveFocus();

    userEvent.type(input, WeatherTests.city);

    expect(input).toHaveValue(WeatherTests.city);
    expect(buttonForSubmit).not.toBeDisabled();
  });

  test("Validation form: data number", async () => {
    render(<FormSearchCity />);

    const input = screen.getByLabelText("Search city");
    const buttonForSubmit = screen.getByRole("button");

    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    userEvent.type(input, "123");

    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    const notification = screen.getByTitle("Latin letters allowed");

    expect(input).toHaveValue("");
    expect(notification).toBe(notification);
  });

  test("Validation form: space", async () => {
    render(<FormSearchCity />);

    const input = screen.getByLabelText("Search city");
    const buttonForSubmit = screen.getByRole("button");

    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    userEvent.type(input, " ");

    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    const notification = screen.getByTitle("Latin letters allowed");

    expect(input).toHaveValue("");
    expect(notification).toBe(notification);
  });

  test("Validation form: data in russian language", async () => {
    render(<FormSearchCity />);

    const input = screen.getByLabelText("Search city");
    const buttonForSubmit = screen.getByRole("button");

    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    userEvent.type(input, "Киев");

    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    const notification = screen.getByTitle("Latin letters allowed");

    expect(input).toHaveValue("");
    expect(notification).toBe(notification);
  });

  test("Validation form: data in ukrain language", async () => {
    render(<FormSearchCity />);

    const input = screen.getByLabelText("Search city");
    const buttonForSubmit = screen.getByRole("button");

    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    userEvent.type(input, "Київ");

    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    const notification = screen.getByTitle("Latin letters allowed");

    expect(input).toHaveValue("");
    expect(notification).toBe(notification);
  });

  test("Validation form: data symbols", async () => {
    render(<FormSearchCity />);

    const input = screen.getByLabelText("Search city");
    const buttonForSubmit = screen.getByRole("button");

    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    userEvent.type(input, ">>>");

    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    const notification = screen.getByTitle("Latin letters allowed");

    expect(input).toHaveValue("");
    expect(notification).toBe(notification);

    userEvent.type(input, "...");

    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    expect(input).toHaveValue("");
    expect(notification).toBe(notification);

    userEvent.type(input, "???");

    expect(input).toHaveValue("");
    expect(buttonForSubmit).toBeDisabled();

    expect(input).toHaveValue("");
    expect(notification).toBe(notification);
  });
});
