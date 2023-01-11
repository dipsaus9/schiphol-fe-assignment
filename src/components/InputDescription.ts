import { renderInlineProp } from "~/helpers/render";

export interface InputDescriptionProps {
  description: string;
}

/**
 * Input description text
 */
export function InputDescription({ description }: InputDescriptionProps) {
  if (!description) {
    return "";
  }

  return `
  <p 
    ${renderInlineProp("class", "rw-input__description")}
  >
    ${description}
  </p>`;
}
