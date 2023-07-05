import "./alltrans.css";
import { calender, comment, trash, rupee } from "../../utils/Icons.jsx";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAlltransactionMutation } from "../../Slices/UserSlice.js";
import { alltransactions } from "../../Slices/Income/IncomedataSlice.js";
import {
  useDeleteincomeMutation,
  useDeleteexpenseMutation,
} from "../../Slices/UserSlice.js";

import { plus } from "../../utils/Icons";

const Recents = () => {
  const dispatch = useDispatch();

  const [get, response1] = useAlltransactionMutation();

  const [deleteincome, response] = useDeleteincomeMutation();
  const [deleteexpense] = useDeleteexpenseMutation();

  const submitHandler = async () => {
    try {
      const res = await get({}).unwrap();
      dispatch(alltransactions({ ...res }));
    } catch (error) {
      console.log(error);
    }
  };

  const { income } = useSelector((state) => state.income);
  const userInfoArray = Object.values(income);

  useEffect(() => {
    submitHandler();
  }, [response]);

  return (
    <div className="AllContainer">
      <div className="secContainer">
        <h4>Recent Transactions--</h4>

        {userInfoArray.map((income) => (
          <div className="content" key={income._id}>
            <div className="upper">
              <h5>{income.title} </h5>
              <div className="btn-con">
                <button
                  onClick={() => {
                    deleteincome(income._id);
                    deleteexpense(income._id);
                  }}
                >
                  {" "}
                  {trash}
                </button>
              </div>
            </div>
            <div className="inner-content">
              <div className="text">
                <p>
                  {rupee} {income.amount}
                </p>
                <p>
                  {calender} {income.date}
                </p>
                <p>
                  {comment} {income.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recents;
