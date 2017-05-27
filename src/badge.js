// @flow
import { h } from "preact";
import type { StyleType } from "./shared";
import "../node_modules/blaze/dist/components.badges.min.css";

type BadgeProps = {
  rounded: ?boolean,
  ghost: ?boolean,
  type: ?StyleType,
  className: ?string,
  // @TODO type as a Preact element
  children: Object | string | number
};

const getBadgeClassName = (rounded, ghost, type, className): string =>
  `c-badge${rounded ? " c-badge--rounded" : ""}${type ? ` c-badge--${type}` : ""}${ghost ? " c-badge--ghost" : ""}`;

const Badge = ({
  rounded,
  ghost,
  type,
  children,
  className,
  ...rest
}: BadgeProps) => (
  <span
    {...rest}
    className={getBadgeClassName(rounded, ghost, type, className)}
  >
    {children}
  </span>
);

export default Badge;
