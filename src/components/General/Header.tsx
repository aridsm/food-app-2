import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks.tsx";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex items-center py-2">
      <NavLinks className="flex-1" />
      <h1 className="text-xl font-bold flex-1 text-center">LOGO</h1>
      <div className="flex-1 flex items-center gap-6 justify-end">
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <NavLink to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
