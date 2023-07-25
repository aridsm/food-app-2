import { useState } from "react";
import menuItems from "../../store/menuList";
import MenuItem from "../../types/interfaces/menuItem";
import classes from "./Results.module.css";

const Results: React.FC = () => {
  const [menuItemsList, setMenuItemsList] = useState<MenuItem[]>(menuItems);

  return (
    <div className="my-4 text-base">
      <div className="flex justify-between items-center">54 resultados</div>

      <ul className="grid grid-cols-3 gap-16">
        {menuItemsList.map((item) => (
          <li key={item.id}>
            <button
              className={`bg-neutral-50 p-3 rounded-md text-left w-fit ${classes.card}`}
            >
              <div className="w-full h-52 rounded-md overflow-hidden mb-3">
                <img
                  src={`/src/assets/imgs/imgs-menu/${item.imgPath}`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p>{item.name}</p>
              <p className="text-neutral-400 text-ellipsis overflow-hidden line-clamp-2 mb-5">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <div>R$ 20,00</div>
                <button
                  className="button p-0"
                  style={{ padding: "0.4rem 1rem" }}
                >
                  Comprar
                </button>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
