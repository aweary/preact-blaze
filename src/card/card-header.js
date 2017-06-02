// @flow
import { h } from "preact";
import "blaze/dist/components.cards.min.css";

const CardHeader = ({ primary, secondary }) => (
  <header className="c-card__header">
    <h2 className="c-heading">
      {primary}
      {secondary && <div className="c-heading__sub">{secondary}</div>}
    </h2>
  </header>
);

export default CardHeader;
