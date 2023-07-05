import React from "react";
import Balance from "../../Components/HomeComps/Balance.jsx";
import Recents from "../../Components/HomeComps/recents.jsx";
import Addings from "../../Components/HomeComps/Addings.jsx";

const HomePage = () => {
  return (
    <div>
      <Balance />
      <Recents />
      <Addings />
    </div>
  );
};

export default HomePage;
