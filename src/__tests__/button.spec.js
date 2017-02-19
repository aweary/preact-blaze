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

  it("renders the label prop as button text", () => {
    const rendered = render(<Button label="foo" />);
    expect(rendered.includes("foo")).toBe(true);
    expect(rendered).toMatchSnapshot();
  });

  it("renders the children as the button text if label is missing", () => {
    const rendered = render(<Button>bar</Button>);
    expect(rendered.includes("bar")).toBe(true);
    expect(rendered).toMatchSnapshot();
  });
  // Assert each variant renders the correct class
  ["brand", "info", "warning", "success", "error"].forEach(variant => {
    it(`renders the ${variant} variant`, () => {
      const props = { type: variant };
      const rendered = render(<Button {...props} />);
      expect(rendered.includes(`c-button--${variant}`)).toBe(true);
      expect(rendered).toMatchSnapshot();
    });

    it(`renders the ${variant} ghost variant`, () => {
      const rendered = render(<Button type={variant} ghost={true} />);
      expect(rendered.includes(`c-button--ghost-${variant}`));
      expect(rendered).toMatchSnapshot();
    });
  });

  ["xsmall", "small", "medium", "large", "xlarge", "super"].forEach(size => {
    it(`renders the ${size} size`, () => {
      const rendered = render(<Button size={size} />);
      expect(rendered.includes(`u-${size}`)).toBe(true);
      expect(rendered).toMatchSnapshot();
    });
  });
});
