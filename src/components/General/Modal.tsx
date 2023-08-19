import ReactDOM from "react-dom";
import MenuItem from "../../types/interfaces/menuItem";
import { useState } from "react";
import CartItem from "../../types/CartItem";
import QuantitySelector from "./QuantitySelector";
import convertToCurrency from "../../utils/convertToCurrency";

const modalElement = document.getElementById("modal")! as HTMLElement;

const ModalContent: React.FC<{
  onClose: () => void;
  item: MenuItem;
  addItemToCart: (item: CartItem) => void;
  open: boolean;
}> = ({ onClose, item, addItemToCart, open }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const closeModalHandler = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
      setQuantity(1);
    }
  };

  const addItem = () => {
    addItemToCart({
      ...item,
      quantity: quantity,
    });

    onClose();
    setQuantity(1);
  };

  return (
    <div
      className={`fixed bg-slate-600/[.2] w-full h-full z-40 grid place-items-center px-2 transition-all ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={closeModalHandler}
    >
      <section
        className={`flex flex-col relative bg-white-beige rounded-lg p-3 md:p-5 transition-all max-w-[320px] md:max-w-[370px] w-full ${
          open ? "top-0" : "-top-5 "
        }`}
      >
        <div className="h-60 md:h-64 w-full rounded-md overflow-hidden mb-3">
          <img
            src={item.img}
            alt={item?.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-center mb-2 text-sm md:text-base">{item?.name}</p>
        <p className="text-neutral-400 mb-5 w-full md:text-base">
          {item?.description}
        </p>
        <div className="flex justify-between md:text-base items-center">
          <p>Valor unitário</p>
          {item.price && <p>{convertToCurrency(item.price)}</p>}
        </div>
        <div className="mt-4 flex flex-col md:text-base">
          <div className="flex mb-2 ml-auto">
            <p className="text-neutral-400">Subtotal:</p>
            <span className="ml-2 text-red-theme">
              {convertToCurrency(quantity * item?.price)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <button
              className="button p-0"
              style={{ padding: "0.5rem 1rem" }}
              onClick={addItem}
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const Modal: React.FC<{
  close: () => void;
  item: MenuItem;
  addItemToCart: (item: CartItem) => void;
  open: boolean;
}> = ({ close, item, addItemToCart, open }) => {
  return ReactDOM.createPortal(
    <ModalContent
      onClose={close}
      item={item}
      addItemToCart={addItemToCart}
      open={open}
    />,
    modalElement
  );
};

export default Modal;
