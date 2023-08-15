import { NavLink } from "react-router-dom";

const NavLinks: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <nav
      className={`${className}  card bg-white-beige absolute z-10 rounded-sm border-2 border-neutral-200/[.3]`}
    >
      <ul className="flex-col flex gap-4 p-4 text-neutral-600">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Cardápio</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
