import Categories from "../types/enums/categories";
import MenuItem from "../types/interfaces/menuItem";
import sandi1 from "../assets/imgs-menu/sandwiches/i1.jpg";
import sandi2 from "../assets/imgs-menu/sandwiches/i2.jpg";
import sandi3 from "../assets/imgs-menu/sandwiches/i3.jpg";
import sandi4 from "../assets/imgs-menu/sandwiches/i4.jpg";
import sandi5 from "../assets/imgs-menu/sandwiches/i5.jpg";
import sandi6 from "../assets/imgs-menu/sandwiches/i6.jpg";
import sandi7 from "../assets/imgs-menu/sandwiches/i7.jpg";
import sandi8 from "../assets/imgs-menu/sandwiches/i8.jpg";

import dess1 from "../assets/imgs-menu/desserts/i1.jpg";
import dess2 from "../assets/imgs-menu/desserts/i2.jpg";
import dess3 from "../assets/imgs-menu/desserts/i3.jpg";
import dess4 from "../assets/imgs-menu/desserts/i4.jpg";
import dess5 from "../assets/imgs-menu/desserts/i5.jpg";
import dess6 from "../assets/imgs-menu/desserts/i6.jpg";
import dess7 from "../assets/imgs-menu/desserts/i7.jpg";
import dess8 from "../assets/imgs-menu/desserts/i8.jpg";
import dess9 from "../assets/imgs-menu/desserts/i9.jpg";
import dess10 from "../assets/imgs-menu/desserts/i10.jpg";
import dess11 from "../assets/imgs-menu/desserts/i11.jpg";
import dess12 from "../assets/imgs-menu/desserts/i12.jpg";

import hea1 from "../assets/imgs-menu/healthy/i1.jpg";
import hea2 from "../assets/imgs-menu/healthy/i2.jpg";
import hea3 from "../assets/imgs-menu/healthy/i3.jpg";
import hea4 from "../assets/imgs-menu/healthy/i4.jpg";
import hea5 from "../assets/imgs-menu/healthy/i5.jpg";
import hea6 from "../assets/imgs-menu/healthy/i6.jpg";
import hea7 from "../assets/imgs-menu/healthy/i7.jpg";
import hea8 from "../assets/imgs-menu/healthy/i8.jpg";
import hea9 from "../assets/imgs-menu/healthy/i9.jpg";
import hea10 from "../assets/imgs-menu/healthy/i10.jpg";
import hea11 from "../assets/imgs-menu/healthy/i11.jpg";

import piz1 from "../assets/imgs-menu/pizzas/i1.jpg";
import piz2 from "../assets/imgs-menu/pizzas/i2.jpg";
import piz3 from "../assets/imgs-menu/pizzas/i3.jpg";
import piz4 from "../assets/imgs-menu/pizzas/i4.jpg";
import piz5 from "../assets/imgs-menu/pizzas/i5.jpg";
import piz6 from "../assets/imgs-menu/pizzas/i6.jpg";
import piz7 from "../assets/imgs-menu/pizzas/i7.jpg";
import piz8 from "../assets/imgs-menu/pizzas/i8.jpg";
import piz9 from "../assets/imgs-menu/pizzas/i9.jpg";
import piz10 from "../assets/imgs-menu/pizzas/i10.jpg";

import ot1 from "../assets/imgs-menu/others/i1.jpg";
import ot2 from "../assets/imgs-menu/others/i2.jpg";
import ot3 from "../assets/imgs-menu/others/i3.jpg";
import ot4 from "../assets/imgs-menu/others/i4.jpg";
import ot5 from "../assets/imgs-menu/others/i5.jpg";
import ot6 from "../assets/imgs-menu/others/i6.jpg";
import ot7 from "../assets/imgs-menu/others/i7.jpg";
import ot8 from "../assets/imgs-menu/others/i8.jpg";
import ot9 from "../assets/imgs-menu/others/i9.jpg";

import veg1 from "../assets/imgs-menu/vegan/i1.jpg";
import veg2 from "../assets/imgs-menu/vegan/i2.jpg";
import veg3 from "../assets/imgs-menu/vegan/i3.jpg";
import veg4 from "../assets/imgs-menu/vegan/i4.jpg";
import veg5 from "../assets/imgs-menu/vegan/i5.jpg";
import veg6 from "../assets/imgs-menu/vegan/i6.jpg";
import veg7 from "../assets/imgs-menu/vegan/i7.jpg";
import veg8 from "../assets/imgs-menu/vegan/i8.jpg";

