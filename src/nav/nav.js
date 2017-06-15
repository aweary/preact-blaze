import { h, Component } from "preact";
import cx from "classnames";
import "./nav.css";

class Navigation extends Component {
  render({ open, title, children, ...rest }) {
    if (!open) return null;
    return (
      <ul className="c-nav c-nav--left nav--animated" style={{ width: 200 }}>
        {title && <li className="c-nav__content">{title}</li>}
        {children}
      </ul>
    );
  }
}

export default Navigation;
