import Header from "../../../components/Home/Header";
import Header2 from "../../../components/General/Header";
import Content from "../../../components/Home/Content";
import Footer from "../../../components/Home/Footer";
import imgHome from "../../../assets/imgs/home-img.jpg";
import ArcSvg from "../../../assets/imgs/arc.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SubHeaderTop from "../../../components/General/SubHeaderTop.tsx";
import HomeMobile from "./HomeMobile.tsx";

const Home: React.FC = () => {
  return (
    <>
      <div className="hidden xl:flex flex-col xl:flex-row h-full w-full">
        <SubHeaderTop className="block xl:hidden" />
        <div className={`hidden xl:block bg-red-theme w-[47%] relative`}>
          <img
            src={imgHome}
            className="w-full h-full absolute top-0 left-0 object-cover mix-blend-luminosity opacity-[.15]"
          />
          <p className="z-20 relative text-white-beige text-[2.8rem] p-12 pb-4 leading-[160%] font-bold">
            Nunc hendrerit magna sit amet justo
          </p>
          <p className="text-white-beige px-12 z-20 relative">
            Praesent vitae pellentesque augue
          </p>
          <span className="text-white-beige z-20 absolute bottom-8 left-8 text-base flex">
            Feito por
            <a
              href="https://github.com/aridsm"
              target="_blank"
              className="xl:ml-1"
            >
              Ariane Morelato <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>

          <ArcSvg className="absolute bottom-0 -right-[120px]" />
          <ArcSvg className="absolute bottom-32 left-0 rotate-180" />
        </div>
        <div className="w-full">
          <ArcSvg className="absolute top-[24px] xl:top-0 -right-[80px] xl:-right-[120px] rotate-180 -z-10" />
          <div className="max-w-[980px] xl:w-[840px] mx-auto xl:px-10 px-2 py-4 xl:py-8 min-h-screen flex flex-col">
            <Header className="hidden xl:flex" />
            <Header2 className="flex xl:hidden" />
            <Content />
            <Footer />
          </div>
        </div>
        <ArcSvg className="xl:hidden absolute -left-[40px] bottom-[15%]  rotate-90 -z-10" />
      </div>
      <HomeMobile className="flex xl:hidden" />
    </>
  );
};

export default Home;
