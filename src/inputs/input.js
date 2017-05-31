import { h } from "preact";
import "blaze/dist/components.inputs.min.css";
import "blaze/dist/components.input-groups.min.css";
import "blaze/dist/objects.forms.min.css";
import cx from "classnames";

const Input = ({ success, error, size, ...rest }) => {
  console.log({ success, error, size });
  return (
    <input
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

export default Input;
