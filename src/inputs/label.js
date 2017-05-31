import { h } from "preact";
import "blaze/dist/objects.forms.min.css";

const Label = ({ label, text, ...rest }) => (
  <label className="c-label o-form-element" {...rest}>
    {text}
  </label>
);

export default Label;
