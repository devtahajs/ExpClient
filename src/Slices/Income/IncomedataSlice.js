import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  income: [],
  expenseAmount: [0],
  incomeAmount: [0],
  totalAmount: [0],
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
      const data = Object.entries(action.payload);
      let totalExpense = 0;
      let totalIncome = 0;
      let total = 0;
      data.forEach((expense) => {
        if (expense[1].type === "expense") {
          totalExpense = totalExpense + expense[1].amount;
          state.expenseAmount = totalExpense;
        } else if (expense[1].type === "income") {
          totalIncome = totalIncome + expense[1].amount;
          state.incomeAmount = totalIncome;
        }
        total = totalIncome - totalExpense;
        state.totalAmount = total;
      });

      state.income = action.payload;
    },
    getallincomeamount: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { setCredentials, logout, addIncome, GetIncome, alltransactions } =
  incomeSlice.actions;

export default incomeSlice.reducer;
