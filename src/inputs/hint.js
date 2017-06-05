import { h } from "preact";
import cx from "classnames";
import "./hint.css";

const Hint = ({
  text,
  className,
  animated,
  persist,
  error,
  success,
  ...rest
}) => (
  <div
    className={cx({
      "c-hint": true,
      "c-hint--static": persist,
      "c-hint--success": success,
      "c-hint--error": error,
      "hint--animated": animated === true || animated === undefined,
      [className]: className
    })}
    {...rest}
  >
    {text}
  </div>
);

export default Hint;
