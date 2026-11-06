import PathConstants from "../routes/pathConstants";

const ERRORS_OBJECT = {
  400: "Bad request. Please check your input.",
  401: "You are not authorized. Please sign in.",
  403: "You do not have permission to view this page.",
  404: "The requested resource was not found.",
  500: "Something went wrong. Please try again.",
};

export const handleError = (error) => {
  const message =
    error?.data?.Message ||
    error?.data?.message ||
    ERRORS_OBJECT[error?.status] ||
    ERRORS_OBJECT[500];

  console.error("API Error:", message);

  if (error && error?.status === 401) {
    window.location.replace(PathConstants.LOGIN);
    return;
  }
  if (error && error?.status === 403) {
    window.location.replace(PathConstants.HOME);
  }
};