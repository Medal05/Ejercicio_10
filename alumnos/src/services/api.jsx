import axios from "axios";

// Configurar la URL base del backend
const API_URL = "http://localhost:3000";

// Función para registrar un usuario
export const signUp = async (userData) => {
  return await axios.post(`${API_URL}/api/usuarios/signup`, userData);
};

// Función para iniciar sesión
export const signIn = async (userData) => {
  return await axios.post(`${API_URL}/api/usuarios/signin`, userData);
};

// Función para obtener las conversaciones del usuario (requiere autenticación)
export const getConversations = async (token) => {
  return await axios.get(`${API_URL}/api/usuarios/conversations`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

// Función para obtener mensajes de una conversación específica
export const getMessages = async (idConversacion, token) => {
  return await axios.get(`${API_URL}/api/usuarios/conversations/${idConversacion}/messages`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
