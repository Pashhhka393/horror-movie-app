import Image from "next/image";

const Actor = () => {
  return (
    <div className="max-w-65 flex flex-col items-center gap-0.5">
      <Image
        className="rounded-4xl"
        src="/actors/bill-skarsgard.webp"
        alt="actors-image"
        width={250}
        height={250}
      />
      <span className="mt-2.5 font-bold text-2xl">Билл Скарсгард</span>
      <span className="mt-1.5 font-extralight text-xl">Пеннивайз / Клоун</span>
    </div>
  );
};

export default Actor;
