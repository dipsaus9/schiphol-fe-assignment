import { queryByText } from "@testing-library/dom";

import { FlightList } from "./FlightList";
import type { Flight } from "~/services/types/Flight";
import { render } from "~/helpers/render";

function createFlightResponseMock(overrides: Partial<Flight>): Flight[] {
  return [
    {
      flightIdentifier: "",
      flightNumber: "",
      airport: "",
      expectedTime: "",
      originalTime: "",
      url: "",
      score: "",
      ...overrides,
    },
  ];
}

function renderFlightList(flights: Flight[]) {
  return render(FlightList, { flights })();
}

describe("FlightList", () => {
  it("renders a No results text when no flights given", () => {
    const container = renderFlightList([]);

    expect(queryByText(container, /No results/)).toBeVisible();
  });

  it("renders a flightCard", () => {
    const container = renderFlightList(
      createFlightResponseMock({
        flightIdentifier: "AB1234567",
      })
    );

    expect(queryByText(container, /AB1234567/)).toBeVisible();
  });
});
