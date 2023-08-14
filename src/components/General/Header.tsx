import NavLinks from "./NavLinks.tsx";
import SearchBar from "./SearchBar.tsx";
import CartNavLink from "./CartNavLink.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

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
    <header className={`${className} flex items-center py-1 px-1`}>
      <div className="relative flex-1">
        <button
          ref={refButtonMenu}
          aria-label="menu"
          className={`px-2 text-left py-[4px] rounded-sm block xl:hidden border-2 transition-all max-w-fit ${
            menuOpen ? "border-mostard" : "border-transparent"
          }`}
          onClick={() => setMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} className="text-lg" />
        </button>

        <NavLinks
          className={`lg:flex-1 transition-all  xl:top-0 ${
            menuOpen ? "opacity-100 top-12" : "opacity-0 top-16"
          }`}
        />
      </div>
      <h1 className="text-xl font-bold flex-1 text-center">LOGO</h1>
      <div className="flex-1 flex items-center gap-6 justify-end">
        <SearchBar />
        <CartNavLink />
      </div>
    </header>
  );
};

export default Header;
