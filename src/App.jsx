/* ---------- Helper & state ---------- */
const modalContainer = document.getElementById('modalContainer');
const balanceEl = document.getElementById('balance');
const countdownEl = document.getElementById('countdown');

let state = {
  balance: parseFloat(localStorage.getItem('wg_balance') || '50.00'), // default balance
  // dailyTimer: seconds remaining until next claim (persisted)
  dailySeconds: parseInt(localStorage.getItem('wg_daily_seconds') || String(24*60*60), 10)
};

/* Save balance and timer on change */
function persist() {
  localStorage.setItem('wg_balance', state.balance.toFixed(2));
  localStorage.setItem('wg_daily_seconds', state.dailySeconds);
}

/* ---------- UI updates ---------- */
function updateBalanceUI(){
  balanceEl.textContent = Number(state.balance).toFixed(2);
}

/* ---------- Modal helpers ---------- */
function showModal(htmlContent) {
  modalContainer.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <button class="close" id="modalClose">&times;</button>
      ${htmlContent}
    </div>
  `;
  modalContainer.classList.remove('hidden');
  modalContainer.setAttribute('aria-hidden', 'false');
  document.getElementById('modalClose').onclick = closeModal;
}

function closeModal(){
  modalContainer.classList.add('hidden');
  modalContainer.setAttribute('aria-hidden', 'true');
  modalContainer.innerHTML = '';
}

/* ---------- Button behaviors ---------- */
function showComingSoon(title){
  showModal(`
    <h3>${title}</h3>
    <p>Coming soon — stay tuned! ✨</p>
    <div style="display:flex;justify-content:center;margin-top:12px;">
      <button class="small-btn coming" onclick="closeModal()">OK</button>
    </div>
  `);
}

/* Games list */
const gamesList = ["Aviator","Chicken Road","Keno","Coin Flip","Fast Keno","JetX"];
function openGames(){
  let html = '<h3>Games</h3><div class="btn-row">';
  gamesList.forEach(g => {
    html += `<button class="small-btn coming" onclick="showComingSoon('${g}')">${g}</button>`;
  });
  html += '</div>';
  showModal(html);
}

/* Rewards */
function openRewards(){
  const options = ["Treasure Box 📦","Spin 🎡"];
  let html = '<h3>Rewards</h3><p>Choose an option</p><div class="btn-row">';
  options.forEach(op => {
    html += `<button class="small-btn coming" onclick="showComingSoon('${op}')">${op}</button>`;
  });
  html += '</div>';
  showModal(html);
}

/* Wallet -> deposit/withdraw flow */
const walletMethods = ["Telebirr","Bank Transfer","Mpesa (Impesa)"];
function openWallet(){
  let html = '<h3>Wallet</h3><p>Choose an action</p><div class="btn-row">';
  html += `<button class="small-btn link" onclick="openDeposit()">Deposit</button>`;
  html += `<button class="small-btn link" onclick="openWithdraw()">Withdraw</button>`;
  html += '</div>';
  showModal(html);
}
function openDeposit(){
  let html = '<h3>Deposit</h3><p>Select method</p><div class="btn-row">';
  walletMethods.forEach(m => {
    html += `<button class="small-btn coming" onclick="showComingSoon('Deposit via ${m}')">${m}</button>`;
  });
  html += '</div>';
  showModal(html);
}
function openWithdraw(){
  let html = '<h3>Withdraw</h3><p>Select method</p><div class="btn-row">';
  walletMethods.forEach(m => {
    html += `<button class="small-btn coming" onclick="showComingSoon('Withdraw via ${m}')">${m}</button>`;
  });
  html += '</div>';
  showModal(html);
}

/* Support */
function openSupport(){
  showModal(`<h3>Support</h3><p>Contact our support:</p><div class="btn-row"><button class="small-btn link" onclick="copyText('@Winnergamehelp')">@Winnergamehelp</button></div>`);
}

/* Invite - unique link for user */
function openInvite(){
  // create a pseudo-unique id for demo (in real app use user id)
  const userId = localStorage.getItem('wg_userid') || ('user-' + Math.random().toString(36).slice(2,9));
  localStorage.setItem('wg_userid', userId);
  const link = `${location.origin}${location.pathname}?ref=${userId}`;
  showModal(`<h3>Invite & Earn</h3><p>Your unique invitation link:</p><p style="word-break:break-all;color:#bfeff7;">${link}</p><div class="btn-row"><button class="small-btn link" onclick="copyText('${link}')">Copy Link</button></div>`);
}

/* Copy helper */
function copyText(text){
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(()=> alert('Copied!'));
  } else {
    prompt('Copy this link', text);
  }
}

/* ---------- Interactions binding ---------- */
document.addEventListener('click', function(e){
  const btn = e.target.closest('[data-action]');
  if(btn){
    const action = btn.getAttribute('data-action');
    if(action === 'games') openGames();
    if(action === 'wallet') openWallet();
    if(action === 'rewards') openRewards();
    if(action === 'support') openSupport();
    if(action === 'invite') openInvite();
    if(action === 'spin') showComingSoon('Spin & Win');
  }
});

/* header wallet & trophy clicks */
document.getElementById('walletBtn').addEventListener('click', openWallet);
document.getElementById('trophyBtn').addEventListener('click', function(){ showModal('<h3>Trophy</h3><p>Winner announcements & events coming soon!</p><div style="display:flex;justify-content:center;margin-top:12px;"><button class="small-btn coming" onclick="closeModal()">OK</button></div>'); });

/* bottom nav */
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const a = btn.getAttribute('data-action');
    if(a === 'home') closeModal();
    if(a === 'games') openGames();
    if(a === 'wallet') openWallet();
    if(a === 'rewards') openRewards();
    if(a === 'support') openSupport();
  });
});

/* ---------- Countdown logic (24 hours, persistent) ---------- */
function formatTime(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}

/* start countdown */
function tickCountdown(){
  // decrease by 1 sec; if reaches 0 show CLAIM NOW and reset to 24h
  if(state.dailySeconds > 0){
    state.dailySeconds -= 1;
  } else {
    // when it hits zero we show claim now and then reset for demo purpose
    // in a real app decide real claim flow; here we reset to 24h after showing text for short time
    // show temporary "CLAIM NOW!" then reset
    state.dailySeconds = 0;
  }
  countdownEl.textContent = state.dailySeconds > 0 ? formatTime(state.dailySeconds) : "CLAIM NOW!";
  persist();
}

/* initialize: if first time set to full 24h from now */
(function initTimer(){
  // If stored value is 0 -> set to 24h so it keeps counting forever in demo
  if(!localStorage.getItem('wg_daily_seconds')) {
    state.dailySeconds = 24*60*60;
    persist();
  } else {
    state.dailySeconds = parseInt(localStorage.getItem('wg_daily_seconds'), 10);
    if(Number.isNaN(state.dailySeconds) || state.dailySeconds <= 0) state.dailySeconds = 24*60*60;
  }
  countdownEl.textContent = formatTime(state.dailySeconds);
  // run every second
  setInterval(() => {
    tickCountdown();
    // if it reaches 0, show a short modal to simulate claim and reset to 24h after user closes
    if(state.dailySeconds === 0 && !document.querySelector('.modal-container:not(.hidden)')) {
      showModal(`<h3>Daily Bonus</h3><p>Your daily bonus is ready! (Demo) 🎁</p><div class="btn-row"><button class="small-btn coming" onclick="closeModal(); resetDaily();">Claim (Demo)</button></div>`);
    }
  }, 1000);
})();

/* reset daily after claim */
function resetDaily(){
  state.dailySeconds = 24*60*60;
  persist();
  countdownEl.textContent = formatTime(state.dailySeconds);
}

/* ---------- initial UI setup ---------- */
updateBalanceUI();
persist();

/* expose some functions so modal buttons can call them (used above) */
window.showComingSoon = showComingSoon;
window.openGames = openGames;
window.openWallet = openWallet;
window.openRewards = openRewards;
window.openSupport = openSupport;
window.openInvite = openInvite;
window.copyText = copyText;
window.closeModal = closeModal;
window.resetDaily = resetDaily;
