import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Play, Heart } from "lucide-react";
import { moviesDataType } from "../data/movies";

interface MoviePageProps {
  movie: moviesDataType;
}

const MoviePage = ({ movie }: MoviePageProps) => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col min-h-200 items-center justify-center">
          <div className=" flex items-center justify-center gap-8">
            <Image
              className="rounded-xl"
              src={movie.backdropUrl}
              alt="banner-image"
              width={400}
              height={600}
            />

            <div className="min-h-150 mt-2.5 text-white">
              <div className=" flex items-center gap-1.5 font-bold text-2xl">
                <span>{movie.genres.join(" • ")}</span>
              </div>

              <h2 className="max-w-full mt-4 font-bold text-5xl">
                {movie.title}
              </h2>

              <div className="flex gap-2.5 mt-5 font-bold text-xl">
                <span className="genre-1 flex items-center gap-1.5">
                  <Star fill="yellow" width={20} />
                  {movie.rating}
                </span>
                <span className="genre-2">{movie.duration}</span>
                <span className="year">{movie.ageRating}</span>
              </div>

              <p className="max-w-112.5 mt-4 text-2xl">{movie.description}</p>

              <div className="flex items-center gap-2.5 mt-6">
                <Button className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 cursor-pointer">
                  <Play className="w-4 h-4 mr-2" fill="currentColor" />
                  Смотреть
                </Button>

                <Button
                  variant="outline"
                  className="border-none text-gray-400 hover:bg-gray-500 hover:text-white px-6 py-3  cursor-pointer"
                >
                  <Heart className="w-4 h-4 mr-2" />В избранное
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviePage;
