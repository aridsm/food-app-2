import { faPhone, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-between pl-20 text-base text-neutral-400">
      <span>
        <FontAwesomeIcon icon={faTruck} className="mr-3" /> Delivery
      </span>
      <span>
        <FontAwesomeIcon icon={faPhone} className="mr-3" />
        +55 (00) 1234-5678
      </span>
    </footer>
  );
};

export default Footer;
