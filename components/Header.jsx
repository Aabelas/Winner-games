import React from "react";

const Header = ({ walletBalance, onWalletClick }) => (
  <div className="text-center mb-5">
    <div className="text-5xl animate-bounce">🏆</div>
    <div className="text-3xl font-bold text-orange-500">WINNER GAMES</div>
    <div
      className="text-xl font-bold text-teal-500 mt-1 cursor-pointer"
      onClick={onWalletClick}
    >
      👝 {walletBalance}
    </div>
    <div className="text-gray-600 mt-1">Play more, earn more</div>
  </div>
);

export default Header;
