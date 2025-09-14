const SURAH=[
 {id:"001",en:"Al-Fatihah",ar:"الفاتحة"},
 {id:"002",en:"Al-Baqarah",ar:"البقرة"},
 {id:"003",en:"Aal-E-Imran",ar:"آل عمران"},
 {id:"114",en:"An-Nas",ar:"الناس"}
];
const RECITERS=[
 {name:"Abdurrahman As-Sudais",base:"https://everyayah.com/data/Abdurrahman_As-Sudais_64kbps"},
 {name:"Mishary Rashid Alafasy",base:"https://everyayah.com/data/Mishary_Rashid_Alafasy_64kbps"},
 {name:"Saad Al-Ghamdi",base:"https://everyayah.com/data/Saad_Al-Ghamdi_64kbps"},
 {name:"Maher Al-Muaiqly",base:"https://everyayah.com/data/Maher_AlMuaiqly_64kbps"},
 {name:"Abdul Basit (Murattal)",base:"https://everyayah.com/data/Abdul_Basit_Murattal_64kbps"},
 {name:"Al-Husary",base:"https://everyayah.com/data/Husary_64kbps"},
 {name:"Minshawi (Murattal)",base:"https://everyayah.com/data/Minshawy_Murattal_128kbps"},
 {name:"Ahmad Al-Ajmi",base:"https://everyayah.com/data/Ahmed_ibn_Ali_al-Ajamy_128kbps"},
 {name:"Saud Al-Shuraim",base:"https://everyayah.com/data/Saood_ash-Shuraym_128kbps"},
 {name:"Ali Al-Hudhaifi",base:"https://everyayah.com/data/Ali_Huzaifi_128kbps"}
];
const els={reciter:document.getElementById('reciter'),list:document.getElementById('surahList'),audio:document.getElementById('audio'),status:document.getElementById('status'),live:document.getElementById('live'),play:document.getElementById('playBtn'),prev:document.getElementById('prevBtn'),next:document.getElementById('nextBtn'),mute:document.getElementById('muteBtn'),speed:document.getElementById('speedBtn'),addBm:document.getElementById('addBm'),bmList:document.getElementById('bmList')};
let current=0;let speedIdx=1;const speeds=[0.75,1,1.25,1.5,1.75,2];
function pad3(n){return String(n).padStart(3,'0');}
function announce(msg){els.live.textContent=msg;}
function setStatus(msg){els.status.textContent=msg;}
function surahUrl(r,i){return `${r.base}/${SURAH[i].id}.mp3`;}
function renderReciters(){els.reciter.innerHTML=RECITERS.map((r,i)=>`<option value="${i}">${r.name}</option>`).join('');}
function renderList(){els.list.innerHTML=SURAH.map((s,i)=>`<li><button data-i="${i}">${s.id} ${s.en} ${s.ar}</button></li>`).join('');}
function load(i,autoplay=true){current=i;const r=RECITERS[els.reciter.value||0];els.audio.src=surahUrl(r,i);els.audio.load();if(autoplay)els.audio.play();setStatus(`Loaded ${SURAH[i].en}`);announce(`Loaded ${SURAH[i].en}`);}
function togglePlay(){if(els.audio.paused){els.audio.play();els.play.textContent='⏸️';}else{els.audio.pause();els.play.textContent='▶️';}}
function prev(){if(current>0)load(current-1,true);}
function next(){if(current<SURAH.length-1)load(current+1,true);}
function toggleMute(){els.audio.muted=!els.audio.muted;els.mute.textContent=els.audio.muted?'🔊':'🔇';}
function cycleSpeed(){speedIdx=(speedIdx+1)%speeds.length;els.audio.playbackRate=speeds[speedIdx];els.speed.textContent=speeds[speedIdx]+'x';}
renderReciters();renderList();els.reciter.value=0;els.list.addEventListener('click',e=>{if(e.target.dataset.i)load(parseInt(e.target.dataset.i));});els.play.addEventListener('click',togglePlay);els.prev.addEventListener('click',prev);els.next.addEventListener('click',next);els.mute.addEventListener('click',toggleMute);els.speed.addEventListener('click',cycleSpeed);load(0,false);
