import { h } from "preact";
import "blaze/dist/components.inputs.min.css";
import "blaze/dist/components.input-groups.min.css";
import "blaze/dist/objects.forms.min.css";
import cx from "classnames";

const Textarea = ({ success, error, size, ...rest }) => {
  return (
    <textarea
      className={cx({
        "c-field": true,
        "c-field--success": success,
        "c-field--error": error,
        [`u-${size}`]: !!size
      })}
      {...rest}
    />
  );
};

export default Textarea;
