import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex items-center py-2">
      <h1 className="text-xl font-bold">LOGO</h1>
      <button className="ml-auto">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <nav className="ml-12">
        <ul className="flex items-center gap-12">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Cardápio</NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/cart" className="ml-12">
        <FontAwesomeIcon icon={faCartShopping} />
      </NavLink>
    </header>
  );
};

export default Header;
