import Title from "./Title";
import { SiInformatica } from "react-icons/si";
import SocialLinks from "./SocialLinks";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="Обо мне" icon={<SiInformatica />} />
      <div className="text-base md:text-lg tracking-wide flex flex-col gap-6">
        <p>
          Frontend-разработчик с двухлетним опытом разработки на React. Обладаю
          набором знаний и навыков в следующих областях:
          <br />
          <br />• Языки программирования: HTML5, CSS3, JS, NodeJS.
          <br />• Фреймворки и библиотеки: React, NextJS, TailwindCSS.
          <br />• Базы данных: MongoDB (базовый уровень).
          <br />• Инструменты и технологии: Git, Axios, Express, Google
          Firebase, Stripe, RESTful API.
        </p>
        <p>
          Готов к эфеективному сотрудничеству в команде, развивая как себя, так
          и продукт.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
