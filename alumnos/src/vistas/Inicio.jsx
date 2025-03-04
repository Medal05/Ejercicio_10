import { useState } from "react";
import { signIn } from "../services/api";

function Inicio() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [token, setToken] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await signIn(user);
      setToken(response.data.token);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      console.error("Error al iniciar sesión:", error.response?.data);
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <input
        type="email"
        placeholder="Correo"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={handleSignIn}>Iniciar Sesión</button>
    </div>
  );
}

export default Inicio;
