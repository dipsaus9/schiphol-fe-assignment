import { RenderComponent, renderInline } from "./helpers/render";
import { Header } from "./layout/Header";

export interface AppProps {
  children: RenderComponent;
}

export function App({ children }: AppProps) {
  const title = "Welcome to Schiphol Airport";

  return `
    ${renderInline(Header, {
      title,
    })}

    <main>
      ${children(undefined)}
    </main> 
  `;
}
