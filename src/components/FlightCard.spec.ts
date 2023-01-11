import { queryByText, queryByRole } from "@testing-library/dom";

import { FlightCard, type FlightCardProps } from "./FlightCard";

import { render } from "~/helpers/render";

function createFlightResponseMock(
  overrides: Partial<FlightCardProps>
): FlightCardProps {
  return {
    airport: "",
    expectedTime: "",
    flightIdentifier: "",
    flightNumber: "",
    url: "",
    ...overrides,
  };
}

function renderFlightCard(overrides: Partial<FlightCardProps>) {
  return render(FlightCard, createFlightResponseMock(overrides))();
}

describe("FlightCard", () => {
  it("renders a flightIdentifier", () => {
    const container = renderFlightCard({
      flightIdentifier: "AB1234567",
    });

    expect(queryByText(container, /AB1234567/)).toBeVisible();
  });

  it("renders a flightNumber", () => {
    const container = renderFlightCard({
      flightNumber: "AB 1234",
    });

    expect(queryByText(container, /AB 1234/)).toBeVisible();
  });

  it("renders an airport", () => {
    const container = renderFlightCard({
      airport: "Tel aviv",
    });

    expect(queryByText(container, /Tel aviv/)).toBeVisible();
  });

  it("renders an expected time", () => {
    const container = renderFlightCard({
      expectedTime: "14:30",
    });

    expect(queryByText(container, /14:30/)).toBeVisible();
  });

  it("renders a link", () => {
    const container = renderFlightCard({
      url: "/some-url/",
    });

    expect(queryByRole(container, "link")).toHaveAttribute(
      "href",
      "/some-url/"
    );

    expect(queryByRole(container, "link")).toHaveAttribute("target", "_blank");
  });
});
