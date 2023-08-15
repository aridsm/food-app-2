import {
  IconDefinition,
  faCircleCheck,
  faCircleXmark,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import ColorsAlerts from "../../types/enums/colorsAlert";
import { useEffect, useState } from "react";

const modalElement = document.getElementById("modalConfirm")! as HTMLElement;

const ModalContent: React.FC<{
  onClose: () => void;
  onConfirm: (() => void) | undefined;
  status?: ColorsAlerts;
  open: boolean;
  message: string;
}> = ({ onClose, open, onConfirm, message, status }) => {
  const [currentIcon, setCurrentIcon] = useState<IconDefinition>(faCircleCheck);

  const closeModalHandler = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (status === ColorsAlerts.Alert) {
      setCurrentIcon(faTriangleExclamation);
    } else if (status === ColorsAlerts.Danger) {
      setCurrentIcon(faCircleXmark);
    } else {
      setCurrentIcon(faCircleCheck);
    }
  }, [status]);

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
        className={`flex flex-col relative bg-white-beige rounded-lg p-3 md:p-5 transition-all max-w-[280px] md:max-w-[370px] ${
          open ? "top-0" : "-top-5 "
        }`}
      >
        <FontAwesomeIcon
          icon={currentIcon}
          className={`text-3xl mb-4 ${
            status === ColorsAlerts.Success
              ? "text-emerald-400"
              : status === ColorsAlerts.Danger
              ? "text-red-theme"
              : "text-amber-400"
          }`}
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
  status?: ColorsAlerts;
  open: boolean;
  message: string;
}> = ({ close, onConfirm, open, message, status = ColorsAlerts.Alert }) => {
  return ReactDOM.createPortal(
    <ModalContent
      onClose={close}
      onConfirm={onConfirm}
      open={open}
      message={message}
      status={status}
    />,
    modalElement
  );
};

export default ModalConfirm;
