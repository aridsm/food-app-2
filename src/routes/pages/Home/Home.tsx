import Header from "../../../components/Home/Header";
import Content from "../../../components/Home/Content";
import Footer from "../../../components/Home/Footer";
import imgHome from "../../../assets/imgs/home-img.jpg";
import ArcSvg from "../../../assets/imgs/arc.tsx";

const Home: React.FC = () => {
  return (
    <div className="flex h-full w-full">
      <div className={`bg-red-theme w-[47%] relative`}>
        <img
          src={imgHome}
          className="w-full h-full absolute top-0 left-0 object-cover mix-blend-luminosity opacity-[.15]"
        />
        <p className="z-20 relative text-white-beige text-5xl p-12 pb-4 leading-[140%] font-bold">
          Nunc hendrerit magna sit amet justo
        </p>
        <p className="text-white-beige px-12 z-20 relative">
          Praesent vitae pellentesque augue
        </p>
        <span className="text-white-beige z-20 absolute bottom-8 left-8 text-base">
          Feito por Ariane Morelato
        </span>

        <ArcSvg className="absolute bottom-0 -right-[125px]" />
        <ArcSvg className="absolute bottom-32 left-0 rotate-180" />
      </div>
      <div className="w-full">
        <ArcSvg className="absolute top-0 -right-[125px] rotate-180 -z-10" />
        <div className="w-[840px] mx-auto px-2 py-8 min-h-screen flex flex-col">
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
