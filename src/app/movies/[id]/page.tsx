import Actors from "@/features/movie-details/Actors/Actors";
import MoviePage from "../../../features/movie-details/components/MoviePage";

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

const Movie = async ({ params }: MoviePageProps) => {
  const { id } = await params;
  return (
    <>
      <MoviePage />
      <Actors />
    </>
  );
};

export default Movie;
