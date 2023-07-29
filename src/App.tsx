import Content from "./routes/Content";
import ArcSvg from "./assets/imgs/arc.tsx";
import Modal from "./components/General/Modal.tsx";
import { useAppDispatch, useAppSelector } from "./store/hooks.tsx";
import { modalActions } from "./store/modalStore.store.tsx";
import { cartActions } from "./store/cartStore.store.tsx";
import CartItem from "./types/CartItem.tsx";

function App() {
  const modal = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();

  const onCloseModal = () => {
    dispatch(modalActions.closeModal());
  };

  const addItemToCart = (item: CartItem) => {
    dispatch(cartActions.onAddItemToCart(item));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Content />
      <ArcSvg className="absolute top-0 -right-[125px] rotate-180 -z-10" />

      {modal.modalOpen && (
        <Modal
          close={onCloseModal}
          item={modal.item}
          addItemToCart={addItemToCart}
        />
      )}
    </div>
  );
}

export default App;
