import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAddexpenseMutation } from "../../Slices/UserSlice";
import { addExpense } from "../../Slices/Expenses/ExpensedataSlice.js";
import { toast } from "react-toastify";

const Addincome = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  //dispatch and navigate
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Mutation
  const [add, { isLoading }] = useAddexpenseMutation();

  //useSelector
  const userInfo = useSelector((state) => state.income);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await add({ title, amount, date, category }).unwrap();
      dispatch(addExpense({ ...res }));
      console.log(userInfo);
      navigate("/home");
      toast.success("Expense Added");
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="containerLogin">
      <h2>Add Expense</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Your Expense"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investiments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">Youtube</option>
          <option value="other">Other</option>
        </select>
        <button className="button1">Add</button>
        <div>
          <Link to="/income" className="link">
            Add Income
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Addincome;
