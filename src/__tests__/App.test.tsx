import { screen } from "@testing-library/react";
import { render } from "../test-utils";
import App from "../App";

describe("App", () => {
  test("Show header", async () => {
    render(<App />);
    const header = await screen.findByText(
      /Welcome to weather website | Thanks that remember us/i
    );
    expect(header).toBeInTheDocument();
  });
});
