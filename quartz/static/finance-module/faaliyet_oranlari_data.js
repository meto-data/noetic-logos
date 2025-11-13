const moduleQuestions = [
  {
    number: 1,
    text: "Aşağıdakilerden hangisi bir dönemde ortalama stokların kaç katı satış yapıldığını gösterir?",
    options: [
      { label: 'A', text: "Stok bağımlılık oranı" },
      { label: 'B', text: "Alacak devir hızı" },
      { label: 'C', text: "Stok devir hızı" },
      { label: 'D', text: "Ortalama stokta kalma süresi" },
      { label: 'E', text: "Asit-test oranı" }
    ],
    correctLabel: 'C'
  },
  {
    number: 2,
    text: "Aşağıdakilerden hangisi bir dönemde ortalama alacakların kaç katı satış yapıldığını göstermektedir?",
    options: [
      { label: 'A', text: "Ortalama tahsil süresi" },
      { label: 'B', text: "Ortalama stokta kalma süresi" },
      { label: 'C', text: "Stok devir hızı" },
      { label: 'D', text: "Alacak devir hızı" },
      { label: 'E', text: "Ortalama etkinlik süresi" }
    ],
    correctLabel: 'D'
  },
  {
    number: 3,
    text: "360 / Stok Devir Hızı\n\n<br>\nYukarıdaki formül aşağıdakilerden hangisini göstermektedir?",
    options: [
      { label: 'A', text: "Ortalama tahsil süresi" },
      { label: 'B', text: "Ortalama etkinlik süresi" },
      { label: 'C', text: "Alacak devir hızı" },
      { label: 'D', text: "Stok bağımlılık oranı" },
      { label: 'E', text: "Ortalama stokta kalma süresi" }
    ],
    correctLabel: 'E',
    isQuantitative: true
  },
  {
    number: 4,
    text: "360 / Alacak Devir Hızı\n\n<br>\nYukarıdaki formül aşağıdakilerden hangisini göstermektedir?\n\n5.\n<pre class=\"question-pre\">\nSatışların Maliyeti\n-------------------\nOrtalama Stoklar\n</pre>\nYukarıdaki oran aşağıdakilerden hangisini ifade etmektedir?\n\n6.\n<pre class=\"question-pre\">\nSatılan Ticari Mallar Maliyeti\n------------------------------\nOrtalama Ticari Mal Stoku\n</pre>\nYukarıdaki oran aşağıdakilerden hangisini ifade etmektedir?",
    options: [
      { label: 'A', text: "Mamül devir hızı" },
      { label: 'B', text: "Ortalama stokta kalma süresi" },
      { label: 'C', text: "Alacak devir hızı" },
      { label: 'D', text: "Ticari malların devir hızı" },
      { label: 'E', text: "Stok bağımlılık oranı" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 7,
    text: "Aşağıdakilerden hangisi stokların bir dönemde ortalama kaç günde satıldığını göstermektedir?",
    options: [
      { label: 'A', text: "Ortalama tahsil süresi" },
      { label: 'B', text: "Ortalama etkinlik süresi" },
      { label: 'C', text: "Alacak devir hızı" },
      { label: 'D', text: "Stok bağımlılık oranı" },
      { label: 'E', text: "Ortalama stokta kalma süresi" }
    ],
    correctLabel: 'E'
  },
  {
    number: 8,
    text: "İşletmenin yapmış olduğu yatırımlarının kaç katı kadar satış yapmış olduğunu gösteren oran aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Aktif Devir Hızı Oranı" },
      { label: 'B', text: "Ortalama Satış Süresi" },
      { label: 'C', text: "Ortalama Etkinlik Süresi" },
      { label: 'D', text: "Duran Varlık Devir Hızı Oranı" },
      { label: 'E', text: "Stok Devir Hızı Oranı" }
    ],
    correctLabel: 'A'
  },
  {
    number: 9,
    text: "Stok devir hızı yüksek olan bir işletme için aşağıdakilerden hangisi doğrudur?",
    options: [
      { label: 'A', text: "Ortalama stokta kalma süresi yüksektir." },
      { label: 'B', text: "Ortalama tahsilat süresi yüksektir." },
      { label: 'C', text: "Alacak devir hızı yüksektir." },
      { label: 'D', text: "Ortalama stokta kalma süresi düşüktür." },
      { label: 'E', text: "Ortalama tahsilat süresi düşüktür." }
    ],
    correctLabel: 'D'
  },
  {
    number: 10,
    text: "Stok mevcudu 5.000 TL, satışlarının maliyeti 60.000 TL olan işletmenin stok devir hızı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "55.000" },
      { label: 'B', text: "12" },
      { label: 'C', text: "18" },
      { label: 'D', text: "65.000" },
      { label: 'E', text: "6" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 11,
    text: "Stokların bir dönemde ortalama kaç kez yenilendiğini aşağıdakilerden hangisi göstermektedir?",
    options: [
      { label: 'A', text: "Ortamala tahsil süresi" },
      { label: 'B', text: "Ortalama stokta kalma süresi" },
      { label: 'C', text: "Stok bağımlılık oranı" },
      { label: 'D', text: "Alacak devir hızı" },
      { label: 'E', text: "Stok devir hızı" }
    ],
    correctLabel: 'E'
  },
  {
    number: 12,
    text: "Aşağıdakilerden hangisi bir dönemde alacakların ortalama kaç kez tahsil edildiğini göstermektedir?",
    options: [
      { label: 'A', text: "Stok devir hızı" },
      { label: 'B', text: "Ortalama etkinlik süresi" },
      { label: 'C', text: "Ortalama stokta kalma süresi" },
      { label: 'D', text: "Ortalama tahsil süresi" },
      { label: 'E', text: "Alacak devir hızı" }
    ],
    correctLabel: 'E'
  },
  {
    number: 13,
    text: "Net satışları 480.000 TL, ortalama stokları 40.000 TL ve ortalama alacakları 20.000 TL olan işletmenin alacak devir hızı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "8" },
      { label: 'B', text: "12" },
      { label: 'C', text: "24" },
      { label: 'D', text: "6" },
      { label: 'E', text: "18" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 14,
    text: "Net satışları 480.000 TL, ortalama stokları 40.000 TL ve ortalama alacakları 20.000 TL olan işletmenin, ortalama tahsil süresi aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "15 gün" },
      { label: 'B', text: "30 gün" },
      { label: 'C', text: "10 gün" },
      { label: 'D', text: "20 gün" },
      { label: 'E', text: "8 gün" }
    ],
    correctLabel: 'A',
    isQuantitative: true
  },
  {
    number: 15,
    text: "Net satışları 480.000 TL, ortalama stokları 30.000 TL ve ortalama alacakları 20.000 TL olan işletmenin, stok devir hızı ve ortalama stokta kalma süresi aşağıdakilerden hangisidir?\n\n<br>\n<table class=\"question-table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th>Stok Devir Hızı</th>\n      <th>Ortalama Stokta Kalma Süresi(Gün)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>A)</td>\n      <td>6</td>\n      <td>60</td>\n    </tr>\n    <tr>\n      <td>B)</td>\n      <td>24</td>\n      <td>15</td>\n    </tr>\n    <tr>\n      <td>C)</td>\n      <td>16</td>\n      <td>22,5</td>\n    </tr>\n    <tr>\n      <td>D)</td>\n      <td>10</td>\n      <td>36</td>\n    </tr>\n    <tr>\n      <td>E)</td>\n      <td>20</td>\n      <td>18</td>\n    </tr>\n  </tbody>\n</table>\n<br>",
    options: [
      { label: 'A', text: "6 | 60" },
      { label: 'B', text: "24 | 15" },
      { label: 'C', text: "16 | 22,5" },
      { label: 'D', text: "10 | 36" },
      { label: 'E', text: "20 | 18" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 16,
    text: "Alacak devir hızı 24 olan bir işletmenin ortalama tahsilat süresi kaç gündür?",
    options: [
      { label: 'A', text: "18" },
      { label: 'B', text: "16" },
      { label: 'C', text: "15" },
      { label: 'D', text: "24" },
      { label: 'E', text: "20" }
    ],
    correctLabel: 'C'
  },
  {
    number: 17,
    text: "Bir işletmeye ait bilgiler aşağıdaki gibidir:\n\n<pre class=\"question-pre\">\nNet Satışlar : 3 600 000 TL\nOrtalama Alacaklar : 180 000 TL\nOrtalama Stokta Kalma Süresi : 30 gün\n</pre>\nYukarıdaki bilgilere göre işletmenin ortalama tahsilat süresi kaç gündür?\n\n18.\n<pre class=\"question-pre\">\nI. Cari oranı sektör ortalamasına göre yüksek, ancak asit test oranı düşük olan bir işletmede\n   sektör ortalamasına göre daha fazla stok vardır.\nII. Stok Devir Hızı Oranı 10 olan bir işletmede ortalama tahsilat süresi 36 gündür.\nIII. Nakit oranı işletmenin stoklarına ve alacaklarına hiç dokunmadan diğer dönen varlıklarla\n    kısa vadeli borçlarını ödeme gücünü gösterir.\n</pre>\nYukarıdaki ifadelerden hangisi doğrudur?",
    options: [
      { label: 'A', text: "Yalnız III" },
      { label: 'B', text: "Yalnız II" },
      { label: 'C', text: "Yalnız I" },
      { label: 'D', text: "I ve III" },
      { label: 'E', text: "I, II, III" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 19,
    text: "[(360 x Ortalama Alacaklar) / Net Satışlar] , formülü aşağıdakilerden hangisini göstermektedir?",
    options: [
      { label: 'A', text: "Alacak Bağımlılık Oranı" },
      { label: 'B', text: "Nakit Oran" },
      { label: 'C', text: "Alacak Devir Hızı" },
      { label: 'D', text: "Ortalama Etkinlik Süresi" },
      { label: 'E', text: "Ortalama Tahsilat Süresi" }
    ],
    correctLabel: 'E',
    isQuantitative: true
  },
  {
    number: 20,
    text: "Dönem başı stok mevcudu 28.000 TL, dönem sonu stok mevcudu 42.000 TL olan işletmenin, satışlarının maliyeti 210.000 TL ise, stok devir hızı ve ortalama stokta kalma süresi aşağıdakilerden hangisidir?\n\n<br>\n<table class=\"question-table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th>Ortalama Stokta Kalma Süresi(Gün)</th>\n      <th>Stok Devir Hızı</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>A)</td>\n      <td>6</td>\n      <td>60</td>\n    </tr>\n    <tr>\n      <td>B)</td>\n      <td>30</td>\n      <td>12</td>\n    </tr>\n    <tr>\n      <td>C)</td>\n      <td>10</td>\n      <td>36</td>\n    </tr>\n    <tr>\n      <td>D)</td>\n      <td>30</td>\n      <td>6</td>\n    </tr>\n    <tr>\n      <td>E)</td>\n      <td>60</td>\n      <td>6</td>\n    </tr>\n  </tbody>\n</table>\n<br>",
    options: [
      { label: 'A', text: "6 | 60" },
      { label: 'B', text: "30 | 12" },
      { label: 'C', text: "10 | 36" },
      { label: 'D', text: "30 | 6" },
      { label: 'E', text: "60 | 6" }
    ],
    correctLabel: 'E',
    isQuantitative: true
  },
  {
    number: 21,
    text: "Alacak devir hızı yüksek olan bir işletme için aşağıdakilerden hangisi doğrudur?\n\nMST AŞ.nin 2015 ve 2016 yılları itibariyle dönem sonuna ait mali tablolarından alınan bazı bilgiler aşağıdaki gibidir. (23-32. soruları bu verilere göre cevaplayınız.)\n<pre class=\"question-pre\">\n                    2015        2016\n-----------------------------------------\nStoklar             30.000      40.000\nAlacaklar           40.000      50.000\nNet Satışlar        400.000     450.000\nSatışların Maliyeti 180.000     245.000\n</pre>",
    options: [
      { label: 'A', text: "Ortalama stokta kalma süresi düşüktür." },
      { label: 'B', text: "Ortalama tahsilat süresi yüksektir." },
      { label: 'C', text: "Stok devir hızı yüksektir." },
      { label: 'D', text: "Ortalama stokta kalma süresi yüksektir." },
      { label: 'E', text: "Ortalama tahsilat süresi düşüktür." }
    ],
    correctLabel: 'A',
    isQuantitative: true
  },
  {
    number: 22,
    text: "MST AŞ.nin 2015 yılında stok devir hızı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "8" },
      { label: 'B', text: "13,3" },
      { label: 'C', text: "6" },
      { label: 'D', text: "10" },
      { label: 'E', text: "12" }
    ],
    correctLabel: 'E',
    isQuantitative: true
  },
  {
    number: 23,
    text: "MST AŞ.nin 2015 yılında ortalama stokta kalma süresi aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "60 gün" },
      { label: 'B', text: "36 gün" },
      { label: 'C', text: "45 gün" },
      { label: 'D', text: "30 gün" },
      { label: 'E', text: "75 gün" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 24,
    text: "MST AŞ.nin 2015 yılında alacak devir hızı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "8" },
      { label: 'B', text: "13,3" },
      { label: 'C', text: "6" },
      { label: 'D', text: "10" },
      { label: 'E', text: "12" }
    ],
    correctLabel: 'A',
    isQuantitative: true
  },
  {
    number: 25,
    text: "MST AŞ.nin 2015 yılında ortalama tahsil süresi aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "60 gün" },
      { label: 'B', text: "36 gün" },
      { label: 'C', text: "45 gün" },
      { label: 'D', text: "30 gün" },
      { label: 'E', text: "75 gün" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 26,
    text: "MST AŞ.nin 2016 yılında ortalama stokları kaç TL'dir?",
    options: [
      { label: 'A', text: "50.000" },
      { label: 'B', text: "35.000" },
      { label: 'C', text: "40.000" },
      { label: 'D', text: "30.000" },
      { label: 'E', text: "45.000" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 27,
    text: "MST AŞ.nin 2016 yılında stok devir hızı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "6" },
      { label: 'B', text: "12" },
      { label: 'C', text: "7" },
      { label: 'D', text: "4,9" },
      { label: 'E', text: "6,125" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 28,
    text: "MST AŞ.nin 2016 yılında ortalama stokta kalma süresi aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "60 gün" },
      { label: 'B', text: "73,5 gün" },
      { label: 'C', text: "51,4 gün" },
      { label: 'D', text: "45 gün" },
      { label: 'E', text: "55 gün" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 29,
    text: "MST AŞ.nin 2016 yılında alacak devir hızı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "8" },
      { label: 'B', text: "12" },
      { label: 'C', text: "9" },
      { label: 'D', text: "10" },
      { label: 'E', text: "6" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 30,
    text: "MST AŞ.nin 2016 yılında ortalama tahsil süresi aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "40 gün" },
      { label: 'B', text: "36 gün" },
      { label: 'C', text: "75 gün" },
      { label: 'D', text: "60 gün" },
      { label: 'E', text: "45 gün" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 31,
    text: "Ticari Alacak devir hızı oranının hesaplanmasında aşağıdakilerden hangisi temel alınırsa sonuç daha açıklayıcı olur?",
    options: [
      { label: 'A', text: "Ticari Alacaklar" },
      { label: 'B', text: "Ortalama Ticari Alacaklar" },
      { label: 'C', text: "Şüpheli Ticari alacaklar" },
      { label: 'D', text: "Ortalama Alacaklar" },
      { label: 'E', text: "Alacaklar" }
    ],
    correctLabel: 'B'
  },
  {
    number: 32,
    text: "Aşağıdakilerden hangisi işletmenin faaliyet durumu hakkında bilgi vermez?\n\n33.\n<pre class=\"question-pre\">\nNet Satışlar\n--------------------------\nOrtalama Ticari Alacaklar\n</pre>\nYukarıdaki formül aşağıdakilerden hangisini göstermektedir?",
    options: [
      { label: 'A', text: "Alacak devir hızı" },
      { label: 'B', text: "Ticari alacak devir hızı" },
      { label: 'C', text: "Ortalama tahsil süresi" },
      { label: 'D', text: "Brüt kâr marjı" },
      { label: 'E', text: "Ortalama stokta kalma süresi" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 34,
    text: "Aşağıdakilerden hangisi faaliyet etkinliğini gösteren oranlarından değildir?",
    options: [
      { label: 'A', text: "Ortalama tahsil süresi" },
      { label: 'B', text: "Stok devir hızı" },
      { label: 'C', text: "Maddi duran varlık devir hızı" },
      { label: 'D', text: "Çalışma sermayesi devir hızı" },
      { label: 'E', text: "Stok bağımlılık oranı" }
    ],
    correctLabel: 'E'
  },
  {
    number: 35,
    text: "Aşağıdakilerden hangisi faaliyet oranlarından değildir?\n\n36.\n<pre class=\"question-pre\">\nNet Satışlar\n-------------------------------\nOrtalama Maddi Duran Varlıklar\n</pre>\nYukarıdaki formül aşağıdakilerden hangisini göstermektedir?",
    options: [
      { label: 'A', text: "Maddi duran varlık devir hızı" },
      { label: 'B', text: "Ticari alacak devir hızı" },
      { label: 'C', text: "Özkaynak devir hızı" },
      { label: 'D', text: "Brüt kâr marjı" },
      { label: 'E', text: "Kapasite kullanım oranı" }
    ],
    correctLabel: 'A',
    isQuantitative: true
  },
  {
    number: 37,
    text: "Aşağıdaki oranlardan hangisi işletmenin kapasite kullanımı hakkında bilgi vermektedir?\n\n38.\n<pre class=\"question-pre\">\nNet Satışlar\n-------------\nAktif Toplam\n</pre>\nYukarıdaki formül aşağıdakilerden hangisini göstermektedir?\n\nAKŞAR A.Ş'nin 2013 yılı dönem sonuna ait finansal tablolarından alınan bazı verileri aşağıdadır; (39-43. soruları bu verilere göre yanıtlayınız.)\n<pre class=\"question-pre\">\nMenkul Kıymetler     : 35.000\nDuran Varlıklar      : 80.000\nMaddi Duran Varlıklar: 50.000\nToplam Borçlar       : 120.000\nAktif Toplamı        : 180.000\nÖzkaynak             : 60.000\nNet Satışlar         : 900.000\nSatışların Maliyeti  : 600.000\nStoklar              : 30.000\nHazır Değerler       : 10.000\nAlacaklar            : 25.000\nTicari Borçlar       : 60.000\nNet Alışlar          : 360.000\n</pre>",
    options: [
      { label: 'A', text: "Duran varlık devir hızı" },
      { label: 'B', text: "Aktif devir hızı" },
      { label: 'C', text: "Özkaynak devir hızı" },
      { label: 'D', text: "Stok devir hızı" },
      { label: 'E', text: "Kapasite kullanım oranı" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 39,
    text: "AKŞAR A.Ş.nin duran varlık devir hızı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "7,5" },
      { label: 'B', text: "11,25" },
      { label: 'C', text: "9" },
      { label: 'D', text: "10" },
      { label: 'E', text: "7,5" }
    ],
    correctLabel: 'B'
  },
  {
    number: 40,
    text: "AKŞAR A.Ş.nin çalışma sermayesi devir hızı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "9" },
      { label: 'B', text: "6" },
      { label: 'C', text: "8" },
      { label: 'D', text: "12" },
      { label: 'E', text: "15" }
    ],
    correctLabel: 'A'
  },
  {
    number: 41,
    text: "AKŞAR A.Ş.nin aktif devir hızı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "3,3" },
      { label: 'B', text: "4,8" },
      { label: 'C', text: "5" },
      { label: 'D', text: "11,4" },
      { label: 'E', text: "8" }
    ],
    correctLabel: 'C'
  },
  {
    number: 42,
    text: "AKŞAR A.Ş.nin hazır değerler devir hızı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "45" },
      { label: 'B', text: "75" },
      { label: 'C', text: "30" },
      { label: 'D', text: "60" },
      { label: 'E', text: "90" }
    ],
    correctLabel: 'E'
  },
  {
    number: 43,
    text: "AKŞAR A.Ş.nin alacak devir hızı aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "24" },
      { label: 'B', text: "36" },
      { label: 'C', text: "28" },
      { label: 'D', text: "18" },
      { label: 'E', text: "42" }
    ],
    correctLabel: 'B'
  }
];

const moduleMeta = {
  id: 'faaliyet_oranlari',
  title: 'Faaliyet Oranları',
  description: "Stok, alacak, aktif ve duran varlık devir hızlarını ölçen, uygulamalı faaliyet oranı soruları.",
  focusAreas: [
    "Faaliyet oranı formülleri",
    "Tahsil ve stokta kalma süreleri",
    "Devir hızlarının yorumlanması"
  ],
  learningObjectives: [
    "Faaliyet oranlarının formüllerini hatırlamak",
    "Verilen finansal verilerden ilgili oranları hesaplamak",
    "Oran sonuçlarının işletme performansına etkisini yorumlamak"
  ],
  additionalNotes: "Birden çok veri seti içerir; hesaplamaya dayalı sorularda sonuçlar raporlama analizine dahil edilmez.",
  testDetails: {
    questionCount: moduleQuestions.length,
    format: "Çoktan seçmeli, tek doğru şık",
    storageHint: "Cevaplarınız tarayıcıda tutulur; testi dilediğiniz zaman kaldığınız yerden sürdürebilirsiniz.",
    extra: [
      "Hesaplama/Grafikli sorular analiz özetlerinden otomatik olarak hariç tutulur."
    ]
  }
};

const STORAGE_KEY = 'faaliyetOranlariHariciState_v1';

window.moduleConfig = {
  storageKey: STORAGE_KEY,
  moduleMeta,
  moduleQuestions,
  excludeQuantitativeFromAnalysis: true
};
