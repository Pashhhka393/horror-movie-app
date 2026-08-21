import { ArrowBigDownDash, Eye, HeartIcon } from "lucide-react";
import Image from "next/image";

const MovieCards = () => {
  return (
    <div className="container">
      <section className="mt-20 rounded-3xl bg-[rgba(11,15,22,0.47)]">
        <div className="py-5 px-20">
          <div className="flex items-center justify-between">
            <h1 className=" text-white font-bold">
              Фильмы, которые вы должны посмотреть
            </h1>
            <button className="movies-filter flex items-center gap-3 text-white font-semibold bg-[#3a3a3a] rounded-4xl py-[5px] px-2 border-0 cursor-pointer">
              Фильтры
              <ArrowBigDownDash fill="white" />
            </button>
          </div>

          <div>
            <div className="max-w-[170px] mt-2.5 flex flex-col items-center cursor-pointer ">
              <Image
                className="rounded-lg  shadow-[0_10px_40px_rgba(220,38,38,0.3)]"
                src="/posters/poster-it-1.jpg"
                alt="poster-image"
                width="170"
                height="235"
              />
              <p className="text-white font-bold mt-2">Оно</p>
              <p className="text-xs text-[#afafaf] font-bold self-start">
                2017
              </p>

              <div className="w-full mt-1 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/rating-image.svg"
                    alt="rating-image"
                    width="30"
                    height="15"
                  />
                  <span className="text-xs text-[#ffc907] font-bold">8.6</span>
                </div>

                <div className="flex items-center gap-1 cursor-pointer">
                  <Eye fill="white" />
                  <HeartIcon fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieCards;
