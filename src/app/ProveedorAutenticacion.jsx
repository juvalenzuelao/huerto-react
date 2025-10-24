import { createContext, useContext, useEffect, useState } from 'react';

const Ctx = createContext();
export const useAuth = () => useContext(Ctx);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const t = localStorage.getItem('hh_token');
    if (t) setToken(t);
  }, []);

  const login = async ({ email, password }) => {
    if (String(password).length >= 3) {
      const fake = `token_${Date.now()}`;
      localStorage.setItem('hh_token', fake);
      setToken(fake);
      return { ok: true };
    }
    return { ok: false, error: 'Credenciales inválidas' };
  };

  const logout = () => {
    localStorage.removeItem('hh_token');
    setToken(null);
  };

  return (
    <Ctx.Provider value={{ isAuth: !!token, token, login, logout }}>
      {children}
    </Ctx.Provider>
  );
}
