import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import MenuItem from "../types/interfaces/menuItem";

const initialState = {
  modalOpen: false,
  item: {} as MenuItem,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal(state, item: PayloadAction<MenuItem>) {
      state.modalOpen = true;
      state.item = item.payload;
    },
    closeModal(state) {
      state.modalOpen = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
