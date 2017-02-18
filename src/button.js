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
  block: ?boolean,
  // @TODO type this correctly as a Preact element
  children: Object
};

const Button = (
  {
    brand,
    info,
    warning,
    success,
    error,
    label,
    children,
    size,
    ghost,
    block,
    // Other props may include event handlers
    ...props
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
    [`u-${size}`]: size,
    "c-button--ghost": ghost,
    "c-button--block": block
  });
  return (
    <button {...props} className={className}>
      {label || children}
    </button>
  );
};

export default Button;
