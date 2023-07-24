import Categories from "../enums/categories";

interface MenuItem {
  name: string;
  id: number;
  price: number;
  description: string;
  category: Categories;
  imgPath: string;
}

export default MenuItem;
