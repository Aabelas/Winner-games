import React, { useState, useEffect } from "react";

// Live daily bonus countdown
function DailyBonus() {
  const [seconds, setSeconds] = useState(24 * 60 * 60);
  useEffect(() => {
    const t = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 24 * 60 * 60));
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const hh = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="bg-[#181725] rounded-xl p-4 flex items-center mx-auto max-w-md mt-4 drop-shadow-glow">
      <span className="text-yellow-400 text-3xl mr-3">🧰</span>
      <div>
        <div className="text-yellow-400 font-bold text-lg mb-1">DAILY BONUS AVAILABLE!</div>
        <div className="bg-black text-yellow-400 font-mono px-3 py-1 rounded-lg text-lg inline-block">
          {hh}:{mm}:{ss}
        </div>
      </div>
    </div>
  );
}

const mainButtons = [
  { name: "PLAY GAMES", color: "#00f0ff", icon: "🎮" },
  { name: "WALLET", color: "#FFD700", icon: "💰" },
  { name: "REWARDS", color: "#a020f0", icon: "🎁" },
  { name: "SPIN & WIN", color: "#a020f0", icon: "🎡" },
  { name: "VIP ZONE", color: "#FFD700", icon: "👑" },
  { name: "REFER & EARN", color: "#00f0ff", icon: "👥" }
];

const navItems = [
  { name: "Home", icon: "🏠", color: "#00f0ff" },
  { name: "Games", icon: "🎮", color: "#00f0ff" },
  { name: "Wallet", icon: "💳", color: "#FFD700" },
  { name: "Rewards", icon: "🎁", color: "#a020f0" },
  { name: "Help", icon: "❓", color: "#00f0ff" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0e0927] to-[#1b1542] pb-24">
      {/* Header Section */}
      <div className="rounded-xl max-w-md mx-auto mt-7 bg-[#181725] p-4 shadow-lg flex flex-col items-center">
        <h1 className="text-yellow-400 text-4xl font-black mb-1 drop-shadow-glow text-center">
          WINNER GAME
        </h1>
        <div className="text-[#00f0ff] text-2xl mt-2 text-center font-semibold">Play More, Earn More</div>
      </div>
      {/* Daily Bonus */}
      <DailyBonus />
      {/* Main Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4 mt-10 max-w-md mx-auto">
        {mainButtons.map((btn) => (
          <button
            key={btn.name}
            className="rounded-xl shadow-lg flex flex-col items-center py-7 px-2 bg-black border-2 border-transparent hover:scale-105 transition"
            style={{ color: btn.color, borderColor: btn.color }}
          >
            <span className="text-3xl mb-2">{btn.icon}</span>
            <span className="text-lg font-bold">{btn.name}</span>
          </button>
        ))}
      </div>
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-[#181725] flex justify-around items-center p-3 shadow-lg border-t border-[#28234f] z-10">
        {navItems.map((item) => (
          <button key={item.name} className="flex flex-col items-center text-xs" style={{ color: item.color }}>
            <span className="text-2xl mb-1">{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
    }
