import { useState, useEffect } from "react";
import menuItems from "../../store/menuList";
import MenuItem from "../../types/interfaces/menuItem";
import classes from "./Results.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Chip from "./Chip";
import Categories from "../../types/enums/categories";
import categories from "../../store/categories";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { modalActions } from "../../store/modalStore.store";
import { searchActions } from "../../store/searchStore.store";

interface Page {
  currentPage: number;
  totalPages: number;
}

const itemsPerPage = 9;

const Results: React.FC<{
  selectedCategories: Categories[];
  onDeleteCategory: (id: Categories) => void;
}> = ({ selectedCategories, onDeleteCategory }) => {
  const search = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

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
      return { ...state, totalPages };
    });
  }, [menuItemsList]);

  useEffect(() => {
    setShownMenuItems(() => {
      const firstIndexToShow: number = (page.currentPage - 1) * itemsPerPage;
      return menuItemsList.slice(
        firstIndexToShow,
        itemsPerPage + firstIndexToShow
      );
    });
  }, [menuItemsList, page.currentPage]);

  const onChangePage = (value: string) => {
    setPage((state: Page) => {
      let pageSelected: number =
        Number(value) > page.totalPages ? page.totalPages : Number(value);

      pageSelected = pageSelected <= 0 ? 1 : pageSelected;

      return { ...state, currentPage: pageSelected };
    });
  };

  const toPrevious = () => {
    setPage((state: Page) => {
      return { ...state, currentPage: state.currentPage - 1 };
    });
  };

  const toNextPage = () => {
    setPage((state: Page) => {
      return { ...state, currentPage: state.currentPage + 1 };
    });
  };

  const getCategoryName = (id: Categories) => {
    const currCategory = categories.find((category) => category.id === id);

    return currCategory?.name || "";
  };

  const openModalItemMenu = (item: MenuItem) => {
    dispatch(modalActions.openModal(item));
  };

  const onCleanSearch = () => {
    dispatch(searchActions.setSearch(""));
  };

  const convertToCurrency = (val: number) => {
    return val.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="text-base">
      <div className="flex justify-between items-center my-6">
        <div className="text-neutral-400 flex-1">
          Página {page.currentPage} de {page.totalPages}
        </div>
        <div className="flex-1 text-center">
          {menuItemsList.length} resultados
        </div>
        <div className="flex items-center flex-1 text-end gap-1">
          <button
            disabled={page.currentPage === 1}
            className="text-red-theme px-3 hover:bg-neutral-200/[.4] rounded-sm ml-auto disabled:text-red-theme/[.2] disabled:cursor-not-allowed"
            onClick={toPrevious}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <input
            type="number"
            value={page.currentPage}
            className="px-2 py-1 w-12"
            min="1"
            max={page.totalPages}
            onChange={(e) => onChangePage(e.target.value)}
          />
          <button
            disabled={page.currentPage === page.totalPages}
            className="text-red-theme px-3 hover:bg-neutral-200/[.4] rounded-sm disabled:text-red-theme/[.2] disabled:cursor-not-allowed"
            onClick={toNextPage}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
      </div>

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

      <ul className="grid grid-cols-3 gap-16">
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
    </div>
  );
};

export default Results;
