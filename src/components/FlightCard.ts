export interface FlightCardProps {
  flightIdentifier: string;
  flightNumber: string;
  airport: string;
  expectedTime: string;
  url: string;
}

/**
 * Renders Flight information based on flight properties
 * Makes use of scss in components/_flight-card.scss
 */
export function FlightCard({
  flightIdentifier: id,
  flightNumber: number,
  airport,
  expectedTime,
  url,
}: FlightCardProps) {
  return `
    <div class="variant-container">
      <div class="rw-card rw-card--caret">
        <div class="rw-card__body">
          <h3 class="rw-card__header">
            ${number} - ${airport} (${id})
          </h3>
          <div class="rw-card__meta">
            Expected time of arrival: <time>${expectedTime}</time>
          </div>
        </div>
        <div class="rw-card__footer">
          <a href="${url}" class="rw-card__link rw-icon-link" target="_blank">
            <span class="rw-icon-link__text">
              Read Article
            </span>
          </a>
        </div>
      </div>
    </div>
  `;
}
