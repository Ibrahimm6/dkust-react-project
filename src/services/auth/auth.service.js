import environment from "../../environment";
import { POST } from "../http.service";
import { getCookie, setCookie, removeCookie } from "../../helpers/cookies";
import { setLocalStorage, removeLocalStorage } from "../../helpers/local-storage";

export const registerUser = async (payload) => {
  return await POST(environment.register, payload);
};

export const verifyEmailCode = async (payload) => {
  return await POST(environment.verifyEmail, payload);
};

export const resendVerificationCode = async (payload) => {
  return await POST(environment.resendVerification, payload);
};

export const loginUser = async (payload) => {
  const response = await POST(environment.login, payload);
  if ((response.status === 200 || response.status === 201) && response.data) {
    const accessToken = response.data.accessToken || response.data.token;
    const refreshToken = response.data.refreshToken;
    const user = response.data.user || { email: payload.email };

    if (accessToken) setCookie(environment.TOKEN_KEY, accessToken);
    if (refreshToken) setCookie(environment.REFRESH_TOKEN_KEY, refreshToken);
    setLocalStorage(environment.USER_KEY, user);
  }
  return response;
};

export const refreshAuthToken = async () => {
  const refreshToken = getCookie(environment.REFRESH_TOKEN_KEY);
  if (!refreshToken) return null;

  const response = await POST(environment.refresh, { refreshToken });
  if ((response.status === 200 || response.status === 201) && response.data) {
    const newAccessToken = response.data.accessToken || response.data.token;
    const newRefreshToken = response.data.refreshToken;

    if (newAccessToken) setCookie(environment.TOKEN_KEY, newAccessToken);
    if (newRefreshToken) setCookie(environment.REFRESH_TOKEN_KEY, newRefreshToken);
    return newAccessToken;
  }
  return null;
};

export const clearAuthSession = () => {
  removeCookie(environment.TOKEN_KEY);
  removeCookie(environment.REFRESH_TOKEN_KEY);
  removeLocalStorage(environment.USER_KEY);
};

export const logoutUser = async () => {
  const refreshToken = getCookie(environment.REFRESH_TOKEN_KEY) || "";
  const response = await POST(environment.logout, { refreshToken });
  clearAuthSession();
  return response;
};