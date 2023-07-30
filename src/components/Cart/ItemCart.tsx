import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cartActions } from "../../store/cartStore.store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import CartItem from "../../types/CartItem";
import QuantitySelector from "../General/QuantitySelector";
import { useState, useEffect, useRef } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import CheckBox from "../General/CheckBox";

const ItemCart: React.FC<{
  item: CartItem;
  selectedItems: CartItem[];
  setSelectedItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}> = ({ item, selectedItems, setSelectedItems }) => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState<number>(item.quantity);
  const [itemIsSelected, setItemIsSelected] = useState<boolean>(
    () => !!selectedItems.find((selectedItem) => selectedItem.id === item.id)
  );

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity, item]);

  useEffect(() => {
    setItemIsSelected(() => {
      return !!selectedItems.find(
        (selectedItem) => selectedItem.id === item.id
      );
    });
  }, [item.id, selectedItems]);

  useEffect(() => {
    dispatch(
      cartActions.setNewQuantity({ id: item.id, newQuantity: quantity })
    );
  }, [dispatch, item.id, quantity]);

  const convertToCurrency = (val: number) => {
    return val.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const onSelectItem = () => {
    const itemIsSelected = selectedItems.find(
      (selectedItem) => selectedItem.id === item.id
    );

    if (itemIsSelected) {
      setSelectedItems((currState: CartItem[]) => {
        return currState.filter((selectedItem) => selectedItem.id !== item.id);
      });
    } else {
      setSelectedItems((currState: CartItem[]) => [...currState, item]);
    }
  };

  const removeItemFromCart = () => {
    dispatch(cartActions.deleteItemFromCart(item.id));
  };

  return (
    <li
      key={item.id}
      className={`flex text-base pt-4 ${
        itemIsSelected ? "opacity-100" : "opacity-80"
      }`}
    >
      <CheckBox
        onSelect={onSelectItem}
        selected={itemIsSelected}
        className="self-center"
      />
      <div className="basis-36 h-32 rounded-md overflow-hidden mr-6">
        <img
          src={`/src/assets/imgs/imgs-menu/${item.imgPath}`}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-1">
        <div className="flex flex-col">
          <p>{item.name}</p>
          <span className="text-neutral-400">
            Unid. {convertToCurrency(item.price)}
          </span>
          <button
            className="text-red-theme flex gap-2 items-center mt-auto"
            onClick={removeItemFromCart}
          >
            Remover
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
        <div className="w-48 ml-auto flex justify-center items-start pt-4">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </div>
        <p className="w-48 text-end  pt-5">
          {convertToCurrency(item.price * item.quantity)}
        </p>
      </div>
    </li>
  );
};

export default ItemCart;
