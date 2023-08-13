import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowSvg from "../../assets/imgs/arrow";
import classes from "./Content.module.css";
import { NavLink } from "react-router-dom";
import { faClock, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import {
  faPix,
  faCcVisa,
  faCcMastercard,
} from "@fortawesome/free-brands-svg-icons";
import img1 from "../../assets/imgs/home1.jpg";
import img2 from "../../assets/imgs/home2.jpg";
import img3 from "../../assets/imgs/home3.jpg";

const Content: React.FC = () => {
  return (
    <main className="flex-1 flex flex-col justify-center py-8 px-2 mx-auto xl:mx-0 max-w-[650px] xl:max-w-none">
      <p className=" bg-red-theme/[.05] text-red-theme rounded-sm py-2 px-4 mb-4 flex items-center w-fit">
        <FontAwesomeIcon icon={faClock} className="mr-3" />
        <time>17:00</time>h - <time>23:00</time>h
      </p>
      <h2 className="text-[40px] 2xl:text-[48px] leading-[130%] relative max-w-[600px] 2xl:max-w-[740px]">
        <ArrowSvg className="absolute right-0 bottom-full text-mostard" />
        Orci varius natoque penatibus et magnis dis parturient montes
      </h2>
      <div className="mt-10 flex gap-16">
        <NavLink
          to="/menu"
          className={`bg-red-theme py-3 px-6 xl:py-4 xl:px-9 rounded-sm text-white-beige hover:bg-red-hover relative self-start ${classes.linkMenu}`}
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
      <ul
        aria-label="Formas de pagamento"
        className={`flex items-center gap-10 mt-16 text-neutral-400 ${classes.listPayments}`}
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

      <ArrowSvg className=" text-red-theme rotate-90 self-end" />
    </main>
  );
};

export default Content;
