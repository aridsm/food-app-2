import mastercard from "../../assets/payment/mastercard.png";
import visa from "../../assets/payment/visa.png";
import aex from "../../assets/payment/aex.png";

const CardDataSection: React.FC = () => {
  return (
    <section>
      <ul className="flex items-center gap-2 md:gap-4 mb-4">
        <li>
          <img src={mastercard} title="MasterCard" className="w-12" />
        </li>
        <li>
          <img src={visa} title="Visa" className="w-12" />
        </li>
        <li>
          <img src={aex} title="AmericanExpress" className="w-12" />
        </li>
      </ul>
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <label
            htmlFor="firstName"
            className=" uppercase  text-[10px] md:text-xs"
          >
            Nome <span className="text-red-500 text-base">*</span>
          </label>
          <input
            type="text"
            className="p-2 w-full"
            id="firstName"
            value="John"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="lastName"
            className=" uppercase  text-[10px] md:text-xs"
          >
            Sobrenome <span className="text-red-500 text-base">*</span>
          </label>
          <input type="text" className="p-2 w-full" id="lastName" value="Doe" />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="cardNumber"
            className=" uppercase  text-[10px] md:text-xs"
          >
            Número do Cartão <span className="text-red-500 text-base">*</span>
          </label>
          <input
            type="text"
            className="p-2 w-full"
            id="cardNumber"
            value="1232 1222 3556 2212"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="cvc" className=" uppercase  text-[10px] md:text-xs">
            Código de Segurança{" "}
            <span className="text-red-500 text-base">*</span>
          </label>
          <input type="text" className="p-2 w-full" id="cvc" value="123" />
        </div>
        <div className="col-span-1">
          <label htmlFor="date" className=" uppercase  text-[10px] md:text-xs">
            Validade <span className="text-red-500 text-base">*</span>
          </label>
          <input type="text" className="p-2 w-full" id="date" value="02/25" />
        </div>
      </form>
    </section>
  );
};

export default CardDataSection;
