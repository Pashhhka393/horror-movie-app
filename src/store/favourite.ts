import { moviesDataType } from "@/features/movie-details/data/movies";
import { create } from "zustand";

interface FavouriteStore {
  favourites: moviesDataType[];
  addToFavourite: (movie: moviesDataType) => void;
}

export const useFavouriteStore = create<FavouriteStore>((set) => {
  return {
    favourites: [],
    addToFavourite: (movie) => {
      set((state) => {
        if (state.favourites.includes(movie)) {
          return state;
        }
        return { favourites: [...state.favourites, movie] };
      });
    },
  };
});
