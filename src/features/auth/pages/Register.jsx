import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import api from "../../../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [errors, setErrors] = useState({});

  // Validaciones
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isPasswordValid = form.password.length >= 6;
  const isConfirmPasswordValid =
    form.password === form.confirmPassword && form.confirmPassword.length > 0;

  const validate = () => {
    let newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email es obligatorio";
    } else if (!isEmailValid) {
      newErrors.email = "Email inválido";
    }

    if (!form.password) {
      newErrors.password = "Contraseña es obligatoria";
    } else if (!isPasswordValid) {
      newErrors.password = "Mínimo 6 caracteres";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirmar contraseña es obligatorio";
    } else if (!isConfirmPasswordValid) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const { data } = await api.post("/auth/register", {
        email: form.email.trim(),
        password: form.password,
      });

      if (data.success) {
        alert("Usuario registrado exitosamente. Ahora puedes iniciar sesión.");
        navigate("/login");
      } else {
        alert(data.message || "Error al registrar usuario");
      }
    } catch (error) {
      console.error("ERROR REGISTER:", error);
      const message =
        error.response?.data?.message ||
        error.message ||
        "Error al conectar con el servidor";
      alert(message);
    }
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleBlur = (field) => () => {
    setTouched({ ...touched, [field]: true });
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
            <h3 className="fw-semibold">Crear cuenta</h3>
            <p className="text-muted">Regístrate para comenzar</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* EMAIL */}
            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                className={`form-control ${
                  touched.email
                    ? form.email && isEmailValid
                      ? "is-valid"
                      : form.email && !isEmailValid
                        ? "is-invalid"
                        : ""
                    : ""
                }`}
                placeholder="ejemplo@email.com"
                value={form.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
              />
              {touched.email && errors.email && (
                <div className="invalid-feedback d-block">{errors.email}</div>
              )}
            </div>

            {/* PASSWORD */}
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className={`form-control ${
                  touched.password
                    ? form.password && isPasswordValid
                      ? "is-valid"
                      : form.password && !isPasswordValid
                        ? "is-invalid"
                        : ""
                    : ""
                }`}
                placeholder="********"
                value={form.password}
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              {touched.password && errors.password && (
                <div className="invalid-feedback d-block">
                  {errors.password}
                </div>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="mb-3">
              <label className="form-label">Confirmar contraseña</label>
              <input
                type="password"
                className={`form-control ${
                  touched.confirmPassword
                    ? form.confirmPassword && isConfirmPasswordValid
                      ? "is-valid"
                      : form.confirmPassword && !isConfirmPasswordValid
                        ? "is-invalid"
                        : ""
                    : ""
                }`}
                placeholder="********"
                value={form.confirmPassword}
                onChange={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <div className="invalid-feedback d-block">
                  {errors.confirmPassword}
                </div>
              )}
            </div>

            <button type="submit" className="btn w-100 btn-dark mb-3">
              Crear cuenta
            </button>
          </form>

          <div className="text-center">
            <span className="text-muted">¿Ya tienes cuenta? </span>
            <Link to="/login">Iniciar sesión</Link>
          </div>
        </div>
      </div>
    </>
  );
}
