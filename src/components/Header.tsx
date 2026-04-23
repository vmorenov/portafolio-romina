import { BrandIcon } from "./Icons";
import type { NavigationItem } from "../data/siteContent";

type HeaderProps = {
  brandTitle: string;
  brandTagline: string;
  navigation: NavigationItem[];
  activeSection: string;
};

export default function Header({
  brandTitle,
  brandTagline,
  navigation,
  activeSection,
}: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <BrandIcon className="brand__icon" />
          <span className="brand__text">
            <strong>{brandTitle}</strong>
            <span>{brandTagline}</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Secciones principales">
          {navigation.map((item) => (
            <a
              key={item.id}
              className={`site-nav__link ${
                activeSection === item.id ? "site-nav__link--active" : ""
              }`}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

