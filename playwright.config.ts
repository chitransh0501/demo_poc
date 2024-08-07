import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
const ENV = process.env.ENV || 'dev';
console.log(ENV)
console.log(`.env.${ENV}`)

const baseURLs = {
  dev: 'https://api.escuelajs.co/',
  test: 'https://api.escuelajs.co/',
  prod: 'https://prod.example.com',
};



export default defineConfig({
  use: {
    // All requests we send go to this API endpoint.
    baseURL: baseURLs[ENV],
    //baseURL: 'https://api.escuelajs.co/',
    //baseURL: process.env.baseUrl,
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      //'Accept': 'application/json',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
     // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
    },
  }
});