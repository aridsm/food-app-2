import {
  IconDefinition,
  faAppleWhole,
  faBowlRice,
  faBurger,
  faCandyCane,
  faCarrot,
  faCookieBite,
  faMartiniGlassCitrus,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Categories from "../../../types/enums/categories";
import Results from "../../../components/Menu/Results";
import classes from "./Menu.module.css";

interface category {
  name: string;
  id: Categories | 0;
  icon: IconDefinition;
}

interface positions {
  initial: number;
  final: number;
  current: number;
}

const Menu: React.FC = () => {
  const categories: category[] = [
    {
      name: "Todos",
      icon: faCookieBite,
      id: 0,
    },
    {
      name: "Sanduíches",
      icon: faBurger,
      id: Categories.Sandwiches,
    },
    {
      name: "Pizzas",
      icon: faPizzaSlice,
      id: Categories.Pizzas,
    },
    {
      name: "Saudável",
      icon: faAppleWhole,
      id: Categories.Healthy,
    },
    {
      name: "Vegetariano",
      icon: faCarrot,
      id: Categories.Vegan,
    },
    {
      name: "Sobremesas",
      icon: faCandyCane,
      id: Categories.Desserts,
    },
    {
      name: "Bebidas",
      icon: faMartiniGlassCitrus,
      id: Categories.Drinks,
    },
    {
      name: "Outros",
      icon: faBowlRice,
      id: Categories.Others,
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState<
    Array<Categories | 0>
  >([0]);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [positions, setPositions] = useState<positions>({
    initial: 0,
    final: 0,
    current: 0,
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

  const mouseDownAction = (e: React.MouseEvent) => {
    setIsMoving(true);
    setPositions((currState) => ({ ...currState, initial: e.clientX }));
    UlMenuList.current!.style.cursor = "grabbing";
  };

  const mouseMoveAction = (e: React.MouseEvent) => {
    if (isMoving) {
      UlMenuList.current!.style.cursor = "grabbing";

      const minLeft =
        DivContainerList.current!.getBoundingClientRect().width -
        UlMenuList.current!.getBoundingClientRect().width;

      let left =
        (e.clientX - positions.initial) * 1.5 + Number(positions.final);

      if (left > 0) {
        left = 0;
      }

      if (left < minLeft) {
        left = minLeft;
      }

      UlMenuList.current!.style.left = left + "px";

      setPositions((currState) => ({ ...currState, current: left }));
    }
  };

  const mouseLeaveAction = () => {
    endGrabbing();
  };

  const mouseUpAction = () => {
    endGrabbing();
  };

  const endGrabbing = () => {
    setIsMoving(false);
    setPositions((currState) => ({ ...currState, final: currState.current }));
    UlMenuList.current!.style.cursor = "grab";
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <h2>Categorias </h2>
        <div className="flex items-center text-base gap-4 text-neutral-400 -mb-3">
          <p>Preço</p>
          <div className="flex items-center">
            <input
              placeholder="R$ 0,00"
              className="w-20 p-1 border-x-transparent border-b border-t-transparent border-neutral-600 bg-transparent placeholder:text-neutral-600"
            />
            <p className="mx-2">até</p>
            <input
              placeholder="R$ 0,00"
              className="w-20 p-1 border-x-transparent border-b border-t-transparent border-neutral-600 bg-transparent placeholder:text-neutral-600"
            />
          </div>
        </div>
      </div>
      <div ref={DivContainerList} className="overflow-hidden">
        <ul
          ref={UlMenuList}
          className={`flex gap-12 relative top-0 left-0 text-neutral-400 border-y border-neutral-200 py-4 text-base w-fit ${classes.ulList}`}
          onMouseDown={(e) => mouseDownAction(e)}
          onMouseMove={(e) => mouseMoveAction(e)}
          onMouseLeave={() => mouseLeaveAction()}
          onMouseUp={() => mouseUpAction()}
        >
          {categories.map((item) => (
            <li
              key={item.id}
              className={
                isMoving ? "pointer-events-none" : "pointer-events-auto"
              }
            >
              <button
                onClick={() => checkSelectedCategory(item.id)}
                className={`py-2 px-4 rounded-sm flex flex-col gap-2 items-center justify-center ${
                  selectedCategories.includes(item.id)
                    ? "bg-red-theme text-white-beige hover:bg-red-theme"
                    : "hover:bg-neutral-200/[.4]"
                } ${
                  isMoving
                    ? `cursor-grabbing  ${classes.disabled}`
                    : "cursor-pointer"
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="text-lg" />
                <p>{item.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Results />
    </div>
  );
};

export default Menu;
