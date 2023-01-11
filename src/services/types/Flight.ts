export interface Flight {
  flightIdentifier: string;
  flightNumber: string;
  airport: string;
  expectedTime: string;
  originalTime: string;
  url: string;
  score: string;
}

export interface FlightResponse {
  flights: Flight[];
}
