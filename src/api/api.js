/* eslint-disable consistent-return */
import axios from "axios";
import getToken from "../utils/getToken";

function formatErrorResponse(error) {
  const customError = error;
  customError.status = error.response ? error.response.status : null;

  return customError;
}

const defaultHeaders = {
  "Content-Type": "application/json",
  // eslint-disable-next-line quote-props
  Accept: "application/json",
};

export default async function api(options) {
  const { headers = defaultHeaders, endpoint, id, ...otherOptions } = options;
  const token = getToken();
  // const authHeaders = { ...headers, token };

  const url = process.env.REACT_APP_API_URL + endpoint;

  try {
    const result = await axios({
      headers: {
        token,
        "Content-Type": "application/json",
        // eslint-disable-next-line quote-props
        Accept: "application/json",
      },
      url,
      ...otherOptions,
    });
    return result;
  } catch (error) {}
}

api.get = (options) => api({ ...options, method: "GET" });

api.post = (options) => api({ ...options, method: "POST" });

api.put = (options) => api({ ...options, method: "PUT" });

api.patch = (options) => api({ ...options, method: "PATCH" });

api.delete = (options) => api({ ...options, method: "DELETE" });
