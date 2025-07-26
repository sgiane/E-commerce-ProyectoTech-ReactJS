import React, { createContext, useState, useContext } from 'react';
// Crear el contexto de autenticación
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);

  const login = (username) => {
    const token = `fake-token-${username}`;
   
    localStorage.setItem('authToken', token);
    setUser(username);
    setAdmin(username === "admin@gmail.com")
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    setAdmin(false);
  };


  const verificacionLog = () => {
  const userToken = localStorage.getItem("authToken");

  // Token inexistente o mal formado
  if (!userToken || !userToken.startsWith("fake-token-")) {
    localStorage.removeItem("authToken");
    setUser(null);
    setAdmin(false);
    return;
  }

  // Extraer el usuario desde el token
  const username = userToken.replace("fake-token-", "");

  // Setear user y admin si corresponde
  setUser(username);
  setAdmin(username === "admin@gmail.com");
};

  return (
    <AuthContext.Provider value={{ user, login, logout, admin, verificacionLog}}>
      {children}
    </AuthContext.Provider> );
}
export const useAuthContext = () => useContext(AuthContext);
