import { request } from "../utils/request.js";

export const post = async (baseURL, endpoint, body, options = {}) => {
  return request(baseURL, endpoint, { ...options, method: "POST", body });
};
