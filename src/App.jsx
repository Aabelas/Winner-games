import React, { useState, useEffect } from "react";

// Helper component for a button
const AppButton = ({ label, onClick, color }) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: color,
      color: "#fff",
      border: "none",
      borderRadius: "15px",
      padding: "15px",
      margin: "5px",
      fontWeight: "bold",
      fontSize: "16px",
      cursor: "pointer",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      flex: 1,
    }}
  >
    {label}
  </button>
);

const App = () => {
  const [selected, setSelected] = useState(null);
  const [bonusTime, setBonusTime] = useState(24 * 60 * 60); // 24 hours in seconds
  const [walletBalance, setWalletBalance] = useState("00.00"); // Placeholder

  useEffect(() => {
    const timer = setInterval(() => {
      setBonusTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, "0");
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  // Main Section handlers
  const handleClick = (button) => {
    setSelected(button);
  };

  const renderSubMenu = () => {
    switch (selected) {
      case "Games":
        return (
          <div style={styles.subMenu}>
            {["Aviator", "Chicken Road", "Keno", "Coin Flip", "Fast Keno", "JetX"].map(
              (game) => (
                <AppButton
                  key={game}
                  label={game}
                  onClick={() => alert("Coming Soon")}
                  color="#FF7F50"
                />
              )
            )}
          </div>
        );
      case "Rewards":
        return (
          <div style={styles.subMenu}>
            {["Treasure Box 📦", "Spin"].map((reward) => (
              <AppButton
                key={reward}
                label={reward}
                onClick={() => alert("Coming Soon")}
                color="#6A5ACD"
              />
            ))}
          </div>
        );
      case "Wallet":
        return (
          <div style={styles.subMenu}>
            {["Deposit", "Withdraw"].map((option) => (
              <AppButton
                key={option}
                label={option}
                onClick={() => handleClick(option)}
                color="#20B2AA"
              />
            ))}
          </div>
        );
      case "Deposit":
      case "Withdraw":
        return (
          <div style={styles.subMenu}>
            {["Telebirr", "Bank Transfer", "Impesa"].map((option) => (
              <AppButton
                key={option}
                label={option}
                onClick={() => alert("Coming Soon")}
                color="#FF6347"
              />
            ))}
          </div>
        );
      case "Support":
        return (
          <div style={styles.subMenu}>
            <AppButton
              label="@Winnergamehelp"
              onClick={() => alert("Contact on Telegram")}
              color="#FF1493"
            />
          </div>
        );
      case "Invite":
        return (
          <div style={styles.subMenu}>
            <AppButton
              label="Copy Your Invite Link"
              onClick={() => alert("Invite link copied!")}
              color="#FFD700"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.appContainer}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.trophy}>🏆</div>
        <div style={styles.title}>WINNER GAMES</div>
        <div style={styles.wallet} onClick={() => handleClick("Wallet")}>
          👝 {walletBalance}
        </div>
        <div style={styles.subTitle}>Play more, earn more</div>
      </div>

      {/* Main Grid */}
      <div style={styles.gridContainer}>
        <AppButton
          label="Wallet 👝"
          onClick={() => handleClick("Wallet")}
          color="#20B2AA"
        />
        <AppButton
          label="🎮 Games"
          onClick={() => handleClick("Games")}
          color="#FF7F50"
        />
        <AppButton
          label="Support 🆘"
          onClick={() => handleClick("Support")}
          color="#FF1493"
        />
        <AppButton
          label="Rewards 🎁"
          onClick={() => handleClick("Rewards")}
          color="#6A5ACD"
        />
        <AppButton
          label="Invite 🔗"
          onClick={() => handleClick("Invite")}
          color="#FFD700"
        />
      </div>

      {/* Sub Menu */}
      {renderSubMenu()}

      {/* Daily Bonus Section */}
      <div style={styles.dailyBonus}>
        <div style={{ fontSize: "18px", fontWeight: "bold" }}>
          🔥 Daily bonus available 🎁
        </div>
        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            marginTop: "5px",
            padding: "10px 20px",
            backgroundColor: "#FF4500",
            borderRadius: "15px",
            color: "#fff",
            display: "inline-block",
            cursor: "pointer",
          }}
          onClick={() => alert("Bonus Claimed!")}
        >
          {formatTime(bonusTime)}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div style={styles.bottomNav}>
        {["home 🏠", "games 🎮", "wallet 👝", "reward 🎁", "help 🆘"].map((nav) => (
          <AppButton
            key={nav}
            label={nav}
            onClick={() => {
              if (nav.includes("games")) handleClick("Games");
              else if (nav.includes("wallet")) handleClick("Wallet");
              else if (nav.includes("reward")) handleClick("Rewards");
              else if (nav.includes("help")) handleClick("Support");
              else handleClick(null);
            }}
            color="#1E90FF"
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  appContainer: {
    maxWidth: "480px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    padding: "10px",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  trophy: {
    fontSize: "40px",
    animation: "bounce 2s infinite",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#FF4500",
  },
  wallet: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#20B2AA",
    cursor: "pointer",
    marginTop: "5px",
  },
  subTitle: {
    fontSize: "16px",
    color: "#555",
    marginTop: "5px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px",
    marginBottom: "20px",
  },
  subMenu: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
    justifyContent: "center",
  },
  dailyBonus: {
    textAlign: "center",
    marginBottom: "20px",
  },
  bottomNav: {
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "95%",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
  },
};

export default App;
