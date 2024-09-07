import { request } from "../utils/request.js";

export const put = async (baseURL, endpoint, body, options = {}) => {
  return request(baseURL, endpoint, { ...options, method: "PUT", body });
};
