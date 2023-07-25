import { useState, useEffect } from "react";
import menuItems from "../../store/menuList";
import MenuItem from "../../types/interfaces/menuItem";
import classes from "./Results.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

interface Page {
  currentPage: number;
  totalPages: number;
}

const itemsPerPage = 9;

const Results: React.FC = () => {
  const [menuItemsList, setMenuItemsList] = useState<MenuItem[]>(menuItems);
  const [shownMenuItems, setShownMenuItems] = useState<MenuItem[]>(() =>
    menuItemsList.slice(0, itemsPerPage)
  );
  const [totalItems, setTotalItems] = useState<number>(menuItems.length);
  const [page, setPage] = useState<Page>({
    currentPage: 1,
    totalPages: 1,
  });

  useEffect(() => {
    setPage((state: Page) => {
      const totalPages = Math.floor(totalItems / itemsPerPage);
      return { ...state, totalPages };
    });
  }, [totalItems]);

  useEffect(() => {
    setShownMenuItems(() => {
      const firstIndexToShow = (page.currentPage - 1) * itemsPerPage;
      return menuItemsList.slice(
        firstIndexToShow,
        itemsPerPage + firstIndexToShow
      );
    });
  }, [menuItemsList, page.currentPage]);

  const onChangePage = (value: string) => {
    setPage((state: Page) => {
      const pageSelected: number =
        Number(value) > page.totalPages ? page.totalPages : Number(value);

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

  return (
    <div className="text-base">
      <div className="flex justify-between items-center my-6">
        <div className="text-neutral-400 flex-1">
          Página {page.currentPage} de {page.totalPages}
        </div>
        <div className="flex-1 text-center">{totalItems} resultados</div>
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

      <ul className="grid grid-cols-3 gap-16">
        {shownMenuItems.map((item) => (
          <li key={item.id}>
            <button
              className={`bg-neutral-50 p-3 rounded-md text-left w-fit ${classes.card}`}
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
                <div>R$ 20,00</div>
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
