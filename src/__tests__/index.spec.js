import * as PreactBlaze from "../index";

describe("preact-blaze", () => {
  it("exports a Button component", () => {
    expect(typeof PreactBlaze.Button).toBe("function");
  });
});
