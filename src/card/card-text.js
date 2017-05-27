// @flow
import { h } from "preact";
import "blaze/dist/components.cards.min.css";
import cx from "classnames";

const CardText = ({ children, className }) => (
  <div className={cx({ "c-card__item": true, [className]: !!className })}>
    <p className="c-paragraph">
      {children}
    </p>
  </div>
);

export default CardText;
