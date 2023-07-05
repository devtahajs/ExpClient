import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  income: [],
};

//creating Slice
const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.income = action.payload;
    },
    GetIncome: (state, action) => {
      state.income = action.payload;
    },
    alltransactions: (state, action) => {
      state.income = action.payload;
    },
  },
});

export const { setCredentials, logout, addIncome, GetIncome, alltransactions } =
  incomeSlice.actions;

export default incomeSlice.reducer;
