const enlaceWhatsApp = "https://wa.me/51961265623";
const enlaceGitHub = "https://github.com/AdrianQuispe16";
const enlaceLinkedIn =
  "https://www.linkedin.com/in/adrian-alfonso-quispe-antayhua-programador/";

export default function Contacto() {
  return (
    <section className="contact-section" id="contacto">
      <div className="contenedor">
        <div className="contact-grid">
          <div>
            <div className="section-eyebrow">Contacto</div>
            <h2>¿Trabajamos juntos?</h2>
            <p>
              Estoy abierto a oportunidades como Data Analyst, Full Stack
              Developer o roles híbridos. Escríbeme y conversemos sobre cómo
              puedo aportar a tu equipo.
            </p>
            <div className="contact-actions">
              <a
                href={enlaceGitHub}
                className="btn btn-ghost btn-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
                </svg>{" "}
                Git
              </a>
              <a
                href={enlaceLinkedIn}
                className="btn btn-ghost btn-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M8 10.5V16M8 7.6v.1M12 16v-3.2a2.2 2.2 0 014.4 0V16M12 10.5V16" />
                </svg>{" "}
                LinkedIn
              </a>
              <a
                href={enlaceWhatsApp}
                className="btn btn-ghost btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20.3 11.5a8.7 8.7 0 0 1-12.9 7.4L3 20l1.2-4.4a8.7 8.7 0 1 1 16.1-4.1Z" />
                  <path d="M8.5 8.6c.2-.4.6-.6 1-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.6 1 1.4 1.7 2.4 2.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.3.3.5 0 .5-.2 1-.6 1.3-.5.4-1.1.6-1.8.4-1.6-.4-3.1-1.4-4.3-2.6-1-1-1.8-2.3-2-3.4-.1-.6.1-1.1.5-1.5Z" />
                </svg>{" "}
                WhatsApp
              </a>
            </div>
          </div>
          <div className="contact-info">
            <a
              className="contact-info-row"
              href="mailto:adrianquispe515@gmail.com"
            >
              <span className="ci-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="M3.5 7.5l8.5 6 8.5-6" />
                </svg>
              </span>
              <span className="ci-text">
                <span className="lbl">Email</span>
                <span className="val">adrianquispe515@gmail.com</span>
              </span>
            </a>
            <a
              className="contact-info-row whatsapp-contact"
              href={enlaceWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ci-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20.3 11.5a8.7 8.7 0 0 1-12.9 7.4L3 20l1.2-4.4a8.7 8.7 0 1 1 16.1-4.1Z" />
                  <path d="M8.5 8.6c.2-.4.6-.6 1-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.6 1 1.4 1.7 2.4 2.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.3.3.5 0 .5-.2 1-.6 1.3-.5.4-1.1.6-1.8.4-1.6-.4-3.1-1.4-4.3-2.6-1-1-1.8-2.3-2-3.4-.1-.6.1-1.1.5-1.5Z" />
                </svg>
              </span>
              <span className="ci-text">
                <span className="lbl">WhatsApp</span>
                <span className="val">+51 961 265 623</span>
              </span>
            </a>
            <a
              className="contact-info-row"
              href={enlaceLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ci-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M8 10.5V16M8 7.6v.1M12 16v-3.2a2.2 2.2 0 014.4 0V16M12 10.5V16" />
                </svg>
              </span>
              <span className="ci-text">
                <span className="lbl">LinkedIn</span>
                <span className="val">Adrian Quispe</span>
              </span>
            </a>
            <a
              className="contact-info-row"
              href={enlaceGitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ci-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
                </svg>
              </span>
              <span className="ci-text">
                <span className="lbl">Git</span>
                <span className="val">AdrianQuispe16</span>
              </span>
            </a>
            <div className="contact-info-row">
              <span className="ci-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span className="ci-text">
                <span className="lbl">Ubicación</span>
                <span className="val">Lima, Perú</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
