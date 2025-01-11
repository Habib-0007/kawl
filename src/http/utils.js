function buildURL(url, params) {
  if (!params) return url;

  const queryString = Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  return `${url}?${queryString}`;
}

module.exports = { buildURL };