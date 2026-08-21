import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <span className=" hero-welcome block text-center font-bold m-10 text-sm uppercase tracking-[0.3em] text-red-700">
          Добро пожаловать в темноту
        </span>
        <h1 className="text-5xl font-bold leading-tight text-white">
          <span className="text-red-700">Страх</span> начинается с первого
          кадра.
        </h1>

        <p className="hero-text mt-6 text-lg leading-8 text-gray-400">
          Мрачные истории, необъяснимые события и тайны, которые лучше было
          никогда не раскрывать.{" "}
          <span className="font-semibold text-white">Выберите фильм.</span>{" "}
          <span className="font-semibold text-red-700">
            И приготовьтесь к ночи без сна.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
