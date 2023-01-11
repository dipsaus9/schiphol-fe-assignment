export interface HeaderProps {
  title: string;
}

/**
 * Basic Header layout with variable Title
 */
export function Header({ title }: HeaderProps) {
  return `
    <header>
      <div class="header-container">
        <h1 class="header--title">
          ${title}
        </h1>
      </div>
    </header>
  `;
}
