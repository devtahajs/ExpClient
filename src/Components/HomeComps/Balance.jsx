import { useSelector } from "react-redux";
import "./balance.css";
import { expenses, rupee } from "../../utils/Icons.jsx";

const Balance = () => {
  const { incomeAmount } = useSelector((state) => state.income);
  const { expenseAmount } = useSelector((state) => state.income);
  const { totalAmount } = useSelector((state) => state.income);

  return (
    <div className="balanceContainer">
      <div className="up">
        <h3 className="income">
          Income={rupee}
          {incomeAmount}
        </h3>
        <h3 className="expense">
          {" "}
          Expense={rupee}
          {expenseAmount}
        </h3>
      </div>
      <div className="down">
        <h4 className="amount">
          Total Amount = {rupee}
          {totalAmount}
        </h4>
      </div>
    </div>
  );
};

export default Balance;
