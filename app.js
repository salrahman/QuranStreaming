document.addEventListener('DOMContentLoaded', () => {
  const reciters = [
    { name: 'Mishary Rashid Alafasy', url: 'https://server8.mp3quran.net/afs' },
    { name: 'Abdul Basit Abdul Samad (Murattal)', url: 'https://server7.mp3quran.net/basit' },
    { name: 'Saud Al-Shuraim', url: 'https://server6.mp3quran.net/shur' },
    { name: 'Abdurrahman As-Sudais', url: 'https://server11.mp3quran.net/sds' },
    { name: 'Maher Al-Muaiqly', url: 'https://server12.mp3quran.net/maher' }
  ];
  const surahs = [('001', 'Al-Fatihah', 'الفاتحة'), ('002', 'Al-Baqarah', 'البقرة'), ('003', 'Aal-E-Imran', 'آل عمران'), ('004', 'An-Nisa', 'النساء'), ('005', "Al-Ma'idah", 'المائدة'), ('006', "Al-An'am", 'الأنعام'), ('007', "Al-A'raf", 'الأعراف'), ('008', 'Al-Anfal', 'الأنفال'), ('009', 'At-Tawbah', 'التوبة'), ('010', 'Yunus', 'يونس'), ('011', 'Hud', 'هود'), ('012', 'Yusuf', 'يوسف'), ('013', "Ar-Ra'd", 'الرعد'), ('014', 'Ibrahim', 'ابراهيم'), ('015', 'Al-Hijr', 'الحجر'), ('016', 'An-Nahl', 'النحل'), ('017', 'Al-Isra', 'الإسراء'), ('018', 'Al-Kahf', 'الكهف'), ('019', 'Maryam', 'مريم'), ('020', 'Taha', 'طه'), ('021', 'Al-Anbiya', 'الأنبياء'), ('022', 'Al-Hajj', 'الحج'), ('023', "Al-Mu'minun", 'المؤمنون'), ('024', 'An-Nur', 'النور'), ('025', 'Al-Furqan', 'الفرقان'), ('026', "Ash-Shu'ara", 'الشعراء'), ('027', 'An-Naml', 'النمل'), ('028', 'Al-Qasas', 'القصص'), ('029', 'Al-Ankabut', 'العنكبوت'), ('030', 'Ar-Rum', 'الروم'), ('031', 'Luqman', 'لقمان'), ('032', 'As-Sajda', 'السجدة'), ('033', 'Al-Ahzab', 'الأحزاب'), ('034', 'Saba', 'سبأ'), ('035', 'Fatir', 'فاطر'), ('036', 'Ya-Sin', 'يس'), ('037', 'As-Saffat', 'الصافات'), ('038', 'Sad', 'ص'), ('039', 'Az-Zumar', 'الزمر'), ('040', 'Ghafir', 'غافر'), ('041', 'Fussilat', 'فصلت'), ('042', 'Ash-Shura', 'الشورى'), ('043', 'Az-Zukhruf', 'الزخرف'), ('044', 'Ad-Dukhan', 'الدخان'), ('045', 'Al-Jathiya', 'الجاثية'), ('046', 'Al-Ahqaf', 'الأحقاف'), ('047', 'Muhammad', 'محمد'), ('048', 'Al-Fath', 'الفتح'), ('049', 'Al-Hujraat', 'الحجرات'), ('050', 'Qaf', 'ق'), ('051', 'Adh-Dhariyat', 'الذاريات'), ('052', 'At-Tur', 'الطور'), ('053', 'An-Najm', 'النجم'), ('054', 'Al-Qamar', 'القمر'), ('055', 'Ar-Rahman', 'الرحمن'), ('056', 'Al-Waqia', 'الواقعة'), ('057', 'Al-Hadid', 'الحديد'), ('058', 'Al-Mujadila', 'المجادلة'), ('059', 'Al-Hashr', 'الحشر'), ('060', 'Al-Mumtahina', 'الممتحنة'), ('061', 'As-Saff', 'الصف'), ('062', 'Al-Jumua', 'الجمعة'), ('063', 'Al-Munafiqoon', 'المنافقون'), ('064', 'At-Taghabun', 'التغابن'), ('065', 'At-Talaq', 'الطلاق'), ('066', 'At-Tahrim', 'التحريم'), ('067', 'Al-Mulk', 'الملك'), ('068', 'Al-Qalam', 'القلم'), ('069', 'Al-Haaqqa', 'الحاقة'), ('070', 'Al-Maarij', 'المعارج'), ('071', 'Nuh', 'نوح'), ('072', 'Al-Jinn', 'الجن'), ('073', 'Al-Muzzammil', 'المزمل'), ('074', 'Al-Muddaththir', 'المدثر'), ('075', 'Al-Qiyama', 'القيامة'), ('076', 'Al-Insan', 'الانسان'), ('077', 'Al-Mursalat', 'المرسلات'), ('078', 'An-Naba', 'النبأ'), ('079', "An-Nazi'at", 'النازعات'), ('080', 'Abasa', 'عبس'), ('081', 'At-Takwir', 'التكوير'), ('082', 'Al-Infitar', 'الانفطار'), ('083', 'Al-Mutaffifin', 'المطففين'), ('084', 'Al-Inshiqaq', 'الانشقاق'), ('085', 'Al-Buruj', 'البروج'), ('086', 'At-Tariq', 'الطارق'), ('087', 'Al-Ala', 'الأعلى'), ('088', 'Al-Ghashiya', 'الغاشية'), ('089', 'Al-Fajr', 'الفجر'), ('090', 'Al-Balad', 'البلد'), ('091', 'Ash-Shams', 'الشمس'), ('092', 'Al-Lail', 'الليل'), ('093', 'Ad-Duhaa', 'الضحى'), ('094', 'Ash-Sharh', 'الشرح'), ('095', 'At-Tin', 'التين'), ('096', 'Al-Alaq', 'العلق'), ('097', 'Al-Qadr', 'القدر'), ('098', 'Al-Bayyina', 'البينة'), ('099', 'Az-Zalzala', 'الزلزلة'), ('100', 'Al-Adiyat', 'العاديات'), ('101', 'Al-Qaria', 'القارعة'), ('102', 'At-Takathur', 'التكاثر'), ('103', 'Al-Asr', 'العصر'), ('104', 'Al-Humaza', 'الهمزة'), ('105', 'Al-Fil', 'الفيل'), ('106', 'Quraish', 'قريش'), ('107', "Al-Ma'un", 'الماعون'), ('108', 'Al-Kawthar', 'الكوثر'), ('109', 'Al-Kafiroon', 'الكافرون'), ('110', 'An-Nasr', 'النصر'), ('111', 'Al-Masad', 'المسد'), ('112', 'Al-Ikhlas', 'الإخلاص'), ('113', 'Al-Falaq', 'الفلق'), ('114', 'An-Nas', 'الناس')];

  const reciterSelect = document.getElementById('reciterSelect');
  const surahList = document.getElementById('surahList');
  const status = document.getElementById('status');
  const audio = document.getElementById('audioPlayer');

  reciters.forEach((r, i) => {
    const opt = document.createElement('option');
    opt.value = r.url;
    opt.textContent = r.name;
    reciterSelect.appendChild(opt);
  });

  surahs.forEach((s, i) => {
    const li = document.createElement('li');
    li.setAttribute('role', 'button');
    li.tabIndex = 0;
    li.textContent = `${s[0]} — ${s[1]} (${s[2]})`;
    li.addEventListener('click', () => playSurah(i));
    surahList.appendChild(li);
  });

  function playSurah(index) {
    status.textContent = 'Loading audio, please wait...';
    const surahNumber = surahs[index][0];
    audio.src = reciterSelect.value + '/' + surahNumber + '.mp3';
    audio.play();
  }

  audio.addEventListener('playing', () => status.textContent = 'Playback started');
});
