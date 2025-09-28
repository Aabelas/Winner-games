import React, { useState, useEffect } from "react";

const gamesList = ["Aviator", "Chicken Road", "Keno", "Coin Flip", "Fast Keno", "JetX"];
const rewardOptions = ["Treasure Box 📦", "Spin 🎡"];
const walletMethods = ["Telebirr", "Bank Transfer", "Mpesa"];

function AnimatedTrophy() {
  return <span className="animate-bounce text-yellow-400 text-3xl mr-2">🏆</span>;
}

function Header({ balance, onDepositClick, onWithdrawClick }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gradient-to-r from-neonBlue to-neonGold rounded-xl shadow-lg text-white mb-6 max-w-5xl mx-auto">
      <div className="flex items-center">
        <AnimatedTrophy />
        <h1 className="text-3xl font-extrabold mr-4">WINNER GAMES</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
        <div className="mb-2 md:mb-0">Balance: <span className="font-bold text-yellow-300">${balance.toFixed(2)}</span></div>
        <button onClick={onDepositClick} className="bg-cyan-400 hover:bg-cyan-600 text-black font-semibold px-4 py-2 rounded-full mx-2">Deposit</button>
        <button onClick={onWithdrawClick} className="bg-purple-500 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-full mx-2">Withdraw</button>
      </div>
    </div>
  );
}

function ButtonGrid({ onButtonClick }) {
  const buttons = [
    { name: "Play Games", emoji: "🎮", id: "games" },
    { name: "Wallet", emoji: "👝", id: "wallet" },
    { name: "Rewards", emoji: "🎁", id: "rewards" },
    { name: "Refer & Earn", emoji: "🔗", id: "invite" },
    { name: "Support", emoji: "🆘", id: "support" },
    { name: "Daily Bonus", emoji: "🔥", id: "daily-bonus" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
      {buttons.map(({name, emoji, id}) => (
        <button
          key={id}
          onClick={() => onButtonClick(id)}
          className="bg-gray-700 text-white py-6 rounded-xl flex flex-col justify-center items-center font-semibold text-lg shadow hover:scale-105 transition transform ease-in-out"
        >
          <span className="text-3xl mb-2">{emoji}</span>
          {name}
        </button>
      ))}
    </div>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl font-bold hover:text-red-600">&times;</button>
        {children}
      </div>
    </div>
  );
}

function GamesModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2 className="text-2xl mb-4 font-bold text-center text-yellow-400">Games List</h2>
      <div className="grid grid-cols-2 gap-4">
        {gamesList.map(game => (
          <button key={game} onClick={() => alert("Coming Soon")} className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl py-3 font-semibold hover:scale-105 transition">{game}</button>
        ))}
      </div>
    </Modal>
  );
}

function RewardsModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2 className="text-2xl mb-4 font-bold text-center text-yellow-400">Rewards</h2>
      <div className="grid grid-cols-2 gap-4">
        {rewardOptions.map(op => (
          <button key={op} onClick={() => alert("Coming Soon")} className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl py-3 font-semibold hover:scale-105 transition">{op}</button>
        ))}
      </div>
    </Modal>
  );
}

function WalletModal({ onClose }) {
  const [stage, setStage] = useState("main");

  return (
    <Modal onClose={onClose}>
      {stage === "main" && <>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-center">Wallet</h2>
        <div className="flex flex-col space-y-4">
          <button onClick={() => setStage("deposit")} className="bg-green-600 hover:bg-green-700 rounded-xl py-2 font-semibold text-white">Deposit</button>
          <button onClick={() => setStage("withdraw")} className="bg-red-600 hover:bg-red-700 rounded-xl py-2 font-semibold text-white">Withdraw</button>
        </div>
      </>}
      {stage === "deposit" && <WalletMethodSelector onBack={() => setStage("main")} type="Deposit" />}
      {stage === "withdraw" && <WalletMethodSelector onBack={() => setStage("main")} type="Withdraw" />}
    </Modal>
  );
}

