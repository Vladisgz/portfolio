import Title from "./Title";
import { SiInformatica } from "react-icons/si";
import SocialLinks from "./SocialLinks";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="Обо мне" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Frontend-разработчик с 3-летним опытом коммерческой разработки на
          React. Обладаю набором знаний и навыками в следующих областях:
          <br />
          <br />- Создал TelegramBot с применением MongoDB и написал собственный
          скрапер для сбора и обработки данных.
          <br />- Разработал несколько полностью адаптивных SPA-приложений и
          многостраничный E-Commerce сайт, используя ReactJS и NextJS.
          Стилизация была полностью выполнена с помощью TailwindCSS.
          <br />- Реализовал тестовые платежи через Stripe, обеспечив безопасное
          взаимодействие с клиентами.
        </p>
        <p>
          Мой технический стек включает в себя NodeJS, работу с Git (контроль
          версий, работа с ветками), опыт работы с RESTful API, библиотекой
          Axios для обмена данными с сервером, а так же реализацию успешной
          аутентификации с использованием Google Firebase.
        </p>
        <p>
          Готов к эфеективному сотрудничеству в команде, развивая как себя, так
          и команду.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
