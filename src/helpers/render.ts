export type RenderComponent<T = any> = (props: T) => string;

/**
 * renderInlineProp helper to render properties on html attributes
 * @param propKey - Key of property
 * @param propValue - Value of property in String or Array
 * @returns String
 */
export function renderInlineProp(
  propKey: string,
  propValue?: string | undefined | number | boolean | (string | undefined)[]
): string {
  if (propValue) {
    if (Array.isArray(propValue)) {
      return `${propKey}="${propValue.filter((item) => item).join(" ")}"`;
    }

    return `${propKey}="${propValue}"`;
  }

  return "";
}

/**
 * renderInline
 * @param component a functional component that can handle properties
 * @param props Properties from the component
 * @returns string
 */
export function renderInline<T>(
  component: RenderComponent<T>,
  props: T
): string {
  return component(props);
}

/**
 * Render functionality to append a string on a given HTML container
 * @param component a functional component that can handle properties
 * @param props Properties from the component
 * @returns Function to render to given container
 */
export function render<T>(component: RenderComponent<T>, props: T) {
  return (container: HTMLElement = document.body, events?: Event[]) => {
    // eslint-disable-next-line no-param-reassign
    container.innerHTML = renderInline(component, props);

    if (events && events.length) {
      initAllEvents(events);
    }

    return container;
  };
}

export type Event = () => void;

function initAllEvents(events: Event[]) {
  events.forEach((event) => event());
}
