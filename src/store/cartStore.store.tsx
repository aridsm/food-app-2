import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import MenuItem from "../types/interfaces/menuItem";
import CartItem from "../types/CartItem";

const initialState = {
  totalItems: 0 as number,
  totalPrice: 0 as number,
  cartItems: [] as Array<CartItem>,
  selectedItems: [] as Array<CartItem>,
  totalSelectedPrice: 0 as number,
};

const cartSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    onAddItemToCart(state, item: PayloadAction<CartItem>) {
      const cartItemSelected: CartItem | undefined = state.cartItems.find(
        (cartItem) => cartItem.id === item.payload.id
      );
      let qtToAdd = item.payload.quantity;

      if (cartItemSelected) {
        const qtIsGreaterThanMaximum =
          cartItemSelected.quantity + item.payload.quantity > 20;

        if (qtIsGreaterThanMaximum) {
          qtToAdd = 20 - cartItemSelected.quantity;
          cartItemSelected.quantity = 20;
        } else {
          cartItemSelected.quantity += item.payload.quantity;
        }
      } else {
        state.cartItems = [...state.cartItems, item.payload];
      }
      state.totalItems += qtToAdd;
      state.totalPrice += item.payload.quantity * item.payload.price;
    },
    removeOneItemFromCart(state, item: PayloadAction<MenuItem>) {
      const indexItem: number = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.payload.id
      );

      state.totalItems -= 1;
      state.totalPrice -= item.payload.price;

      state.cartItems[indexItem].quantity -= 1;

      const selectedIds = state.selectedItems.map((selItem) => selItem.id);
      const itemIsSelected = state.selectedItems.find(() =>
        selectedIds.includes(item.payload.id)
      );

      if (itemIsSelected) {
        itemIsSelected.quantity -= 1;
        state.totalSelectedPrice -= item.payload.price;
      }
    },
    deleteItemFromCart(state, id: PayloadAction<number>) {
      const { newListItems, itemsToRemove, priceToRemove } = onDeleteItem(
        id.payload,
        state.cartItems
      );

      state.totalItems -= itemsToRemove;
      state.totalPrice -= priceToRemove;

      state.cartItems = newListItems;

      const selectedIds = state.selectedItems.map((selItem) => selItem.id);
      const itemIsSelected = state.selectedItems.find(() =>
        selectedIds.includes(id.payload)
      );

      if (itemIsSelected) {
        state.selectedItems = state.selectedItems.filter(
          (selItem) => selItem.id !== id.payload
        );
        state.totalSelectedPrice -= priceToRemove;
      }
    },
    setNewQuantity(
      state,
      item: PayloadAction<{ id: number; newQuantity: number }>
    ) {
      const itemCart: CartItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.payload.id
      )!;

      state.totalPrice -= itemCart.quantity * itemCart.price;
      state.totalItems -= itemCart.quantity;

      itemCart.quantity = item.payload.newQuantity;

      state.totalPrice += item.payload.newQuantity * itemCart.price;
      state.totalItems += item.payload.newQuantity;

      const selectedIds = state.selectedItems.map((selItem) => selItem.id);
      const itemIsSelected = state.selectedItems.find(() =>
        selectedIds.includes(item.payload.id)
      );

      if (itemIsSelected) {
        state.totalSelectedPrice -= itemCart.quantity * itemCart.price;

        itemIsSelected.quantity = item.payload.newQuantity;

        state.totalSelectedPrice += item.payload.newQuantity * itemCart.price;
      }
    },
    cleanCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalItems = 0;
      state.totalSelectedPrice = 0;
      state.selectedItems = [];
    },
    selectItem(state, item: PayloadAction<CartItem>) {
      const { newListItems, priceToAdd } = onAddToList(
        item.payload,
        state.selectedItems
      );

      state.selectedItems = newListItems;
      state.totalSelectedPrice += priceToAdd;
    },
    deleteItemsFromSelected(state, ids: PayloadAction<number[]>) {
      ids.payload.forEach((id) => {
        onDeleteItem(id, state.selectedItems);

        const { newListItems, priceToRemove } = onDeleteItem(
          id,
          state.cartItems
        );

        state.totalSelectedPrice -= priceToRemove;
        state.selectedItems = newListItems;
      });
    },
  },
});

function onAddToList(item: CartItem, list: CartItem[]) {
  let newListItems = list;

  const cartItemSelected: CartItem | undefined = newListItems.find(
    (cartItem) => cartItem.id === item.id
  );
  let qtToAdd = item.quantity;

  if (cartItemSelected) {
    const qtIsGreaterThanMaximum =
      cartItemSelected.quantity + item.quantity > 20;

    if (qtIsGreaterThanMaximum) {
      qtToAdd = 20 - cartItemSelected.quantity;
      cartItemSelected.quantity = 20;
    } else {
      cartItemSelected.quantity += item.quantity;
    }
  } else {
    newListItems = [...list, item];
  }

  const priceToAdd = item.quantity * item.price;

  return { newListItems, qtToAdd, priceToAdd };
}

function onDeleteItem(id: number, list: CartItem[]) {
  const item: CartItem = list.find((cartItem) => cartItem.id === id)!;

  const itemsToRemove = item.quantity;
  const priceToRemove = item.quantity * item.quantity;

  const newListItems = list.filter((cartItem) => cartItem.id !== id);

  return { newListItems, itemsToRemove, priceToRemove };
}

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
