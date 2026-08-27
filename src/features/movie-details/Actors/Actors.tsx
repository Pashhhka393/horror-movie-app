import Actor from "../components/Actor/Actor";
import { moviesDataType } from "../data/movies";

interface ActorsProps {
  movie: moviesDataType;
}

const Actors = ({ movie }: ActorsProps) => {
  return (
    <section className="text-white">
      <div className="container">
        <h2 className="font-bold text-center text-4xl mb-2.5">Ключевые роли</h2>

        <div className="mb-8 flex justify-center items-center flex-wrap gap-8">
          <Actor movie={movie} />
        </div>
      </div>
    </section>
  );
};

export default Actors;
