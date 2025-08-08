const surahs = ["Al-Fatihah", "Al-Baqarah", "Aal-E-Imran", "An-Nisa'", "Al-Ma'idah", "Al-An'am", "Al-A'raf", "Al-Anfal", "At-Tawbah", "Yunus", "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra", "Al-Kahf", "Maryam", "Ta-Ha", "Al-Anbiya'", "Al-Hajj", "Al-Mu'minun", "An-Nur", "Al-Furqan", "Ash-Shu'ara", "An-Naml", "Al-Qasas", "Al-Ankabut", "Ar-Rum", "Luqman", "As-Sajda", "Al-Ahzab", "Saba", "Fatir", "Ya Sin", "As-Saffat", "Sad", "Az-Zumar", "Ghafir", "Fussilat", "Ash-Shura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiya", "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujurat", "Qaf", "Adh-Dhariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahman", "Al-Waqia", "Al-Hadid", "Al-Mujadila", "Al-Hashr", "Al-Mumtahina", "As-Saff", "Al-Jumua", "Al-Munafiqoon", "At-Taghabun", "At-Talaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haaqqa", "Al-Maarij", "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddaththir", "Al-Qiyama", "Al-Insan", "Al-Mursalat", "An-Naba", "An-Nazi'at", "Abasa", "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Inshiqaq", "Al-Burooj", "At-Tariq", "Al-A'la", "Al-Ghashiya", "Al-Fajr", "Al-Balad", "Ash-Shams", "Al-Lail", "Ad-Duhaa", "Ash-Sharh", "At-Tin", "Al-Alaq", "Al-Qadr", "Al-Bayyina", "Az-Zalzala", "Al-Adiyat", "Al-Qaria", "At-Takathur", "Al-Asr", "Al-Humaza", "Al-Fil", "Quraish", "Al-Ma'un", "Al-Kawthar", "Al-Kafiroon", "An-Nasr", "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"];
const audio = document.getElementById('audio');
const surahListEl = document.getElementById('surah-list');
const titleEl = document.getElementById('surah-title');
const subEl = document.getElementById('surah-sub');
const prog = document.getElementById('progress');
const curr = document.getElementById('current-time');
const dur = document.getElementById('duration');
const speedSel = document.getElementById('speed');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const statusEl = document.getElementById('aria-status');
const pad = n => String(n).padStart(3, '0');

let current = 0;
let seeking = false;
const STORAGE_KEY = 'quran-audio-accessible-v1';

function announce(msg) { 
  // set then clear to ensure screen readers notice changes
  statusEl.textContent = msg; 
  setTimeout(()=>{ statusEl.textContent = ''; }, 1500);
}

function renderList(){
  surahListEl.innerHTML = '';
  surahs.forEach((name, i) => {
    const li = document.createElement('li');
    li.tabIndex = 0;
    li.dataset.index = i;
    li.textContent = `${pad(i+1)} — ${name}`;
    li.addEventListener('click', () => load(i, true));
    li.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); load(i, true); }
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
  // save last surah
  let state = { lastSurah: current, lastTime: 0 };
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e){}
  announce(`Loaded surah ${surahs[i]}`);
  if(autoplay){
    audio.play().then(()=> announce(`Playing surah ${surahs[i]}`)).catch(err => {
      console.error(err);
      announce("Unable to play audio — playback blocked or CORS issue.");
    });
  }
}

function fmt(s){ if(!isFinite(s)) return '0:00'; s=Math.floor(s); const m=Math.floor(s/60); const sec=String(s%60).padStart(2,'0'); return `${m}:${sec}`; }

audio.addEventListener('loadedmetadata', ()=>{
  dur.textContent = fmt(audio.duration);
  prog.max = Math.floor(audio.duration || 0);
  // restore last time if available
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      const st = JSON.parse(raw);
      if(st && typeof st.lastTime === 'number' && st.lastTime > 0 && st.lastTime < audio.duration){
        audio.currentTime = st.lastTime;
        announce(`Resumed at ${fmt(st.lastTime)}`);
      }
    }
  } catch(e){}
});
audio.addEventListener('timeupdate', ()=>{
  if(!seeking) prog.value = Math.floor(audio.currentTime||0);
  curr.textContent = fmt(audio.currentTime);
  // persist time
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const st = raw ? JSON.parse(raw) : { lastSurah: current };
    st.lastTime = audio.currentTime;
    st.lastSurah = current;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(st));
  } catch(e){}
});
audio.addEventListener('ended', ()=>{
  announce("Playback ended.");
  if(current < surahs.length - 1) load(current+1, true);
});
audio.addEventListener('error', (e)=>{
  console.error('Audio error', e);
  announce("Audio load error — possible CORS or network issue.");
});

prog.addEventListener('input', ()=>{
  seeking = true;
  audio.currentTime = prog.value;
  prog.setAttribute('aria-valuenow', Math.floor(prog.value));
  seeking = false;
});
speedSel.addEventListener('change', ()=> audio.playbackRate = Number(speedSel.value));

prevBtn.addEventListener('click', ()=> load(Math.max(current-1,0), true));
nextBtn.addEventListener('click', ()=> load(Math.min(current+1,surahs.length-1), true));

document.addEventListener('keydown', e => {
  if(['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName)) return;
  if(e.key === 'n') load(Math.min(current+1,surahs.length-1), true);
  if(e.key === 'p') load(Math.max(current-1,0), true);
  if(e.key === 'm') audio.muted = !audio.muted;
});

// initial render
renderList();

// restore last state
try {
  const raw = localStorage.getItem(STORAGE_KEY);
  if(raw){
    const st = JSON.parse(raw);
    if(st && typeof st.lastSurah === 'number') load(st.lastSurah, false);
    else load(0,false);
  } else {
    load(0,false);
  }
} catch(e){
  load(0,false);
}
