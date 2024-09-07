import { get } from "../src/index.js";

const api = "https://jsonplaceholder.typicode.com";

// Example GET request
get(api, "/posts/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
