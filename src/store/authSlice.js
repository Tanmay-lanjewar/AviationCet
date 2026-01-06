import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.email = action.payload; // Store email
    },
    logout: (state) => {
      state.isAuth = false;
      state.email = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
