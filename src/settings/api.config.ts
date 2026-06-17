import axios from "axios";

export const mazeApi = axios.create({
  baseURL: 'https://api.tvmaze.com',
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
})