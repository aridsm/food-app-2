import Categories from "../types/enums/categories";
import MenuItem from "../types/interfaces/menuItem";

const menuItems: MenuItem[] = [
  {
    name: "Adipiscing",
    id: 56,
    category: Categories.Sandwiches,
    description: " Quisque nec nisi lobortis, varius est at.",
    price: 31.59,
    imgPath: "sandwiches/i6",
  },
  {
    name: "Pellentesque",
    id: 4,
    category: Categories.Desserts,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 14.99,
    imgPath: "desserts/i4",
  },
  {
    name: "Cras sit amet",
    id: 22,
    category: Categories.Healthy,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 10.99,
    imgPath: "healthy/i2",
  },
  {
    name: "Ipsum Enim",
    id: 47,
    category: Categories.Pizzas,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 42.99,
    imgPath: "pizzas/i7",
  },
  {
    name: "Mauris",
    id: 21,
    category: Categories.Healthy,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 23.99,
    imgPath: "healthy/i1",
  },
  {
    name: "Placerat",
    id: 7,
    category: Categories.Desserts,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 17.39,
    imgPath: "desserts/i7",
  },
  {
    name: "Commodo",
    id: 1,
    category: Categories.Desserts,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 37.39,
    imgPath: "desserts/i1",
  },
  {
    name: "Laoreet",
    id: 48,
    category: Categories.Pizzas,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 26.99,
    imgPath: "pizzas/i8",
  },
  {
    name: "Cras sit amet",
    id: 35,
    category: Categories.Others,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 20.59,
    imgPath: "others/i4",
  },
  {
    name: "Pellentesque",
    id: 36,
    category: Categories.Others,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 19.39,
    imgPath: "others/i5",
  },
  {
    name: "Aliquet",
    id: 6,
    category: Categories.Desserts,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 8.99,
    imgPath: "desserts/i6",
  },

  {
    name: "Placerat",
    id: 16,
    category: Categories.Drinks,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 2.99,
    imgPath: "drinks/i4",
  },
  {
    name: "Placerat",
    id: 9,
    category: Categories.Desserts,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 25.39,
    imgPath: "desserts/i9",
  },

  {
    name: "Eleifend",
    id: 62,
    category: Categories.Vegan,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 38.59,
    imgPath: "vegan/i4",
  },

  {
    name: "Ipsum Enim",
    id: 63,
    category: Categories.Vegan,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 23.59,
    imgPath: "vegan/i5",
  },
  {
    name: "Phasellus",
    id: 10,
    category: Categories.Desserts,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 21.99,
    imgPath: "desserts/i10",
  },

  {
    name: "Pellentesque",
    id: 13,
    category: Categories.Drinks,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 1.99,
    imgPath: "drinks/i1",
  },
  {
    name: "Mauris",
    id: 28,
    category: Categories.Healthy,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 20.39,
    imgPath: "healthy/i8",
  },
  {
    name: "Placerat",
    id: 14,
    category: Categories.Drinks,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 3.99,
    imgPath: "drinks/i2",
  },
  {
    name: "Laoreet",
    id: 61,
    category: Categories.Vegan,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 27.99,
    imgPath: "vegan/i3",
  },

  {
    name: "Donec",
    id: 19,
    category: Categories.Drinks,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 9.99,
    imgPath: "drinks/i7",
  },

  {
    name: "At Magna",
    id: 23,
    category: Categories.Healthy,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 30.99,
    imgPath: "healthy/i3",
  },
  {
    name: "At Magna",
    id: 20,
    category: Categories.Drinks,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 6.99,
    imgPath: "drinks/i8",
  },
  {
    name: "Laoreet",
    id: 24,
    category: Categories.Healthy,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 24.39,
    imgPath: "healthy/i4",
  },
  {
    name: "Eleifend",
    id: 17,
    category: Categories.Drinks,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 5.99,
    imgPath: "drinks/i5",
  },
  {
    name: "Placerat",
    id: 25,
    category: Categories.Healthy,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 23.29,
    imgPath: "healthy/i5",
  },
  {
    name: "Laoreet",
    id: 65,
    category: Categories.Vegan,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 26.99,
    imgPath: "vegan/i7",
  },
  {
    name: "Laoreet",
    id: 15,
    category: Categories.Drinks,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 3.99,
    imgPath: "drinks/i3",
  },
  {
    name: "Placerat",
    id: 66,
    category: Categories.Vegan,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 25.29,
    imgPath: "vegan/i8",
  },
  {
    name: "Donec",
    id: 27,
    category: Categories.Healthy,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 20.99,
    imgPath: "healthy/i7",
  },

  {
    name: "Pellentesque",
    id: 29,
    category: Categories.Healthy,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 40.39,
    imgPath: "healthy/i9",
  },
  {
    name: "Placerat",
    id: 30,
    category: Categories.Healthy,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 27.99,
    imgPath: "healthy/i10",
  },
  {
    name: "Commodo",
    id: 32,
    category: Categories.Others,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 21.99,
    imgPath: "others/i1",
  },
  {
    name: "Nisi",
    id: 33,
    category: Categories.Others,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 25.99,
    imgPath: "others/i2",
  },
  {
    name: "Pellentesque",
    id: 18,
    category: Categories.Drinks,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 8.99,
    imgPath: "drinks/i6",
  },
  {
    name: "Pellentesque",
    id: 45,
    category: Categories.Pizzas,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 40.99,
    imgPath: "pizzas/i5",
  },
  {
    name: "Laoreet",
    id: 46,
    category: Categories.Pizzas,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 42.39,
    imgPath: "pizzas/i6",
  },
  {
    name: "Phasellus",
    id: 26,
    category: Categories.Healthy,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 20.99,
    imgPath: "healthy/i6",
  },
  {
    name: "Laoreet",
    id: 37,
    category: Categories.Others,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 18.99,
    imgPath: "others/i6",
  },
  {
    name: "Commodo",
    id: 38,
    category: Categories.Others,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 24.39,
    imgPath: "others/i7",
  },
  {
    name: "Phasellus",
    id: 39,
    category: Categories.Others,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 20.99,
    imgPath: "others/i8",
  },
  {
    name: "Donec",
    id: 40,
    category: Categories.Others,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 22.29,
    imgPath: "others/i9",
  },
  {
    name: "Iaculis",
    id: 41,
    category: Categories.Pizzas,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 39.39,
    imgPath: "pizzas/i1",
  },
  {
    name: "Placerat",
    id: 42,
    category: Categories.Pizzas,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 30.99,
    imgPath: "pizzas/i2",
  },
  {
    name: "Aliquet",
    id: 43,
    category: Categories.Pizzas,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 36.99,
    imgPath: "pizzas/i3",
  },
  {
    name: "Placerat",
    id: 34,
    category: Categories.Others,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 20.99,
    imgPath: "others/i3",
  },
  {
    name: "Iaculis",
    id: 44,
    category: Categories.Pizzas,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 39.39,
    imgPath: "pizzas/i4",
  },

  {
    name: "Placerat",
    id: 2,
    category: Categories.Desserts,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 10.99,
    imgPath: "desserts/i2",
  },
  {
    name: "Laoreet",
    id: 3,
    category: Categories.Desserts,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 17.39,
    imgPath: "desserts/i3",
  },
  {
    name: "Quisque",
    id: 50,
    category: Categories.Pizzas,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 30.99,
    imgPath: "pizzas/i10",
  },
  {
    name: "Placerat",
    id: 51,
    category: Categories.Sandwiches,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 24.29,
    imgPath: "sandwiches/i1",
  },

  {
    name: "Eleifend",
    id: 12,
    category: Categories.Desserts,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 20.99,
    imgPath: "desserts/i12",
  },

  {
    name: "Ipsum Enim",
    id: 53,
    category: Categories.Sandwiches,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 19.99,
    imgPath: "sandwiches/i3",
  },

  {
    name: "Fusce",
    id: 55,
    category: Categories.Sandwiches,
    description:
      "Mauris vel suscipit lectus. Phasellus sit amet volutpat urna. Ut accumsan venenatis nunc.",
    price: 22.99,
    imgPath: "sandwiches/i5",
  },

  {
    name: "Etiam placerat",
    id: 11,
    category: Categories.Desserts,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 8.99,
    imgPath: "desserts/i11",
  },
  {
    name: "Phasellus",
    id: 49,
    category: Categories.Pizzas,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 35.39,
    imgPath: "pizzas/i9",
  },
  {
    name: "Donec",
    id: 8,
    category: Categories.Desserts,
    description:
      "Suspendisse volutpat vel elit ut cursus. Proin in commodo metus, quis accumsan nulla. Pellentesque congue ut ipsum a pharetra.",
    price: 20.99,
    imgPath: "desserts/i8",
  },
  {
    name: "Phasellus",
    id: 57,
    category: Categories.Sandwiches,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 15.59,
    imgPath: "sandwiches/i7",
  },
  {
    name: "Quisque",
    id: 58,
    category: Categories.Sandwiches,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 20.29,
    imgPath: "sandwiches/i8",
  },
  {
    name: "Eleifend",
    id: 59,
    category: Categories.Vegan,
    description:
      "Phasellus mollis non lectus at scelerisque. Cras quis dictum neque.",
    price: 28.59,
    imgPath: "vegan/i1",
  },
  {
    name: "Pellentesque",
    id: 54,
    category: Categories.Sandwiches,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 22.99,
    imgPath: "sandwiches/i4",
  },
  {
    name: "Placerat",
    id: 60,
    category: Categories.Vegan,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 23.59,
    imgPath: "vegan/i2",
  },

  {
    name: "Laoreet",
    id: 5,
    category: Categories.Desserts,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 12.29,
    imgPath: "desserts/i5",
  },
  {
    name: "Laoreet",
    id: 31,
    category: Categories.Healthy,
    description:
      "Cras placerat lorem in lorem aliquet blandit. Morbi eget pellentesque dolor. Ut ultrices mi et lacinia malesuada.",
    price: 21.99,
    imgPath: "healthy/i11",
  },
  {
    name: "Pellentesque",
    id: 64,
    category: Categories.Vegan,
    description:
      "Etiam a ex sollicitudin, accumsan mi id, sodales leo. Cras sit amet mattis nunc. Nam velit augue, pellentesque eu erat vitae, interdum pharetra diam.",
    price: 27.99,
    imgPath: "vegan/i6",
  },

  {
    name: "Donec",
    id: 52,
    category: Categories.Sandwiches,
    description:
      "Etiam placerat id arcu non pellentesque. Ut augue nisi, gravida quis arcu tristique, dignissim malesuada nisl. In at diam quis turpis vehicula rutrum.",
    price: 20.59,
    imgPath: "sandwiches/i2",
  },
];

export default menuItems;
