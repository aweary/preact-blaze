// @flow
import { h, Component } from "preact";
import Toaster from "./toaster";
import Toast from "./toast";

import type { ToastProps } from "./toast";

type ManagedToasterState = {
  queue: Array<{ id: number, props: ToastProps }>
};

/**
 * Often times there will only be a single toast "manager",
 * (what we call a Toaster) that needs to be used throughout
 * the whole page. This means updating state for this Toaster
 * from any arbitrary point in the application, which might not
 * be easy.
 * 
 * This utility creates an interface do that that more easily
 * by providing an imperative `pushToast` function that can
 * be exported and used anywhere in the application, as long as
 * the returned Toaster is still mounted.
 */
export default function createToaster() {
  // A scoped variable that will hold the instances
  // which is set when the instance is constructed.
  let instance;
  // Actual handler that is called by the user.
  const pushToast = (props: ToastProps) => {
    const id = Date.now();
    instance.onQueueAdd(id, props);
  };
  // Wrapping class that manages toast queue
  class ManagedToaster extends Component {
    state: ManagedToasterState;
    /**
     * The flushed queue is used to store which toasts
     * have been "flushed", meaning they are no longer being
     * rendered. The Toast component has an internal only
     * method _onLeave that is used to hook the Toaster into
     * into the Toast and add its id to the flushed list.
     */
    flushed: Array<number>;
    constructor() {
      super();
      this.state = {
        queue: []
      };
      this.flushed = [];
      instance = this;
    }

    onQueueAdd = (id: number, props: ToastProps) => {
      const { queue } = this.state;
      this.setState({
        queue: [
          { props, id },
          ...queue.filter(item => this.flushed.indexOf(item.id) === -1)
        ]
      });
      this.flushed.length = 0;
    };

    handleToastLeave = (id: number) => {
      if (this.flushed.indexOf(id) === -1) {
        this.flushed.push(id);
      }
    };

    // $FlowFixMe IDK how to type this with Preact yet
    render(props, { queue }) {
      const toasts = queue.map(({ props, id }) => (
        <Toast _onLeave={this.handleToastLeave} id={id} key={id} {...props} />
      ));
      return <Toaster {...props}>{toasts}</Toaster>;
    }
  }

  return { pushToast, Toaster: ManagedToaster };
}
