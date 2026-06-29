import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    role: null,
    isLoggedIn: false,
  },
  reducers: {
    loginSucess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginSucess, logout } = authSlice.actions;
export default authSlice.reducer;
