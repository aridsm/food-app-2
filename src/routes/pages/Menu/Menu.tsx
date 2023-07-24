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
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Categories from "../../../types/enums/categories";

const Menu: React.FC = () => {
  interface category {
    name: string;
    id: Categories | 0;
    icon: IconDefinition;
  }

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

  return (
    <div>
      <div className="flex justify-between mb-2">
        <h2>Categorias</h2>
        <div className="flex items-center text-base gap-4 text-neutral-400 -mb-3">
          <p>Preço</p>
          <div className="flex items-center">
            <input
              placeholder="R$ 0,00"
              className="w-20 p-1 border-b border-neutral-600 bg-transparent placeholder:text-neutral-600"
            />
            <p className="mx-2">até</p>
            <input
              placeholder="R$ 0,00"
              className="w-20 p-1 border-b border-neutral-600 bg-transparent placeholder:text-neutral-600"
            />
          </div>
        </div>
      </div>
      <ul className="flex gap-12 text-neutral-400 border-y border-neutral-200 py-4 text-base">
        {categories.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => checkSelectedCategory(item.id)}
              className={`py-2 px-4 rounded-sm flex flex-col gap-2 items-center justify-center ${
                selectedCategories.includes(item.id)
                  ? "bg-red-theme text-white-beige hover:bg-red-theme"
                  : "hover:bg-neutral-200/[.4]"
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-lg" />
              <p>{item.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
