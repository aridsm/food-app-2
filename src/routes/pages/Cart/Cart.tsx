import ItemCart from "../../../components/Cart/ItemCart";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect, useState } from "react";
import CartItem from "../../../types/CartItem";
import CheckBox from "../../../components/General/CheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { cartActions } from "../../../store/cartStore.store";
import convertToCurrency from "../../../utils/convertToCurrency";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState<CartItem[]>([]);
  const [currentTotal, setCurrentTotal] = useState<number>(0);

  useEffect(() => {
    const recountTotal = () => {
      return selectedItems.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
      }, 0);
    };

    setCurrentTotal(recountTotal());
  }, [selectedItems]);

  const onSelectAllItems = () => {
    if (cart.cartItems.length !== selectedItems.length) {
      setSelectedItems(cart.cartItems);
    } else {
      setSelectedItems([]);
    }
  };

  const deleteAllItems = () => {
    dispatch(cartActions.cleanCart());
    setSelectedItems([]);
  };

  const recountTotal = () => {
    setCurrentTotal(
      selectedItems.reduce((acc, curr) => {
        return acc + curr.price;
      }, 0)
    );
  };

  const goToPaymentPage = () => {
    dispatch(
      cartActions.setSelectedItems({
        items: selectedItems,
        price: currentTotal,
      })
    );
    navigate({
      pathname: "/payment",
    });
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div>
        <div className="flex items-center">
          <CheckBox
            onSelect={onSelectAllItems}
            selected={
              cart.cartItems.length
                ? cart.cartItems.length === selectedItems.length
                : false
            }
          />
          <p>Seu carrinho</p>

          <div className="flex text-neutral-400 ml-6 text-base leading-none">
            <span>{cart.cartItems.length} item(ns)</span>
            <span className="ml-4 border-l-2 border-l-neutral-400 pl-4">
              {selectedItems.length} selecionado(s)
            </span>
          </div>

          <div className="items-center flex text-base ml-auto">
            <p className="w-48 text-center">Quantidade</p>
            <p className="w-48 text-end">Preço</p>
          </div>
        </div>
        {cart.cartItems.length > 0 ? (
          <ul className="mt-4 flex flex-col divide-y-2 gap-4 h-[58vh] overflow-auto">
            {cart.cartItems.map((cartItem) => (
              <ItemCart
                item={cartItem}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                recountTotal={recountTotal}
              />
            ))}
          </ul>
        ) : (
          <p className="h-[58vh] text-center pt-16">
            Não há itens no carrinho!
          </p>
        )}
      </div>
      <div className="flex justify-between items-end pt-4">
        <div>
          <p>Total</p>
          <span className="text-3xl">{convertToCurrency(currentTotal)}</span>
          <button
            className="text-red-theme flex gap-2 items-center mt-4 text-base"
            onClick={deleteAllItems}
          >
            Esvaziar carrinho
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>

        <button
          disabled={selectedItems.length === 0}
          className="button"
          onClick={goToPaymentPage}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Cart;
