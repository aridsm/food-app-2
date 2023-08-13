import NavLinks from "./NavLinks.tsx";
import SearchBar from "./SearchBar.tsx";
import CartNavLink from "./CartNavLink.tsx";

const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={`${className} flex items-center py-1`}>
      <NavLinks className="flex-1" />
      <h1 className="text-xl font-bold flex-1 text-center">LOGO</h1>
      <div className="flex-1 flex items-center gap-6 justify-end">
        <SearchBar />
        <CartNavLink />
      </div>
    </header>
  );
};

export default Header;
