import Header from "../../auth/components/Header";
import Footer from "../../auth/components/Footer";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <Header />

      {/* CONTENIDO */}
      <div style={{ marginTop: "80px" }}>
        {/* HERO */}
        <section
          style={{
            padding: "100px 0",
            background: "linear-gradient(to right, #031926, #468189)",
            color: "#fff",
          }}
        >
          <div className="container text-center">
            <h1
              className="fw-semibold"
              style={{ fontSize: "3rem", letterSpacing: "-1px" }}
            >
              Controla tus gastos diarios de forma simple
            </h1>

            <img
              src="/img/pedidos.png"
              alt="Gastos"
              width={800}
              height={400}
              style={{ borderRadius: "10px", opacity: "0.9" }}
            />

            <p
              className="mt-3"
              style={{
                fontSize: "1.2rem",
                maxWidth: "600px",
                margin: "0 auto",
                color: "#d9e6e8",
              }}
            >
              Registra, organiza y analiza tus gastos diarios con una interfaz
              clara, rápida y moderna.
            </p>

            <div className="mt-4">
              <Link
                to="/login"
                className="btn me-3"
                style={{
                  background: "#77ACA2",
                  color: "#031926",
                  borderRadius: "25px",
                  padding: "10px 25px",
                  border: "none",
                }}
              >
                Empezar ahora
              </Link>

              <Link
                to="/login"
                className="btn"
                style={{
                  borderRadius: "25px",
                  padding: "10px 25px",
                  border: "1px solid #9DBEBB",
                  color: "#fff",
                }}
              >
                Ver gastos
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section style={{ padding: "80px 0", background: "#f4f7f7" }}>
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4 mb-4">
                <div
                  style={{
                    padding: "25px",
                    borderRadius: "15px",
                    background: "#ffffff",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  }}
                >
                  <h5 className="fw-semibold" style={{ color: "#031926" }}>
                    Registro rápido
                  </h5>
                  <p className="text-muted">
                    Añade gastos fácilmente con monto, categoría y descripción.
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div
                  style={{
                    padding: "25px",
                    borderRadius: "15px",
                    background: "#ffffff",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  }}
                >
                  <h5 className="fw-semibold" style={{ color: "#468189" }}>
                    Control total
                  </h5>
                  <p className="text-muted">
                    Consulta, edita y elimina tus gastos en cualquier momento.
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div
                  style={{
                    padding: "25px",
                    borderRadius: "15px",
                    background: "#ffffff",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  }}
                >
                  <h5 className="fw-semibold" style={{ color: "#77ACA2" }}>
                    Organización clara
                  </h5>
                  <p className="text-muted">
                    Visualiza tus gastos por categorías y mejora tu control
                    financiero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section
          style={{
            background: "#031926",
            color: "#fff",
            padding: "80px 0",
          }}
        >
          <div className="container text-center">
            <h2 className="fw-semibold">
              Empieza a controlar tus finanzas hoy
            </h2>

            <p className="mt-3" style={{ color: "#9DBEBB" }}>
              Lleva un seguimiento inteligente de tus gastos diarios.
            </p>

            <Link
              to="/login"
              className="btn mt-3"
              style={{
                background: "#77ACA2",
                color: "#031926",
                borderRadius: "25px",
                padding: "10px 25px",
              }}
            >
              Ir al sistema
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
