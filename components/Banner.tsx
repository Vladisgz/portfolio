import Image from "next/image";
import ProfileImg from "../public/img/IMG_9196.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      <div className="w-44 h-44 rounded-full bg-transparent ">
        <Image
          className="w-full h-full rounded-full m-auto border-[2px] border-white p-2 object-cover "
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-xl md:text-2xl tracking-wide font-bold text-white">
          Владислав Хоренко
        </h1>
        <h3 className="text-base md:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          31 год. Самара
        </h3>
        <h3 className="text-base md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Frontend - Разработчик
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Per aspera ad astra
        </p>
      </div>
    </div>
  );
};

export default Banner;
