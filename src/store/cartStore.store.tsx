import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import MenuItem from "../types/interfaces/menuItem";
import CartItem from "../types/CartItem";

const initialState = {
  totalItems: 0 as number,
  totalPrice: 0 as number,
  cartItems: [] as Array<CartItem>,
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
    },
    deleteItemFromCart(state, id: PayloadAction<number>) {
      const item: CartItem = state.cartItems.find(
        (cartItem) => cartItem.id === id.payload
      )!;

      state.totalItems -= item.quantity;
      state.totalPrice -= item.quantity * item.quantity;

      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== id.payload
      );
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
    },
    cleanCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalItems = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
