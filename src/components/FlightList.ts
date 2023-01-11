import type { Flight } from "~/services/types/Flight";

import { renderInline } from "~/helpers/render";
import { FlightCard } from "./FlightCard";

export interface FlightListProps {
  flights: Flight[];
}

/**
 * Renders list of flights based on Flight information
 * Renders Flight card when there are flights available, otherwise render "No results"
 */
export function FlightList({ flights }: FlightListProps) {
  if (!flights.length) {
    return `
      <div class="variant-container">
        <h2>No results</h2>
      </div>
    `;
  }

  return `
    <div>
      ${flights
        .map((flight) =>
          renderInline(FlightCard, {
            airport: flight.airport,
            expectedTime: flight.expectedTime,
            flightIdentifier: flight.flightIdentifier,
            flightNumber: flight.flightNumber,
            url: flight.url,
          })
        )
        .join("")}
    </div>
  `;
}
