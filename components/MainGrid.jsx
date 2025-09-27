import React from "react";
import AppButton from "./AppButton";

const MainGrid = ({ onSelect }) => (
  <div className="grid grid-cols-2 gap-2 mb-5">
    <AppButton label="Wallet 👝" color="#20B2AA" onClick={() => onSelect("Wallet")} />
    <AppButton label="🎮 Games" color="#FF7F50" onClick={() => onSelect("Games")} />
    <AppButton label="Support 🆘" color="#FF1493" onClick={() => onSelect("Support")} />
    <AppButton label="Rewards 🎁" color="#6A5ACD" onClick={() => onSelect("Rewards")} />
    <AppButton label="Invite 🔗" color="#FFD700" onClick={() => onSelect("Invite")} />
  </div>
);

export default MainGrid;
