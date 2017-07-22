import { h } from 'preact'

module.exports = ({
  FormGroup,
  Label,
  Field,
  Input,
  InputGroup,
  Icon,
  Textarea,
  Button,
  Select,
  Hint,
}) => () => (
  <div>
    <FormGroup>
      <Label text="Enter your name:" for="name" />
      <Field hint={<Hint text="This is a hint" />}>
        <Input placeholder="Enter your name..." id="name" />
      </Field>
    </FormGroup>
    <FormGroup>
      <Label text="Enter your review: " for="review" />
      <Field hint={<Hint text="Like anybody even cares" />}>
        <Textarea id="review" placeholder="Review goes here..." />
      </Field>
    </FormGroup>
    <FormGroup>
      <Label text="Album details: " for="artist" />
      <InputGroup rounded>
        <Field
          hint={<Hint text="Hope its not Coldplay" />}
          iconLeft={<Icon icon="heart" />}
        >
          <Input placeholder="Artist name..." id="artist" />
        </Field>
        <Field
          hint={<Hint text="That album sucks tho" />}
          iconRight={<Icon icon="comment-o" />}
        >
          <Input placeholder="name" />
        </Field>
        <Field
          hint={<Hint text="Loser" />}
          iconLeft={<Icon icon="camera-retro" />}
        >
          <Input placeholder="name" />
        </Field>
      </InputGroup>
    </FormGroup>
    <Label for="email" text="Enter your email: " />
    <InputGroup roundedRight>
      <Field
        hint={<Hint style={{ fontSize: 20 }} text="Enter a valid email" />}
      >
        <Input type="email" placeholder="We wont spam you..." id="email" />
      </Field>
      <Button style={{ width: '30%' }} type="info">Foobar</Button>
    </InputGroup>
    <InputGroup>
      <FormGroup>
        <Label for="options" text="Select an option " />
        <Select id="options">
          <option>Select me</option>
        </Select>
      </FormGroup>
    </InputGroup>
    <Label text="This is a stack input" />
    <InputGroup stacked>
      <Field iconLeft={<Icon icon="cc" />}>
        <Input placeholder="Enter your credit card..." />
      </Field>
      <Field hint={<Hint text="foo" />} iconLeft={<Icon icon="cloud" />}>
        <Input placeholder="Enter your credit card..." />
      </Field>
      <Field iconLeft={<Icon icon="code" />}>
        <Input placeholder="Enter your credit card..." />
      </Field>
    </InputGroup>
  </div>
)
