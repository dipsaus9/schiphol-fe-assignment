import {
  queryByText,
  queryByRole,
  getByRole,
  getByLabelText,
} from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import { FlightSearch, createFlightSearchEventsHandler } from "./FlightSearch";

import { render } from "~/helpers/render";

describe("FlightSearch", () => {
  function renderFlightSearch(mockedOnSearch: jest.Mock = jest.fn()) {
    return render(FlightSearch, undefined)(document.body, [
      createFlightSearchEventsHandler({ onSearch: mockedOnSearch }),
    ]);
  }

  it("renders a title", () => {
    const container = renderFlightSearch();

    expect(queryByText(container, /search for your flight/i)).toBeVisible();
  });

  it("renders a search input with a label", () => {
    const container = renderFlightSearch();

    expect(queryByRole(container, "searchbox")).toBeVisible();
    expect(queryByText(container, /search by airport/i)).toBeVisible();
  });

  it("calls onSearch after typing", async () => {
    const user = userEvent.setup();

    const mockedSearch = jest.fn();
    const container = renderFlightSearch(mockedSearch);

    await user.type(getByLabelText(container, /Search by airport/i), "Sch");

    expect(getByRole(container, "searchbox")).toHaveValue("Sch");

    expect(mockedSearch).toHaveBeenCalledWith("Sch");
  });
});
