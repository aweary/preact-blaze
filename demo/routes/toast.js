import { h, Component } from 'preact'

module.exports = ({ createToaster, FormGroup, Label, Input, Button }) => {
  const { Toaster: ManagedToaster, pushToast } = createToaster()

  return class ToastDemo extends Component {
    render() {
      return (
        <div>
          <ManagedToaster position="topright" />
          <FormGroup>
            <Label text="Toast message:" />
            <Input onInput={e => this.setState({ value: e.target.value })} />
          </FormGroup>
          <Button
            onClick={() => {
              pushToast({
                text: this.state.value,
                autoHideDuration: 8000,
              })
            }}
            type="brand"
          >
            Show toast
          </Button>
        </div>
      )
    }
  }
}
