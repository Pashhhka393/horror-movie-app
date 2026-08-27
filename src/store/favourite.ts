import { moviesDataType } from "@/features/movie-details/data/movies";
import { create } from "zustand";

interface FavouriteStore {
  favourites: moviesDataType[];
  addToFavourite: (movie: moviesDataType) => void;
  removeFromFavourite: (id: string) => void;
}

export const useFavouriteStore = create<FavouriteStore>((set) => {
  return {
    favourites: [],
    addToFavourite: (movie) => {
      set((state) => {
        if (state.favourites.some(({ id }) => id === movie.id)) {
          return state;
        }
        return { favourites: [...state.favourites, movie] };
      });
    },
    removeFromFavourite: (id) => {
      set((state) => {
        const newFilteredFavourites = state.favourites.filter(
          (movie) => movie.id !== id,
        );
        return { favourites: newFilteredFavourites };
      });
    },
  };
});
