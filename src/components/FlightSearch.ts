import { renderInline } from "~/helpers/render";
import { Input } from "./Input";

const inputId = "flight-search";

/**
 * Renders Search bar
 */
export function FlightSearch() {
  return `
    <div>
      <h2>
        Search for your flight
      </h2>
      ${renderInline(Input, {
        label: "Search by airport",
        type: "search",
        minLength: 3,
        id: inputId,
        autofocus: true,
        description:
          "Please enter at least three characters to start searching",
      })}
    </div>
  `;
}

export interface FlightSearchEventsProps {
  onSearch: (searchValue: string) => void;
}

/**
 * Create search event handler with onSearch handler so it can be controlled from other places
 * Calls onSearch when input value changes
 */
export function createFlightSearchEventsHandler({
  onSearch,
}: FlightSearchEventsProps) {
  return () => {
    const input = document.getElementById(inputId);

    if (!input) {
      return;
    }

    input.addEventListener("input", (event) => {
      const element = event.target as HTMLInputElement;

      if (!element) {
        return;
      }

      const { value } = element;

      onSearch(value);
    });
  };
}
