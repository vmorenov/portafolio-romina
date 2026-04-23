import { useEffect, useMemo, useState } from "react";
import heroImage from "./assets/cabecera.png";
import teamPortraitImage from "./assets/about-image.jpeg";
import {
  BrandIcon,
  CheckCircleIcon,
  ChecklistIcon,
  ClipboardIcon,
  ClockIcon,
  GearIcon,
  InstrumentIcon,
  MailIcon,
  MapPinIcon,
  MonitorIcon,
  SearchFileIcon,
  SearchIcon,
  ShieldIcon,
  TeamIcon,
  TrendUpIcon,
  TriangleAlertIcon,
  UserIcon,
  WhatsAppIcon,
} from "./components/Icons";
import type { ContactItem, IconName } from "./data/siteContent";
import { siteContent } from "./data/siteContent";
import "./App.css";

function renderIcon(icon: IconName, className: string) {
  switch (icon) {
    case "shield":
      return <ShieldIcon className={className} />;
    case "gear":
      return <GearIcon className={className} />;
    case "clipboard":
      return <ClipboardIcon className={className} />;
    case "trend":
      return <TrendUpIcon className={className} />;
    case "instrument":
      return <InstrumentIcon className={className} />;
    case "alert":
      return <TriangleAlertIcon className={className} />;
    case "search-file":
      return <SearchFileIcon className={className} />;
    case "clock":
      return <ClockIcon className={className} />;
    case "search":
      return <SearchIcon className={className} />;
    case "checklist":
      return <ChecklistIcon className={className} />;
    case "monitor":
      return <MonitorIcon className={className} />;
    case "check-circle":
      return <CheckCircleIcon className={className} />;
    case "team":
      return <TeamIcon className={className} />;
    case "user":
      return <UserIcon className={className} />;
  }
}

function contactPhoto(contact: ContactItem) {
  return {
    src: teamPortraitImage,
    position: contact.photoPosition,
  };
}

