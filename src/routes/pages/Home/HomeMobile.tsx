import Header from "../../../components/General/Header.tsx";
import ArrowSvg from "../../../assets/imgs/arrow.tsx";
import img1 from "../../../assets/imgs/home1.jpg";
import img2 from "../../../assets/imgs/home2.jpg";
import img3 from "../../../assets/imgs/home3.jpg";
import ArcSvg from "../../../assets/imgs/arc.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMoneyBill,
  faPhone,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";
import {
  faCcMastercard,
  faCcVisa,
  faGithub,
  faPix,
} from "@fortawesome/free-brands-svg-icons";

const HomeMobile: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`${className} ${classes.containerHome} flex flex-col h-full w-screen pt-2`}
    >
      <div
        className={`${classes.container} flex-1 px-2 overflow-hidden relative rounded-t-lg rounded-b-[3rem] text-white-beige flex flex-col items-center mx-2`}
      >
        <ArrowSvg className="absolute w-20 h-12 md:w-24 md:h-16 lg:w-32 lg:h-28 right-0 md:right-16 bottom-1/4 md:bottom-1/3 text-mostard rotate-90" />
        <div className="flex gap-2 sm:gap-4 items-end rotate-[35deg] absolute -bottom-6 left-0">
          <div className="w-4 h-16 sm:w-8 sm:h-24 bg-mostard rounded-sm"></div>
          <div className="w-4 h-20 sm:w-8 sm:h-28 bg-mostard rounded-sm"></div>
        </div>
        <Header className="py-6 max-w-[900px] w-full" />
        <div className="w-fit flex flex-col my-auto text-center lg:text-left max-w-[450px] md:max-w-[550px] lg:max-w-[750px] pt-6 lg:pt-10 pb-14 md:pb-20 lg:pb-24 self-center relative">
          <p className="bg-white-beige/[.05] text-white-beige justify-center w-fit mx-auto lg:mx-0 rounded-sm py-2 px-4 mb-4 flex items-center ">
            <FontAwesomeIcon icon={faClock} className="mr-3" />
            <time>17:00</time>h - <time>23:00</time>h
          </p>
          <h2
            className={`${classes.titleH2} px-6 lg:px-0 text-[1.4rem] sm:text-[1.875rem] md:text-[2.25rem] lg:text-[3rem] leading-[130%] relative`}
          >
            Orci varius natoque penatibus et magnis dis parturient montes
          </h2>
          <div
            className={`${classes.btnOptions} mt-10 md:mt-16 lg:mt-20 gap-10 md:gap-16 items-center flex flex-col lg:flex-row w-full`}
          >
            <NavLink
              to="/menu"
              className={`${classes.btn} py-2 px-5 sm:py-3 sm:px-7 lg:py-4 lg:px-9 mx-auto lg:mx-0 rounded-sm text-white-beige hover:bg-red-hover border-[3px] border-white-beige relative self-start`}
            >
              Ver cardápio
            </NavLink>
            <div
              className={`flex flex-col gap-8 lg:flex-row items-center ${classes.imgsOptions}`}
            >
              <div className="flex items-center lg:ml-6">
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
              </div>
              <p>+60 opções</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mb-4 sm:mb-16">
        <ul
          aria-label="Formas de pagamento"
          className={`grid grid-cols-2 sm:flex items-center gap-6 sm:gap-10 my-6 sm:my-16 text-neutral-400 ${classes.listPayments}`}
        >
          <li>
            <FontAwesomeIcon icon={faPix} />
            <p>Pix</p>
          </li>

          <li>
            <FontAwesomeIcon icon={faCcVisa} />
            <p>Visa</p>
          </li>

          <li>
            <FontAwesomeIcon icon={faCcMastercard} />
            <p>MasterCard</p>
          </li>

          <li>
            <FontAwesomeIcon icon={faMoneyBill} />
            <p>Dinheiro</p>
          </li>
        </ul>
        <ArrowSvg className=" lg:w-32 lg:h-28 text-red-theme rotate-180" />
        <ArcSvg className="absolute -top-6 -right-[100px] rotate-180 z-10" />
        <ArcSvg className="hidden sm:block absolute bottom-24 left-10 rotate-180 z-10" />
        <span className="flex sm:hidden mt-4 text-xs w-full justify-center pr-2 text-neutral-400">
          Feito por
          <a href="https://github.com/aridsm" target="_blank" className="ml-1">
            Ariane Morelato <FontAwesomeIcon icon={faGithub} />
          </a>
        </span>
      </div>
      <footer className="bg-red-theme py-1 sm:py-2 text-[10px] md:text-sm text-white-beige">
        <div className=" max-w-[980px] w-full mx-auto flex items-center justify-between px-2">
          <span>
            <FontAwesomeIcon icon={faTruck} className="mr-1" /> Delivery -
            Fortaleza/CE
          </span>
          <span className="hidden sm:flex">
            Feito por
            <a
              href="https://github.com/aridsm"
              target="_blank"
              className="ml-1"
            >
              Ariane Morelato <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
          <span>
            <FontAwesomeIcon icon={faPhone} className="mr-1" />
            +55 (00) 1234-5678
          </span>
        </div>
      </footer>
    </div>
  );
};

export default HomeMobile;
