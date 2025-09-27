import React from "react";
import AppButton from "./AppButton";

const BottomNav = ({ onSelect }) => (
  <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-11/12 flex justify-between p-2 bg-gray-100 rounded-t-xl shadow-md">
    {["home 🏠", "games 🎮", "wallet 👝", "reward 🎁", "help 🆘"].map((nav) => (
      <AppButton
        key={nav}
        label={nav}
        color="#1E90FF"
        onClick={() => {
          if (nav.includes("games")) onSelect("Games");
          else if (nav.includes("wallet")) onSelect("Wallet");
          else if (nav.includes("reward")) onSelect("Rewards");
          else if (nav.includes("help")) onSelect("Support");
          else onSelect(null);
        }}
      />
    ))}
  </div>
);

export default BottomNav;
