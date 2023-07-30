import ItemCart from "../../../components/Cart/ItemCart";
import { useAppSelector } from "../../../store/hooks";
import { useState } from "react";
import CartItem from "../../../types/CartItem";
import CheckBox from "../../../components/General/CheckBox";

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);

  const [selectedItems, setSelectedItems] = useState<CartItem[]>([]);

  const onSelectAllItems = () => {
    if (cart.cartItems.length !== selectedItems.length) {
      setSelectedItems(cart.cartItems);
    } else {
      setSelectedItems([]);
    }
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div>
        <div className="flex items-center">
          <CheckBox
            onSelect={onSelectAllItems}
            selected={cart.cartItems.length === selectedItems.length}
          />
          <p>Seu carrinho</p>

          <div className="flex text-neutral-400 ml-6 text-base leading-none">
            <span>{cart.totalItems} item(ns)</span>
            <span className="ml-4 border-l-2 border-l-neutral-400 pl-4">
              {selectedItems.length} selecionado(s)
            </span>
          </div>

          <div className="items-center flex text-base ml-auto">
            <p className="w-48 text-center">Quantidade</p>
            <p className="w-48 text-end">Preço</p>
          </div>
        </div>
        <ul className="mt-4 flex flex-col divide-y-2 gap-4">
          {cart.cartItems.map((cartItem) => (
            <ItemCart
              item={cartItem}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          ))}
        </ul>
      </div>
      <div>total</div>
    </div>
  );
};

export default Cart;
