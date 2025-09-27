import React, { useEffect, useState } from "react";

const DailyBonus = () => {
  const [bonusTime, setBonusTime] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => setBonusTime(prev => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, "0");
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="text-center mb-5">
      <div className="text-lg font-bold">🔥 Daily bonus available 🎁</div>
      <div
        className="text-xl font-bold mt-2 inline-block p-3 rounded-xl text-white cursor-pointer"
        style={{ backgroundColor: "#FF4500" }}
        onClick={() => alert("Bonus Claimed!")}
      >
        {formatTime(bonusTime)}
      </div>
    </div>
  );
};

export default DailyBonus;
