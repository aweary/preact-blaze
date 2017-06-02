// @flow
import { h } from "preact";
import "blaze/dist/components.cards.min.css";
import "blaze/dist/utilities.elevation.min.css";
import cx from "classnames";

const Card = ({ children, className, grouped, shadow, ...rest }) => {
  return (
    <div
      className={cx({
        "c-card": true,
        "c-card--grouped": grouped,
        [`u-${shadow}`]: !!shadow,
        [className]: !!className
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
