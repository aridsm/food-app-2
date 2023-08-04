import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Page from "../../types/interfaces/page";

const Pagination: React.FC<{
  onChangePage: (val: string) => void;
  toPrevious: () => void;
  toNextPage: () => void;
  page: Page;
  length: number;
}> = ({ onChangePage, toPrevious, toNextPage, page, length }) => {
  return (
    <div className="flex justify-between items-center my-6">
      <div className="text-neutral-400 flex-1">
        Página {page.currentPage} de {page.totalPages}
      </div>
      <div className="flex-1 text-center">{length} resultados</div>
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
  );
};

export default Pagination;
