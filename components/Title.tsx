import { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
}

const Title = ({ text, icon }: Props) => {
  return (
    <div className="flex items-center gap-3 text-2xl pb-8">
      <h3 className="font-semibold relative group overflow-hidden cursor-pointer">
        {text}
        <span className="w-full h-[2px] absolute bottom-0 left-1/2 transform -translate-x-1/2 inline-block bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
      </h3>
      <span className="text-orange-400">{icon}</span>
    </div>
  );
};

export default Title;
