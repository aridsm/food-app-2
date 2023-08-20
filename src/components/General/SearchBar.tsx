import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { searchActions } from "../../store/searchStore.store";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search);
  const [searchParams] = useSearchParams();

  const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(() => search.search);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (searchBarVisible && searchValue) {
      searchProduct();
    } else if (searchBarVisible && !searchValue) {
      setSearchBarVisible(false);
    } else {
      setSearchBarVisible(true);
    }
  };

  const searchProduct = () => {
    dispatch(searchActions.setSearch(searchValue));
    setSearchBarVisible(false);

    const pageSearch = searchParams.get("page");

    let query = `?search=${searchValue}`;

    if (!pageSearch) {
      query = query + "&page=1";
    } else {
      query = query + `&page=${pageSearch}`;
    }

    navigate({
      pathname: "/menu",
      search: query,
    });
  };

  const onBlur = () => {
    if (searchValue.trim().length) {
      searchProduct();
    }
  };

  useEffect(() => {
    setSearchValue(search.search);
  }, [search.search]);

  useEffect(() => {
    const onClickBody = (e: Event) => {
      if (
        e.target !== searchRef.current &&
        !searchRef.current!.contains(e.target as Node)
      ) {
        setSearchBarVisible(false);
      }
    };

    window.addEventListener("click", onClickBody);

    return () => {
      window.removeEventListener("click", onClickBody);
    };
  }, [dispatch, searchValue]);

  return (
    <div ref={searchRef} className="flex items-stretch relative">
      <input
        className={`px-[10px] py-[6px] text-sm absolute right-9 transition-all ${
          searchBarVisible ? "w-40 opacity-100" : "w-0 opacity-0"
        }`}
        placeholder="Pesquisar..."
        type="text"
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        onKeyDown={(e) => e.key === "Enter" && searchProduct()}
        onBlur={onBlur}
      />
      <button
        title="Procurar item"
        className="w-8 h-8"
        onClick={handleButtonClick}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default SearchBar;
