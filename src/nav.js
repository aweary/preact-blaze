import { h } from "preact";
import "blaze/dist/components.navs.min.css";
import "../node_modules/blaze/dist/utilities.elevation.min.css";

const HorizontalNavigation = ({ fixed, position, elevation, children }) => (
  <ul
    className={`c-nav c-nav--inline${fixed ? " c-nav--fixed" : ""}${position ? ` c-nav--${position}` : ""} ${elevation ? ` u-${elevation}` : ""}`}
  >
    {children}
  </ul>
);

export const NavItem = ({ children, to }) => (
  <li className="c-nav__item">
    <a href={to}> {children}</a>
  </li>
);

export default HorizontalNavigation;
