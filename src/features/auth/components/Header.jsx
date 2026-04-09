import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #eee",
      }}
    >
      <div className="container-fluid px-5">
        {/* Logo */}
        <Link
          className="navbar-brand fw-semibold"
          to="/"
          style={{ letterSpacing: "1px", fontSize: "1.2rem" }}
        >
          Crud Detalle_Pedido
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            {/* 👇 AQUÍ EL CAMBIO */}
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/characters">
                Appi
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/login">
                Login
              </Link>
            </li>

            {/* Botón estilo Apple */}
            <li className="nav-item">
              <Link
                to="/login"
                className="btn"
                style={{
                  background: "#000",
                  color: "#fff",
                  borderRadius: "20px",
                  padding: "8px 18px",
                  fontSize: "0.9rem",
                }}
              >
                Empezar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
