import React, { useState, useMemo, useCallback } from "react";
import { AuthContext } from "./AuthContext";
import { loginUser, logoutUser } from "../../services/auth/auth.service";
import { updateProfile } from "../../services/profile/profile.service";
import { getCookie } from "../../helpers/cookies";
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from "../../helpers/local-storage";
import environment from "../../environment";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    () => getCookie(environment.TOKEN_KEY) || null,
  );
  const [user, setUser] = useState(
    () => getLocalStorage(environment.USER_KEY) || null,
  );

  const login = useCallback(async (credentials) => {
    const response = await loginUser(credentials);
    if (response.status === 200 || response.status === 201) {
      let currentUser = getLocalStorage(environment.USER_KEY) || {
        email: credentials.email,
      };

      const pendingProfile = getLocalStorage(environment.PENDING_PROFILE_KEY);
      if (
        pendingProfile &&
        pendingProfile.email === credentials.email?.trim().toLowerCase()
      ) {
        const patchRes = await updateProfile({
          firstName: pendingProfile.firstName || currentUser.firstName || "",
          lastName: pendingProfile.lastName || currentUser.lastName || "",
          phone: pendingProfile.phone || "",
          location: pendingProfile.location || "",
          bio: pendingProfile.bio || "",
        });

        if (patchRes?.status === 200 || patchRes?.status === 204) {
          removeLocalStorage(environment.PENDING_PROFILE_KEY);
          currentUser = {
            ...currentUser,
            ...(patchRes.data || {}),
            phone: pendingProfile.phone || currentUser.phone || "",
            location: pendingProfile.location || currentUser.location || "",
            bio: pendingProfile.bio || currentUser.bio || "",
          };
          setLocalStorage(environment.USER_KEY, currentUser);
        }
      }

      setToken(getCookie(environment.TOKEN_KEY) || null);
      setUser(currentUser);
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
    [user, token, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};