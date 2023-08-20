import NavLinks from "./NavLinks.tsx";
import SearchBar from "./SearchBar.tsx";
import CartNavLink from "./CartNavLink.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC<{ className?: string }> = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const refButtonMenu = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onClickPage = ({ target }: { target: EventTarget | null }) => {
      if (
        target !== refButtonMenu.current &&
        !refButtonMenu.current?.contains(target as Node)
      )
        setMenuOpen(false);
    };

    window.addEventListener("click", onClickPage);

    return () => {
      window.removeEventListener("click", onClickPage);
    };
  }, []);

  return (
    <header className={`${className} flex items-center py-1`}>
      <div className="relative flex-1">
        <button
          ref={refButtonMenu}
          aria-label="menu"
          className={` rounded-sm block border-2 transition-all w-8 h-8 ${
            menuOpen ? "border-mostard" : "border-neutral-200/[.3]"
          }`}
          onClick={() => setMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} className="text-lg" />
        </button>

        <NavLinks
          className={`transition-all ${
            menuOpen
              ? "opacity-100 top-12"
              : "opacity-0 top-16 pointer-events-none"
          }`}
        />
      </div>
      <NavLink to="/menu" className="flex-1 text-center">
        <h1 className="text-lg sm:text-xl font-bold">LOGO</h1>
      </NavLink>

      <div className="flex-1 flex items-center gap-6 justify-end">
        <SearchBar />
        <CartNavLink />
      </div>
    </header>
  );
};

export default Header;
