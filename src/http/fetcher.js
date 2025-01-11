const { makeRequest } = require('./request');

function createFetcher(baseURL) {
  return {
    get: (url, options) => makeRequest('GET', `${baseURL}${url}`, options),
    post: (url, body, options) => makeRequest('POST', `${baseURL}${url}`, { ...options, body }),
    put: (url, body, options) => makeRequest('PUT', `${baseURL}${url}`, { ...options, body }),
    delete: (url, options) => makeRequest('DELETE', `${baseURL}${url}`, options),
  };
}

module.exports = { createFetcher };