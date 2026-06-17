import axios from "axios";
import type { ShowDTO } from "../features/show/types/show.types";
import { toShow } from "../features/show/mappers/show.mapper";

export const mazeApi = axios.create({
  baseURL: 'https://api.tvmaze.com',
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
})

// Función para pruebas
export async function getShows() {
  const { data } = await mazeApi.get<ShowDTO[]>("/shows?page=0")
  return data.map(toShow);
}