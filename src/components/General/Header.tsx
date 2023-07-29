import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks.tsx";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../store/hooks.tsx";

const Header: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <header className="flex items-center py-1">
      <NavLinks className="flex-1" />
      <h1 className="text-xl font-bold flex-1 text-center">LOGO</h1>
      <div className="flex-1 flex items-center gap-6 justify-end">
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <NavLink to="/cart" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCartShopping} />
          <div className="bg-neutral-200/[.5] text-neutral-500 text-base rounded-sm px-2">
            {cart.totalItems}
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
