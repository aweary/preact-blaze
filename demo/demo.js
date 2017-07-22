import { h, render, Component } from 'preact'
import Router, { route as routeTo } from 'preact-router'
import Navigation from './components/navigation'
import AutoComplete from '../src/autocomplete'
import Accordion from '../src/accordion'
import Button from '../src/button'
import Avatar from '../src/avatar'
import Badge from '../src/badge'
import Card from '../src/card/card'
import CardText from '../src/card/card-text'
import CardDivider from '../src/card/card-divider'
import CardHeader from '../src/card/card-header'
import CardItem from '../src/card/card-item'
import CardItemDividier from '../src/card/card-item-divider'
import CardFooter from '../src/card/card-footer'
import Input from '../src/inputs/input'
import Select from '../src/inputs/select'
import InputGroup from '../src/inputs/input-group'
import Hint from '../src/inputs/hint'
import Textarea from '../src/inputs/textarea'
import Icon from '../src/icon'
import Field from '../src/inputs/field'
import Label from '../src/inputs/label'
import FormGroup from '../src/inputs/form-group'
import Toast from '../src/toasts/toast'
import Toaster from '../src/toasts/toaster'
import createToaster from '../src/toasts/create'
import Progress from '../src/progress'
import Modal from '../src/modal'
import Overlay from '../src/overlay'
// import TextArea from '../src/inputs/textarea'
import './style.css'
import '../node_modules/blaze/dist/components.typography.min.css'
import '../node_modules/blaze/dist/components.headings.min.css'
import 'blaze/dist/generics.global.min.css'
import 'blaze/dist/components.buttons.min.css'
import 'blaze/dist/components.avatars.min.css'
import 'blaze/dist/utilities.sizes.min.css'
import './node_modules/prismjs/themes/prism-tomorrow.css'
import Prism from './node_modules/prismjs'

import libraryPackageJSON from '../package.json'

const Components = {
  AutoComplete,
  Accordion,
  Button,
  Avatar,
  Badge,
  Card,
  CardText,
  CardDivider,
  CardHeader,
  CardItem,
  CardItemDividier,
  CardFooter,
  Input,
  Select,
  InputGroup,
  Hint,
  Textarea,
  Icon,
  Field,
  Label,
  FormGroup,
  Toast,
  Toaster,
  createToaster,
  Progress,
  Modal,
  Overlay,
}

const AutoCompleteDemo = require('./routes/autocomplete')(Components)
const AccordionDemo = require('./routes/accordion')(Components)
const ModalDemo = require('./routes/modal')(Components)
const CardDemo = require('./routes/card')(Components)
const InputDemo = require('./routes/input')(Components)
const ButtonDemo = require('./routes/button')(Components)
const ToastDemo = require('./routes/toast')(Components)
const ProgressDemo = require('./routes/progress')(Components)

const DemoApp = () => (
  <div style={{ padding: 60 }}>
    <Navigation />
    <div className="demo--container">
      <h1>preact-blaze</h1>
      <p>A small and fast UI library utilizing Preact and BlazeCSS.</p>
      <Badge type="brand">{libraryPackageJSON.version}</Badge>
      <hr />
      <Router>
        <AutoCompleteDemo path="/autocomplete" />
        <ButtonDemo path="/buttons" />
        <CardDemo path="/card" />
        <InputDemo path="/inputs" />
        <ToastDemo path="/toast" />
        <ProgressDemo path="/progress" />
        <ModalDemo path="/modal" />
        <AccordionDemo path="/accordions" />
      </Router>
    </div>
  </div>
)

render(<DemoApp />, document.getElementById('container'))
