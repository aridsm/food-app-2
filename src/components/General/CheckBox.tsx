import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CheckBox: React.FC<{
  onSelect: () => void;
  selected: boolean;
  className?: string;
}> = ({ onSelect, selected, className }) => {
  return (
    <div className={`w-20 flex justify-center ${className}`}>
      <button
        className="rounded-sm w-[26px] h-[26px] p-1 border border-neutral-400 "
        onClick={onSelect}
      >
        <div
          className={`bg-blue-500 transition rounded-sm flex items-center justify-center w-full h-full text-white-beige ${
            selected ? "opacity-1" : "opacity-0"
          }`}
        >
          <FontAwesomeIcon icon={faCheck} className="w-[10px] h-[10px]" />
        </div>
      </button>
    </div>
  );
};

export default CheckBox;
