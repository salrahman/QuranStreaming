const surahs = [
  ["001", "Al-Fatihah", "الفاتحة"],
  ["002", "Al-Baqarah", "البقرة"],
  ["003", "Aal-E-Imran", "آل عمران"]
  // Add all 114 surahs here
];

const reciters = [
  { name: "Mishary Rashid Alafasy", url: "https://server8.mp3quran.net/afs" },
  { name: "Abdul Basit Abdul Samad (Murattal)", url: "https://server7.mp3quran.net/basit" },
  { name: "Saud Al-Shuraim", url: "https://server6.mp3quran.net/shur" },
  { name: "Abdurrahman As-Sudais", url: "https://server11.mp3quran.net/sds" },
  { name: "Maher Al-Muaiqly", url: "https://server12.mp3quran.net/maher" }
];

let current = 0;
let audio = document.getElementById('audio');
let surahList = document.getElementById('surah-list');
let surahTitle = document.getElementById('surah-title');
let reciterSelect = document.getElementById('reciter');
let liveRegion = document.getElementById('live-region');

reciters.forEach((r, idx) => {
  let opt = document.createElement('option');
  opt.value = idx;
  opt.textContent = r.name;
  reciterSelect.appendChild(opt);
});

function announce(msg) {
  liveRegion.textContent = msg;
}

function renderList() {
  surahList.innerHTML = '';
  surahs.forEach((s, i) => {
    let li = document.createElement('li');
    li.tabIndex = 0;
    li.setAttribute('role', 'button');
    li.setAttribute('aria-pressed', i === current ? 'true' : 'false');
    li.textContent = `${s[0]} — ${s[1]} (${s[2]})`;
    li.addEventListener('click', () => playSurah(i));
    li.addEventListener('keypress', e => {
      if (e.key === 'Enter' || e.key === ' ') playSurah(i);
    });
    surahList.appendChild(li);
  });
}

function playSurah(i, resumeTime = 0) {
  current = i;
  let reciter = reciters[parseInt(reciterSelect.value)];
  audio.src = `${reciter.url}/${surahs[i][0]}.mp3`;
  surahTitle.textContent = `${surahs[i][0]} — ${surahs[i][1]} (${surahs[i][2]})`;
  audio.play().then(() => {
    if (resumeTime) audio.currentTime = resumeTime;
    announce(`Playing ${surahs[i][1]} by ${reciter.name}`);
    saveState();
  }).catch(() => {
    announce("CORS error or network issue. Unable to play audio.");
  });
  renderList();
}

function saveState() {
  localStorage.setItem('lastSurah', current);
  localStorage.setItem('lastTime', audio.currentTime);
  localStorage.setItem('lastReciter', reciterSelect.value);
}

function loadState() {
  let lastSurah = localStorage.getItem('lastSurah');
  let lastTime = parseFloat(localStorage.getItem('lastTime'));
  let lastReciter = localStorage.getItem('lastReciter');
  if (lastReciter) reciterSelect.value = lastReciter;
  if (lastSurah !== null) {
    playSurah(parseInt(lastSurah), lastTime || 0);
  }
}

document.getElementById('nextBtn').addEventListener('click', () => {
  if (current < surahs.length - 1) playSurah(current + 1);
});
document.getElementById('prevBtn').addEventListener('click', () => {
  if (current > 0) playSurah(current - 1);
});

reciterSelect.addEventListener('change', () => {
  announce(`Reciter changed to ${reciters[parseInt(reciterSelect.value)].name}`);
  saveState();
  playSurah(current);
});

audio.addEventListener('timeupdate', saveState);

renderList();
loadState();
