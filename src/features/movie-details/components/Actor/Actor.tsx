import Image from "next/image";

interface ActorProps {
  actor: { name: string; role: string; photo: string };
}

const Actor = ({ actor }: ActorProps) => {
  return (
    <div
      className="relative
     max-w-62.5
      max-h-112.5
       flex flex-col items-center gap-0.5 "
    >
      <Image
        className="object-cover rounded-3xl"
        src={actor.photo}
        alt="actors-image"
        width="250"
        height="450"
      />

      <span className=" mt-2.5 font-bold text-xl ">{actor.name}</span>
      <span className="mt-1.5 font-extralight text-xl">{actor.role}</span>
    </div>
  );
};

export default Actor;
