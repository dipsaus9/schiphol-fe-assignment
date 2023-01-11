import { queryByText } from "@testing-library/dom";

import { render, renderInline, renderInlineProp } from "./render";

describe("renderInline", () => {
  it("returns a string from a Component without props", () => {
    const component = () => "<h1>Hello world</h1>";

    const result = renderInline(component, undefined);

    expect(result).toBe("<h1>Hello world</h1>");
  });

  it("returns a string from a Component with props", () => {
    const component = ({ name }: { name: string }) => `<h1>Hello ${name}</h1>`;

    const result = renderInline(component, { name: "world" });

    expect(result).toBe("<h1>Hello world</h1>");
  });
});

describe("render", () => {
  it("renders a component on the DOM", () => {
    const component = () => "<h1>Hello world</h1>";

    const container = render(component, undefined)();

    expect(queryByText(container, "Hello world")).toBeInTheDocument();
  });

  it("renders a component on the DOM with props", () => {
    const component = ({ name }: { name: string }) => `<h1>Hello ${name}</h1>`;

    const container = render(component, { name: "world" })();

    expect(queryByText(container, "Hello world")).toBeInTheDocument();
  });

  it("renders a component on a custom div element", () => {
    const component = ({ name }: { name: string }) => `<h1>Hello ${name}</h1>`;

    const container = render(component, { name: "world" })(
      document.createElement("div")
    );

    expect(container.nodeName.toLowerCase()).toBe("div");
  });

  it("renders a component and triggers events after render", () => {
    const component = ({ name }: { name: string }) => `<h1>Hello ${name}</h1>`;
    const mockEvent = jest.fn();

    render(component, { name: "world" })(undefined, [mockEvent]);

    expect(mockEvent).toHaveBeenCalled();
  });
});

describe("renderInlineProp", () => {
  it("returns empty string when propValue is empty", () => {
    const result = renderInlineProp("class");

    expect(result).toBe("");
  });

  it("returns a prop", () => {
    const result = renderInlineProp("class", "custom-class-name");

    // eslint-disable-next-line quotes, no-useless-escape
    expect(result).toBe(`class=\"custom-class-name\"`);
  });

  it("returns a prop from multiple values", () => {
    const result = renderInlineProp("class", [
      "custom-class-name",
      "another-class",
    ]);

    // eslint-disable-next-line quotes, no-useless-escape
    expect(result).toBe('class="custom-class-name another-class"');
  });
});
