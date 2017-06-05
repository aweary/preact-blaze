import { h } from "preact";
import "blaze/dist/objects.forms.min.css";

const FormGroup = ({ children, ...rest }) => (
  <div className="o-form-element" {...rest}>
    {children}
  </div>
);

export default FormGroup;
