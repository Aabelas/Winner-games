import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  // ======= State =======
  const [balance, setBalance] = useState(100); // User balance
  const [dailyBonus, setDailyBonus] = useState(false);
  const [miniButtons, setMiniButtons] = useState([
    { id: 1, label: "Play", action: () => alert("Play clicked") },
    { id: 2, label: "Shop", action: () => alert("Shop clicked") },
    { id: 3, label: "Profile", action: () => alert("Profile clicked") },
  ]);

  const [winners, setWinners] = useState([
    { name: "User1", prize: 50 },
    { name: "User2", prize: 100 },
  ]);

  // ======= Daily Bonus Timer =======
  useEffect(() => {
    const lastClaim = localStorage.getItem("dailyBonusClaim");
    const now = new Date().getTime();

    if (!lastClaim || now - lastClaim > 24 * 60 * 60 * 1000) {
      setDailyBonus(true);
    }
  }, []);

  const claimDailyBonus = () => {
    if (dailyBonus) {
      const bonusAmount = 10;
      setBalance(balance + bonusAmount);
      localStorage.setItem("dailyBonusClaim", new Date().getTime());
      setDailyBonus(false);
      alert(`You claimed ${bonusAmount} coins!`);
    }
  };

  return (
    <div className="app-container">
      {/* ===== Top Section ===== */}
      <header className="top-section">
        <div className="balance">
          💰 Balance: {balance} 
          <button className="deposit-btn">Deposit</button>
          <button className="withdraw-btn">Withdraw</button>
        </div>
        <div className="winners">
          <h3>🏆 Recent Winners</h3>
          <ul>
            {winners.map((winner, idx) => (
              <li key={idx}>
                {winner.name} won {winner.prize} coins
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ===== Daily Bonus ===== */}
      <section className="daily-bonus">
        {dailyBonus ? (
          <button className="claim-btn" onClick={claimDailyBonus}>
            Claim Daily Bonus 🎁
          </button>
        ) : (
          <span>Daily Bonus Claimed ✅</span>
        )}
      </section>

      {/* ===== Main Game Area ===== */}
      <main className="game-area">
        <h2>🎮 Game Section</h2>
        {/* Put your game or content here */}
      </main>

      {/* ===== Mini Buttons Bottom ===== */}
      <footer className="mini-buttons">
        {miniButtons.map((btn) => (
          <button key={btn.id} onClick={btn.action}>
            {btn.label}
          </button>
        ))}
      </footer>
    </div>
  );
}

export default App;
