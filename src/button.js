// @flow
import { h } from "preact";
import cx from "classnames";

type ButtonSize = "xsmall" | "small" | "medium" | "large" | "xlarge" | "super";

type ButtonProps = {
  label: string,
  brand: ?boolean,
  info: ?boolean,
  warning: ?boolean,
  success: ?boolean,
  error: ?boolean,
  size: ?ButtonSize,
  ghost: ?boolean,
  block: ?boolean
};

const Button = (
  {
    brand,
    info,
    warning,
    success,
    error,
    label,
    size,
    ghost,
    block
  }: ButtonProps
) => {
  const className = cx({
    "c-button": true,
    "c-button--brand": brand,
    "c-button--info": info,
    "c-button--warning": warning,
    "c-button--success": success,
    "c-button--error": error,
    // $FlowFixMe undefined can be coerced to a string
    [`c-button--${size}`]: size,
    "c-button--ghost": ghost,
    "c-button--block": block
  });
  return (
    <button className={className}>
      {label}
    </button>
  );
};

export default Button;
