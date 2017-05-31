import { h } from "preact";
import cx from "classnames";

const InputGroup = ({
  children,
  className,
  stacked,
  roundedRight,
  roundedLeft,
  rounded,
  ...rest
}) => (
  <div
    className={cx({
      "c-input-group": true,
      "c-input-group--stacked": !!stacked,
      "c-input-group--rounded": !!rounded,
      "c-input-group--rounded-left": !!roundedLeft,
      "c-input-group--rounded-right": !!roundedRight
    })}
    {...rest}
  >
    {children}
  </div>
);

export default InputGroup;
