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
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import Page from "../../types/interfaces/page";
import convertToCurrency from "../../utils/convertToCurrency";
import setURLQueryParams from "../../utils/queryParams";
import ImgResult from "./ImgResult";

const itemsPerPage = 9;

const Results: React.FC<{
  selectedCategories: Categories[];
  onDeleteCategory: (id: Categories) => void;
  priceRange: { min: number | ""; max: number | "" };
  cleanPriceRange: () => void;
}> = ({
  selectedCategories,
  onDeleteCategory,
  priceRange,
  cleanPriceRange,
}) => {
  const search = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const [menuItemsList, setMenuItemsList] = useState<MenuItem[]>(menuItems);
  const [shownMenuItems, setShownMenuItems] = useState<MenuItem[]>(() =>
    menuItemsList.slice(0, itemsPerPage)
  );
  const [page, setPage] = useState<Page>({
    currentPage: Number(searchParams.get("page")) || 1,
    totalPages: 1,
  });

  useEffect(() => {
    let itemsFiltered = menuItems;

    if (search.search.length) {
      itemsFiltered = menuItems.filter((item: MenuItem) =>
        item.name.toLowerCase().includes(search.search.toLowerCase())
      );
    }

    if (selectedCategories.length) {
      itemsFiltered = itemsFiltered.filter((item: MenuItem) =>
        selectedCategories.includes(item.category)
      );
    }

    if (priceRange.min || priceRange.max) {
      itemsFiltered = itemsFiltered.filter((item: MenuItem) => {
        if (
          priceRange.min &&
          priceRange.max &&
          priceRange.min <= priceRange.max
        ) {
          if (item.price >= priceRange.min && item.price <= priceRange.max) {
            return item;
          }
        } else if (priceRange.min && !priceRange.max) {
          if (item.price >= priceRange.min) {
            return item;
          }
        } else if (!priceRange.min && priceRange.max) {
          if (item.price <= priceRange.max) {
            return item;
          }
        } else {
          return item;
        }
      });
    }

    setMenuItemsList(itemsFiltered);
  }, [priceRange.max, priceRange.min, search.search, selectedCategories]);

  useEffect(() => {
    const firstIndexToShow: number = (page.currentPage - 1) * itemsPerPage;

    const itemsShown = menuItemsList.slice(
      firstIndexToShow,
      itemsPerPage + firstIndexToShow
    );

    const totalPages = Math.ceil(menuItemsList.length / itemsPerPage);

    if (!itemsShown.length) {
      setPage(() => {
        return {
          currentPage: 1,
          totalPages: totalPages,
        };
      });

      setURLQueryParams({
        page: "1",
      });
    } else {
      setPage((state) => {
        return {
          ...state,
          totalPages: totalPages,
        };
      });
    }

    setShownMenuItems(itemsShown);
  }, [menuItemsList, page.currentPage]);

  const getCategoryName = (id: Categories) => {
    const currCategory = categories.find((category) => category.id === id);
    return currCategory?.name || "";
  };

  const openModalItemMenu = (item: MenuItem) => {
    dispatch(modalActions.openModal(item));
  };

  const onCleanSearch = () => {
    dispatch(searchActions.setSearch(""));
    setURLQueryParams({
      page: "1",
      search: undefined,
    });
  };

  return (
    <div className="md:text-base">
      <Pagination setPage={setPage} page={page} length={menuItemsList.length} />

      {(!!selectedCategories.length ||
        !!search.search.length ||
        priceRange.min ||
        priceRange.max) && (
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

          {priceRange.min && (
            <Chip
              title={`mínimo: ${convertToCurrency(priceRange.min)}`}
              action={cleanPriceRange}
            />
          )}
          {priceRange.max && (
            <Chip
              title={`máximo: ${convertToCurrency(priceRange.max)}`}
              action={cleanPriceRange}
            />
          )}
        </div>
      )}

      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 lg:gap-8 xl:gap-16 border-b border-neutral-200 pb-8 sm:pb-10">
        {shownMenuItems.length > 0 &&
          shownMenuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`bg-neutral-50 p-1 sm:p-2 lg:p-3 w-full h-full rounded-md text-left  ${classes.card}`}
                onClick={() => openModalItemMenu(item)}
              >
                <ImgResult name={item.name} path={item.img} />
                <p>{item.name}</p>
                <p className="text-neutral-400 text-ellipsis overflow-hidden line-clamp-2 mb-5 mt-1">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>{convertToCurrency(item.price)}</div>
                  <div className="bg-red-theme rounded-sm text-white-beige hover:bg-red-hover px-3 py-1 sm:px-4 sm:py-[.4rem]">
                    Comprar
                  </div>
                </div>
              </button>
            </li>
          ))}
        {menuItemsList.length === 0 && (
          <p className="text-center mx-auto w-full col-span-3 py-28 text-neutral-400">
            Não foram encontrado resultados para este filtro!
          </p>
        )}
      </ul>
      <Pagination setPage={setPage} page={page} length={menuItemsList.length} />
    </div>
  );
};

export default Results;
