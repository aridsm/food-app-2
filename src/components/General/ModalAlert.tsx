import ReactDOM from "react-dom";
import ColorsAlerts from "../../types/enums/colorsAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faCircleCheck,
  faCircleExclamation,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import classes from "./ModalAlert.module.css";

const modalElement = document.getElementById("modalAlert")! as HTMLElement;

const ModalContent: React.FC<{
  onClose: () => void;
  message: string;
  color: ColorsAlerts;
  open: boolean;
}> = ({ onClose, message, color, open }) => {
  const [currentIcon, setCurrentIcon] = useState<IconDefinition>(faCircleCheck);
  const refTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (color === ColorsAlerts.Alert) {
      setCurrentIcon(faCircleExclamation);
    } else if (color === ColorsAlerts.Danger) {
      setCurrentIcon(faCircleXmark);
    } else {
      setCurrentIcon(faCircleCheck);
    }
  }, [color]);

  useEffect(() => {
    refTimer.current = setTimeout(() => {
      onClose();
    }, 1500);
    return () => clearTimeout(refTimer.current);
  }, [onClose]);

  return (
    <div
      className={`max-w-[980px] w-full px-2 left-0 right-0 mx-auto fixed z-50 pointer-events-none transition-all ${
        open ? "top-4 opacity-100" : "top-0 opacity-0"
      }`}
    >
      <div
        className={`flex items-center md:text-base gap-2 bg-white-beige rounded-md w-60 p-3 md:w-80 mr-auto ${classes.alertContainer}`}
      >
        <p>{message}</p>
        <FontAwesomeIcon
          icon={currentIcon}
          className={` w-5 h-5 ${
            color === ColorsAlerts.Success
              ? "text-emerald-400"
              : color === ColorsAlerts.Danger
              ? "text-red-theme"
              : "text-amber-400"
          }`}
        />
      </div>
    </div>
  );
};

const ModalAlert: React.FC<{
  close: () => void;
  message: string;
  color: ColorsAlerts;
  open: boolean;
}> = ({ close, message, color, open }) => {
  return ReactDOM.createPortal(
    <ModalContent
      onClose={close}
      message={message}
      color={color}
      open={open}
    />,
    modalElement
  );
};

export default ModalAlert;
