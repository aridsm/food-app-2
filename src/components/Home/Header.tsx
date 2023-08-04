import NavLinks from "../General/NavLinks.tsx";
import SearchBar from "../General/SearchBar.tsx";
import CartNavLink from "../General/CartNavLink.tsx";

const Header: React.FC = () => {
  return (
    <header className="flex items-center py-2">
      <h1 className="text-xl font-bold mr-auto">LOGO</h1>
      <SearchBar />
      <NavLinks className="ml-12 mr-12" />
      <CartNavLink />
    </header>
  );
};

export default Header;
