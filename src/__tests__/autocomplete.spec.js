import { h, render } from "preact";
import AutoComplete from "../autocomplete";

const div = document.createElement("div");

describe("AutoComplete", () => {
  it("should export a Preact component", () => {
    render(<AutoComplete source={[]} fuzzy={true} />, div);
    console.log("DIV", div.innerHTML);
  });
});
