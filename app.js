
const surahs = [{"id": "001", "en": "Al-Fatihah", "ar": "الفاتحة"}, {"id": "002", "en": "Al-Baqarah", "ar": "البقرة"}, {"id": "003", "en": "Aal-E-Imran", "ar": "آل عمران"}, {"id": "004", "en": "An-Nisa'", "ar": "النساء"}, {"id": "005", "en": "Al-Ma'idah", "ar": "المائدة"}, {"id": "006", "en": "Al-An'am", "ar": "الأنعام"}, {"id": "007", "en": "Al-A'raf", "ar": "الأعراف"}, {"id": "008", "en": "Al-Anfal", "ar": "الأنفال"}, {"id": "009", "en": "At-Tawbah", "ar": "التوبة"}, {"id": "010", "en": "Yunus", "ar": "يونس"}, {"id": "011", "en": "Hud", "ar": "هود"}, {"id": "012", "en": "Yusuf", "ar": "يوسف"}, {"id": "013", "en": "Ar-Ra'd", "ar": "الرعد"}, {"id": "014", "en": "Ibrahim", "ar": "إبراهيم"}, {"id": "015", "en": "Al-Hijr", "ar": "الحجر"}, {"id": "016", "en": "An-Nahl", "ar": "النحل"}, {"id": "017", "en": "Al-Isra'", "ar": "الإسراء"}, {"id": "018", "en": "Al-Kahf", "ar": "الكهف"}, {"id": "019", "en": "Maryam", "ar": "مريم"}, {"id": "020", "en": "Ta-Ha", "ar": "طه"}, {"id": "021", "en": "Al-Anbiya'", "ar": "الأنبياء"}, {"id": "022", "en": "Al-Hajj", "ar": "الحج"}, {"id": "023", "en": "Al-Mu'minun", "ar": "المؤمنون"}, {"id": "024", "en": "An-Nur", "ar": "النور"}, {"id": "025", "en": "Al-Furqan", "ar": "الفرقان"}, {"id": "026", "en": "Ash-Shu'ara'", "ar": "الشعراء"}, {"id": "027", "en": "An-Naml", "ar": "النمل"}, {"id": "028", "en": "Al-Qasas", "ar": "القصص"}, {"id": "029", "en": "Al-Ankabut", "ar": "العنكبوت"}, {"id": "030", "en": "Ar-Rum", "ar": "الروم"}, {"id": "031", "en": "Luqman", "ar": "لقمان"}, {"id": "032", "en": "As-Sajdah", "ar": "السجدة"}, {"id": "033", "en": "Al-Ahzab", "ar": "الأحزاب"}, {"id": "034", "en": "Saba'", "ar": "سبأ"}, {"id": "035", "en": "Fatir", "ar": "فاطر"}, {"id": "036", "en": "Ya Sin", "ar": "يس"}, {"id": "037", "en": "As-Sffat", "ar": "الصافات"}, {"id": "038", "en": "Sad", "ar": "ص"}, {"id": "039", "en": "Az-Zumar", "ar": "الزمر"}, {"id": "040", "en": "Ghafir", "ar": "غافر"}, {"id": "041", "en": "Fussilat", "ar": "فصلت"}, {"id": "042", "en": "Ash-Shura", "ar": "الشورى"}, {"id": "043", "en": "Az-Zukhruf", "ar": "الزخرف"}, {"id": "044", "en": "Ad-Dukhan", "ar": "الدخان"}, {"id": "045", "en": "Al-Jathiya", "ar": "الجاثية"}, {"id": "046", "en": "Al-Ahqaf", "ar": "الأحقاف"}, {"id": "047", "en": "Muhammad", "ar": "محمد"}, {"id": "048", "en": "Al-Fath", "ar": "الفتح"}, {"id": "049", "en": "Al-Hujurat", "ar": "الحجرات"}, {"id": "050", "en": "Qaf", "ar": "ق"}, {"id": "051", "en": "Adh-Dhariyat", "ar": "الذاريات"}, {"id": "052", "en": "At-Tur", "ar": "الطور"}, {"id": "053", "en": "An-Najm", "ar": "النجم"}, {"id": "054", "en": "Al-Qamar", "ar": "القمر"}, {"id": "055", "en": "Ar-Rahman", "ar": "الرحمن"}, {"id": "056", "en": "Al-Waqi'ah", "ar": "الواقعة"}, {"id": "057", "en": "Al-Hadid", "ar": "الحديد"}, {"id": "058", "en": "Al-Mujadila", "ar": "المجادلة"}, {"id": "059", "en": "Al-Hashr", "ar": "الحشر"}, {"id": "060", "en": "Al-Mumtahina", "ar": "الممتحنة"}, {"id": "061", "en": "As-Saff", "ar": "الصف"}, {"id": "062", "en": "Al-Jumu'ah", "ar": "الجمعة"}, {"id": "063", "en": "Al-Munafiqun", "ar": "المنافقون"}, {"id": "064", "en": "At-Taghabun", "ar": "التغابن"}, {"id": "065", "en": "At-Talaq", "ar": "الطلاق"}, {"id": "066", "en": "At-Tahrim", "ar": "التحريم"}, {"id": "067", "en": "Al-Mulk", "ar": "الملك"}, {"id": "068", "en": "Al-Qalam", "ar": "القلم"}, {"id": "069", "en": "Al-Haqqah", "ar": "الحاقة"}, {"id": "070", "en": "Al-Maarij", "ar": "المعارج"}, {"id": "071", "en": "Nuh", "ar": "نوح"}, {"id": "072", "en": "Al-Jinn", "ar": "الجن"}, {"id": "073", "en": "Al-Muzzammil", "ar": "المزمل"}, {"id": "074", "en": "Al-Muddaththir", "ar": "المدثر"}, {"id": "075", "en": "Al-Qiyamah", "ar": "القيامة"}, {"id": "076", "en": "Al-Insan", "ar": "الانسان"}, {"id": "077", "en": "Al-Mursalat", "ar": "المرسلات"}, {"id": "078", "en": "An-Naba'", "ar": "النبإ"}, {"id": "079", "en": "An-Nazi'at", "ar": "النازعات"}, {"id": "080", "en": "Abasa", "ar": "عبس"}, {"id": "081", "en": "At-Takwir", "ar": "التكوير"}, {"id": "082", "en": "Al-Infitar", "ar": "الانفطار"}, {"id": "083", "en": "Al-Mutaffifin", "ar": "المطففين"}, {"id": "084", "en": "Al-Inshiqaq", "ar": "الانشقاق"}, {"id": "085", "en": "Al-Buruj", "ar": "البروج"}, {"id": "086", "en": "At-Tariq", "ar": "الطارق"}, {"id": "087", "en": "Al-A'la", "ar": "الأعلى"}, {"id": "088", "en": "Al-Ghashiyah", "ar": "الغاشية"}, {"id": "089", "en": "Al-Fajr", "ar": "الفجر"}, {"id": "090", "en": "Al-Balad", "ar": "البلد"}, {"id": "091", "en": "Ash-Shams", "ar": "الشمس"}, {"id": "092", "en": "Al-Lail", "ar": "الليل"}, {"id": "093", "en": "Ad-Duha", "ar": "الضحى"}, {"id": "094", "en": "Ash-Sharh", "ar": "الشرح"}, {"id": "095", "en": "At-Tin", "ar": "التين"}, {"id": "096", "en": "Al-Alaq", "ar": "العلق"}, {"id": "097", "en": "Al-Qadr", "ar": "القدر"}, {"id": "098", "en": "Al-Bayyina", "ar": "البينة"}, {"id": "099", "en": "Az-Zalzalah", "ar": "الزلزلة"}, {"id": "100", "en": "Al-Adiyat", "ar": "العاديات"}, {"id": "101", "en": "Al-Qaria", "ar": "القارعة"}, {"id": "102", "en": "At-Takathur", "ar": "التكاثر"}, {"id": "103", "en": "Al-Asr", "ar": "العصر"}, {"id": "104", "en": "Al-Humaza", "ar": "الهمزة"}, {"id": "105", "en": "Al-Fil", "ar": "الفيل"}, {"id": "106", "en": "Quraish", "ar": "قريش"}, {"id": "107", "en": "Al-Ma'un", "ar": "الماعون"}, {"id": "108", "en": "Al-Kawthar", "ar": "الكوثر"}, {"id": "109", "en": "Al-Kafirun", "ar": "الكافرون"}, {"id": "110", "en": "An-Nasr", "ar": "النصر"}, {"id": "111", "en": "Al-Masad", "ar": "المسد"}, {"id": "112", "en": "Al-Ikhlas", "ar": "الإخلاص"}, {"id": "113", "en": "Al-Falaq", "ar": "الفلق"}, {"id": "114", "en": "An-Nas", "ar": "الناس"}];
const reciters = [{"name": "Mishary Rashid Alafasy", "base": "https://server8.mp3quran.net/afs"}, {"name": "Abdul Basit Abdul Samad", "base": "https://server7.mp3quran.net/basit"}, {"name": "Saud Al-Shuraim", "base": "https://server6.mp3quran.net/shur"}, {"name": "Abdurrahman As-Sudais", "base": "https://server11.mp3quran.net/sds"}, {"name": "Maher Al-Muaiqly", "base": "https://server12.mp3quran.net/maher"}];
const STORAGE_KEY = 'quran-audio-v6.4';
const BM_KEY = 'quran-audio-bookmarks-v1';

