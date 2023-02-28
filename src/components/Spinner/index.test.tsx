import React from "react";
import { render } from "@testing-library/react";
import Spinner from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

describe("Spinner component", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Spinner />
      </ThemeProvider>
    );
    expect(container).toBeTruthy();
  });

  it("renders with correct styles", () => {
    const instance = render(
      <ThemeProvider theme={theme}>
        <Spinner />
      </ThemeProvider>
    );
    const spinnerContainer = instance.getByTestId("spinner");

    expect(spinnerContainer).toHaveStyle("width: 30px");
    expect(spinnerContainer).toHaveStyle("height: 30px");
  });
});
