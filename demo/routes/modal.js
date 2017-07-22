import { h, Component } from 'preact'

module.exports = function({
  Modal,
  Overlay,
  Card,
  CardHeader,
  CardText,
  CardFooter,
  InputGroup,
  Button,
}) {
  return class ModalDemo extends Component {
    state = { open: false }

    toggleModal = () => {
      this.setState({
        open: !this.state.open,
      })
    }

    render(props, { open }) {
      return (
        <div>
          <Modal
            open={open}
            overlay={<Overlay onClick={this.toggleModal} dismissable />}
            onRequestClose={this.toggleModal}
          >
            <Card>
              <CardHeader primary="Heading" secondary="A smaller heading" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo eveniet magnam ipsa beatae
              </CardText>
              <CardFooter block>
                <InputGroup>
                  <Button onClick={this.toggleModal} block type="success">
                    Save
                  </Button>
                  <Button onClick={this.toggleModal} block type="error">
                    Cancel
                  </Button>
                </InputGroup>
              </CardFooter>
            </Card>
          </Modal>
          <Button onClick={this.toggleModal}>Show modal</Button>
        </div>
      )
    }
  }
}
