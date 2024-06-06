import ButtonGroupCom from "../components/ButtonGroupCom";
import React, { useEffect, useState } from "react";
import Cardlist from "../components/cardList/Cardlist";
import DatePicker from "../components/DatePicker";

import { useAppContext } from "../context/AppContext";

function Home() {
  const { data } = useAppContext()


  return (
    <div className="p-5 flex flex-col gap-5">
      <ButtonGroupCom />
      <DatePicker />
      <Cardlist />
    </div>
  );
}

export default Home;
