import { Location, NavLink, useLocation } from "react-router-dom";
import classes from "./NavLinks.module.css";

const NavLinks: React.FC<{ className?: string }> = ({ className }) => {
  const route: Location = useLocation();
  const currentPath: string = route.pathname;

  return (
    <nav
      className={`${className} absolute z-10 xl:relative bg-red-theme xl:bg-transparent rounded-sm border-2 xl:border-0 border-white-beige`}
    >
      <ul className="flex-col xl:flex-row xl:items-center flex gap-4 xl:gap-10 p-4 xl:p-0">
        <li>
          <NavLink
            to="/"
            className={`xl:border-b-[3px] ${
              currentPath === "/" ? classes.activeLink : "border-transparent"
            }`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={`xl:px-1 border-b-[3px] ${
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
