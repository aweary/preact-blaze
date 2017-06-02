// @flow
import { h } from "preact";
import "blaze/dist/components.cards.min.css";
import cx from "classnames";

const CardFooter = ({ children, className, block, ...rest }) => (
  <footer
    className={cx({
      "c-card__footer": true,
      [className]: !!className,
      "c-card__footer--block": !!block
    })}
    {...rest}
  >
    {children}
  </footer>
);

export default CardFooter;
