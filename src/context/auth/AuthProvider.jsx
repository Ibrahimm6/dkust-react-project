import React, { useState, useMemo, useCallback } from "react";
import { AuthContext } from "./AuthContext";
import { loginUser, logoutUser } from "../../services/auth/auth.service";
import { getCookie } from "../../helpers/cookies";
import { getLocalStorage } from "../../helpers/local-storage";
import environment from "../../environment";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => getCookie(environment.TOKEN_KEY) || null);
  const [user, setUser] = useState(() => getLocalStorage(environment.USER_KEY) || null);

  const login = useCallback(async (credentials) => {
    const response = await loginUser(credentials);
    if (response.status === 200 || response.status === 201) {
      setToken(getCookie(environment.TOKEN_KEY) || null);
      setUser(getLocalStorage(environment.USER_KEY) || { email: credentials.email });
    }
    return response;
  }, []);

  const logout = useCallback(async () => {
    const response = await logoutUser();
    setToken(null);
    setUser(null);
    return response;
  }, []);

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [user, token, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};