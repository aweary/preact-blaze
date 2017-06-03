// @flow
import { h, Component } from "preact";
import cx from "classnames";
import "blaze/dist/components.alerts.min.css";
import "./toast.css";

export type ToastProps = {
  text: string,
  type?: string,
  enterClassName: string,
  leaveClassName: string,
  autoHideDuration: number,
  onRequestClose: () => void,
  onToastClose: () => void
};

class Toast extends Component {
  node: ?HTMLElement;
  timeout: number;
  static defaultProps = {
    enterClassName: "toast--animated__enter",
    leaveClassName: "toast--animated__leave"
  };

  state = {
    showing: true,
    entering: true,
    leaving: false
  };

  isShowing = false;
  /**
   * We use the animationend event to know when the leave
   * class has finished animating and we can actually remove
   * the div from the DOM.
   */
  handleAnimationEnd = () => {
    const { entering, leaving } = this.state;
    if (leaving) {
      this.setState({ showing: false });
    }
    if (entering) {
      this.setState({ entering: false });
    }
  };

  /**
   * Callback that is passed to setTimeout to manage autohiding
   * the toast message.
   */
  hideToast = () =>
    this.setState({
      entering: false,
      leaving: true
    });

  componentDidMount() {
    const duration = this.props.autoHideDuration || 3000;
    if (this.node) {
      this.node.addEventListener("animationend", this.handleAnimationEnd);
    }
    this.timeout = setTimeout(this.hideToast, duration);
  }

  componentDidUpdate() {
    const { leaving, showing, entering } = this.state;
    const { _onLeave, id } = this.props;
    // A hacky way to ensure that a ManagedToaster instance can
    // clear the queue of toasts that are no longer rendered.
    if (leaving && !showing && _onLeave) {
      _onLeave(id);
    }
  }

  render() {
    const {
      _onLeave,
      id,
      enterClassName,
      leaveClassName,
      type,
      text
    } = this.props;
    const { showing, entering, leaving } = this.state;
    const className = cx({
      "c-alert": true,
      [enterClassName]: entering,
      [leaveClassName]: leaving,
      [`c-alert--${type}`]: !!type
    });
    if (!showing) return null;
    return (
      <div
        onClick={this.hideToast}
        ref={n => (this.node = n)}
        className={className}
      >
        {text}
      </div>
    );
  }
}

export default Toast;
