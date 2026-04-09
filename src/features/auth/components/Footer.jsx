import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#f8f9fa",
        borderTop: "1px solid #eee",
        marginTop: "60px",
      }}
    >
      <div className="container py-5">
        <div className="row">
          {/* Logo / Descripción */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold">MoneyApp</h5>
            <p className="text-muted">
              Gestiona tus finanzas de forma simple, rápida y segura.
            </p>
          </div>

          {/* Redes sociales */}
          {/* Redes sociales */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold">Contacto</h6>

            <div className="d-flex flex-column gap-3 mt-3">
              {/* WhatsApp */}
              <a
                style={{ transition: "0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.6")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noreferrer"
                className="text-dark text-decoration-none d-flex align-items-center"
              >
                <i
                  className="bi bi-whatsapp me-2"
                  style={{ fontSize: "1.4rem" }}
                ></i>
                <span>WhatsApp</span>
              </a>

              {/* Instagram */}
              <a
                style={{ transition: "0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.6")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                href="https://instagram.com/tuusuario"
                target="_blank"
                rel="noreferrer"
                className="text-dark text-decoration-none d-flex align-items-center"
              >
                <i
                  className="bi bi-instagram me-2"
                  style={{ fontSize: "1.4rem" }}
                ></i>
                <span>Instagram</span>
              </a>

              {/* Email */}
              <a
                style={{ transition: "0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.6")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                href="mailto:correo@tudominio.com"
                className="text-dark text-decoration-none d-flex align-items-center"
              >
                <i
                  className="bi bi-envelope me-2"
                  style={{ fontSize: "1.4rem" }}
                ></i>
                <span>Correo electrónico</span>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold">Legal</h6>
            <ul className="list-unstyled text-muted">
              <li>Términos y condiciones</li>
              <li>Política de privacidad</li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="text-center pt-3 border-top mt-4 text-muted">
          © {new Date().getFullYear()} MoneyApp. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
