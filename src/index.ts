import "~/assets/scss/index.scss";

import { render, renderInline, renderInlineProp } from "~/helpers/render";
import { App } from "./app";
import { FlightList } from "./components/FlightList";
import {
  FlightSearch,
  createFlightSearchEventsHandler,
} from "./components/FlightSearch";
import { flightService } from "./services/flightService";

const resultsContainerId = "flight-results-container";

/**
 * IIFE to start initial render of the App
 */
(() => {
  const container = document.body; // Use body as we don't use a custom html template

  render(App, {
    children: () => `
        <div>${renderInline(FlightSearch, undefined)}</div>
        <div ${renderInlineProp("id", resultsContainerId)}></div>
      `,
  })(container, [createFlightSearchEventsHandler({ onSearch: searchFlights })]);
})();

/**
 * Search flight and render result in flight-results container
 * @param airport - String of airport
 * Renders item based on element
 */
async function searchFlights(airport: string) {
  const renderResultsContainer = document.getElementById(resultsContainerId);

  if (!renderResultsContainer) {
    return;
  }

  /**
   * Don't render results if there is no value given
   */
  if (airport.length < 3) {
    return;
  }

  const flights = await flightService.fetchFlightsBasedOnAirport(airport);

  render(FlightList, {
    flights,
  })(renderResultsContainer);
}
