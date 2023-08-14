import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../store/hooks.tsx";

const CartNavLink: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <NavLink to="/cart" className="flex items-center gap-2" title="Carrinho">
      <FontAwesomeIcon icon={faCartShopping} />
      <div className="bg-neutral-200/[.3] text-sm  md:text-base rounded-sm px-2">
        {cart.totalItems}
      </div>
    </NavLink>
  );
};

export default CartNavLink;
