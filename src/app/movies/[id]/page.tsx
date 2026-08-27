import Image from "next/image";
import MoviePage from "../../../features/movie-details/components/MoviePage";

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

const Movie = async ({ params }: MoviePageProps) => {
  const { id } = await params;
  return <MoviePage />;
};

export default Movie;
