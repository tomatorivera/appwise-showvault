import { mazeApi } from "../../../settings/api.config";
import { toSearchShow, toShow } from "../mappers/show.mapper";
import { type ShowDTO, type IShowService, type SearchShowDTO } from "../types/show.types";

export const showService: IShowService = {
  async getShows(search = "", page = 0) {
    if (search.trim())
    {
      const { data } = await mazeApi.get<SearchShowDTO[]>(
        "/search/shows", {
          params: { q: search }
        }
      )

      return data.map(toSearchShow)
    }

    const { data } = await mazeApi.get<ShowDTO[]>(
      "/shows", {
        params: { page: page }
      }
    )

    return data.map(toShow)
  },

  async getShow(id) {
    if (!id)
      throw new Error("Debe ingresar un ID para buscar")

    const { data } = await mazeApi.get<ShowDTO>(`/shows/${id}`)
    return toShow(data)
  },
}