import Actor from "../components/Actor/Actor";

const Actors = () => {
  return (
    <section className="text-white">
      <div className="container">
        <h2 className="font-bold text-center text-4xl mb-2.5">Ключевые роли</h2>

        <div className="mb-8 flex justify-center items-center flex-wrap gap-8">
          <Actor />
          <Actor />
          <Actor />
          <Actor />
        </div>
      </div>
    </section>
  );
};

export default Actors;
