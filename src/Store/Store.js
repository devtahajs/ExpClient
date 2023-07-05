import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/authSlice.js";
import { apiSlice } from "../Slices/apiSlice.js";
import incomeSlice from "../Slices/Income/IncomedataSlice.js";
import expenseSlice from "../Slices/Expenses/ExpensedataSlice.js";

const Store = configureStore({
  reducer: {
    auth: authReducer,
    income: incomeSlice,
    expense: expenseSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default Store;
