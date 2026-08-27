"use client";

import MovieCard from "@/components/MovieCards/MovieCard/MovieCard";
import { useFavouriteStore } from "@/store/favourite";
import { Button } from "@base-ui/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const FavouriteMovies = () => {
  const favouritesMovies = useFavouriteStore((state) => state.favourites);

  return (
    <div className="container">
      <section>
        {favouritesMovies.length === 0 ? (
          <div className=" flex flex-col items-center gap-2.5">
            <h1 className="text-center text-white font-bold text-3xl mt-15">
              Вы ничего не добавили!
            </h1>
            <Link href="/">
              <Button className="flex items-center gap-1.5 bg-red-700 text-white hover:bg-red-800 transition-colors py-1.5 px-2.5 rounded-2xl font-bold cursor-pointer">
                <ArrowLeft />
                Вернуться на главную
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center flex-wrap gap-9">
            {favouritesMovies.map((movie) => {
              return (
                <Link key={movie.id} href={`/movies/${movie.id}`}>
                  <MovieCard movie={movie} />
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default FavouriteMovies;
