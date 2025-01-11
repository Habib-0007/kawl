const { buildURL } = require('./utils');

async function makeRequest(method, url, options = {}) {
  const { headers, params, body } = options;

  const fullURL = buildURL(url, params);

  const response = await fetch(fullURL, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

module.exports = { makeRequest };