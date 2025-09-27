import { useState, useEffect } from "react";
import { Home, Gamepad2, Wallet, Gift, HelpCircle, Trophy } from "lucide-react";

function App() {
  const [page, setPage] = useState("home");
  const [balance, setBalance] = useState(0.0);
  const [bonusTime, setBonusTime] = useState(24 * 60 * 60); // 24h in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setBonusTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="p-4 flex justify-between items-center bg-gray-800">
        <div className="flex items-center space-x-2 text-neonGold animate-glow">
          <Trophy className="w-6 h-6" />
          <h1 className="text-xl font-bold">Winner Games</h1>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-lg font-semibold">Balance: ${balance.toFixed(2)}</span>
          <button className="px-3 py-1 bg-neonBlue rounded-xl">Deposit</button>
          <button className="px-3 py-1 bg-neonPurple rounded-xl">Withdraw</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4">
        {page === "home" && (
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setPage("games")} className="p-4 bg-gray-700 rounded-2xl">🎮 Play Games</button>
            <button onClick={() => setPage("wallet")} className="p-4 bg-gray-700 rounded-2xl">💰 Wallet</button>
            <button onClick={() => setPage("rewards")} className="p-4 bg-gray-700 rounded-2xl">🎁 Rewards</button>
            <button onClick={() => setPage("refer")} className="p-4 bg-gray-700 rounded-2xl">👥 Refer & Earn</button>
            <button onClick={() => setPage("support")} className="p-4 bg-gray-700 rounded-2xl">🙋 Support</button>
            <div className="p-4 bg-gray-700 rounded-2xl">
              🔥 Daily Bonus
              <p className="mt-2">Next: {formatTime(bonusTime)}</p>
              {bonusTime === 0 && (
                <button className="mt-2 px-3 py-1 bg-neonGold text-black rounded-xl" onClick={() => {
                  setBalance((b) => b + 10); // mock bonus
                  setBonusTime(24 * 60 * 60);
                }}>
                  Claim Bonus
                </button>
              )}
            </div>
          </div>
        )}

        {page === "games" && (
          <div className="grid grid-cols-2 gap-4 p-4">
            {["Aviator", "Keno", "Fast Keno", "JetX", "Coin Flip", "Chicken Road"].map((g) => (
              <button key={g} className="bg-neonPurple p-4 rounded-2xl shadow-lg">{g}</button>
            ))}
          </div>
        )}

        {page === "wallet" && (
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">Wallet</h2>
            <button className="w-full bg-neonBlue p-3 rounded-xl">Deposit (Telebirr)</button>
            <button className="w-full bg-neonGold p-3 rounded-xl">Withdraw (Mpesa)</button>
          </div>
        )}

        {page === "rewards" && (
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">Rewards</h2>
            <button className="w-full bg-neonBlue p-3 rounded-xl">🎡 Spin</button>
            <button className="w-full bg-neonPurple p-3 rounded-xl">💎 Treasure Box</button>
          </div>
        )}

        {page === "refer" && (
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">Refer & Earn</h2>
            <div className="flex items-center space-x-2 bg-gray-800 p-3 rounded-lg">
              <span className="flex-1">https://winner.games/ref/12345</span>
              <button onClick={() => navigator.clipboard.writeText("https://winner.games/ref/12345")} className="bg-neonGold p-2 rounded-lg">Copy</button>
            </div>
            <p>Invite friends, earn 10%!</p>
          </div>
        )}

        {page === "support" && (
          <div className="p-4">
            <h2 className="text-xl font-bold">Support</h2>
            <a href="https://t.me/Winnergamehelp" className="block bg-neonBlue p-3 rounded-xl text-center">Open Help Center</a>
          </div>
        )}
      </main>

      {/* Bottom Nav */}
      <nav className="p-2 bg-gray-800 flex justify-around">
        <button onClick={() => setPage("home")}><Home className="w-6 h-6" /></button>
        <button onClick={() => setPage("games")}><Gamepad2 className="w-6 h-6" /></button>
        <button onClick={() => setPage("wallet")}><Wallet className="w-6 h-6" /></button>
        <button onClick={() => setPage("rewards")}><Gift className="w-6 h-6" /></button>
        <button onClick={() => setPage("support")}><HelpCircle className="w-6 h-6" /></button>
      </nav>
    </div>
  );
}

export default App;
