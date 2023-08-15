import { Location, NavLink, useLocation } from "react-router-dom";
import classes from "./NavLinks.module.css";

const NavLinks: React.FC<{ className?: string }> = ({ className }) => {
  const route: Location = useLocation();
  const currentPath: string = route.pathname;

  return (
    <nav
      className={`${className} bg-white-beige absolute z-10 rounded-sm border-2 border-neutral-200`}
    >
      <ul className="flex-col flex gap-4 p-4 ">
        <li>
          <NavLink
            to="/"
            className={` ${
              currentPath === "/" ? classes.activeLink : "border-transparent"
            }`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={` border-b-[3px] ${
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
