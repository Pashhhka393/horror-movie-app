import Image from "next/image";
import { moviesDataType } from "../../data/movies";

interface ActorProps {
  movie: moviesDataType;
}

const Actor = ({ movie }: ActorProps) => {
  return (
    <>
      {movie.cast.map((actor) => {
        return (
          <div className="max-w-65 flex flex-col items-center gap-0.5">
            <Image
              className="rounded-4xl"
              src={actor.photo}
              alt="actors-image"
              width={250}
              height={250}
            />
            <span className=" mt-2.5 font-bold text-xl">{actor.name}</span>
            <span className="mt-1.5 font-extralight text-xl">{actor.role}</span>
          </div>
        );
      })}
    </>
  );
};

export default Actor;
