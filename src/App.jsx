/* ---------- Basic Reset ---------- */
* { box-sizing: border-box; margin: 0; padding: 0; }
html,body { height: 100%; }
body {
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background: linear-gradient(180deg, #0b0b12 0%, #120817 100%);
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 76px; /* space for bottom nav */
}

/* ---------- Header ---------- */
.header {
  max-width: 980px;
  margin: 18px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  gap: 12px;
}

.header-left { display:flex; align-items:center; gap:12px; }
.trophy-btn {
  background: linear-gradient(135deg,#ffd24d,#ff9a00);
  border-radius: 12px;
  width:60px; height:60px;
  display:flex; align-items:center; justify-content:center;
  border:none; cursor:pointer;
  box-shadow: 0 6px 18px rgba(255,165,0,0.25);
  animation: trophy-bounce 2.2s ease-in-out infinite;
}
.trophy { font-size:28px; transform: translateY(0); }
@keyframes trophy-bounce {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-6px) rotate(-6deg); }
}

.title-block { line-height: 1; }
.main-title {
  font-size: 20px;
  color: #ffd24d;
  text-shadow: 0 6px 18px rgba(255, 200, 0, 0.14);
  font-weight:800;
}
.subtitle { color: #7ef0ff; font-size: 12px; opacity:0.95; margin-top:4px; }

/* Wallet on right */
.wallet-btn {
  display:flex; align-items:center; gap:8px;
  background: linear-gradient(180deg,#141227,#1b1930);
  padding: 8px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.03);
  cursor:pointer;
  box-shadow: 0 6px 18px rgba(0,0,0,0.6);
}
.wallet-emoji { font-size:20px; }
.balance-info { display:flex; flex-direction:column; }
.balance-label { font-size:11px; color:#b8c7d6; }
.balance-amount { font-weight:700; color:#ffe08a; font-size:16px; }

/* Daily bonus */
.daily-section { max-width: 980px; margin: 8px auto; padding: 0 12px; }
.daily-card {
  display:flex; justify-content:space-between; align-items:center;
  gap:12px;
  background: linear-gradient(180deg,#161428,#23162d);
  border-radius:14px;
  padding:12px;
  box-shadow: 0 8px 30px rgba(80,20,160,0.08);
  border: 1px solid rgba(255,255,255,0.03);
}
.daily-left { display:flex; gap:12px; align-items:center; }
.daily-emoji { font-size:28px; transform: translateY(0); }
.daily-title { font-weight:700; color:#ffcd6a; }
.cashback-note { font-size:12px; color:#bcd9e0; opacity:0.9; margin-top:2px; }
.countdown {
  font-weight:800; font-size:18px;
  background: linear-gradient(90deg,#ffb84d,#ffd24d);
  color:#081018; padding:8px 12px; border-radius:10px;
  box-shadow: 0 10px 30px rgba(255,160,0,0.12);
}

/* ---------- Grid buttons ---------- */
.grid-wrap {
  max-width: 980px;
  margin: 16px auto;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 12px;
  padding: 0 12px 40px 12px;
}
.grid-btn {
  border-radius: 14px;
  padding: 18px 10px;
  min-height: 110px;
  display:flex; flex-direction:column; align-items:center;
  justify-content:center; gap:8px;
  color:#fff; font-weight:700; font-size:14px;
  border: 1px solid rgba(255,255,255,0.04);
  cursor:pointer;
  transition: transform .18s ease, box-shadow .18s ease;
  box-shadow: 0 8px 26px rgba(0,0,0,0.45);
}

/* individual colors */
.grid-btn .grid-emoji { font-size:28px; }
.sky { background: linear-gradient(135deg,#0fb8f4,#0a7bd9); box-shadow: 0 8px 30px rgba(10,123,217,0.22); }
.gold { background: linear-gradient(135deg,#ffb84d,#ff7a00); box-shadow: 0 8px 30px rgba(255,140,0,0.18); }
.pink { background: linear-gradient(135deg,#ff7adf,#a94ff7); box-shadow: 0 8px 30px rgba(169,79,247,0.18); }
.purple { background: linear-gradient(135deg,#7b61ff,#4b2ebf); box-shadow: 0 8px 30px rgba(75,46,191,0.18); }
.coral { background: linear-gradient(135deg,#ff6b6b,#ff9a9e); box-shadow: 0 8px 30px rgba(255,100,100,0.16); }
.violet { background: linear-gradient(135deg,#9b59ff,#6a5cff); box-shadow: 0 8px 30px rgba(155,89,255,0.18); }

.grid-btn:active { transform: translateY(3px); }
.grid-btn:hover { transform: scale(1.03); }

/* ---------- Bottom nav ---------- */
.bottom-nav {
  position: fixed; left:0; right:0; bottom:0;
  height:64px; background: linear-gradient(180deg,#0b0b12,#0a0710);
  display:flex; justify-content:space-around; align-items:center;
  border-top:1px solid rgba(255,255,255,0.02);
  box-shadow: 0 -10px 30px rgba(0,0,0,0.6);
}
.nav-btn { background:transparent; border:none; color:#84f0ff; display:flex; flex-direction:column; align-items:center; gap:2px; font-weight:700; font-size:12px; cursor:pointer; }
.nav-btn span { font-size:11px; color:#bfeff7; margin-top:2px; }

/* ---------- Modal ---------- */
.modal-container.hidden { display:none; }
.modal-container {
  position: fixed; inset:0; display:flex; align-items:center; justify-content:center;
  background: rgba(0,0,0,0.6); z-index:999;
  padding: 18px;
}
.modal {
  width: 100%; max-width:420px;
  background: linear-gradient(180deg,#0e0e16,#161221);
  border-radius:14px; padding:16px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.8);
  border: 1px solid rgba(255,255,255,0.03);
}
.modal h3 { color:#ffd24d; font-size:18px; margin-bottom:10px; }
.modal p { color:#cde8ef; font-size:13px; margin-bottom:10px; }
.modal .btn-row { display:flex; gap:8px; flex-wrap:wrap; margin-top:8px; }
.modal .small-btn {
  padding:10px 12px; border-radius:10px; border:none; cursor:pointer; font-weight:700;
  color:#081018;
}

/* Coming soon style */
.small-btn.coming { background: linear-gradient(90deg,#ffd24d,#ff7a00); }

/* special small neutral */
.small-btn.link { background: linear-gradient(90deg,#7ef0ff,#5de0f0); color:#001219; }

/* Close */
.modal .close { position:absolute; right:14px; top:10px; background:transparent; border:none; color:#fff; font-size:20px; cursor:pointer; }

/* responsive */
@media (max-width:640px) {
  .grid-wrap { grid-template-columns: repeat(2,1fr); gap:10px; }
  .header { padding: 8px; margin: 12px 6px; }
  .main-title { font-size: 18px; }
  .daily-card { padding:10px; }
}
