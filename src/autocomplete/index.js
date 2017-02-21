// @flow
import { h, Component } from "preact";
import fuzzysearch from "fuzzysearch";
import "blaze/dist/objects.forms.min.css";
import "blaze/dist/components.tags.min.css";
import "blaze/dist/components.cards.min.css";
import "blaze/dist/components.inputs.min.css";
import "./style.css";

type AutoCompleteProps = {
  source: Array<string>,
  limit: number,
  onSelect: (string) => void,
  filter: (string, string) => boolean
};

type AutoCompleteState = {
  value: string,
  selected: null | number,
  filtering: boolean,
  filtered: Array<string>
};

type $InputKeyboardEvent =
  & KeyboardEvent
  & {
    target: HTMLInputElement
  };

type $KeyboardEvent =
  & KeyboardEvent
  & {
    target: HTMLElement
  };

type $MouseEvent = {
  target: HTMLElement
};

const ENTER_KEY = 13;
const UP_ARROW_KEY = 38;
const DOWN_ARROW_KEY = 40;
const ESCAPE_KEY = 27;

const defaultFilter = (value: string, item: string) => {
  value = value.toLowerCase();
  item = item.toLowerCase();
  return fuzzysearch(value, item);
};

export default class AutoComplete extends Component {
  props: AutoCompleteProps;
  state: AutoCompleteState;
  input: HTMLInputElement;

  static defaultProps = {
    limit: Infinity,
    fuzzy: false,
    onSelect: () => {},
    filter: defaultFilter
  };

  constructor(props: AutoCompleteProps) {
    super(props);
    this.state = {
      value: "",
      selected: null,
      filtering: false,
      filtered: []
    };
  }

  handleInputChange = ({ target: { value } }: $InputKeyboardEvent) => {
    const { source, limit, filter } = this.props;
    let filtered = source.filter(filter.bind(null, value));
    if (limit != null && filtered.length > limit) {
      filtered = filtered.slice(0, limit);
    }
    this.setState({
      value,
      filtered,
      filtering: true
    });
  };

  handleKeyDown = (event: $KeyboardEvent) => {
    const { keyCode } = event;
    const { limit, onSelect } = this.props;
    const { value, filtering, selected, filtered } = this.state;
    const shouldSelectItem = value && filtering;

    /**
     * The escape key can be used to focus the input and remove
     * all current suggestions if you have selected one of the
     * suggestions with the arrow keys.
     */
    if (keyCode === ESCAPE_KEY && selected !== null) {
      this.setState({
        selected: null,
        filtering: false
      });
      this.input.focus();
    }

    /**
     * The up and down arrow keys can be used to tab to one of
     * the suggestions. 
     */
    if (
      (keyCode === DOWN_ARROW_KEY || keyCode == UP_ARROW_KEY) &&
      shouldSelectItem
    ) {
      const delta = keyCode === DOWN_ARROW_KEY ? 1 : -1;
      const target = selected == null ? 0 : selected + delta;
      if (target >= 0 || target <= limit) {
        event.preventDefault();
        const node = document.querySelector(`[data-index="${target}"`);
        // If the node doesn't exist then just give up :party:
        if (node) {
          node.focus();
          this.setState({ selected: target });
        }
      }
    }

    /**
     * The enter key can be used to select suggestions that
     * are currently focused via the arrow keys.
     */
    if (keyCode === ENTER_KEY) {
      if (selected != null) {
        event.preventDefault();
        this.setState({
          value: filtered[selected],
          filtering: false,
          selected: null
        });
        this.input.focus();
        if (this.props.onSelect) {
          this.props.onSelect(filtered[selected]);
        }
      }
    }
  };

  handleItemSelect = ({ target: { innerText } }: $MouseEvent) => {
    this.setState({
      value: innerText,
      filtering: false,
      selected: null
    });
    if (this.props.onSelect && innerText) {
      this.props.onSelect(innerText);
    }
  };

  render() {
    const { source, limit, placeholder } = this.props;
    const { value, selected, filtering, filtered } = this.state;
    return (
      <div className="autocomplete--results">
        <input
          ref={n => this.input = n}
          value={this.state.value}
          onKeyDown={this.handleKeyDown}
          onInput={this.handleInputChange}
          placeholder={placeholder}
          className="c-field"
        />
        <ul className="c-card c-card--menu u-higher">
          {filtering &&
            value &&
            filtered.map((item, i) => (
              <li
                onClick={this.handleItemSelect}
                onKeyDown={this.handleKeyDown}
                tabIndex={i}
                data-index={i}
                className="c-card__item autocomplete__item"
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
