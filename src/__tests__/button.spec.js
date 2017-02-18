import { h } from "preact";
import render from "preact-render-to-string";
import Button from "../button";

describe("Button", () => {
  it("exports a function", () => {
    expect(typeof Button).toBe("function");
  });

  it("renders a button with the base class name", () => {
    const rendered = render(<Button />);
    expect(rendered.includes("c-button")).toBe(true);
    expect(rendered).toMatchSnapshot();
  });
  // Assert each variant renders the correct class
  [
    "brand",
    "info",
    "warning",
    "success",
    "error",
    "ghost",
    "block"
  ].forEach(variant => {
    it(`renders the ${variant} variant`, () => {
      const props = { [variant]: true };
      const rendered = render(<Button {...props} />);
      expect(rendered.includes(`c-button--${variant}`)).toBe(true);
      expect(rendered).toMatchSnapshot();
    });
  });
});
