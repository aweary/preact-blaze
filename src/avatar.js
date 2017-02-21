// @flow
import { h } from "preact";
import type { Sizes } from "./shared.js";

type AvatarProps = {
  primary: string,
  secondary: ?string,
  text: ?string,
  size: ?Sizes
};

const Avatar = ({ primary, secondary, text, size }: AvatarProps) => (
  <div className="c-avatar u-super" data-text={text}>
    {primary && <img data-foo="bar" className="c-avatar__img" src={primary} />}
    {secondary && <img class="c-avatar__img" src={secondary} />}
  </div>
);

export default Avatar;
