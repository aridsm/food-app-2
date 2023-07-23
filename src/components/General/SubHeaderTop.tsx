import { faClock, faPhone, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubHeaderTop: React.FC = () => {
  return (
    <div className=" bg-red-theme py-1 w-full text-xs text-white-beige">
      <div className="max-w-[980px] mx-auto  px-2 flex items-center justify-between">
        <span className="flex-1">
          <FontAwesomeIcon icon={faTruck} className="mr-1" /> Delivery
        </span>
        <span className="flex-1 text-center">
          <FontAwesomeIcon icon={faClock} className="mr-1" />
          <time>17:00</time>h - <time>23:00</time>h
        </span>
        <span className="flex-1 text-end">
          <FontAwesomeIcon icon={faPhone} className="mr-1" />
          +55 (00) 1234-5678
        </span>
      </div>
    </div>
  );
};

export default SubHeaderTop;
