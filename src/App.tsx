import { useEffect, useMemo, useState } from "react";
import referenceImage from "../image.png";
import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";
import {
  BriefcaseIcon,
  CareIcon,
  ClipboardIcon,
  HeartbeatIcon,
  HeartIcon,
  MailIcon,
  ShieldIcon,
  StethoscopeIcon,
  SyringeIcon,
  TeamIcon,
  UserIcon,
  WhatsAppIcon,
} from "./components/Icons";
import { siteContent } from "./data/siteContent";
import "./App.css";

function valueIcon(icon: (typeof siteContent.about.values)[number]["icon"]) {
  switch (icon) {
    case "heart":
      return <HeartIcon className="feature-card__icon" />;
    case "shield":
      return <ShieldIcon className="feature-card__icon" />;
    case "team":
      return <TeamIcon className="feature-card__icon" />;
  }
}

function serviceIcon(icon: (typeof siteContent.services.items)[number]["icon"]) {
  switch (icon) {
    case "stethoscope":
      return <StethoscopeIcon className="service-card__icon" />;
    case "syringe":
      return <SyringeIcon className="service-card__icon" />;
    case "clipboard":
      return <ClipboardIcon className="service-card__icon" />;
    case "heartbeat":
      return <HeartbeatIcon className="service-card__icon" />;
    case "care":
      return <CareIcon className="service-card__icon" />;
  }
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
        rootMargin: "-28% 0px -50% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div className="site-shell">
      <Header
        brandTitle={siteContent.brand.title}
        brandTagline={siteContent.brand.tagline}
        navigation={siteContent.navigation}
        activeSection={activeSection}
      />

      <main>
        <section className="hero section" id="inicio">
          <div className="container">
            <div className="hero__panel">
              <div className="hero__content">
                <p className="eyebrow">Atención domiciliaria y clínica</p>
                <h1>
                  {siteContent.hero.heading}
                  <span>{siteContent.hero.headingAccent}</span>
                </h1>
                <p className="hero__description">{siteContent.hero.description}</p>

                <div className="hero__actions">
                  <a className="primary-button" href="#contacto">
                    <MailIcon className="primary-button__icon" />
                    {siteContent.hero.ctaLabel}
                  </a>

                  <div className="hero__contact-links">
                    <a
                      className="contact-link"
                      href={siteContent.contact.email.href}
                    >
                      <MailIcon className="contact-link__icon" />
                      <span>{siteContent.contact.email.value}</span>
                    </a>

                    <a
                      className="contact-link contact-link--whatsapp"
                      href={siteContent.contact.whatsapp.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <WhatsAppIcon className="contact-link__icon" />
                      <span>{siteContent.contact.whatsapp.value}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="reference-photo reference-photo--hero"
                style={{ backgroundImage: `url(${referenceImage})` }}
                aria-label="Retrato profesional de enfermería"
                role="img"
              />
            </div>
          </div>
        </section>

        <section className="section" id="sobre-mi">
          <div className="container about-grid">
            <div
              className="reference-photo reference-photo--about"
              style={{ backgroundImage: `url(${referenceImage})` }}
              aria-label="Profesional de enfermería revisando una carpeta clínica"
              role="img"
            />

            <div className="about-copy">
              <SectionTitle
                icon={<UserIcon className="section-title__svg" />}
                title={siteContent.about.title}
              />

              {siteContent.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="feature-grid">
                {siteContent.about.values.map((value) => (
                  <article className="feature-card" key={value.title}>
                    {valueIcon(value.icon)}
                    <div>
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="servicios">
          <div className="container">
            <div className="services-panel">
              <SectionTitle
                icon={<BriefcaseIcon className="section-title__svg" />}
                title={siteContent.services.title}
              />

              <div className="services-grid">
                {siteContent.services.items.map((service) => (
                  <article className="service-card" key={service.title}>
                    <div className="service-card__badge">
                      {serviceIcon(service.icon)}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experiencia">
          <div className="container experience-grid">
            <div className="experience-copy">
              <SectionTitle
                icon={<BriefcaseIcon className="section-title__svg" />}
                title={siteContent.experience.title}
              />

              <div className="timeline">
                {siteContent.experience.items.map((item) => (
                  <article className="timeline__item" key={item.company}>
                    <div className="timeline__marker" />
                    <div className="timeline__content">
                      <h3>{item.company}</h3>
                      <p className="timeline__role">{item.role}</p>
                      <p className="timeline__years">{item.years}</p>
                    </div>
                    <p className="timeline__description">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="experience-art" aria-hidden="true">
              <HeartIcon className="experience-art__icon experience-art__icon--heart" />
              <StethoscopeIcon className="experience-art__icon experience-art__icon--stethoscope" />
            </div>
          </div>
        </section>

        <section className="section" id="contacto">
          <div className="container contact-panel">
            <div className="contact-copy">
              <SectionTitle
                icon={<MailIcon className="section-title__svg" />}
                title={siteContent.contact.title}
              />
              <p className="contact-copy__intro">{siteContent.contact.intro}</p>

              <div className="contact-methods">
                <a className="contact-method" href={siteContent.contact.email.href}>
                  <MailIcon className="contact-method__icon" />
                  <div>
                    <span>{siteContent.contact.email.label}</span>
                    <strong>{siteContent.contact.email.value}</strong>
                  </div>
                </a>

                <a
                  className="contact-method contact-method--whatsapp"
                  href={siteContent.contact.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="contact-method__icon" />
                  <div>
                    <span>{siteContent.contact.whatsapp.label}</span>
                    <strong>{siteContent.contact.whatsapp.value}</strong>
                    <small>{siteContent.contact.whatsapp.helper}</small>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="reference-photo reference-photo--contact"
              style={{ backgroundImage: `url(${referenceImage})` }}
              aria-label="Profesional de enfermería formando un corazón con las manos"
              role="img"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