export default function App() {
  const sectionIds = useMemo(
    () => siteContent.navigation.map((item) => item.id),
    [],
  );
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-12% 0px -62% 0px",
        threshold: [0.15, 0.3, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
            <div className="brand-mark">
              <BrandIcon className="brand-mark__icon" />
            </div>
            <div>
              <div className="brand-title">{siteContent.brand.title}</div>
              <div className="brand-subtitle">{siteContent.brand.tagline}</div>
            </div>
          </a>

          <nav className="menu" aria-label="Secciones principales">
            {siteContent.navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "is-active" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-band">
            <div className="container hero-grid">
              <div className="hero-copy">
                <h1>{siteContent.hero.title}</h1>
                <p className="hero-text">{siteContent.hero.description}</p>

                <div className="hero-meta">
                  <MapPinIcon className="hero-meta__icon" />
                  <span>{siteContent.hero.location}</span>
                </div>

                <div className="hero-actions">
                  <a className="btn btn-primary" href={siteContent.hero.primaryAction.href}>
                    <ClipboardIcon className="btn__icon" />
                    <span>{siteContent.hero.primaryAction.label}</span>
                  </a>
                  <a className="btn btn-secondary" href={siteContent.hero.secondaryAction.href}>
                    <MailIcon className="btn__icon" />
                    <span>{siteContent.hero.secondaryAction.label}</span>
                  </a>
                </div>
              </div>

              <div className="hero-visual" aria-label="Bloque visual médico">
                <img
                  className="hero-visual__image"
                  src={heroImage}
                  alt="Profesional manipulando instrumental quirúrgico en central de esterilización"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="proyecto">
          <div className="container project-section">
            <div className="project-copy">
              <div className="section-head">
                <h2>Sobre el proyecto</h2>
                <div className="section-line" />
              </div>
              <p>{siteContent.project.description}</p>
            </div>

            <div className="feature-grid four feature-grid--project">
              {siteContent.project.highlights.map((item) => (
                <article className="feature-card feature-card--project" key={item.title}>
                  <div className="icon icon--project">
                    {renderIcon(item.icon, "feature-card__icon")}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-head slim">
              <h2>Problema y Justificación</h2>
              <div className="section-line" />
            </div>

            <div className="feature-grid four">
              {siteContent.problem.cards.map((item) => (
                <article className="info-card" key={item.title}>
                  <div className="info-card__icon">
                    {renderIcon(item.icon, "info-card__svg")}
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="callout">
              <SearchIcon className="callout__icon" />
              <span>{siteContent.problem.note}</span>
            </div>
          </div>
        </section>

        <section className="section" id="metodologia">
          <div className="container">
            <div className="section-head slim">
              <h2>Metodología</h2>
              <div className="section-line" />
            </div>

            <div className="steps">
              {siteContent.methodology.steps.map((step, index) => (
                <article className="step" key={step.title}>
                  <div className="step__visual">
                    <div className="step__icon-wrap">
                      {renderIcon(step.icon, "step__icon")}
                    </div>
                    {index < siteContent.methodology.steps.length - 1 ? (
                      <span className="step__arrow" aria-hidden="true" />
                    ) : null}
                  </div>
                  <span className="step-number">
                    {index + 1}. {step.title}
                  </span>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="resultados">
          <div className="container">
            <div className="section-head slim">
              <h2>Resultados alcanzados</h2>
              <div className="section-line" />
            </div>

            <div className="stats-grid">
              {siteContent.results.stats.map((item) => (
                <article className="stat-card" key={item.label}>
                  <div className="stat-card__icon-wrap">
                    {renderIcon(item.icon, "stat-card__icon")}
                  </div>
                  <div>
                    <span className="stat-value">{item.value}</span>
                    <span className="stat-label">{item.label}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="section-head slim section-head--sub">
              <h2>Hallazgos clave</h2>
              <div className="section-line" />
            </div>

            <div className="feature-grid five">
              {siteContent.results.findings.map((item) => (
                <article className="mini-card" key={item.title}>
                  <div className="mini-card__icon">
                    {renderIcon(item.icon, "mini-card__svg")}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section impact" id="conclusiones">
          <div className="container impact-grid">
            <div className="impact-panel">
              <div className="section-head section-head--light">
                <h2>Impacto clínico</h2>
                <div className="section-line section-line--light" />
              </div>
              <p>{siteContent.impact.description}</p>

              <div className="impact-items">
                {siteContent.impact.items.map((item) => (
                  <div className="impact-item" key={item.label}>
                    {renderIcon(item.icon, "impact-item__icon")}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="conclusion-panel">
              <div className="section-head">
                <h2>Conclusiones</h2>
                <div className="section-line" />
              </div>

              <ul className="check-list">
                {siteContent.conclusions.items.map((item) => (
                  <li key={item}>
                    <CheckCircleIcon className="check-list__icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="contacto">
          <div className="container">
            <div className="section-head slim">
              <h2>{siteContent.contact.title}</h2>
              <div className="section-line" />
            </div>

            <div className="contact-grid">
              {siteContent.contact.people.map((person) => {
                const portrait = contactPhoto(person);

                return (
                  <article className="contact-card" key={person.email}>
                    <div className="contact-card__portrait">
                      <img
                        src={portrait.src}
                        alt={person.name}
                        style={{ objectPosition: portrait.position }}
                      />
                    </div>

                    <div className="contact-body">
                      <h3>{person.name}</h3>
                      <p className="role">{person.role}</p>
                      <a href={person.emailHref}>
                        <MailIcon className="contact-body__icon" />
                        <span>{person.email}</span>
                      </a>
                      <a href={person.whatsappHref} target="_blank" rel="noreferrer">
                        <WhatsAppIcon className="contact-body__icon contact-body__icon--whatsapp" />
                        <span>{person.whatsapp} · WhatsApp</span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <div className="footer-brand">
            <BrandIcon className="footer-brand__icon" />
            <div>
              <strong>{siteContent.footer.title}</strong>
              <p>{siteContent.footer.subtitle}</p>
            </div>
          </div>
          <p>© {siteContent.footer.year} Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
