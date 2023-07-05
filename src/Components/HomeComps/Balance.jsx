import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useIncomeAmountMutation,
  useExpenseAmountMutation,
  useTotalAmountMutation,
} from "../../Slices/UserSlice";
import { incomeAmount } from "../../Slices/Expenses/ExpensedataSlice";
import "./balance.css";

const Balance = () => {
  return (
    <div className="balanceContainer">
      <div className="up">
        <h3 className="income">Inc- 50000000rs</h3>
        <h3 className="expense"> Exp- 50000000rs</h3>
      </div>
      <div className="down">
        <h4 className="amount">Total Amount = 500000rs</h4>
      </div>
    </div>
  );
};

export default Balance;
