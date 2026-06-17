import { mazeApi } from "../../../settings/api.config";
import { toCastMember } from "../mappers/cast.mapper";
import { toSeason } from "../mappers/season.mapper";
import { toSearchShow, toShow } from "../mappers/show.mapper";
import type { CastMemberDTO } from "../types/cast.types";
import type { SeasonDTO } from "../types/season.types";
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
    const { data } = await mazeApi.get<ShowDTO>(`/shows/${id}`)
    return toShow(data)
  },

  async getShowSeasons(id) {
    const { data } = await mazeApi.get<SeasonDTO[]>(`/shows/${id}/seasons`)
    return data.map(toSeason)
  },

  async getShowCasting(id) {
    const { data } = await mazeApi.get<CastMemberDTO[]>(`/shows/${id}/cast`)
    return data.map(toCastMember)
  },
}