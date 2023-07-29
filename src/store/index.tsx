import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalStore.store";
import cartReducer from "./cartStore.store";

const store = configureStore({
  reducer: { modal: modalReducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
