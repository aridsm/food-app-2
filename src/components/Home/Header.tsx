import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "../General/NavLinks.tsx";
import { NavLink } from "react-router-dom";
import SearchBar from "../General/SearchBar.tsx";

const Header: React.FC = () => {
  return (
    <header className="flex items-center py-2">
      <h1 className="text-xl font-bold mr-auto">LOGO</h1>
      <SearchBar />
      <NavLinks className="ml-12" />
      <NavLink to="/cart" className="ml-12">
        <FontAwesomeIcon icon={faCartShopping} />
      </NavLink>
    </header>
  );
};

export default Header;
