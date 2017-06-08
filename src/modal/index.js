// @flow
import { h, Component } from "preact";
import cx from "classnames";
import Overlay from "./overlay";
import emptyFunction from "emptyfunction";
import "blaze/dist/objects.modals.min.css";
import "blaze/dist/components.overlays.min.css";
import "./modal.css";

class Modal extends Component {
  static defaultProps = {
    onRequestClose: emptyFunction,
    onOverlayClick: emptyFunction,
    ghost: false,
    overlay: <Overlay />
  };

  componentDidUpdate() {
    if (this.node && !this.registered) {
      this.node.addEventListener("animationend", this.handleAnimationEnd);
      this.registered = true;
    }
  }

  handleAnimationEnd = () => {
    if (this.leaving) {
      this.leaving = false;
      this.setState({});
    }
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.open && !nextProps.open) {
      this.leaving = true;
    }
  }

  render({ open, onRequestClose, children, ghost, overlay }) {
    let leaving = this.leaving;
    if (!open && !leaving) {
      return null;
    }
    return (
      <div>
        {overlay}
        <div
          ref={n => (this.node = n)}
          className={cx({
            "o-modal": true,
            "o-modal--ghost": ghost,
            "modal-animated": true,
            "modal-animated--leaving": leaving
          })}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
