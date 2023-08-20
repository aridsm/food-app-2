import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Page from "../../types/interfaces/page";
import setURLQueryParams from "../../utils/queryParams";

const Pagination: React.FC<{
  page: Page;
  length: number;
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}> = ({ page, length, setPage }) => {
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

  const setQueryParamPage = (value: string | number) => {
    setURLQueryParams({
      page: String(value),
    });
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-between items-center mt-5 mb-6">
      {page.totalPages >= 1 && (
        <div className="text-neutral-400 flex-1">
          Página {page.currentPage} de {page.totalPages}
        </div>
      )}
      <div className="flex-1 text-center">{length} resultados</div>
      {page.totalPages >= 1 && (
        <div className="flex items-stretch flex-1 text-end gap-1">
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
      )}
    </div>
  );
};

export default Pagination;
