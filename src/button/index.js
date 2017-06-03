// @flow
import { h } from "preact";
import type { Sizes } from "./shared.js";

type ButtonType = "brand" | "info" | "warning" | "success" | "error";

type ButtonProps = {
  label: string,
  active: ?boolean,
  type: ?ButtonType,
  size: ?Sizes,
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
  active,
  className
): string =>
  // @TODO use cx, implement active
  `c-button${type ? (type && ghost ? ` c-button--ghost-${type}` : ` c-button--${type}`) : ""}${ghost && !type ? " c-button--ghost" : ""}${block ? " c-button--block" : ""}${size ? ` u-${size}` : ""}${className ? className : ""}${rounded ? " c-button--rounded" : ""}`;

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
