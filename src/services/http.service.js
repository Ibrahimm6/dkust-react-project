import axios from "axios";
import environment from "../environment";
import { handleError } from "./error.service";
import { getCookie, setCookie, removeCookie } from "../helpers/cookies";
import { getLocalStorage, removeLocalStorage } from "../helpers/local-storage";

export const getLang = () => getLocalStorage(environment.lang) || "en";

const getConfig = () => {
  const token = getCookie(environment.TOKEN_KEY);
  const headers = {
    "Content-Type": "application/json",
    "Accept": "*/*",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return { headers };
};

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const isAuthEndpoint =
      originalRequest?.url?.includes(environment.login) ||
      originalRequest?.url?.includes(environment.register) ||
      originalRequest?.url?.includes(environment.refresh);

    if (
      error.response?.status === 401 &&
      !originalRequest?._retry &&
      !isAuthEndpoint
    ) {
      originalRequest._retry = true;
      const refreshToken = getCookie(environment.REFRESH_TOKEN_KEY);

      if (refreshToken) {
        try {
          const refreshRes = await axios.post(
            `${environment.API_URL}/${environment.refresh}`,
            { refreshToken },
            { headers: { "Content-Type": "application/json", Accept: "*/*" } }
          );

          if (refreshRes.status === 200 || refreshRes.status === 201) {
            const newToken =
              refreshRes.data?.accessToken || refreshRes.data?.token;
            const newRefresh = refreshRes.data?.refreshToken;

            if (newToken) {
              setCookie(environment.TOKEN_KEY, newToken);
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
            }
            if (newRefresh) {
              setCookie(environment.REFRESH_TOKEN_KEY, newRefresh);
            }
            return axios(originalRequest);
          }
        } catch (refreshError) {
          removeCookie(environment.TOKEN_KEY);
          removeCookie(environment.REFRESH_TOKEN_KEY);
          removeLocalStorage(environment.USER_KEY);
        }
      }
    }
    return Promise.reject(error);
  }
);

export const GET = async (apiPath) => {
  let res = {};
  await axios
    .get(`${environment.API_URL}/${apiPath}`, getConfig())
    .then((response) => {
      res.status = response.status;
      res.data = response.data;
    })
    .catch((error) => {
      res.status = error?.response?.status;
      res.data = error?.response?.data;
      handleError(error?.response);
    });
  return res;
};

export const POST = async (apiPath, requestBody) => {
  let res = {};
  await axios
    .post(`${environment.API_URL}/${apiPath}`, requestBody, getConfig())
    .then((response) => {
      res.status = response.status;
      res.data = response.data;
    })
    .catch((error) => {
      res.status = error?.response?.status;
      res.data = error?.response?.data;
      handleError(error?.response);
    });
  return res;
};

export const PUT = async (apiPath, requestBody) => {
  let res = {};
  await axios
    .put(`${environment.API_URL}/${apiPath}`, requestBody, getConfig())
    .then((response) => {
      res.status = response.status;
      res.data = response.data;
    })
    .catch((error) => {
      res.status = error?.response?.status;
      res.data = error?.response?.data;
      handleError(error?.response);
    });
  return res;
};

export const PATCH = async (apiPath, requestBody) => {
  let res = {};
  await axios
    .patch(`${environment.API_URL}/${apiPath}`, requestBody, getConfig())
    .then((response) => {
      res.status = response.status;
      res.data = response.data;
    })
    .catch((error) => {
      res.status = error?.response?.status;
      res.data = error?.response?.data;
      handleError(error?.response);
    });
  return res;
};

export const DELETE = async (apiPath) => {
  let res = {};
  await axios
    .delete(`${environment.API_URL}/${apiPath}`, getConfig())
    .then((response) => {
      res.status = response.status;
      res.data = response.data;
    })
    .catch((error) => {
      res.status = error?.response?.status;
      res.data = error?.response?.data;
      handleError(error?.response);
    });
  return res;
};