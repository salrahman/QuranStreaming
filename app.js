const surahs = ['Al-Fatihah', 'Al-Baqarah', 'Aal-E-Imran', "An-Nisa'", "Al-Ma'idah", "Al-An'am", "Al-A'raf", 'Al-Anfal', 'At-Tawbah', 'Yunus', 'Hud', 'Yusuf', "Ar-Ra'd", 'Ibrahim', 'Al-Hijr', 'An-Nahl', 'Al-Isra', 'Al-Kahf', 'Maryam', 'Ta-Ha', 'Al-Anbiya', 'Al-Hajj', "Al-Mu'minun", 'An-Nur', 'Al-Furqan', "Ash-Shu'ara", 'An-Naml', 'Al-Qasas', 'Al-Ankabut', 'Ar-Rum', 'Luqman', 'As-Sajda', 'Al-Ahzab', 'Saba', 'Fatir', 'Ya Sin', 'As-Saffat', 'Sad', 'Az-Zumar', 'Ghafir', 'Fussilat', 'Ash-Shura', 'Az-Zukhruf', 'Ad-Dukhan', 'Al-Jathiya', 'Al-Ahqaf', 'Muhammad', 'Al-Fath', 'Al-Hujurat', 'Qaf', 'Adh-Dhariyat', 'At-Tur', 'An-Najm', 'Al-Qamar', 'Ar-Rahman', 'Al-Waqia', 'Al-Hadid', 'Al-Mujadila', 'Al-Hashr', 'Al-Mumtahina', 'As-Saff', 'Al-Jumua', 'Al-Munafiqoon', 'At-Taghabun', 'At-Talaq', 'At-Tahrim', 'Al-Mulk', 'Al-Qalam', 'Al-Haaqqa', 'Al-Maarij', 'Nuh', 'Al-Jinn', 'Al-Muzzammil', 'Al-Muddaththir', 'Al-Qiyama', 'Al-Insan', 'Al-Mursalat', 'An-Naba', "An-Nazi'at", 'Abasa', 'At-Takwir', 'Al-Infitar', 'Al-Mutaffifin', 'Al-Inshiqaq', 'Al-Burooj', 'At-Tariq', "Al-A'la", 'Al-Ghashiya', 'Al-Fajr', 'Al-Balad', 'Ash-Shams', 'Al-Lail', 'Ad-Duhaa', 'Ash-Sharh', 'At-Tin', 'Al-Alaq', 'Al-Qadr', 'Al-Bayyina', 'Az-Zalzala', 'Al-Adiyat', 'Al-Qaria', 'At-Takathur', 'Al-Asr', 'Al-Humaza', 'Al-Fil', 'Quraish', "Al-Ma'un", 'Al-Kawthar', 'Al-Kafiroon', 'An-Nasr', 'Al-Masad', 'Al-Ikhlas', 'Al-Falaq', 'An-Nas'];
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

function load(i, autoplay=false){
  if (i < 0 || i >= surahs.length) return;
  current = i;
  const url = `https://server8.mp3quran.net/afs/${pad(i+1)}.mp3`;
  audio.src = url;
  titleEl.textContent = `${pad(i+1)} — ${surahs[i]}`;
  subEl.textContent = `Surah ${i+1}`;
  if (autoplay) audio.play().catch(()=>{});
}

surahs.forEach((s, i) => {
  const li = document.createElement('li');
  li.textContent = `${pad(i+1)} — ${s}`;
  li.addEventListener('click', () => load(i, true));
  surahListEl.appendChild(li);
});

function fmt(s){ s = Math.floor(s); const m = Math.floor(s/60), sec = String(s%60).padStart(2,'0'); return `${m}:${sec}`; }

audio.addEventListener('loadedmetadata', () => {
  dur.textContent = fmt(audio.duration);
  prog.max = Math.floor(audio.duration);
});
audio.addEventListener('timeupdate', () => {
  curr.textContent = fmt(audio.currentTime);
  prog.value = Math.floor(audio.currentTime);
});
prog.addEventListener('input', () => audio.currentTime = prog.value);
speedSel.addEventListener('change', () => audio.playbackRate = speedSel.value);

load(0, false);
