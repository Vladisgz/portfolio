import React from "react";
import SocialLinks from "./SocialLinks";

const Contacs = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-xl md:text-2xl font-bold tracking-wide">
          Let&apos;s create something new
        </h2>
        <p className="text-base md:text-lg tracking-wide font-medium text-center">
          Готов к сотрудничеству. Рассмотрю различные варианты предложений по
          работе.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a href="mailto:pmvladi@yandex.ru">
            <button className="w-32 h-10 md:w-40 md:h-12 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 text-base md:text-xl font-semibold tracking-wide text-slate-300 hover:text-white rounded-lg hover:from-orange-950 hover:to-orange-800 duration-300">
              Email
            </button>
          </a>
          <a href="tel:89198044708">
            <button className="w-32 h-10 md:w-40 md:h-12 bg-gradient-to-l from-gray-800 via-gray-900 to-gray-950 text-base md:text-xl font-bold tracking-wide text-slate-300 hover:text-white rounded-lg hover:from-orange-950 hover:to-orange-800 duration-300">
              Позвонить
            </button>
          </a>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-8 items-center justify-center">
        <SocialLinks title="GitHub" link="https://github.com/Vladisgz" />
        <SocialLinks title="Telegram" link="https://t.me/tattooedvl" />
        <SocialLinks
          title="Linkedin"
          link="https://www.linkedin.com/in/vladislav-khorenko-39610125b/"
        />
        <SocialLinks
          title="Резюме"
          link="https://samara.hh.ru/resume/44db77c0ff0c24da390039ed1f545471663347"
        />
      </div>
    </div>
  );
};

export default Contacs;
