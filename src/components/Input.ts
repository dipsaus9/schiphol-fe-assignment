import { renderInline, renderInlineProp } from "~/helpers/render";
import { InputDescription } from "./InputDescription";

export interface InputProps extends Partial<HTMLInputElement> {
  label: string;
  description: string;
  className?: string;
}

/**
 * Input component including placeholder
 */
export function Input({
  type,
  id,
  className,
  label,
  value,
  placeholder,
  description,
  minLength,
  autofocus,
}: InputProps) {
  return `
    <div
      ${renderInlineProp("class", "rw-input")}
    >
      ${renderInline(InputDescription, { description })}
      <label
        ${renderInlineProp("for", id)}
        ${renderInlineProp("class", ["rw-input-label"])}
      >
        ${label}
      </label>
      <input
        ${renderInlineProp("id", id)}
        ${renderInlineProp("type", type ?? "text")}
        ${renderInlineProp("placeholder", placeholder)}
        ${renderInlineProp("value", value)}
        ${renderInlineProp("autofocus", autofocus)}
        ${renderInlineProp("minLength", minLength)}
        ${renderInlineProp("class", ["rw-input-text", className])}
      />
    </div>
  `;
}
