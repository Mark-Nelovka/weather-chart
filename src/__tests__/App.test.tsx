import { render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  test("Show header", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const header = await screen.findByText(
      /Welcome to weather website | Thanks that remember us/i
    );
    expect(header).toBeInTheDocument();
  });
});
