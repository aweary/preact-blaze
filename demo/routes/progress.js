import { h, Component } from 'preact'

module.exports = ({ Progress, FormGroup, Input, InputGroup, Label, Button }) =>
  class ProgressDemo extends Component {
    constructor() {
      super()
      this.state = { width: 0.2, delta: 0.05 }
    }

    updateProgress(amount) {
      let { width } = this.state
      width += amount
      width = Math.max(0, width)
      width = Math.min(1, width)
      this.setState({ width })
    }
    render() {
      const { delta } = this.state
      return (
        <div>
          <h1>Progress bars</h1>
          <Progress type="success" width={this.state.width} />
          <FormGroup>
            <Label text="Delta amount" />
            <Input
              value={this.state.delta}
              onInput={e => this.setState({ delta: e.target.value })}
              type="number"
              step="0.01"
              min="0.0"
              max="1.0"
            />
          </FormGroup>
          <InputGroup style={{ marginTop: 10 }}>
            <Button
              onClick={this.updateProgress.bind(this, parseFloat(delta))}
              type="success"
            >
              Increase
            </Button>
            <Button
              onClick={this.updateProgress.bind(this, -parseFloat(delta))}
              type="error"
            >
              Decrease
            </Button>
          </InputGroup>
        </div>
      )
    }
  }
