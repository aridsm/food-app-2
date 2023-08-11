import { Location, NavLink, useLocation } from "react-router-dom";
import classes from "./NavLinks.module.css";

const NavLinks: React.FC<{ className?: string }> = ({ className }) => {
  const route: Location = useLocation();
  const currentPath: string = route.pathname;

  return (
    <nav className={className}>
      <ul className="flex items-center gap-10">
        <li>
          <NavLink
            to="/"
            className={`border-b-[3px] ${
              currentPath === "/" ? classes.activeLink : "border-transparent"
            }`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={`px-1 border-b-[3px] ${
              currentPath === "/menu"
                ? classes.activeLink
                : "border-transparent"
            }`}
          >
            Cardápio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
