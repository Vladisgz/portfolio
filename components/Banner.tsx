import Image from "next/image";
import ProfileImg from "../public/img/IMG_9200.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full m-auto border-[1px] border-white p-2 object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        {/* <h1 className="text-5xl font-bold text-white">Vladislav Khorenko</h1> */}
        <h1 className="text-5xl font-bold text-white">Владислав Хоренко</h1>
        <h3 className="text-sm md:text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          30 лет. Самара
        </h3>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Frontend Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Per aspera ad astra
        </p>
      </div>
    </div>
  );
};

export default Banner;