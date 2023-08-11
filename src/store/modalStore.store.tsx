import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import MenuItem from "../types/interfaces/menuItem";
import ColorsAlerts from "../types/enums/colorsAlert";

interface ModalAlert {
  open: boolean;
  message: string;
  color: ColorsAlerts | undefined;
}

const initialState = {
  modalOpen: false,
  item: {} as MenuItem,
  modalAlert: {
    open: false,
    message: "",
    color: undefined,
    status: ColorsAlerts.Alert,
  } as ModalAlert,
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
    openModalAlert(
      state,
      data: PayloadAction<{
        message: string;
        color: ColorsAlerts;
      }>
    ) {
      state.modalAlert.open = true;
      state.modalAlert.message = data.payload.message;
      state.modalAlert.color = data.payload.color;
    },
    closeModalAlert(state) {
      state.modalAlert.open = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
