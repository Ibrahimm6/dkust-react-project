import axios from "axios";
import environment from "../environment";
import { handleError } from "./error.service";
import { getCookie } from "../helpers/cookies";
import { getLocalStorage } from "../helpers/local-storage";

export const getLang = () => getLocalStorage(environment.lang) || "en";

const getConfig = () => {
  const token = getCookie(environment.TOKEN_KEY);
  const headers = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return { headers };
};

export const GET = async (apiPath) => {
  let res = {};
  await axios
    .get(`${environment.API_URL}/${apiPath}`, getConfig())
    .then((response) => {
      res.status = response.status;
      res.data = response.data;
    })
    .catch((error) => {
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
      handleError(error?.response);
    });
  return res;
};