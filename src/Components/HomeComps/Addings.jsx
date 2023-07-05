import React from "react";
import { Link } from "react-router-dom";
import { plus } from "../../utils/Icons";

import "./Addings.css";

const Addings = () => {
 

  return (
    <div className="addingsContainer">
      <div className="up">
        <Link to="/home" className="home">
          Home
        </Link>
        <Link to="/income" className="income1">
          {plus} Income
        </Link>
        <Link to="/expense" className="expense1">
          {plus}Expense
        </Link>
      </div>

      <div className="alltrans">
        <Link to="/transactions" className="viewall">
          View All Transactions
        </Link>
      </div>
    </div>
  );
};

export default Addings;
