import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../Slices/UserSlice";
import { logout } from "../../Slices/authSlice.js";

import { out, account, dashboard, rupee, users } from "../../utils/Icons.jsx";
import { toast } from "react-toastify";
import "./Navbar.css";

const Navbar = () => {
  //useSelector
  const { userInfo } = useSelector((state) => state.auth);

  //Use Dispatch
  const dispatch = useDispatch();

  //Navigate
  const navigate = useNavigate();

  //use Mutation Logout calling Function
  const [logoutApiCall] = useLogoutMutation();

  //Logout Handler
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap(); //destroy backend cookie
      dispatch(logout()); //destroy localstorage for logout
      navigate("/");
      toast.success("Logged Out");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="NavContainer">
      <div className="leftside">
        <h4>Expense Tracker App</h4>
      </div>

      <div className="rightside">
        {userInfo ? (
          <>
            <div className="logout">
              <h4>{userInfo.name}</h4>
              <Link to="/home" className="button1">
                {dashboard}
              </Link>
              <Link to="/profile" className="button2">
                {users}
              </Link>
              <button className="button1" onClick={logoutHandler}>
                {out}
              </button>
            </div>
          </>
        ) : (
          <div className="login">
            <Link to="/login" className="button1">
              Login
            </Link>
            <Link to="/" className="button2">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