import dr1 from "../assets/imgs-menu/drinks/i1.jpg";
import dr2 from "../assets/imgs-menu/drinks/i2.jpg";
import dr3 from "../assets/imgs-menu/drinks/i3.jpg";
import dr4 from "../assets/imgs-menu/drinks/i4.jpg";
import dr5 from "../assets/imgs-menu/drinks/i5.jpg";
import dr6 from "../assets/imgs-menu/drinks/i6.jpg";
import dr7 from "../assets/imgs-menu/drinks/i7.jpg";
import dr8 from "../assets/imgs-menu/drinks/i8.jpg";

const menuItems: MenuItem[] = [
  {
    name: "Adipiscing",
    id: 56,
    category: Categories.Sandwiches,
    description: " Quisque nec nisi lobortis, varius est at.",
    price: 31.59,
    img: sandi6,
  },
  {
    name: "Pellentesque",
    id: 4,
    category: Categories.Desserts,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 14.99,
    img: dess4,
  },
  {
    name: "Cras sit amet",
    id: 22,
    category: Categories.Healthy,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 10.99,
    img: hea2,
  },

  {
    name: "Ipsum Enim",
    id: 47,
    category: Categories.Pizzas,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 42.99,
    img: piz7,
  },
  {
    name: "Mauris",
    id: 21,
    category: Categories.Healthy,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 23.99,
    img: hea1,
  },
  {
    name: "Cras sit amet",
    id: 35,
    category: Categories.Others,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 20.59,
    img: ot4,
  },
  {
    name: "Placerat",
    id: 7,
    category: Categories.Desserts,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 17.39,
    img: dess7,
  },
  {
    name: "Commodo",
    id: 1,
    category: Categories.Desserts,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 37.39,
    img: dess1,
  },
  {
    name: "Laoreet",
    id: 48,
    category: Categories.Pizzas,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 26.99,
    img: piz8,
  },

  {
    name: "Pellentesque",
    id: 36,
    category: Categories.Others,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 19.39,
    img: ot5,
  },
  {
    name: "Aliquet",
    id: 6,
    category: Categories.Desserts,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 8.99,
    img: dess6,
  },

  {
    name: "Placerat",
    id: 16,
    category: Categories.Drinks,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 2.99,
    img: dr4,
  },
  {
    name: "Placerat",
    id: 9,
    category: Categories.Desserts,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 25.39,
    img: dess9,
  },

  {
    name: "Eleifend",
    id: 62,
    category: Categories.Vegan,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 38.59,
    img: veg4,
  },

  {
    name: "Ipsum Enim",
    id: 63,
    category: Categories.Vegan,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 23.59,
    img: veg5,
  },
  {
    name: "Phasellus",
    id: 10,
    category: Categories.Desserts,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 21.99,
    img: dess10,
  },

  {
    name: "Pellentesque",
    id: 13,
    category: Categories.Drinks,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 1.99,
    img: dr1,
  },
  {
    name: "Mauris",
    id: 28,
    category: Categories.Healthy,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 20.39,
    img: hea8,
  },
  {
    name: "Placerat",
    id: 14,
    category: Categories.Drinks,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 3.99,
    img: dr2,
  },
  {
    name: "Laoreet",
    id: 61,
    category: Categories.Vegan,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 27.99,
    img: veg3,
  },

  {
    name: "Donec",
    id: 19,
    category: Categories.Drinks,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 9.99,
    img: dr7,
  },

  {
    name: "At Magna",
    id: 23,
    category: Categories.Healthy,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 30.99,
    img: hea3,
  },
  {
    name: "At Magna",
    id: 20,
    category: Categories.Drinks,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 6.99,
    img: dr8,
  },
  {
    name: "Laoreet",
    id: 24,
    category: Categories.Healthy,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 24.39,
    img: hea4,
  },

  {
    name: "Placerat",
    id: 25,
    category: Categories.Healthy,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 23.29,
    img: hea5,
  },
  {
    name: "Laoreet",
    id: 65,
    category: Categories.Vegan,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 26.99,
    img: veg7,
  },
  {
    name: "Laoreet",
    id: 15,
    category: Categories.Drinks,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 3.99,
    img: dr3,
  },
  {
    name: "Placerat",
    id: 66,
    category: Categories.Vegan,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 25.29,
    img: veg8,
  },
  {
    name: "Donec",
    id: 27,
    category: Categories.Healthy,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 20.99,
    img: hea7,
  },

  {
    name: "Pellentesque",
    id: 29,
    category: Categories.Healthy,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 40.39,
    img: hea9,
  },
  {
    name: "Eleifend",
    id: 17,
    category: Categories.Drinks,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 5.99,
    img: dr5,
  },
  {
    name: "Placerat",
    id: 30,
    category: Categories.Healthy,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 27.99,
    img: hea10,
  },
  {
    name: "Commodo",
    id: 32,
    category: Categories.Others,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 21.99,
    img: ot1,
  },
  {
    name: "Nisi",
    id: 33,
    category: Categories.Others,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 25.99,
    img: ot2,
  },
  {
    name: "Pellentesque",
    id: 18,
    category: Categories.Drinks,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 8.99,
    img: dr6,
  },
  {
    name: "Pellentesque",
    id: 45,
    category: Categories.Pizzas,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 40.99,
    img: piz5,
  },
  {
    name: "Laoreet",
    id: 46,
    category: Categories.Pizzas,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 42.39,
    img: piz6,
  },
  {
    name: "Phasellus",
    id: 26,
    category: Categories.Healthy,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 20.99,
    img: hea6,
  },
  {
    name: "Laoreet",
    id: 37,
    category: Categories.Others,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 18.99,
    img: ot6,
  },
  {
    name: "Commodo",
    id: 38,
    category: Categories.Others,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 24.39,
    img: ot7,
  },
  {
    name: "Phasellus",
    id: 39,
    category: Categories.Others,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 20.99,
    img: ot8,
  },
  {
    name: "Donec",
    id: 40,
    category: Categories.Others,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 22.29,
    img: ot9,
  },
  {
    name: "Iaculis",
    id: 41,
    category: Categories.Pizzas,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 39.39,
    img: piz1,
  },
  {
    name: "Aliquet",
    id: 43,
    category: Categories.Pizzas,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 36.99,
    img: piz3,
  },
  {
    name: "Placerat",
    id: 34,
    category: Categories.Others,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 20.99,
    img: ot3,
  },
  {
    name: "Iaculis",
    id: 44,
    category: Categories.Pizzas,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 39.39,
    img: piz4,
  },

  {
    name: "Placerat",
    id: 2,
    category: Categories.Desserts,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 10.99,
    img: dess2,
  },
  {
    name: "Laoreet",
    id: 3,
    category: Categories.Desserts,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 17.39,
    img: dess3,
  },
  {
    name: "Quisque",
    id: 50,
    category: Categories.Pizzas,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 30.99,
    img: piz10,
  },
  {
    name: "Placerat",
    id: 51,
    category: Categories.Sandwiches,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 24.29,
    img: sandi1,
  },

  {
    name: "Eleifend",
    id: 12,
    category: Categories.Desserts,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 20.99,
    img: dess12,
  },

  {
    name: "Ipsum Enim",
    id: 53,
    category: Categories.Sandwiches,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 19.99,
    img: sandi3,
  },

  {
    name: "Fusce",
    id: 55,
    category: Categories.Sandwiches,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 22.99,
    img: sandi5,
  },

  {
    name: "Etiam placerat",
    id: 11,
    category: Categories.Desserts,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 8.99,
    img: dess11,
  },
  {
    name: "Phasellus",
    id: 49,
    category: Categories.Pizzas,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 35.39,
    img: piz9,
  },
  {
    name: "Donec",
    id: 8,
    category: Categories.Desserts,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 20.99,
    img: dess8,
  },
  {
    name: "Placerat",
    id: 42,
    category: Categories.Pizzas,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 30.99,
    img: piz2,
  },
  {
    name: "Phasellus",
    id: 57,
    category: Categories.Sandwiches,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 15.59,
    img: sandi7,
  },
  {
    name: "Quisque",
    id: 58,
    category: Categories.Sandwiches,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 20.29,
    img: sandi8,
  },
  {
    name: "Eleifend",
    id: 59,
    category: Categories.Vegan,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 28.59,
    img: veg1,
  },
  {
    name: "Pellentesque",
    id: 54,
    category: Categories.Sandwiches,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 22.99,
    img: sandi4,
  },
  {
    name: "Placerat",
    id: 60,
    category: Categories.Vegan,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 23.59,
    img: veg2,
  },

  {
    name: "Laoreet",
    id: 5,
    category: Categories.Desserts,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 12.29,
    img: dess5,
  },
  {
    name: "Laoreet",
    id: 31,
    category: Categories.Healthy,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 21.99,
    img: hea11,
  },
  {
    name: "Pellentesque",
    id: 64,
    category: Categories.Vegan,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 27.99,
    img: veg6,
  },

  {
    name: "Donec",
    id: 52,
    category: Categories.Sandwiches,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 20.59,
    img: sandi2,
  },
];

export default menuItems;
