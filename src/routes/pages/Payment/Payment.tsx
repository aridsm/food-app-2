import { useEffect, useState } from "react";
import Payments from "../../../types/enums/payments";
import { faPix } from "@fortawesome/free-brands-svg-icons";
import {
  IconDefinition,
  faCreditCard,
  faCreditCardAlt,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const payments: { name: string; id: Payments; icon: IconDefinition }[] = [
  {
    name: "Pix",
    id: Payments.Pix,
    icon: faPix,
  },
  {
    name: "Crédito",
    id: Payments.CreditCard,
    icon: faCreditCard,
  },
  {
    name: "Débito",
    id: Payments.DebitCard,
    icon: faCreditCardAlt,
  },
  {
    name: "Dinheiro",
    id: Payments.Cash,
    icon: faMoneyBillTrendUp,
  },
];

const Payment: React.FC = () => {
  const [formIsFilled, setFormIsFilled] = useState<boolean>(false);
  const [paymentSelected, setPaymentSelected] = useState<Payments | null>(null);
  const [formInputs, setFormInputs] = useState<{
    cep: string;
    district: string;
    street: string;
    number: string;
    complement: string;
  }>({
    cep: "",
    district: "",
    street: "",
    number: "",
    complement: "",
  });

  useEffect(() => {
    if (
      formInputs.cep &&
      formInputs.district &&
      formInputs.number &&
      formInputs.street &&
      paymentSelected
    ) {
      setFormIsFilled(true);
    } else {
      setFormIsFilled(false);
    }
  }, [formInputs, paymentSelected]);

  return (
    <section className="flex gap-8 text-base items-start">
      <div className="flex flex-col gap-12 basis-[50%]">
        <section>
          <p>Seu pedido</p>
        </section>
        <section>
          <p className="mb-4">Endereço de entrega</p>
          <form className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label
                htmlFor="cep"
                className="text-neutral-400 uppercase text-xs"
              >
                CEP
              </label>
              <input
                type="text"
                className="p-2 w-full"
                id="cep"
                value={formInputs.cep}
                onChange={({ target }) =>
                  setFormInputs((state) => ({ ...state, cep: target.value }))
                }
                placeholder="00000-000"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="district"
                className="text-neutral-400 uppercase text-xs"
              >
                Bairro
              </label>
              <input
                type="text"
                className="p-2 w-full"
                id="district"
                value={formInputs.district}
                onChange={({ target }) =>
                  setFormInputs((state) => ({
                    ...state,
                    district: target.value,
                  }))
                }
                placeholder="Bairro"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="street"
                className="text-neutral-400 uppercase text-xs"
              >
                Rua
              </label>
              <input
                type="text"
                className="p-2 w-full"
                id="street"
                value={formInputs.street}
                onChange={({ target }) =>
                  setFormInputs((state) => ({ ...state, street: target.value }))
                }
                placeholder="Rua 02"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="number"
                className="text-neutral-400 uppercase text-xs"
              >
                Número
              </label>
              <input
                type="text"
                className="p-2 w-full"
                id="number"
                value={formInputs.number}
                onChange={({ target }) =>
                  setFormInputs((state) => ({ ...state, number: target.value }))
                }
                placeholder="000"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="comp"
                className="text-neutral-400 uppercase text-xs"
              >
                Complemento
              </label>
              <input
                type="text"
                className="p-2 w-full"
                id="comp"
                value={formInputs.complement}
                onChange={({ target }) =>
                  setFormInputs((state) => ({
                    ...state,
                    complement: target.value,
                  }))
                }
                placeholder="apt. 01"
              />
            </div>
          </form>
        </section>
        <section>
          <p className="mb-4">Forma de pagamento</p>
          <ul className="text-lg grid grid-cols-2 gap-4">
            {payments.map((payment) => (
              <li key={payment.id}>
                <button
                  className={`${
                    paymentSelected === payment.id
                      ? "text text-blue-500"
                      : "text-neutral-400 "
                  }`}
                  onClick={() => setPaymentSelected(payment.id)}
                >
                  <FontAwesomeIcon icon={payment.icon} className="mr-2" />
                  {payment.name}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="flex-1 bg-neutral-50 p-5 rounded-md ml-12 card">
        <div className="flex justify-between items-center text-xl mb-6">
          <p>Total</p>
          <p>R$ 25,99</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p>Desconto</p>
          <p className="text-neutral-400">R$ 0,00</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p>Itens</p>
          <p className="text-neutral-400">10</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Forma de pagamento</p>
          <p className="text-neutral-400">
            {paymentSelected
              ? payments.find((p) => p.id === paymentSelected)!.name
              : ""}
          </p>
        </div>
        <button
          disabled={!formIsFilled}
          className="button mt-4 w-full disabled:opacity-50 disabled:hover:bg-red-theme disabled:hover:cursor-not-allowed"
        >
          Concluir
        </button>
      </div>
    </section>
  );
};

export default Payment;
