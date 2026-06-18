import type { AuthSlice } from "../../auth/types/auth.type";
import type { SavedShow } from "../../show/types/show.types";
import type { WatchlistSlice } from "../types/watchlist.types";

// Referencia única para evitar rerenders de Zustand
const EMPTY_LIST: SavedShow[] = []

/**
 * Con esta función obtengo los items del usuario logueado
 * sin necesidad de tener que estar enviándole su ID desde
 * los componentes
 * 
 * @param {AuthSlice & WatchlistSlice} state : Store de la app
 * @returns {SavedShow[]} : Lista de shows guardados del usuario actual 
 */
export const selectUserItems = (state: AuthSlice & WatchlistSlice) =>
  state.user ? (state.items[state.user.id] ?? EMPTY_LIST) : EMPTY_LIST
