import React from "react";
import Balance from "../../Components/HomeComps/Balance";
import Recents from "../../Components/HomeComps/recents";
import Addings from "../../Components/HomeComps/addings";

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
