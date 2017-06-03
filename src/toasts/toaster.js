// @flow
import { h, Component } from "preact";
import cx from "classnames";
import "blaze/dist/components.alerts.min.css";
import "./toast.css";

export type ToasterProps = { position: string, children: Object };

const Toaster = ({ children, position }: ToasterProps) => (
  <div
    style={{ transitionDuration: "250ms", transform: "translate3d(0,0,0)" }}
    className={cx({
      "c-alerts": true,
      [`c-alerts--${position}`]: true
    })}
  >
    {children}
  </div>
);

export default Toaster;
