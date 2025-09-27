import React, { useState, useEffect } from "react";
import "./index.css";

// Sample icons (replace with real SVGs or images later)
const TrophyIcon = () => <span className="icon">🏆</span>;
const PlayIcon = () => <span className="icon">▶️</span>;
const ShopIcon = () => <span className="icon">🛒</span>;
const ProfileIcon = () => <span className="icon">👤</span>;

function App() {
  // ===== States =====
  const [balance, setBalance] = useState(500);
  const [dailyBonusAvailable, setDailyBonusAvailable] = useState(false);
  const [winners, setWinners] = useState([
    { name: "Alice", prize: 100 },
    { name: "Bob", prize: 50 },
    { name: "Charlie", prize: 75 },
  ]);

  // ===== Daily Bonus Logic =====
  useEffect(() => {
    const lastClaim = localStorage.getItem("dailyBonus");
    const now = Date.now();
    if (!lastClaim || now - lastClaim > 24 * 60 * 60 * 1000) {
      setDailyBonusAvailable(true);
    }
  }, []);

  const claimDailyBonus = () => {
    if (!dailyBonusAvailable) return;
    const bonus = 20;
    setBalance(balance + bonus);
    localStorage.setItem("dailyBonus", Date.now());
    setDailyBonusAvailable(false);
  };

  return (
    <div className="app-container">
      {/* ===== Top Section ===== */}
      <header className="top-section">
        <div className="balance-section">
          <h2>💰 Balance: {balance}</h2>
          <div className="balance-buttons">
            <button className="deposit-btn">Deposit</button>
            <button className="withdraw-btn">Withdraw</button>
          </div>
        </div>

        <div className="winners-section">
          <h3><TrophyIcon /> Recent Winners</h3>
          <ul className="winners-list">
            {winners.map((w, idx) => (
              <li key={idx}>
                {w.name} won {w.prize} coins
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ===== Daily Bonus Section ===== */}
      <section className="daily-bonus-section">
        {dailyBonusAvailable ? (
          <button className="daily-bonus-btn" onClick={claimDailyBonus}>
            Claim Daily Bonus 🎁
          </button>
        ) : (
          <span className="claimed-text">Daily Bonus Claimed ✅</span>
        )}
      </section>

      {/* ===== Game Section ===== */}
      <main className="game-section">
        <h2>🎮 Your Game Area</h2>
        {/* Put your game components here */}
      </main>

      {/* ===== Bottom Mini Buttons ===== */}
      <footer className="mini-buttons-section">
        <button className="mini-btn"><PlayIcon /> Play</button>
        <button className="mini-btn"><ShopIcon /> Shop</button>
        <button className="mini-btn"><ProfileIcon /> Profile</button>
      </footer>
    </div>
  );
}

export default App;
