import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expense: [],
};

//creating Slice
const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expense = action.payload;
    },
    GetExpense: (state, action) => {
      state.expense = action.payload;
    },
    incomeAmount: (state, action) => {
      state.expense = action.payload;
    },
  },
});

export const { addExpense, GetExpense, incomeAmount } = expenseSlice.actions;

export default expenseSlice.reducer;
