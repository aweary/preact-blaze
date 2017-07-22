import { h, Component } from 'preact'
import countries from '../mock-data.json'
import matchSorter from 'match-sorter'

module.exports = function({ AutoComplete, Label, Icon }) {
  return class AutoCompleteDemo extends Component {
    constructor() {
      super()
    }
    render() {
      return (
        <div style={{ height: 600 }}>
          <Label text="Find your country: " />
          <AutoComplete
            iconLeft={<Icon icon="globe" />}
            fuzzy={true}
            placeholder="Country"
            filter={(term, items) => matchSorter(items, term)}
            source={countries.map(country => country.name)}
            limit={5}
          />
        </div>
      )
    }
  }
}
