import { useState } from "react";

const Prices: React.FC = () => {
  const [priceRange, setPriceRange] = useState<{
    min: number | "";
    max: number | "";
  }>({
    min: "",
    max: "",
  });

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

  return (
    <div className="flex items-center text-base gap-4 text-neutral-400 -mb-3 z-10">
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
            className="w-20 p-1 pl-7 border-x-transparent border-b-2 border-t-transparent border-neutral-600 bg-transparent placeholder:text-neutral-600"
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
            className="w-20 p-1 pl-7 border-x-transparent border-b-2 border-t-transparent border-neutral-600 bg-transparent placeholder:text-neutral-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Prices;
