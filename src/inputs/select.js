import { h } from "preact";
import "blaze/dist/components.inputs.min.css";

const Select = props => (
  <select className="c-field">
    {props.children}
  </select>
);

export default Select;
