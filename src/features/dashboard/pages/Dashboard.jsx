import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

export default function Dashboard() {
  const [pedidos, setPedidos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    pedido_id: "",
    producto_id: "",
    cantidad: "",
    subtotal: "",
  });

  const [errors, setErrors] = useState({});

  // =========================
  // VALIDACIÓN
  // =========================
  const validate = () => {
    let newErrors = {};

    if (!form.pedido_id.trim()) {
      newErrors.pedido_id = "Pedido ID es obligatorio";
    }

    if (!form.producto_id.trim()) {
      newErrors.producto_id = "Producto ID es obligatorio";
    }

    if (!form.cantidad) {
      newErrors.cantidad = "Cantidad es obligatoria";
    } else if (isNaN(form.cantidad) || Number(form.cantidad) <= 0) {
      newErrors.cantidad = "Debe ser un número mayor a 0";
    }

    if (!form.subtotal) {
      newErrors.subtotal = "Subtotal es obligatorio";
    } else if (isNaN(form.subtotal) || Number(form.subtotal) < 0) {
      newErrors.subtotal = "Debe ser un número válido (0 o mayor)";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // =========================
  // OBTENER PEDIDOS
  // =========================
  const getPedidos = async () => {
    try {
      const { data } = await api.get("/pedidos");
      setPedidos(data);
    } catch (error) {
      console.error("Error al obtener pedidos:", error);
    }
  };

  useEffect(() => {
    getPedidos();
  }, []);

  // =========================
  // CREAR / ACTUALIZAR
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return; // 🔥 BLOQUEA SI HAY ERRORES

    try {
      const payload = {
        pedido_id: form.pedido_id.trim(),
        producto_id: form.producto_id.trim(),
        cantidad: Number(form.cantidad),
        subtotal: Number(form.subtotal),
      };

      if (editingId) {
        await api.put(`/pedidos/${editingId}`, payload);
      } else {
        await api.post("/pedidos", payload);
      }

      resetForm();
      getPedidos();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // =========================
  // ELIMINAR
  // =========================
  const handleDelete = async (id) => {
    try {
      await api.delete(`/pedidos/${id}`);
      getPedidos();
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  // =========================
  // EDITAR
  // =========================
  const handleEdit = (pedido) => {
    setForm({
      pedido_id: pedido.pedido_id || "",
      producto_id: pedido.producto_id || "",
      cantidad: pedido.cantidad || "",
      subtotal: pedido.subtotal || "",
    });

    setEditingId(pedido._id);
    setErrors({});
  };

  // =========================
  // RESET FORM
  // =========================
  const resetForm = () => {
    setForm({
      pedido_id: "",
      producto_id: "",
      cantidad: "",
      subtotal: "",
    });

    setEditingId(null);
    setErrors({});
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f7",
        paddingTop: "100px",
        paddingBottom: "40px",
      }}
    >
      <div className="container">
        {/* HEADER DASHBOARD */}
        <div
          className="d-flex justify-content-between align-items-center mb-4 p-3"
          style={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            className="fw-semibold m-0"
            style={{
              color: "black",
            }}
          >
            Dashboard
          </h2>

          <button
            onClick={handleLogout}
            className="btn"
            style={{
              background: "#ff3b30",
              color: "#fff",
              borderRadius: "20px",
              padding: "8px 18px",
              fontSize: "14px",
              border: "none",
            }}
          >
            Cerrar sesión
          </button>
        </div>

        <div className="row">
          {/* FORM */}
          <div className="col-md-4">
            <div
              className="card shadow-sm p-4"
              style={{ borderRadius: "20px" }}
            >
              <h5>{editingId ? "Actualizar Pedido" : "Nuevo Pedido"}</h5>

              <form onSubmit={handleSubmit}>
                <input
                  className="form-control mb-1"
                  placeholder="Pedido ID"
                  value={form.pedido_id}
                  onChange={(e) =>
                    setForm({ ...form, pedido_id: e.target.value })
                  }
                />
                <small className="text-danger">{errors.pedido_id}</small>

                <input
                  className="form-control mb-1"
                  placeholder="Producto ID"
                  value={form.producto_id}
                  onChange={(e) =>
                    setForm({ ...form, producto_id: e.target.value })
                  }
                />
                <small className="text-danger">{errors.producto_id}</small>

                <input
                  className="form-control mb-1"
                  placeholder="Cantidad"
                  value={form.cantidad}
                  onChange={(e) =>
                    setForm({ ...form, cantidad: e.target.value })
                  }
                />
                <small className="text-danger">{errors.cantidad}</small>

                <input
                  className="form-control mb-2"
                  placeholder="Subtotal"
                  value={form.subtotal}
                  onChange={(e) =>
                    setForm({ ...form, subtotal: e.target.value })
                  }
                />
                <small className="text-danger">{errors.subtotal}</small>

                <button className="btn btn-dark w-100 mt-2">
                  {editingId ? "Actualizar" : "Crear"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    className="btn btn-secondary w-100 mt-2"
                    onClick={resetForm}
                  >
                    Cancelar
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* TABLE */}
          <div className="col-md-8">
            <div className="card shadow-sm p-3">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Pedido</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {pedidos.map((p) => (
                    <tr key={p._id}>
                      <td>{p.pedido_id}</td>
                      <td>{p.producto_id}</td>
                      <td>{p.cantidad}</td>
                      <td>${p.subtotal}</td>
                      <td>
                        <button
                          className="btn btn-outline-dark btn-sm me-2"
                          onClick={() => handleEdit(p)}
                        >
                          Editar
                        </button>

                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => handleDelete(p._id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {pedidos.length === 0 && (
                <p className="text-center text-muted mt-3">
                  No hay pedidos aún
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
