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

const Menu: React.FC = () => {
  interface category {
    name: string;
    id: number;
    icon: IconDefinition;
  }

  const categories: category[] = [
    {
      name: "Todos",
      icon: faCookieBite,
      id: 1,
    },
    {
      name: "Sanduíches",
      icon: faBurger,
      id: 2,
    },
    {
      name: "Pizzas",
      icon: faPizzaSlice,
      id: 3,
    },
    {
      name: "Saudável",
      icon: faAppleWhole,
      id: 4,
    },
    {
      name: "Vegetariano",
      icon: faCarrot,
      id: 5,
    },
    {
      name: "Sobremesas",
      icon: faCandyCane,
      id: 6,
    },
    {
      name: "Bebidas",
      icon: faMartiniGlassCitrus,
      id: 7,
    },
    {
      name: "Outros",
      icon: faBowlRice,
      id: 8,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(1);

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
              onClick={() => setSelectedCategory(item.id)}
              className={`py-2 px-4 rounded-sm flex flex-col gap-2 items-center justify-center  ${
                selectedCategory === item.id
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