document.addEventListener('DOMContentLoaded', () => {
  const reciterSelect = document.getElementById('reciter');
  const surahList = document.getElementById('surah-list');
  const audio = document.getElementById('audio');
  const live = document.getElementById('live-region');
  const speed = document.getElementById('speed');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const addBookmarkBtn = document.getElementById('addBookmark');
  const bmList = document.getElementById('bookmark-list');

  let current = 0;
  let fallbackTried = false;
  let pendingResume = null;

  function announce(msg) { live.textContent = msg; setTimeout(()=>{ if(live.textContent===msg) live.textContent=''; },1600); }
  function fmtTime(s){ if(!isFinite(s)) return '0:00'; s=Math.floor(s); const m=Math.floor(s/60); const sec=String(s%60).padStart(2,'0'); return m+':'+sec; }

  // Bookmarks helpers
  function loadBookmarks(){
    try{ const raw = localStorage.getItem(BM_KEY); return raw ? JSON.parse(raw) : []; }catch(e){ return []; }
  }
  function saveBookmarks(list){
    try{ localStorage.setItem(BM_KEY, JSON.stringify(list)); }catch(e){}
  }
  function addBookmark(){
    const recIdx = parseInt(reciterSelect.value||'0',10);
    const bm = {
      surahIndex: current,
      surahId: surahs[current].id,
      en: surahs[current].en,
      ar: surahs[current].ar,
      time: Math.floor(audio.currentTime||0),
      reciterIndex: recIdx,
      reciterName: reciters[recIdx].name,
      addedAt: Date.now()
    };
    const list = loadBookmarks();
    list.unshift(bm); // newest first
    saveBookmarks(list);
    renderBookmarks();
    announce('Bookmark added for ' + bm.en + ' at ' + fmtTime(bm.time));
  }
  function deleteBookmark(i){
    const list = loadBookmarks();
    if(i>=0 && i<list.length){
      const bm = list[i];
      list.splice(i,1);
      saveBookmarks(list);
      renderBookmarks();
      announce('Bookmark removed for ' + bm.en);
    }
  }
  function playBookmark(i){
    const list = loadBookmarks();
    if(i>=0 && i<list.length){
      const bm = list[i];
      reciterSelect.value = String(bm.reciterIndex || 0);
      loadSurah(bm.surahIndex, true, bm.time);
      announce('Resuming ' + bm.en + ' at ' + fmtTime(bm.time));
    }
  }
  function renderBookmarks(){
    const list = loadBookmarks();
    bmList.innerHTML = '';
    list.forEach((bm, i) => {
      const li = document.createElement('li');
      const meta = document.createElement('div');
      meta.className = 'meta';
      meta.innerHTML = `<strong>${bm.surahId} — ${bm.en}</strong><span class="arabic">${bm.ar}</span><span>${fmtTime(bm.time)} • ${bm.reciterName}</span>`;
      const actions = document.createElement('div');
      actions.className = 'actions';
      const play = document.createElement('button');
      play.className = 'play';
      play.textContent = 'Play';
      play.setAttribute('aria-label', 'Play bookmark ' + bm.en + ' at ' + fmtTime(bm.time));
      play.addEventListener('click', ()=> playBookmark(i));
      const del = document.createElement('button');
      del.className = 'delete';
      del.textContent = 'Delete';
      del.setAttribute('aria-label', 'Delete bookmark ' + bm.en);
      del.addEventListener('click', ()=> deleteBookmark(i));
      actions.appendChild(play); actions.appendChild(del);
      li.appendChild(meta); li.appendChild(actions);
      bmList.appendChild(li);
    });
  }

  // populate reciters
  reciters.forEach((r, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = r.name;
    reciterSelect.appendChild(opt);
  });

  // populate surah list
  function renderList() {
    surahList.innerHTML = '';
    surahs.forEach((s, i) => {
      const li = document.createElement('li');
      li.setAttribute('role','button');
      li.tabIndex = 0;
      li.dataset.index = i;
      li.setAttribute('aria-pressed', i === current ? 'true' : 'false');
      li.innerHTML = `<span class="en">${s.id} — ${s.en}</span><span class="arabic">${s.ar}</span>`;
      li.addEventListener('click', () => loadSurah(i, true));
      li.addEventListener('keydown', (e) => { if(e.key==='Enter' || e.key===' ') { e.preventDefault(); loadSurah(i, true); } });
      surahList.appendChild(li);
    });
  }

  function getReciterBase() { return reciters[parseInt(reciterSelect.value||'0',10)].base; }

  async function togglePlayPause(){
    try{
      if(audio.paused){ await audio.play(); announce('Playback resumed'); }
      else{ audio.pause(); announce('Playback paused'); }
    }catch(err){ console.error(err); announce('Error: Unable to play audio.'); }
  }

  function loadSurah(i, autoplay=false, resumeTime=null) {
    if(i<0) i=0; if(i>=surahs.length) i=surahs.length-1;
    current = i;
    pendingResume = (typeof resumeTime === 'number') ? resumeTime : null;
    fallbackTried = false;
    const surah = surahs[i];
    const url = getReciterBase() + '/' + surah.id + '.mp3';
    audio.crossOrigin = 'anonymous';
    audio.src = url;
    renderList(); // update aria-pressed
    announce('Loaded ' + surah.en);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ lastSurah: current, lastReciter: parseInt(reciterSelect.value||'0',10), lastTime: 0 })); } catch(e){}
    if(autoplay) { audio.play().then(()=>announce('Playing ' + surah.en)).catch(err=>{ console.error(err); announce('Error: Unable to play audio.'); }); }
  }

  let pendingResume = null;

  audio.addEventListener('loadedmetadata', ()=>{
    if(pendingResume!==null){ try{ audio.currentTime = Math.min(pendingResume, Math.max(0, audio.duration-1)); announce('Resumed at ' + fmtTime(pendingResume)); }catch(e){} pendingResume=null; }
  });

  audio.addEventListener('error', (e)=>{
    console.error('Audio error', e);
    announce('Error: Unable to play audio.');
    const currentReciter = parseInt(reciterSelect.value||'0',10);
    if(currentReciter !== 0 && !fallbackTried){
      fallbackTried = true;
      reciterSelect.value = '0';
      announce('Switching to ' + reciters[0].name);
      const lastTime = audio.currentTime || 0;
      loadSurah(current, true, lastTime);
    }
  });

  reciterSelect.addEventListener('change', ()=>{
    const idx = parseInt(reciterSelect.value||'0',10);
    announce('Reciter changed to ' + reciters[idx].name);
    const lastTime = audio.currentTime || 0;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ lastSurah: current, lastReciter: idx, lastTime: Math.floor(lastTime) })); } catch(e){}
    loadSurah(current, true, lastTime);
  });

  prevBtn.addEventListener('click', ()=> loadSurah(Math.max(0, current-1), true));
  nextBtn.addEventListener('click', ()=> loadSurah(Math.min(surahs.length-1, current+1), true));
  addBookmarkBtn.addEventListener('click', addBookmark);

  // keyboard shortcuts (case-insensitive; ignore form controls; Space toggles play/pause)
  document.addEventListener('keydown', async (e)=>{
    const tag = (document.activeElement && document.activeElement.tagName) || '';
    if(['INPUT','SELECT','TEXTAREA','BUTTON'].includes(tag.toUpperCase())) return;
    const key = (e.key || '').toLowerCase();
    const code = e.code || '';
    if(key === 'n') return void loadSurah(Math.min(surahs.length - 1, current + 1), true);
    if(key === 'p') return void loadSurah(Math.max(0, current - 1), true);
    if(key === 'm') { audio.muted = !audio.muted; return void announce(audio.muted ? 'Muted' : 'Unmuted'); }
    if(key === 'b') return void addBookmark();
    if(code === 'Space' || key === ' ') { e.preventDefault(); return await togglePlayPause(); }
  });

  // init UI and state
  renderList();
  renderBookmarks();
  try { const raw = localStorage.getItem(STORAGE_KEY); if(raw){ const st = JSON.parse(raw); if(st && typeof st.lastReciter === 'number') reciterSelect.value = String(st.lastReciter); const idx = (typeof st.lastSurah === 'number') ? st.lastSurah : 0; const rt = (typeof st.lastTime === 'number') ? st.lastTime : 0; loadSurah(idx, false, rt); } else { loadSurah(0, false, 0); } } catch(e) { loadSurah(0,false,0); }
});
