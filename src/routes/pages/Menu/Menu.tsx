import { memo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Categories from "../../../types/enums/categories";
import Results from "../../../components/Menu/Results";
import classes from "./Menu.module.css";
import categories from "../../../store/categories";

const Menu: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<
    Array<Categories | 0>
  >([0]);
  const [priceRange, setPriceRange] = useState<{
    min: number | "";
    max: number | "";
  }>({
    min: "",
    max: "",
  });
  const UlMenuList = useRef<HTMLUListElement | null>(null);
  const DivContainerList = useRef<HTMLDivElement | null>(null);

  const checkSelectedCategory = (category: Categories | 0) => {
    if (!category) {
      setSelectedCategories([0]);
      return;
    }

    const categoryIsAlreadySelected = selectedCategories.find(
      (catId) => catId === category
    );

    if (categoryIsAlreadySelected) {
      setSelectedCategories((currState) => {
        const newCurrState = currState.filter((catId) => catId !== category);
        return !newCurrState.length ? [0] : newCurrState;
      });
    } else {
      setSelectedCategories((currState) => {
        const newCurrState = currState.filter((catId) => catId !== 0);
        return [...newCurrState, category];
      });
    }
  };

  const onDeleteCategory = (id: Categories) => {
    checkSelectedCategory(id);
  };

  const setMinValue = (val: string) => {
    setPriceRange((state) => {
      let value: number | "" = Math.abs(Number(val));
      if (value <= 0) {
        value = "";
      }
      return { ...state, min: value };
    });
  };

  const setMaxValue = (val: string) => {
    setPriceRange((state) => {
      let value: number | "" = Math.abs(Number(val));
      if (value <= 0) {
        value = "";
      }
      return { ...state, max: value };
    });
  };

  const onBlurPrice = (prop: "min" | "max") => {
    if (priceRange.min && priceRange.max) {
      if (priceRange.min > priceRange.max) {
        setPriceRange((state) => ({ ...state, [prop]: "" }));
      }
    }
  };

  const cleanPriceRange = () => {
    setPriceRange({ min: "", max: "" });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2>Categorias</h2>
        <div className="flex items-center md:text-base gap-4 text-neutral-400 -mb-[9px] z-10">
          <p>Preço</p>
          <div className="flex items-center">
            <div className="relative">
              <span className="absolute left-1 top-[5.5px] text-neutral-700">
                R$
              </span>
              <input
                placeholder="0,00"
                type="number"
                value={priceRange.min}
                onChange={({ target }) => setMinValue(target.value)}
                onBlur={() => onBlurPrice("min")}
                className="w-16 sm:w-20 p-1 pl-7 border-x-transparent sm:border-b-2 border-t-transparent border-neutral-600 bg-transparent placeholder:text-neutral-600"
              />
            </div>

            <p className="mx-2">até</p>
            <div className="relative">
              <span className="absolute left-1 top-[5.5px] text-neutral-700">
                R$
              </span>
              <input
                placeholder="0,00"
                type="number"
                value={priceRange.max}
                onChange={({ target }) => setMaxValue(target.value)}
                onBlur={() => onBlurPrice("max")}
                className="w-16 sm:w-20 p-1 pl-7 border-x-transparent sm:border-b-2 border-t-transparent border-neutral-600 bg-transparent placeholder:text-neutral-600"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={DivContainerList}
        className={`overflow-auto ${classes.containerCategories}`}
      >
        <ul
          ref={UlMenuList}
          className={`flex gap-4 md:gap-12 relative top-0 left-0 text-neutral-400 border-y border-neutral-200 py-2 md:py-4 md:text-base w-fit ${classes.ulList}`}
        >
          {categories.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => checkSelectedCategory(item.id)}
                className={`py-2 px-4 rounded-sm flex flex-col gap-2 items-center justify-center ${
                  selectedCategories.includes(item.id)
                    ? "bg-red-theme text-white-beige hover:bg-red-theme"
                    : "hover:bg-neutral-200/[.4]"
                } `}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-sm md:text-lg"
                />
                <p>{item.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Results
        selectedCategories={
          selectedCategories.filter((item) => item !== 0) as Categories[]
        }
        onDeleteCategory={onDeleteCategory}
        priceRange={priceRange}
        cleanPriceRange={cleanPriceRange}
      />
    </div>
  );
};

export default memo(Menu);
