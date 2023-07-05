import { createSlice } from "@reduxjs/toolkit";


//Variable for intial State
// if userInfo is present in localstorage parse it if not set null
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

//creating Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //setting Credentials into localstorage
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    //creating Logout To clear LocalStorage
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
    addIncome: (state, action) => {
      state.userInfo = action.payload;
    },
    GetIncome: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setCredentials, logout, addIncome, GetIncome } =
  authSlice.actions;

export default authSlice.reducer;
