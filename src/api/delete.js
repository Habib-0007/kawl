import { request } from "../utils/request.js";

export const del = async (baseURL, endpoint, options = {}) => {
  return request(baseURL, endpoint, { ...options, method: "DELETE" });
};
