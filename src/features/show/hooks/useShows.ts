import { useQuery } from "@tanstack/react-query";
import { showService } from "../services/show.service";
import type { GetShowsParams } from "../types/show.types";

export function useShows(params: GetShowsParams = {}) {
  return useQuery({
    queryKey: ["shows", params],
    queryFn: () => showService.getShows(params.search, params.page),
  })
}