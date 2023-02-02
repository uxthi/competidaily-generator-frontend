import { render, fireEvent } from "@testing-library/react";
import { describe } from "node:test";
import Button from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";

describe("Button Component", () => {
  it("renders with provided text", () => {
    const text = "Click me";
    const onClick = jest.fn();

    const instance = render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick}>{text}</Button>
      </ThemeProvider>
    );

    const label = instance.getByText(text);

    expect(label).toBeDefined();
  });

  it("calls onClick when clicked", () => {
    const text = "Click me";
    const onClick = jest.fn();

    const instance = render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick}>{text}</Button>
      </ThemeProvider>
    );

    const button = instance.getByText(text);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
