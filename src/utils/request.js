import XMLHttpRequest from "xhr2";

let XHR;

if (typeof window !== "undefined") {
  XHR = window.XMLHttpRequest;
} else {
  XHR = XMLHttpRequest;
}

export const request = (baseURL, endpoint, options = {}) => {
  const url = `${baseURL}${endpoint}`;
  const { method = "GET", headers = {}, body } = options;

  return new Promise((resolve, reject) => {
    const xhr = new XHR();
    xhr.open(method, url);

    // Set headers
    setHeaders(xhr, headers);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(parseResponse(xhr));
      } else {
        reject(new Error(`Request failed with status ${xhr.status}`));
      }
    };

    xhr.onerror = () => reject(new Error("Network error"));
    xhr.send(body ? JSON.stringify(body) : null);
  });
};

const setHeaders = (xhr, headers) => {
  for (const key in headers) {
    xhr.setRequestHeader(key, headers[key]);
  }
};

const parseResponse = (xhr) => {
  try {
    return JSON.parse(xhr.responseText);
  } catch (error) {
    throw new Error("Failed to parse response");
  }
};
