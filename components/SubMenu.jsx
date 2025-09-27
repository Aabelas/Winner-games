import React from "react";
import AppButton from "./AppButton";

const SubMenu = ({ selected, onSelect }) => {
  const items = {
    Games: ["Aviator", "Chicken Road", "Keno", "Coin Flip", "Fast Keno", "JetX"],
    Rewards: ["Treasure Box 📦", "Spin"],
    Wallet: ["Deposit", "Withdraw"],
    Deposit: ["Telebirr", "Bank Transfer", "Impesa"],
    Withdraw: ["Telebirr", "Bank Transfer", "Impesa"],
    Support: ["@Winnergamehelp"],
    Invite: ["Copy Your Invite Link"],
  };

  if (!selected) return null;

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-5">
      {items[selected].map((item) => (
        <AppButton
          key={item}
          label={item}
          color={
            selected === "Games"
              ? "#FF7F50"
              : selected === "Rewards"
              ? "#6A5ACD"
              : selected === "Wallet" || selected === "Deposit" || selected === "Withdraw"
              ? "#20B2AA"
              : selected === "Support"
              ? "#FF1493"
              : "#FFD700"
          }
          onClick={() => alert(selected === "Invite" ? "Invite link copied!" : "Coming Soon")}
        />
      ))}
    </div>
  );
};

export default SubMenu;
