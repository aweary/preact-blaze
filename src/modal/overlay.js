import { h } from "preact";
import cx from "classnames";

const Overlay = ({ className, ...rest }) => (
  <div
    className={cx({
      "c-overlay": true,
      "overlay-animated": true,
      [className]: !!className
    })}
    {...rest}
  />
);

export default Overlay;
