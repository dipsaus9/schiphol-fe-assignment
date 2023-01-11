import { Flight, FlightResponse } from "./types/Flight";

/**
 * Simple service to fetch data
 * Would rather use a Typed service like Axios so we could handle errors in a stricter way
 */
export const flightService = {
  fetchFlightsBasedOnAirport: async (airport: string): Promise<Flight[]> => {
    try {
      const response = await fetch("/static/flights.json");
      const { flights } = (await response.json()) as FlightResponse;

      return flights.filter((flight) =>
        flight.airport.match(new RegExp(airport, "i"))
      );
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Handle error for API based on following error", e);

      return [];
    }
  },
};
