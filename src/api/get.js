import { request } from "../utils/request.js";

export const get = async (baseURL, endpoint, options = {}) => {
  return request(baseURL, endpoint, { ...options, method: "GET" });
};
