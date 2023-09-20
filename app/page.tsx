import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Contacs from "@/components/Contacs";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import FooterP from "@/components/FooterP";
import Language from "@/components/Language";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <Aboutme />
        <Experience />
        <Education />
        <Language />
        <Skills />
        <Projects />
        <Contacs />
        <FooterP />
      </div>
    </main>
  );
}
