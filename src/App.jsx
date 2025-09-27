import React, { useState } from "react";
import Header from "./components/Header";
import MainGrid from "./components/MainGrid";
import SubMenu from "./components/SubMenu";
import DailyBonus from "./components/DailyBonus";
import BottomNav from "./components/BottomNav";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [walletBalance, setWalletBalance] = useState("00.00");

  return (
    <div className="max-w-md mx-auto font-sans p-3">
      <Header walletBalance={walletBalance} onWalletClick={() => setSelected("Wallet")} />
      <MainGrid onSelect={setSelected} />
      <SubMenu selected={selected} onSelect={setSelected} />
      <DailyBonus />
      <BottomNav onSelect={setSelected} />
    </div>
  );
};

export default App;
