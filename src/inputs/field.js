import { h } from "preact";
import "blaze/dist/objects.forms.min.css";
import "../../node_modules/blaze/dist/components.hints.min.css";
import "./field.css";
import cx from "classnames";

const Field = ({
  iconLeft,
  hint,
  staticHint,
  iconRight,
  fixed,
  children,
  ...rest
}) => (
  <div
    className={cx({
      "o-field": true,
      "o-field--fixed": fixed,
      [`o-field--icon-left`]: !!iconLeft,
      [`o-field--icon-right`]: !!iconRight
    })}
    {...rest}
  >
    {iconLeft && iconLeft}
    {children}
    {iconRight && iconRight}
    {hint && hint}
  </div>
);

export default Field;
