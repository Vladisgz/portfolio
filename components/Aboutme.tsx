import Title from "./Title";
import { SiInformatica } from "react-icons/si";
import SocialLinks from "./SocialLinks";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="Обо мне" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Frontend разработчик с желанием и пристрастием к созданию
          интерактивных веб-приложений. Обладаю набором знаний и опытом работой
          с ключевыми технологиями frontend разработки. Так же затрагивал
          Backend часть, работая с NodeJS и MongoDB, которую я применил при
          написании Telegrambot для Самарского Театра Оперы и Балета. В моем
          &apos;рюкзаке&apos; навыки работы с npm, Git, опыт работы с RESTful
          API, а так же Axios для обмена данными с сервером.
        </p>
        <p>
          Готов к эфеективному сотрудничеству в команде, развивая как себя, так
          и компанию.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
