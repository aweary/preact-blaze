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
  rounded: ?boolean,
  // @TODO type this correctly as a Preact element
  children: Object
};

const getButtonClassName = (
  type,
  size,
  ghost,
  block,
  rounded,
  className
): string =>
  `c-button${type
    ? type && ghost ? ` c-button--ghost-${type}` : ` c-button--${type}`
    : ""}${ghost && !type ? " c-button--ghost" : ""}${block
    ? " c-button--block"
    : ""}${size ? ` u-${size}` : ""}${className ? className : ""}${rounded
    ? " c-button--rounded"
    : ""}`;

const Button = (props: ButtonProps) => {
  const { label, children, ...other } = props;
  const { type, size, ghost, block, rounded, className, ...rest } = other;
  const buttonClassName = getButtonClassName(
    type,
    size,
    ghost,
    block,
    rounded,
    className
  );
  return (
    <button {...rest} className={buttonClassName}>
      {label || children}
    </button>
  );
};

export default Button;
