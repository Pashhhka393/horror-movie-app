import Actors from "@/features/movie-details/Actors/Actors";
import MoviePage from "../../../features/movie-details/components/MoviePage";
import { moviesData } from "@/features/movie-details/data/movies";

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

const Movie = async ({ params }: MoviePageProps) => {
  const { id } = await params;
  const movie = moviesData.find((movie) => movie.id === id);

  if (!movie) {
    return <div>Фильм не найден</div>;
  }

  return (
    <>
      <MoviePage movie={movie} />
      <Actors movie={movie} />
    </>
  );
};

export default Movie;
