import Header from "../../auth/components/Header";
import Footer from "../../auth/components/Footer";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <Header />

      <div style={{ marginTop: "80px" }}>
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

            <a
              href="https://github.com/Emmanueldor8/frontend-carlos"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 28px",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                fontWeight: "500",
                textDecoration: "none",
                boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0,0,0,0.3)";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 
                0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 
                2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
                0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 
                0 0 .67-.21 2.2.82a7.65 7.65 0 012-.27c.68 0 1.36.09 2 .27 
                1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 
                1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
                1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 
                8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>

              Ver código en GitHub
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}