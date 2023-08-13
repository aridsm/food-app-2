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
    <div className={`${className} flex flex-col h-full w-full pt-2`}>
      <div
        className={`${classes.container} overflow-hidden relative rounded-t-lg rounded-b-[3rem] text-white-beige flex flex-col items-center mx-2`}
      >
        <ArrowSvg className="absolute w-32 h-28 right-16 bottom-1/3 text-mostard rotate-90" />
        <div className="flex gap-4 items-end rotate-[35deg] absolute -bottom-6 left-0">
          <div className="w-8 h-24 bg-mostard rounded-sm"></div>
          <div className="w-8 h-28 bg-mostard rounded-sm"></div>
        </div>
        <Header className=" text-white-beige py-6 max-w-[980px] w-full" />
        <div className="w-fit max-w-[750px] pt-10 pb-24 self-center relative">
          <p className=" bg-white-beige/[.05] text-white-beige rounded-sm py-2 px-4 mb-4 flex items-center w-fit">
            <FontAwesomeIcon icon={faClock} className="mr-3" />
            <time>17:00</time>h - <time>23:00</time>h
          </p>
          <h2 className="text-5xl leading-[130%] relative ">
            Orci varius natoque penatibus et magnis dis parturient montes
          </h2>
          <div className="mt-20 flex gap-16">
            <NavLink
              to="/menu"
              className={`py-4 px-9 rounded-sm text-white-beige hover:bg-red-hover border-[3px] border-white-beige relative self-start`}
            >
              Ver cardápio
            </NavLink>
            <div className={`flex items-center ${classes.imgsOptions}`}>
              <img src={img1} />
              <img src={img2} />
              <img src={img3} />
              <p>+60 opções</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mb-16">
        <ul
          aria-label="Formas de pagamento"
          className={`flex items-center gap-10 my-16 text-neutral-400 ${classes.listPayments}`}
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
        <ArrowSvg className=" w-32 h-28 text-red-theme rotate-180" />
        <ArcSvg className="absolute top-0 -right-[90px]  rotate-180 z-10" />
        <ArcSvg className="absolute bottom-24 left-10  rotate-180 z-10" />
      </div>
      <footer className="bg-red-theme py-2 text-sm text-white-beige">
        <div className=" max-w-[980px] w-full mx-auto flex items-center justify-between">
          <span>
            <FontAwesomeIcon icon={faTruck} className="mr-3" /> Delivery -
            Fortaleza/CE
          </span>
          <span className="flex">
            Feito por
            <a
              href="https://github.com/aridsm"
              target="_blank"
              className="xl:ml-1"
            >
              Ariane Morelato <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
          <span>
            <FontAwesomeIcon icon={faPhone} className="mr-3" />
            +55 (00) 1234-5678
          </span>
        </div>
      </footer>
    </div>
  );
};

export default HomeMobile;
