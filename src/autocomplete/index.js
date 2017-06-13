// @flow
import { h, Component } from "preact";
import fuzzysearch from "fuzzysearch";
import Input from "../inputs/input";
import Icon from "../icon";
import Field from "../inputs/field";
import "blaze/dist/objects.forms.min.css";
import "blaze/dist/components.tags.min.css";
import "blaze/dist/components.cards.min.css";
import "blaze/dist/components.inputs.min.css";
import "./style.css";

type AutoCompleteProps = {
  source: Array<string>,
  limit: number,
  onSelect: string => void,
  filter: (string, Array<string>) => Array<string>
};

type AutoCompleteState = {
  value: string,
  selected: null | number,
  filtering: boolean,
  filtered: Array<string>
};

type $InputKeyboardEvent = KeyboardEvent & {
  target: HTMLInputElement
};

type $KeyboardEvent = KeyboardEvent & {
  target: HTMLElement
};

type $MouseEvent = {
  target: HTMLElement
};

const TAB_KEY = 9;
const ENTER_KEY = 13;
const ESCAPE_KEY = 27;
const UP_ARROW_KEY = 38;
const DOWN_ARROW_KEY = 40;

const defaultFilter = (value: string, items: Array<string>) => {
  value = value.toLowerCase();
  return items.filter(item => {
    item = item.toLowerCase();
    return fuzzysearch(value, item);
  });
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
      filtered: [],
      // A random ID is created when the component is constructed.
      // This is used as an id for our input/list elements so that
      // we can provide accurate ARIA labels
      id: (Math.random() + "").slice(0, 5)
    };
  }

  handleInputChange = ({ target: { value } }: $InputKeyboardEvent) => {
    const { source, limit, filter } = this.props;
    let filtered = filter(value, source);
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
    if (keyCode === ESCAPE_KEY) {
      console.log({ selected });
      if (selected !== null) {
        this.setState({
          selected: null
        });
      } else {
        this.setState({ filtering: false });
      }
      this.input.focus();
    }

    /**
     * The up and down arrow keys can be used to tab to one of
     * the suggestions. 
     */
    if (
      (keyCode === DOWN_ARROW_KEY ||
        keyCode == UP_ARROW_KEY ||
        keyCode === TAB_KEY) &&
      shouldSelectItem
    ) {
      console.log(event);
      const delta = keyCode === DOWN_ARROW_KEY ||
        (keyCode === TAB_KEY && !event.shiftKey)
        ? 1
        : -1;
      const target = selected == null ? 0 : selected + delta;
      if (target >= 0 || target <= limit) {
        event.preventDefault();
        const node = document.querySelector(`[data-index="${target}"]`);
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
    const {
      source,
      limit,
      placeholder,
      iconLeft,
      iconRight,
      inputProps
    } = this.props;
    const { value, selected, filtering, filtered, id } = this.state;
    const isFiltering = value && filtering;
    return (
      <div className="autocomplete--results">
        <Field iconLeft={iconLeft} iconRight={iconRight}>
          <Input
            iconRight={iconRight}
            iconLeft={iconLeft}
            ref={n => (this.input = n)}
            value={this.state.value}
            onKeyDown={this.handleKeyDown}
            onInput={this.handleInputChange}
            placeholder={placeholder}
            aria-autocomplete="list"
            aria-owns={this.state.id}
            aria-activedescendant={`${id}-${selected}`}
            role="combobox"
            {...inputProps}
          />
        </Field>
        {isFiltering &&
          <ul
            id={this.state.id}
            aria-expanded={true}
            role="listbox"
            className="c-card c-card--menu u-higher autocomplete__animated"
          >
            {filtered.map((item, i) => (
              <li
                role="option"
                onClick={this.handleItemSelect}
                onKeyDown={this.handleKeyDown}
                tabIndex={i}
                data-index={i}
                id={`${id}-${i}`}
                key={i}
                className="c-card__item autocomplete__item autocomplete__animated"
              >
                {item}
              </li>
            ))}
          </ul>}
      </div>
    );
  }
}
