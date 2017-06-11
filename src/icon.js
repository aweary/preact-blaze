import { h } from "preact";
import cx from "classnames";

const Icon = ({ className, icon, ...rest }) => (
  <i
    className={cx({
      "c-icon": true,
      fa: true,
      [`fa-${icon}`]: icon
    })}
    {...rest}
  />
);

export default Icon;
