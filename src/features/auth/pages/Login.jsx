import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  // Validaciones
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6;

  // 🔥 LOGIN SIMPLIFICADO (FUNCIONA SEGURO)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailValid || !isPasswordValid) return;

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      // 🔥 IMPORTANTE: validar respuesta
      if (!res.ok) {
        throw new Error("Error en el servidor");
      }

      const data = await res.json();

      if (data.success) {
        alert("Login exitoso 🔥");

        // 🔥 SOLO guarda si existe
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/dashboard");
      } else {
        alert(data.message || "Credenciales incorrectas");
      }
    } catch (error) {
      console.error("ERROR LOGIN:", error);

      // 🔥 MENSAJE MÁS CLARO
      alert(
        "No se pudo conectar al backend. Verifica que el servidor esté corriendo.",
      );
    }
  };

  return (
    <>
      <Header />

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f7",
          marginTop: "80px",
        }}
      >
        <div
          className="card shadow-sm"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "20px",
            padding: "30px",
            border: "none",
          }}
        >
          <div className="text-center mb-4">
            <h3 className="fw-semibold">Iniciar sesión</h3>
            <p className="text-muted">Ingresa a tu cuenta para continuar</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* EMAIL */}
            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>

              <input
                type="email"
                className={`form-control ${
                  touched.email
                    ? isEmailValid
                      ? "is-valid"
                      : "is-invalid"
                    : ""
                }`}
                placeholder="ejemplo@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched({ ...touched, email: true })}
              />

              {touched.email && !isEmailValid && (
                <div className="invalid-feedback d-block">
                  Ingresa un correo válido
                </div>
              )}
            </div>

            {/* PASSWORD */}
            <div className="mb-3">
              <label className="form-label">Contraseña</label>

              <input
                type={showPassword ? "text" : "password"}
                className={`form-control ${
                  touched.password
                    ? isPasswordValid
                      ? "is-valid"
                      : "is-invalid"
                    : ""
                }`}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setTouched({ ...touched, password: true })}
              />

              {touched.password && !isPasswordValid && (
                <div className="invalid-feedback d-block">
                  Mínimo 6 caracteres
                </div>
              )}
            </div>

            <div className="text-end mb-3">
              <Link to="/recuperar">¿Olvidaste tu contraseña?</Link>
            </div>

            <button type="submit" className="btn w-100 btn-dark">
              Iniciar sesión
            </button>
          </form>

          <div className="text-center mt-4">
            <span className="text-muted">¿No tienes cuenta? </span>
            <Link to="/register">Crear cuenta</Link>
          </div>
        </div>
      </div>
    </>
  );
}
