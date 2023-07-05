import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import FromConatiner from "./Components/FromContainer/FromConatiner";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import React from "react";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <FromConatiner>
        <Outlet />
      </FromConatiner>
      <Footer />
    </div>
  );
};

export default App;
