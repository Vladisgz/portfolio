import React from "react";
import { FaLanguage } from "react-icons/fa6";
import { IoLanguageSharp } from "react-icons/io5";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import LanguageCard from "./LanguageCard";
import Title from "./Title";

const Language = () => {
  return (
    <div className="wrapper">
      <Title text="Знание языков" icon={<FaLanguage />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LanguageCard
          title="Русский язык"
          subTitle="Родной"
          icon={<RxLetterCaseCapitalize />}
        />
        <LanguageCard
          title="Английский язык"
          subTitle="В1 (средний)"
          icon={<RxLetterCaseCapitalize />}
        />
        <LanguageCard
          title="Китайский язык"
          subTitle="А1 (начальный)"
          icon={<IoLanguageSharp />}
        />
      </div>
    </div>
  );
};

export default Language;
