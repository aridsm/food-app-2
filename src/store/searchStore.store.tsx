import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "" as string,
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setSearch(state, value: PayloadAction<string>) {
      state.search = value.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
