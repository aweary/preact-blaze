import { h } from "preact";
import "blaze/dist/components.progress.min.css";
import cx from "classnames";

const Progress = ({ width, type }) => (
  <div class="c-progress">
    <div
      className={cx({
        "c-progress__bar": true,
        [`c-progress__bar--${type}`]: !!type
      })}
      style={{
        width: "100%",
        transform: `scaleX(${width})`,
        transformOrigin: "left",
        transitionDuration: "250ms"
      }}
    />
  </div>
);

export default Progress;
