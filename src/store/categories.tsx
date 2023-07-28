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
import Categories from "../types/enums/categories";

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

export default categories;
