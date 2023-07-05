import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
import Register from "./Pages/Register/Register.jsx";
import Login from "./Pages/Login/Login.jsx";
import PrivateRoute from "./Components/PrivateComponent/PrivateComponent.jsx";
import ProfilePage from "./Pages/ProfilePage/ProfilePage.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Addincome from "./Pages/addIncome/Addincome.jsx";
import AddExpense from "./Pages/AddExpense/AddExpense.jsx";
import Recents from "./Pages/AllTransactions/AllTransactions.jsx";

//Route Set up
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* Private Routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/income" element={<Addincome />} />
        <Route path="/expense" element={<AddExpense />} />
        <Route path="/transactions" element={<Recents />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
