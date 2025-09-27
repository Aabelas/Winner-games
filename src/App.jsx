import React, { useState } from "react";

function App() {
  // ====== STATE MANAGEMENT ======
  const [balance, setBalance] = useState(100); // default balance
  const [referrals, setReferrals] = useState(0);
  const [bonusClaimed, setBonusClaimed] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  // ====== HANDLERS ======
  const handleDepositMethod = (method) => {
    alert(`Deposit via ${method} coming soon!`);
    setShowDeposit(false);
  };

  const handleWithdrawMethod = (method) => {
    alert(`Withdraw via ${method} coming soon!`);
    setShowWithdraw(false);
  };

  const handleClaimBonus = () => {
    if (!bonusClaimed) {
      setBalance(balance + 10); // +10 bonus
      setBonusClaimed(true);
      alert("🎁 Daily bonus claimed! +10 added to balance.");
    } else {
      alert("You already claimed your daily bonus today!");
    }
  };

  const handleReferral = () => {
    setReferrals(referrals + 1);
    setBalance(balance + 5); // reward for referral
    alert("✅ Referral added! +5 balance");
  };

  const handlePlayGame = () => {
    const win = Math.random() > 0.5; // 50% chance
    if (win) {
      setBalance(balance + 20);
      alert("🎉 You won +20!");
    } else {
      setBalance(balance - 10);
      alert("😢 You lost -10");
    }
  };

  // ====== UI ======
  return (
    <div style={styles.container}>
      {/* Top Balance Section */}
      <h1 style={styles.balance}>💰 Balance: {balance} ETB</h1>
      <div style={styles.topButtons}>
        <button style={styles.button} onClick={() => setShowDeposit(!showDeposit)}>
          ➕ Deposit
        </button>
        <button style={styles.button} onClick={() => setShowWithdraw(!showWithdraw)}>
          💵 Withdraw
        </button>
      </div>

      {/* Deposit Options */}
      {showDeposit && (
        <div style={styles.popupBox}>
          <h3>Choose Deposit Method</h3>
          <button style={styles.optionButton} onClick={() => handleDepositMethod("Telebirr")}>
            📲 Telebirr
          </button>
          <button style={styles.optionButton} onClick={() => handleDepositMethod("Bank Transfer")}>
            🏦 Bank Transfer
          </button>
          <button style={styles.optionButton} onClick={() => handleDepositMethod("Mpesa")}>
            💳 Mpesa
          </button>
        </div>
      )}

      {/* Withdraw Options */}
      {showWithdraw && (
        <div style={styles.popupBox}>
          <h3>Choose Withdraw Method</h3>
          <button style={styles.optionButton} onClick={() => handleWithdrawMethod("Telebirr")}>
            📲 Telebirr
          </button>
          <button style={styles.optionButton} onClick={() => handleWithdrawMethod("Bank Transfer")}>
            🏦 Bank Transfer
          </button>
          <button style={styles.optionButton} onClick={() => handleWithdrawMethod("Mpesa")}>
            💳 Mpesa
          </button>
        </div>
      )}

      {/* Daily Bonus */}
      <button style={styles.bonusButton} onClick={handleClaimBonus}>
        🎁 Claim Daily Bonus
      </button>

      {/* Referral Section */}
      <div style={styles.referralBox}>
        <h3>👥 Referrals: {referrals}</h3>
        <button style={styles.button} onClick={handleReferral}>
          ➕ Add Referral
        </button>
      </div>

      {/* Game Section */}
      <div style={styles.gameBox}>
        <h2>🎮 Winner Game</h2>
        <p>Play more, earn more!</p>
        <button style={styles.playButton} onClick={handlePlayGame}>
          ▶️ Play
        </button>
      </div>
    </div>
  );
}

// ====== INLINE STYLES ======
const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#0f0f0f",
    minHeight: "100vh",
    color: "white",
  },
  balance: {
    fontSize: "28px",
    marginBottom: "10px",
    color: "#FFD700",
  },
  topButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#1E90FF",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },
  bonusButton: {
    padding: "12px 25px",
    fontSize: "18px",
    margin: "20px 0",
    backgroundColor: "#32CD32",
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
  },
  referralBox: {
    margin: "20px 0",
    padding: "15px",
    border: "2px solid #FFD700",
    borderRadius: "12px",
  },
  gameBox: {
    marginTop: "30px",
    padding: "20px",
    border: "2px solid #1E90FF",
    borderRadius: "12px",
  },
  playButton: {
    padding: "15px 40px",
    fontSize: "20px",
    marginTop: "10px",
    backgroundColor: "#FF4500",
    border: "none",
    borderRadius: "12px",
    color: "white",
    cursor: "pointer",
  },
  popupBox: {
    background: "#1c1c1c",
    padding: "15px",
    margin: "10px auto",
    borderRadius: "10px",
    border: "2px solid #FFD700",
    maxWidth: "300px",
  },
  optionButton: {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "5px 0",
    backgroundColor: "#444",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default App;
