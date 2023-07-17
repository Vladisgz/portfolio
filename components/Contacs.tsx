import React from "react";
// import {BsBoxArrowInUpRight} from 'react-icons/bs'
import SocialLinks from "./SocialLinks";

const Contacs = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Let&apos;s create something new</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          Готов к сотрудничеству. Рассмотрю различные варианты предложений по
          работе.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <a href="https://samara.hh.ru/applicant/resumes/view?resume=5c9edeaeff09594e510039ed1f6f527852636a">
                  <button className='w-40 h-12 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300'>Резюме</button>
              </a> */}
          <a href="mailto:pmvladi@yandex.ru">
            {/* <button className="w-40 h-12 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300"> */}
            {/* <button className="w-40 h-12 bg-gradient-to-r from-transparent via-transparent to-slate-800 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300"> */}
            <button className="w-40 h-12 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 text-xl font-bold text-white rounded-lg hover:from-orange-950 hover:to-orange-800 duration-300">
              Email
            </button>
          </a>
          <a href="tel:89198044708">
            <button className="w-40 h-12 bg-gradient-to-l from-gray-800 via-gray-900 to-gray-950 text-xl font-bold text-white rounded-lg hover:from-orange-950 hover:to-orange-800 duration-300">
              {/* <button className="w-40 h-12 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300"> */}
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
