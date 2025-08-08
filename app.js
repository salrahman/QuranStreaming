document.addEventListener('DOMContentLoaded', () => {
  const reciters = [
    { name: 'Mishary Rashid Alafasy', url: 'https://server8.mp3quran.net/afs' },
    { name: 'Abdul Basit Abdul Samad (Murattal)', url: 'https://server7.mp3quran.net/basit' },
    { name: 'Saud Al-Shuraim', url: 'https://server6.mp3quran.net/shur' },
    { name: 'Abdurrahman As-Sudais', url: 'https://server11.mp3quran.net/sds' },
    { name: 'Maher Al-Muaiqly', url: 'https://server12.mp3quran.net/maher' }
  ];
  const surahs = [
    { number: '001', english: 'Al-Fatihah', arabic: 'الفاتحة' },
    { number: '002', english: 'Al-Baqarah', arabic: 'البقرة' }
    // ... full list of 114 surahs should go here ...
  ];
  const reciterSelect = document.getElementById('reciterSelect');
  reciters.forEach((r, i) => {
    const opt = document.createElement('option');
    opt.value = r.url;
    opt.textContent = r.name;
    reciterSelect.appendChild(opt);
  });
  const surahList = document.getElementById('surahList');
  surahs.forEach((s, i) => {
    const li = document.createElement('li');
    li.setAttribute('role', 'button');
    li.tabIndex = 0;
    li.textContent = `${s.number} — ${s.english} (${s.arabic})`;
    surahList.appendChild(li);
  });
  const status = document.getElementById('status');
  const audio = document.getElementById('audioPlayer');
  surahList.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
      status.textContent = 'Loading audio, please wait...';
      audio.src = reciterSelect.value + '/' + surahs[0].number + '.mp3';
      audio.play();
    }
  });
  audio.addEventListener('playing', () => status.textContent = 'Playback started');
});
