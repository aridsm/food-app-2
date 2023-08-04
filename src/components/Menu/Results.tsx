import { useState, useEffect } from "react";
import menuItems from "../../store/menuList";
import MenuItem from "../../types/interfaces/menuItem";
import classes from "./Results.module.css";
import Chip from "./Chip";
import Categories from "../../types/enums/categories";
import categories from "../../store/categories";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { modalActions } from "../../store/modalStore.store";
import { searchActions } from "../../store/searchStore.store";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import Page from "../../types/interfaces/page";
import convertToCurrency from "../../utils/convertToCurrency";

const itemsPerPage = 9;

const Results: React.FC<{
  selectedCategories: Categories[];
  onDeleteCategory: (id: Categories) => void;
}> = ({ selectedCategories, onDeleteCategory }) => {
  const search = useAppSelector((state) => state.search);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const [menuItemsList, setMenuItemsList] = useState<MenuItem[]>(menuItems);
  const [shownMenuItems, setShownMenuItems] = useState<MenuItem[]>(() =>
    menuItemsList.slice(0, itemsPerPage)
  );
  const [page, setPage] = useState<Page>({
    currentPage: 1,
    totalPages: 1,
  });

  useEffect(() => {
    setPage((state: Page) => {
      const totalPages = Math.floor(menuItemsList.length / itemsPerPage);

      const pageSearch = searchParams.get("page");

      const page = pageSearch
        ? { currentPage: Number(pageSearch) }
        : { currentPage: state.currentPage };

      return { ...page, totalPages };
    });
  }, [menuItemsList, searchParams]);

  useEffect(() => {
    setShownMenuItems(() => {
      const firstIndexToShow: number = (page.currentPage - 1) * itemsPerPage;
      return menuItemsList.slice(
        firstIndexToShow,
        itemsPerPage + firstIndexToShow
      );
    });
  }, [menuItemsList, page.currentPage]);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onChangePage = (value: string) => {
    setPage((state: Page) => {
      let pageSelected: number =
        Number(value) > page.totalPages ? page.totalPages : Number(value);

      pageSelected = pageSelected <= 0 ? 1 : pageSelected;
      return { ...state, currentPage: pageSelected };
    });
    toTop();
    setQueryParamPage(value);
  };

  const toPrevious = () => {
    setPage((state: Page) => {
      return { ...state, currentPage: state.currentPage - 1 };
    });
    toTop();
    setQueryParamPage(page.currentPage - 1);
  };

  const toNextPage = () => {
    setPage((state: Page) => {
      return { ...state, currentPage: state.currentPage + 1 };
    });
    toTop();
    setQueryParamPage(page.currentPage + 1);
  };

  const getCategoryName = (id: Categories) => {
    const currCategory = categories.find((category) => category.id === id);
    return currCategory?.name || "";
  };

  const openModalItemMenu = (item: MenuItem) => {
    dispatch(modalActions.openModal(item));
  };

  const onCleanSearch = () => {
    const pageSearch = searchParams.get("page");

    dispatch(searchActions.setSearch(""));
    navigate({
      pathname: "/menu",
      search: `?page=${pageSearch}`,
    });
  };

  const setQueryParamPage = (value: string | number) => {
    const searchSearch = searchParams.get("search");

    const searchQuery = `${searchSearch ? `search=${searchSearch}` : ""}`;
    const pageQuery = `page=${value}`;

    navigate({
      pathname: "/menu",
      search: `?${searchQuery}&${pageQuery}`,
    });
  };

  return (
    <div className="text-base">
      <Pagination
        onChangePage={onChangePage}
        toPrevious={toPrevious}
        toNextPage={toNextPage}
        page={page}
        length={menuItemsList.length}
      />
      {(!!selectedCategories.length || !!search.search.length) && (
        <div className="mb-6 flex gap-4 flex-wrap">
          {selectedCategories.map((category) => (
            <Chip
              title={getCategoryName(category)}
              key={category}
              action={() => onDeleteCategory(category)}
            />
          ))}
          {search.search.length > 0 && (
            <Chip title={search.search} action={onCleanSearch} />
          )}
        </div>
      )}

      <ul className="grid grid-cols-3 gap-16 border-b border-neutral-200 pb-10">
        {shownMenuItems.map((item) => (
          <li key={item.id}>
            <button
              className={`bg-neutral-50 p-3 rounded-md text-left w-fit ${classes.card}`}
              onClick={() => openModalItemMenu(item)}
            >
              <div className="w-full h-52 rounded-md overflow-hidden mb-3">
                <img
                  src={`/src/assets/imgs/imgs-menu/${item.imgPath}`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p>{item.name}</p>
              <p className="text-neutral-400 text-ellipsis overflow-hidden line-clamp-2 mb-5">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <div>{convertToCurrency(item.price)}</div>
                <button
                  className="button p-0"
                  style={{ padding: "0.4rem 1rem" }}
                >
                  Comprar
                </button>
              </div>
            </button>
          </li>
        ))}
      </ul>
      <Pagination
        onChangePage={onChangePage}
        toPrevious={toPrevious}
        toNextPage={toNextPage}
        page={page}
        length={menuItemsList.length}
      />
    </div>
  );
};

export default Results;
