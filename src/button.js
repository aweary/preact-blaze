// @flow
import { h } from "preact";

type ButtonSize = "xsmall" | "small" | "medium" | "large" | "xlarge" | "super";
type ButtonType = "brand" | "info" | "warning" | "success" | "error";

type ButtonProps = {
  label: string,
  type: ?ButtonType,
  size: ?ButtonSize,
  ghost: ?boolean,
  block: ?boolean,
  className: ?string,
  // @TODO type this correctly as a Preact element
  children: Object
};

const getButtonClassName = (type, size, ghost, block, className) =>
  `c-button${type
    ? type && ghost ? ` c-button--ghost-${type}` : ` c-button--${type}`
    : ""}${ghost && !type ? "c-button--ghost" : ""}${block
    ? " c-button--block"
    : ""}${size ? ` u-${size}` : ""}${className ? className : ""}`;

const Button = (
  {
    type,
    label,
    children,
    size,
    ghost,
    block,
    className,
    // Other props may include event handlers
    ...props
  }: ButtonProps
) => (
  <button
    {...props}
    className={getButtonClassName(type, size, ghost, block, className)}
  >
    {label || children}
  </button>
);

export default Button;
