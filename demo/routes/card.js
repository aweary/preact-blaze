import { h } from 'preact'

module.exports = ({
  Card,
  CardItem,
  CardItemDividier,
  CardDivider,
  CardFooter,
  CardHeader,
  CardText,
  InputGroup,
  Button,
}) => () => (
  <div>
    <h1>Card with header</h1>
    <Card>
      <CardHeader primary="Heading" secondary="A smaller heading" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo eveniet magnam ipsa beatae
      </CardText>
    </Card>
    <h1>Card with grouped items</h1>
    <Card grouped shadow="highest">
      <CardItem>Foobar</CardItem>
      <CardItem>Foobar</CardItem>
      <CardDivider />
      <CardItem>Foobar</CardItem>
      <CardItem>Foobar</CardItem>
      <CardItem>Foobar</CardItem>
      <CardItem>Foobar</CardItem>
      <CardItem>Foobar</CardItem>
      <CardDivider />
      <CardItem>Foobar</CardItem>
      <CardItem>Foobar</CardItem>
    </Card>
    <h1> Card with items </h1>
    <Card>
      <CardItem>Fooo</CardItem>
      <CardItem>Barrr</CardItem>
      <CardItem>Bazzzz</CardItem>
      <CardItemDividier>Divider</CardItemDividier>
      <CardItem>Bazzzz</CardItem>
      <CardItem>Bazzzz</CardItem>
      <CardItem>Bazzzz</CardItem>
    </Card>
    <h1>Card with footer</h1>
    <Card style={{ maxWidth: 400 }} shadow="highest">
      <CardHeader primary="Heading" secondary="A smaller heading" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, beatae totam nesciunt saepe atque quod asperiores est deserunt adipisci omnis architecto laborum molestias qui autem, recusandae, aspernatur provident ratione expedita.
      </CardText>
      <CardFooter block>
        <InputGroup>
          <Button block type="info">Button</Button>
          <Button block type="brand">Button</Button>
        </InputGroup>
      </CardFooter>
    </Card>
  </div>
)
