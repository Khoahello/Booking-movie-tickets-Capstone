import { createSlice } from "@reduxjs/toolkit";
import { userLocalStorage } from "../../api/localService";

let initialState = {
  info: userLocalStorage.get(),
};

let userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export let { setInfo } = userSlice.actions;
export default userSlice.reducer;