function WalletMethodSelector({ onBack, type }) {
  const walletMethods = ["Telebirr", "Bank Transfer", "Mpesa"];
  return (
    <>
      <h2 className="text-center mb-4 text-yellow-400 font-bold text-xl">{type} Methods</h2>
      <div className="grid grid-cols-1 gap-4">
        {walletMethods.map(method => (
          <button key={method} onClick={() => alert("Coming Soon")} className={`rounded-xl py-2 font-semibold text-white ${type === "Deposit" ? "bg-pink-600 hover:bg-pink-700" : "bg-blue-600 hover:bg-blue-700"}`}>
            {method}
          </button>
        ))}
      </div>
      <button className="mt-4 text-white underline text-center" onClick={onBack}>Back</button>
    </>
  );
}

function SupportModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2 className="text-center text-yellow-400 font-bold text-2xl mb-4">Support</h2>
      <div className="text-center">
        <a href="https://t.me/Winnergamehelp" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold text-xl">@Winnergamehelp</a>
      </div>
    </Modal>
  );
}

function InviteModal({ inviteLink, onClose }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    alert("Invite link copied to clipboard!");
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-center text-yellow-400 font-bold text-2xl mb-4">Invite & Earn</h2>
      <div className="bg-gray-800 p-4 rounded-xl text-center break-words mb-4">{inviteLink}</div>
      <button className="bg-blue-500 hover:bg-blue-600 rounded-xl py-2 px-4 text-white font-semibold" onClick={copyToClipboard}>Copy Link</button>
    </Modal>
  );
}

function DailyBonus({ nextClaimInSeconds }) {
  const [secondsLeft, setSecondsLeft] = useState(nextClaimInSeconds || 0);
  useEffect(() => {
    if(secondsLeft <= 0) return;
    const interval = setInterval(() => setSecondsLeft(s => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);
  
  const hrs = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
  const min = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
  const sec = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="bg-gray-700 rounded-xl text-white p-3 flex items-center justify-between max-w-4xl mx-auto">
      <span className="text-yellow-400 font-bold text-lg flex items-center gap-2">
        <span role="img" aria-label="fire">🔥</span> Daily Bonus Available
      </span>
      <span className="bg-black rounded-lg py-1 px-3 font-mono text-yellow-400 text-lg">{hrs}:{min}:{sec}</span>
    </div>
  );
}

function BottomNav({ onNavigate }) {
  const buttons = [
    { label: "Home", icon: "🏠", id: "home" },
    { label: "Games", icon: "🎮", id: "games" },
    { label: "Wallet", icon: "👝", id: "wallet" },
    { label: "Rewards", icon: "🎁", id: "rewards" },
    { label: "Help", icon: "🆘", id: "support" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-800 text-white flex justify-around p-3 space-x-4 z-40 rounded-t-xl shadow-lg">
      {buttons.map(({label, icon, id}) => (
        <button 
          key={id}
          onClick={() => onNavigate(id)}
          className="flex flex-col items-center text-sm font-semibold hover:text-yellow-300 transition"
        >
          <span className="text-2xl">{icon}</span>
          {label}
        </button>
      ))}
    </nav>
  );
}

export default function App() {
  const [balance, setBalance] = useState(500);
  const [inviteLink, setInviteLink] = useState("https://winnergames.com/ref/USER123");
  const [modal, setModal] = useState(null);
  const [dailyBonusTime, setDailyBonusTime] = useState(24 * 60 * 60);
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page) => {
    if (["games", "wallet", "rewards", "support", "invite"].includes(page)) {
      setModal(page);
    } else {
      setModal(null);
    }
    setCurrentPage(page);
  };

  const onDepositClick = () => setModal("wallet");
  const onWithdrawClick = () => setModal("wallet");

  return (
    <>
      <Header balance={balance} onDepositClick={onDepositClick} onWithdrawClick={onWithdrawClick} />
      <ButtonGrid onButtonClick={handleNavigate} />
      <div className="max-w-4xl mx-auto p-4 md:p-0 mt-6">
        <DailyBonus nextClaimInSeconds={dailyBonusTime} />
      </div>
      <BottomNav onNavigate={handleNavigate} />
      {modal === "games" && <GamesModal onClose={() => setModal(null)} />}
      {modal === "rewards" && <RewardsModal onClose={() => setModal(null)} />}
      {(modal === "wallet") && <WalletModal onClose={() => setModal(null)} />}
      {modal === "support" && <SupportModal onClose={() => setModal(null)} />}
      {modal === "invite" && <InviteModal inviteLink={inviteLink} onClose={() => setModal(null)} />}
    </>
  );
}
