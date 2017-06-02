// @flow
import { h } from "preact";
import "blaze/dist/components.cards.min.css";

const CardItem = ({ children, className, ...rest }) => (
  <div className={`c-card__item ${className}`} {...rest}>{children}</div>
);

export default CardItem;
