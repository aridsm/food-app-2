import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Chip: React.FC<{ title: string; action: () => void }> = ({
  title,
  action,
}) => {
  return (
    <div className="rounded-full bg-blue-100 flex items-center gap-2 pl-5 pr-2 py-1 w-fit text-cyan-700">
      <p>{title}</p>
      <button
        className="hover:bg-blue-200/[.5] rounded-full w-7 h-7"
        onClick={action}
      >
        <FontAwesomeIcon icon={faXmark} className="text-sm" />
      </button>
    </div>
  );
};

export default Chip;
