import ReactDOM from "react-dom";
import MenuItem from "../../types/interfaces/menuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CartItem from "../../types/CartItem";

const modalElement = document.getElementById("modal")! as HTMLElement;

const maxQuantity = 20;

const ModalContent: React.FC<{
  onClose: () => void;
  item: MenuItem;
  addItemToCart: (item: CartItem) => void;
}> = ({ onClose, item, addItemToCart }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const closeModalHandler = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const convertToCurrency = (val: number) => {
    return val.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const onChangeQuantity = (value: string) => {
    const val = Number(value);
    if (val < 1) {
      return;
    } else if (val > maxQuantity) {
      return;
    } else {
      setQuantity(val);
    }
  };

  const decreaseQuantityHandler = () => {
    setQuantity((currState) => {
      if (currState - 1 === 0) {
        return 1;
      } else {
        return currState - 1;
      }
    });
  };

  const increaseQuantityHandler = () => {
    setQuantity((currState) => {
      if (currState + 1 > maxQuantity) {
        return maxQuantity;
      } else {
        return currState + 1;
      }
    });
  };

  const addItem = () => {
    console.log(item, quantity);
    addItemToCart({
      ...item,
      quantity: quantity,
    });
  };

  return (
    <div
      className="fixed bg-slate-600/[.2] w-full h-full z-40 grid place-items-center px-2"
      onClick={closeModalHandler}
    >
      <section className="flex flex-col bg-white-beige rounded-lg p-5 w-[370px]">
        <div className="h-64 w-full rounded-md overflow-hidden mb-3">
          <img
            src={`/src/assets/imgs/imgs-menu/${item.imgPath}`}
            alt={item.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-center mb-2">{item.name}</p>
        <p className="text-neutral-400 mb-5 w-full text-base">
          {item.description}
        </p>
        <div className="flex justify-between text-base items-center">
          <p>Valor unitário</p>
          <p>{convertToCurrency(item.price)}</p>
        </div>
        <div className="mt-4 flex flex-col text-base">
          <div className="flex mb-2 ml-auto">
            <p className="text-neutral-400">Subtotal:</p>
            <span className="ml-2 text-red-theme">
              {convertToCurrency(quantity * item.price)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-1 text-base ">
              <button
                disabled={quantity === 1}
                className="text-red-theme px-2 hover:bg-neutral-200/[.4] text-xs rounded-sm disabled:text-red-theme/[.2] disabled:cursor-not-allowed"
                onClick={decreaseQuantityHandler}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <input
                type="number"
                value={quantity}
                className="px-2 py-1 w-10"
                min="1"
                max={maxQuantity}
                onChange={(e) => onChangeQuantity(e.target.value)}
              />
              <button
                disabled={quantity === maxQuantity}
                className="text-red-theme px-2 hover:bg-neutral-200/[.4] text-xs rounded-sm disabled:text-red-theme/[.2] disabled:cursor-not-allowed"
                onClick={increaseQuantityHandler}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <button
              className="button p-0"
              style={{ padding: "0.4rem 1rem" }}
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
}> = ({ close, item, addItemToCart }) => {
  return ReactDOM.createPortal(
    <ModalContent onClose={close} item={item} addItemToCart={addItemToCart} />,
    modalElement
  );
};

export default Modal;
