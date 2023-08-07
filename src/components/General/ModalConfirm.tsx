import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";

const modalElement = document.getElementById("modalConfirm")! as HTMLElement;

const ModalContent: React.FC<{
  onClose: () => void;
  onConfirm: (() => void) | undefined;
  open: boolean;
  message: string;
}> = ({ onClose, open, onConfirm, message }) => {
  const closeModalHandler = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
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
        className={`flex flex-col relative bg-white-beige rounded-lg p-5 transition-all w-[370px] ${
          open ? "top-0" : "-top-5 "
        }`}
      >
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className=" text-mostard text-3xl mb-4"
        />
        <p className="text-center">{message}</p>

        {onConfirm && (
          <button className="button mt-4" onClick={onConfirm}>
            Confirmar
          </button>
        )}
      </section>
    </div>
  );
};

const ModalConfirm: React.FC<{
  close: () => void;
  onConfirm: (() => void) | undefined;
  open: boolean;
  message: string;
}> = ({ close, onConfirm, open, message }) => {
  return ReactDOM.createPortal(
    <ModalContent
      onClose={close}
      onConfirm={onConfirm}
      open={open}
      message={message}
    />,
    modalElement
  );
};

export default ModalConfirm;
