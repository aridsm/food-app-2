import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cartActions } from "../../store/cartStore.store";
import { useAppDispatch } from "../../store/hooks";
import CartItem from "../../types/CartItem";
import QuantitySelector from "../General/QuantitySelector";
import { useState, useEffect } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import CheckBox from "../General/CheckBox";
import convertToCurrency from "../../utils/convertToCurrency";
import ModalConfirm from "../General/ModalConfirm";
import ImgCart from "../General/ImgCart";

const ItemCart: React.FC<{
  item: CartItem;
  selectedItems: CartItem[];
  setSelectedItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  recountTotal: () => void;
}> = ({ item, selectedItems, setSelectedItems, recountTotal }) => {
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState<number>(item.quantity);
  const [itemIsSelected, setItemIsSelected] = useState<boolean>(
    () => !!selectedItems.find((selectedItem) => selectedItem.id === item.id)
  );
  const [modalAlert, setModalAlert] = useState<{
    open: boolean;
    message: string;
    onConfirm: (() => void) | undefined;
  }>({
    open: false,
    message: "",
    onConfirm: undefined,
  });

  useEffect(() => {
    setQuantity(item.quantity);
    dispatch(
      cartActions.setNewQuantity({ id: item.id, newQuantity: quantity })
    );
    if (itemIsSelected) {
      setSelectedItems((state) => {
        return state.map((cartItem: CartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              quantity: quantity,
            };
          }
          return cartItem;
        });
      });
    }
  }, [
    dispatch,
    item.id,
    item.quantity,
    itemIsSelected,
    quantity,
    setSelectedItems,
  ]);

  useEffect(() => {
    setItemIsSelected(() => {
      return !!selectedItems.find(
        (selectedItem) => selectedItem.id === item.id
      );
    });
  }, [item.id, selectedItems]);

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
    setSelectedItems((currState: CartItem[]) => {
      return currState.filter((selectedItem) => selectedItem.id !== item.id);
    });
    recountTotal();
    onCloseModalAlert();
  };

  const onCloseModalAlert = () => {
    setModalAlert((state) => {
      return {
        ...state,
        open: false,
      };
    });
  };

  const onConfirmRemoveItemFromCart = () => {
    setModalAlert(() => {
      return {
        open: true,
        message: "Deseja realmente excluir o item selecionado?",
        onConfirm: removeItemFromCart,
      };
    });
  };

  return (
    <div>
      <ModalConfirm
        close={onCloseModalAlert}
        message={modalAlert.message}
        open={modalAlert.open}
        onConfirm={modalAlert.onConfirm}
      />
      <li
        key={item.id}
        className={`flex items-center md:text-base pt-4 ${
          itemIsSelected ? "opacity-100" : "opacity-80"
        }`}
      >
        <CheckBox
          onSelect={onSelectItem}
          selected={itemIsSelected}
          className="self-center"
        />
        <ImgCart name={item.name} path={item.img} />

        <div className="flex flex-1 ml-4">
          <div className="flex flex-col">
            <p>{item.name}</p>
            <span className="mt-1 text-neutral-400 mb-1">
              Unid. {convertToCurrency(item.price)}
            </span>
            <button
              className="text-red-theme flex gap-2 items-center mt-auto"
              onClick={onConfirmRemoveItemFromCart}
            >
              Remover
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
          <div className="w-[70px] sm:w-28 xl:w-48 ml-auto flex justify-center items-start pt-4">
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </div>
          <p className="w-[70px] sm:w-28 xl:w-48 text-end pt-5">
            {convertToCurrency(item.price * item.quantity)}
          </p>
        </div>
      </li>
    </div>
  );
};

export default ItemCart;
