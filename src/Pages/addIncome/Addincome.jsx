import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAddincomeMutation } from "../../Slices/UserSlice";
import { addIncome } from "../../Slices/Income/IncomedataSlice.js";
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
  const [add, { isLoading }] = useAddincomeMutation();

  //useSelector
  const userInfo = useSelector((state) => state.income);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await add({ title, amount, date, category }).unwrap();
      dispatch(addIncome({ ...res }));
      console.log(userInfo);
      navigate("/home");
      toast.success("Income Added");
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="containerLogin">
      <h2>Add Income</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Your Income"
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
          <Link to="/expense" className="link">
            Add Expense
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Addincome;
