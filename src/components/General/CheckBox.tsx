import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CheckBox: React.FC<{
  onSelect: () => void;
  selected: boolean;
  semiSelected?: boolean;
  className?: string;
}> = ({ onSelect, selected, semiSelected, className }) => {
  return (
    <div className={`w-16 flex justify-start ${className}`}>
      <button
        className="rounded-sm w-[26px] h-[26px] p-1 border border-neutral-400"
        onClick={onSelect}
      >
        <div
          className={`bg-blue-500 transition-all rounded-sm flex items-center justify-center w-full text-white-beige ${
            selected || semiSelected ? "opacity-100" : "opacity-0"
          } ${semiSelected ? "h-2" : "h-full"}`}
        >
          <FontAwesomeIcon
            icon={faCheck}
            className={`w-[10px] h-[10px] ${
              selected ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </button>
    </div>
  );
};

export default CheckBox;
