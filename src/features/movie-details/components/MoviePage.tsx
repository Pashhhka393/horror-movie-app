import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Play, Heart } from "lucide-react";

const MoviePage = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col min-h-200 justify-center">
          {" "}
          <div className=" flex items-center justify-center gap-8">
            <Image
              className="rounded-xl"
              src="/posters/bg-it-1.jpg"
              alt="banner-image"
              width={400}
              height={600}
            />

            <div className="min-h-150 mt-15 text-white">
              <div className=" flex items-center gap-1.5 font-bold text-2xl">
                <span className="genre-1">Ужасы •</span>
                <span className="genre-2">Детективный фильм •</span>
                <span className="year">2017</span>
              </div>

              <h2 className="max-w-full mt-6 font-bold text-5xl">ОНО</h2>

              <div className="flex gap-2.5 mt-5 font-bold text-xl">
                <span className="genre-1 flex items-center gap-1.5">
                  <Star fill="yellow" width={20} />
                  7.3
                </span>
                <span className="genre-2">2ч 15мин</span>
                <span className="year">18+</span>
              </div>

              <p className="max-w-112.5 mt-4 text-2xl">
                Действие происходит в вымышленном американском городке Дерри,
                штат Мэн. Осенью 1988 года при загадочных обстоятельствах
                пропадает шестилетний Джорджи Денбро. Его старший брат Билл
                отказывается верить в смерть мальчика.
              </p>

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
