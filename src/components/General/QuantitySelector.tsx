import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const maxQuantity = 20;

const QuantitySelector: React.FC<{
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}> = ({ quantity, setQuantity }) => {
  const onChangeQuantity = (value: string) => {
    const val = Number(value);
    if (val < 1) {
      return;
    } else if (val > maxQuantity) {
      return;
    } else {
      setQuantity(val);
    }
  };

  const decreaseQuantityHandler = () => {
    setQuantity((currState) => {
      if (currState - 1 === 0) {
        return 1;
      } else {
        return currState - 1;
      }
    });
  };

  const increaseQuantityHandler = () => {
    setQuantity((currState) => {
      if (currState + 1 > maxQuantity) {
        return maxQuantity;
      } else {
        return currState + 1;
      }
    });
  };

  return (
    <div className="flex gap-[2px] sm:gap-1 sm:text-base ">
      <button
        disabled={quantity === 1}
        className="text-red-theme px-2 hover:bg-neutral-200/[.4] text-[10px] sm:text-xs rounded-sm disabled:text-red-theme/[.2] disabled:cursor-not-allowed"
        onClick={decreaseQuantityHandler}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        type="number"
        value={quantity}
        className="px-1 py-[3px] w-7 sm:px-2 sm:py-1 sm:w-10"
        min="1"
        max={maxQuantity}
        onChange={(e) => onChangeQuantity(e.target.value)}
      />
      <button
        disabled={quantity === maxQuantity}
        className="text-red-theme px-2 hover:bg-neutral-200/[.4] text-[10px] sm:text-xs rounded-sm disabled:text-red-theme/[.2] disabled:cursor-not-allowed"
        onClick={increaseQuantityHandler}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default QuantitySelector;
