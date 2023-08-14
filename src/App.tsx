import Content from "./routes/Content";
import Modal from "./components/General/Modal.tsx";
import { useAppDispatch, useAppSelector } from "./store/hooks.tsx";
import { modalActions } from "./store/modalStore.store.tsx";
import { cartActions } from "./store/cartStore.store.tsx";
import CartItem from "./types/CartItem.tsx";
import ModalAlert from "./components/General/ModalAlert.tsx";
import ColorsAlerts from "./types/enums/colorsAlert.tsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { searchActions } from "./store/searchStore.store.tsx";

function App() {
  const modal = useAppSelector((state) => state.modal);
  const cart = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();
  const params = useLocation();

  useEffect(() => {
    const URLSearchQuery = new URLSearchParams(params.search);
    const searchQuery = URLSearchQuery.get("search");

    if (searchQuery) {
      dispatch(searchActions.setSearch(searchQuery));
    }
  }, [dispatch, params.search]);

  const onCloseModal = () => {
    dispatch(modalActions.closeModal());
  };

  const addItemToCart = (item: CartItem) => {
    const selectedItemInCart: CartItem | undefined = cart.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    dispatch(cartActions.onAddItemToCart(item));

    if (selectedItemInCart) {
      if (selectedItemInCart.quantity === 20) {
        dispatch(
          modalActions.openModalAlert({
            message: `Não há mais "${item.name}" disponíveis!`,
            color: ColorsAlerts.Danger,
          })
        );
      } else if (selectedItemInCart.quantity + item.quantity > 20) {
        const qtAdded = 20 - selectedItemInCart.quantity;
        dispatch(
          modalActions.openModalAlert({
            message: `Quantidade adicionada maior do que a disponível! ${qtAdded} "${item.name}" foi adicionado(a) ao carrinho!`,
            color: ColorsAlerts.Alert,
          })
        );
      } else {
        dispatch(
          modalActions.openModalAlert({
            message: `${item.quantity} "${item.name}" foi adicionado(a) ao carrinho!`,
            color: ColorsAlerts.Success,
          })
        );
      }
    } else {
      dispatch(
        modalActions.openModalAlert({
          message: `${item.quantity} "${item.name}" foi adicionado(a) ao carrinho!`,
          color: ColorsAlerts.Success,
        })
      );
    }
  };

  const onCloseModalAlert = () => {
    dispatch(modalActions.closeModalAlert());
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex">
      <Content />
      <Modal
        close={onCloseModal}
        item={modal.item}
        addItemToCart={addItemToCart}
        open={modal.modalOpen}
      />
      <ModalAlert
        close={onCloseModalAlert}
        message={modal.modalAlert.message}
        color={modal.modalAlert.color as ColorsAlerts}
        open={modal.modalAlert.open}
      />
    </div>
  );
}

export default App;
