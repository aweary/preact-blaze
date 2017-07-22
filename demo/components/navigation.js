import { h, Component } from 'preact'
import { route as routeTo } from 'preact-router'
import { Navigation, NavItem, HorizontalNavigation } from '../../src/nav'
import Overlay from '../../src/modal/overlay'
import Icon from '../../src/icon'


export default class DemoNavigation extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  routes = [
    {
      name: 'Buttons',
      path: '/buttons',
    },
    {
      name: 'AutoComplete',
      path: '/autocomplete',
    },
    {
      name: 'Card',
      path: '/card',
    },
    {
      name: 'Inputs',
      path: '/inputs',
    },
    {
      name: 'Toasts',
      path: '/toast',
    },
    {
      name: 'Progress',
      path: '/progress',
    },
    {
      name: 'Modals',
      path: '/modal',
    },
    {
      name: 'Accordions',
      path: '/accordions',
    },
  ]

  render(props, { open }) {
    return (
      <div>
        <HorizontalNavigation fixed position="top">
          <NavItem float="right" onClick={this.open}>
            <Icon icon="bars" />
          </NavItem>
        </HorizontalNavigation>
        {open && <Overlay onClick={this.close} />}
        <Navigation onItemClick={this.close} title="preact-blaze" open={open}>
          {this.routes.map(route => (
            <NavItem
              onClick={() => {
                this.close()
                routeTo(route.path)
              }}
            >
              {route.name}
            </NavItem>
          ))}
        </Navigation>
      </div>
    )
  }
}