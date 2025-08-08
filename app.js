const surahs = ["Al-Fatihah", "Al-Baqarah", "Aal-E-Imran", "An-Nisa'", "Al-Ma'idah", "Al-An'am", "Al-A'raf", "Al-Anfal", "At-Tawbah", "Yunus", "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra", "Al-Kahf", "Maryam", "Ta-Ha", "Al-Anbiya'", "Al-Hajj", "Al-Mu'minun", "An-Nur", "Al-Furqan", "Ash-Shu'ara", "An-Naml", "Al-Qasas", "Al-Ankabut", "Ar-Rum", "Luqman", "As-Sajda", "Al-Ahzab", "Saba", "Fatir", "Ya Sin", "As-Saffat", "Sad", "Az-Zumar", "Ghafir", "Fussilat", "Ash-Shura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiya", "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujurat", "Qaf", "Adh-Dhariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahman", "Al-Waqia", "Al-Hadid", "Al-Mujadila", "Al-Hashr", "Al-Mumtahina", "As-Saff", "Al-Jumua", "Al-Munafiqoon", "At-Taghabun", "At-Talaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haaqqa", "Al-Maarij", "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddaththir", "Al-Qiyama", "Al-Insan", "Al-Mursalat", "An-Naba", "An-Nazi'at", "Abasa", "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Inshiqaq", "Al-Burooj", "At-Tariq", "Al-A'la", "Al-Ghashiya", "Al-Fajr", "Al-Balad", "Ash-Shams", "Al-Lail", "Ad-Duhaa", "Ash-Sharh", "At-Tin", "Al-Alaq", "Al-Qadr", "Al-Bayyina", "Az-Zalzala", "Al-Adiyat", "Al-Qaria", "At-Takathur", "Al-Asr", "Al-Humaza", "Al-Fil", "Quraish", "Al-Ma'un", "Al-Kawthar", "Al-Kafiroon", "An-Nasr", "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"];
const audio = document.getElementById('audio');
const surahListEl = document.getElementById('surah-list');
const titleEl = document.getElementById('surah-title');
const subEl = document.getElementById('surah-sub');
const prog = document.getElementById('progress');
const curr = document.getElementById('current-time');
const dur = document.getElementById('duration');
const speedSel = document.getElementById('speed');
const pad = n => String(n).padStart(3, '0');

let current = 0;

// build accessible list
function renderList(){
  surahListEl.innerHTML = '';
  surahs.forEach((name, i) => {
    const li = document.createElement('li');
    li.setAttribute('role','button');
    li.tabIndex = 0;
    li.dataset.index = i;
    li.innerHTML = `<span class="surah-label">${pad(i+1)} — ${name}</span>`;
    // click and keyboard handlers
    li.addEventListener('click', () => load(i, true));
    li.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        load(i, true);
      }
    });
    surahListEl.appendChild(li);
  });
}

function load(i, autoplay=false){
  if(i<0 || i>=surahs.length) return;
  current = i;
  const url = `https://server8.mp3quran.net/afs/${pad(i+1)}.mp3`;
  audio.src = url;
  titleEl.textContent = `${pad(i+1)} — ${surahs[i]}`;
  subEl.textContent = `Surah ${i+1}`;
  // update aria-live implicitly via title change
  if(autoplay){
    const p = audio.play();
    if(p && p.catch) p.catch(()=>{});
  }
  // move focus to audio controls for convenient keyboard control
  audio.focus();
}

function fmt(s){ if(!isFinite(s)) return '0:00'; s=Math.floor(s); const m=Math.floor(s/60); const sec=String(s%60).padStart(2,'0'); return `${m}:${sec}`; }

audio.addEventListener('loadedmetadata', ()=>{
  dur.textContent = fmt(audio.duration);
  prog.max = Math.floor(audio.duration || 0);
});
audio.addEventListener('timeupdate', ()=>{
  curr.textContent = fmt(audio.currentTime);
  prog.value = Math.floor(audio.currentTime||0);
});
audio.addEventListener('ended', ()=>{
  // simple advance
  if(current < surahs.length - 1) load(current+1, true);
});
prog.addEventListener('input', ()=>{
  audio.currentTime = prog.value;
  prog.setAttribute('aria-valuenow', Math.floor(prog.value));
});
speedSel.addEventListener('change', ()=> audio.playbackRate = Number(speedSel.value));

// keyboard shortcuts for convenience (space to play/pause handled by audio element when focused)
// add global shortcuts: "n" next, "p" previous, "m" mute
document.addEventListener('keydown', (e)=>{
  // ignore if focus in input or select
  const tag = document.activeElement && document.activeElement.tagName;
  if(tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
  if(e.key === 'n') { load(Math.min(current+1, surahs.length-1), true); }
  if(e.key === 'p') { load(Math.max(current-1, 0), true); }
  if(e.key === 'm') { audio.muted = !audio.muted; }
});

// init
renderList();
load(0, false);
