# Kawl - API Fetcher

## Description

Kawl is a lightweight alternative to axios designed for seamless API fetching. It simplifies the process of making API calls, providing a user-friendly interface that enhance developer productivity. If you're building a small project, Kawl aims to streamline your API interactions.

## Motivation

The motivation behind developing Kawl stems from the need for a more intuitive and efficient way to handle API requests. While axios offers great functionality, Kawl focuses on reducing complexity and improving usability for developers of all skill levels.

## Problem Solved

Kawl addresses common pain points associated with API fetching, including:

- **Complexity**: Simplifies the syntax for making API calls.
- **Error Handling**: Provides built-in mechanisms for managing errors effectively.
- **Performance**: Optimizes API requests for faster response times.

## Features

- **Simple API Calls**: Easily make GET, POST, PUT, and DELETE requests with minimal configuration.
- **Error Management**: Automatic error catching and handling to streamline debugging.
- **Lightweight**: Minimal footprint, ensuring quick load times and efficient performance.
- **Customizable**: Supports customization for headers, parameters, and response handling.

## Tech Stack

Kawl is built using modern web technologies, including:

- **JavaScript**: Core language for functionality.
- **Node.js**: Server-side runtime for handling requests.

## How to Use Kawl

Kawl provides a straightforward API for making requests. Here’s a quick example

##### Example: GET Request
```
const { createFetcher } = require('kawl');
const api = createFetcher('https://jsonplaceholder.typicode.com');
async function getPost() {
  try {
    const data = await api.get('/posts/1');
    console.log('GET Response:', data);
  } catch (error) {
    console.error('GET Error:', error.message);
  }
}
```
##### Example: POST Request
```
const { createFetcher } = require('kawl');
const api = createFetcher('https://jsonplaceholder.typicode.com');
async function createPost() {
  try {
    const data = await api.post('/posts', { title: 'foo', body: 'bar', userId: 1 });
    console.log('POST Response:', data);
  } catch (error) {
    console.error('POST Error:', error.message);
  }
}
```
##### Example: PUT Request
```
const { createFetcher } = require('kawl');
const api = createFetcher('https://jsonplaceholder.typicode.com');
async function updatePost() {
  try {
    const data = await api.put('/posts/1', { id: 1, title: 'Updated Title', body: 'Updated Content', userId: 1 });
    console.log('PUT Response:', data);
  } catch (error) {
    console.error('PUT Error:', error.message);
  }
}
```
##### Example: DELETE Request
```
const { createFetcher } = require('kawl');
const api = createFetcher('https://jsonplaceholder.typicode.com');
async function deletePost() {
  try {
    const data = await api.delete('/posts/1');
    console.log('DELETE Response:', data);
  } catch (error) {
    console.error('DELETE Error:', error.message);
  }
}

```
## Conclusion
Kawl is designed to make API fetching simpler and more efficient. With its user-friendly approach and robust features, it stands out as a valuable tool for developers looking to streamline their API interactions. Feel free to contribute to the project or reach out for support!


