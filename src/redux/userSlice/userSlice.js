import { createSlice } from "@reduxjs/toolkit";
import { userLocalStorage } from "../../api/localService";

let initialState = {
  info: userLocalStorage.get(),
};

// gom action, constants, reducer vào 1 chung nơi gọi là slice

let userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    // nơi định nghĩa các action
    setInfo: (state, action) => {
      state.info = action.payload;
      // ko cần return về object mới khi dùng toolkit
    },
  },
});

export let { setInfo } = userSlice.actions;
export default userSlice.reducer;
