// @flow
import { h } from "preact";
import "blaze/dist/components.cards.min.css";
import cx from "classnames";

const CardDivider = ({ children, className, ...rest }) => (
  <div
    className={cx({
      "c-card__item": true,
      "c-card__item--divider": true,
      [className]: !!className
    })}
  >
    {children}
  </div>
);

export default CardDivider;
