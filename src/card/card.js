// @flow
import { h } from "preact";
import "blaze/dist/components.cards.min.css";
import "blaze/dist/utilities.elevation.min.css";
import cx from "classnames";

const Card = ({ children, className, grouped, shadow, ...rest }) => {
  return (
    <div className="c-card u-highest">
      {children}
    </div>
  );
};

export default Card;
