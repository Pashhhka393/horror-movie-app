"use client";
import { ArrowBigDownDash } from "lucide-react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard/MovieCard";
import { moviesDataType } from "@/features/movie-details/data/movies";
import Link from "next/link";

const MovieCards = () => {
  const [movies, setMovies] = useState<moviesDataType[]>([]);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ошибка сервера" + res.status);
        }
        return res.json();
      })
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <section className="mt-20 mb-20 rounded-3xl bg-[rgba(11,15,22,0.47)]">
        <div className="py-5 px-20">
          <div className="flex items-center justify-between">
            <h1 className=" text-white font-bold">
              Фильмы, которые вы должны посмотреть
            </h1>

            <div className="flex items-center gap-2">
              <div className="relative">
                <select
                  name="Sort"
                  className="bg-[#3a3a3a] text-white font-semibold text-sm rounded-full py-2.5 px-5 border-none outline-none cursor-pointer appearance-none pr-10"
                >
                  <option value="default">По умолчанию</option>
                  <option value="rating-desc">Рейтинг ↓</option>
                  <option value="rating-asc">Рейтинг ↑</option>
                  <option value="year-desc">Год ↓</option>
                  <option value="year-asc">Год ↑</option>
                </select>
                <ArrowBigDownDash
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
                  size={16}
                />
              </div>
              <div className="relative">
                <select
                  name="Фильтры"
                  className="bg-[#3a3a3a] text-white font-semibold text-sm rounded-full py-2.5 px-5 border-none outline-none cursor-pointer appearance-none pr-10"
                >
                  <option value="Все">Все жанры</option>
                  <option value="Ужасы">Ужасы</option>
                  <option value="Детективный фильм">Детективный фильм</option>
                  <option value="Психологический триллер">
                    Психологический триллер
                  </option>
                  <option value="Мистика">Мистика</option>
                  <option value="Слэшер">Слэшер</option>
                  <option value="Выживание">Выживание</option>
                </select>
                <ArrowBigDownDash
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
                  size={16}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center flex-wrap justify-center gap-9">
            {movies.map((movie) => (
              <Link href={`/movies/${movie.id}`}>
                <MovieCard key={movie.id} movie={movie} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieCards;
