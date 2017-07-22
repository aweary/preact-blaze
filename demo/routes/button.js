import { h } from 'preact'

const buttons = [
  { label: 'Button' },
  {
    label: 'Success button',
    type: 'success',
  },
  {
    label: 'Warning button',
    type: 'warning',
  },
  {
    label: 'Error button',
    type: 'error',
  },
  {
    label: 'Info button',
    type: 'info',
  },
  {
    label: 'Brand button',
    type: 'brand',
  },
  {
    label: 'Ghost button',
    ghost: true,
  },
  { label: 'Ghost warning button', ghost: true, type: 'warning' },
  { label: 'Full-width button', block: true },
  { label: 'Extra small button', size: 'xsmall' },
  { label: 'Small button', size: 'small' },
  { label: 'Medium button', size: 'medium' },
  { label: 'Large button', size: 'large' },
  { label: 'Extra large button', size: 'xlarge' },
  { label: 'Super button', size: 'super' },
  { label: 'Rounded button', rounded: true },
]

module.exports = ({ InputGroup, Button }) => () => (
  <div>
    <h3>Buttons</h3>
    <InputGroup rounded>
      <Button size="large">Button #1</Button>
      <Button size="large" type="success">Button #3</Button>
      <Button size="large" type="brand">Button #2</Button>
    </InputGroup>
    <Button style={{ margin: 15 }} type="success">Save</Button>
    <Button style={{ margin: 15 }} type="error">Cancel</Button>
  </div>
)
