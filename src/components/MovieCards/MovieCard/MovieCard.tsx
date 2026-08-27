import { moviesDataType } from "@/features/movie-details/data/movies";
import { Eye, HeartIcon } from "lucide-react";
import Image from "next/image";

interface MovieCardProps {
  movie: moviesDataType;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="max-w-42.5 mt-4 flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10 ">
      <Image
        className="rounded-lg  shadow-[0_10px_40px_rgba(220,38,38,0.3)] w-42.5 h-62.5 object-cover "
        src={movie.posterUrl}
        alt="poster-image"
        width="170"
        height="230"
      />
      <p className="text-white font-bold mt-2">{movie.title}</p>
      <p className="text-xs text-[#afafaf] font-bold self-start">
        {movie.year}
      </p>

      <div className="w-full mt-1 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image
            src="/rating-image.svg"
            alt="rating-image"
            width="30"
            height="15"
          />
          <span className="text-xs text-[#ffc907] font-bold">
            {movie.rating}
          </span>
        </div>

        <div className="flex items-center gap-1 cursor-pointer">
          <Eye fill="white" />
          <HeartIcon fill="white" />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
