import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import NavLinks from "../Menu/NavLinks.tsx";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex items-center py-2">
      <h1 className="text-xl font-bold">LOGO</h1>
      <button className="ml-auto">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <NavLinks className="ml-12" />
      <NavLink to="/cart" className="ml-12">
        <FontAwesomeIcon icon={faCartShopping} />
      </NavLink>
    </header>
  );
};

export default Header;
