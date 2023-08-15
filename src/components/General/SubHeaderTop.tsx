import { faClock, faPhone, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubHeaderTop: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`${className} bg-red-theme py-1 w-full text-[9px] sm:text-xs text-white-beige`}
    >
      <div className="max-w-[980px] mx-auto px-2 flex items-center justify-between">
        <span className="flex-1">
          <FontAwesomeIcon
            icon={faTruck}
            className="text-[8px] sm:text-xs  mr-[2px] sm:mr-1"
          />{" "}
          Delivery - Fortaleza/CE
        </span>
        <span className="sm:flex-1 text-center">
          <FontAwesomeIcon
            icon={faClock}
            className="text-[8px] sm:text-xs mr-1"
          />
          <span className="hidden sm:inline">
            <time>17:00</time>h - <time>23:00</time>h
          </span>
          <span className="inline sm:hidden">
            <time>17</time>h - <time>23</time>h
          </span>
        </span>
        <span className="flex-1 text-end">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-[8px] sm:text-xs mr-[2px] sm:mr-1"
          />
          +55 (00) 1234-5678
        </span>
      </div>
    </div>
  );
};

export default SubHeaderTop;
