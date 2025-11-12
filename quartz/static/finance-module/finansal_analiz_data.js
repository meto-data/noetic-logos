const moduleQuestions = [
  {
    number: 1,
    text: "Muhasebe, işletmelerdeki mâlî olayları '______', '_______', '________', '__________', '_____________________' şeklinde, ilgililere rapor şeklinde sunan bir bilgi sistemidir.",
    options: [
      { label: 'A', text: "Saptamak, Kaydetmek, Sınıflandırmak, Özetlemek, Analiz Etmek ve Yorumlamak" },
      { label: 'B', text: "Kaydetmek, Sınıflandırmak, Saptamak, Özetlemek, Analiz Etmek ve Yorumlamak" },
      { label: 'C', text: "Analiz Etmek ve Yorumlamak, Kaydetmek, Saptamak, Sınıflandırmak, Özetlemek" },
      { label: 'D', text: "Kaydetmek, Özetlemek, Sınıflandırmak, Analiz Etmek ve Yorumlamak, Saptamak" },
      { label: 'E', text: "Sınıflandırmak, Analiz Etmek ve Yorumlamak, Kaydetmek, Saptamak, Özetlemek" }
    ],
    correctLabel: 'A'
  },
  {
    number: 2,
    text: "Muhasebe sürecinin ilk adımı olan \"Saptama\" işlevi, bir mali olayın kaydedilebilmesi için temel olarak neyin varlığını zorunlu kılar?",
    options: [
      { label: 'A', text: "İşletme sahibinin sözlü onayı" },
      { label: 'B', text: "Olayın nakit olarak gerçekleşmesi" },
      { label: 'C', text: "Yevmiye Defteri'ne işlenmesi" },
      { label: 'D', text: "Fatura, makbuz, dekont gibi bir belgenin olması" },
      { label: 'E', text: "Mizanda yer alması" }
    ],
    correctLabel: 'D'
  },
  {
    number: 3,
    text: "Muhasebede, saptanan mali olayların belgelere dayanılarak, tarih sırasına göre ve maddeler halinde ilk olarak kaydedildiği resmi defter aşağıdakilerden hangisidir?",
    options: [
      { label: 'A', text: "Defter-i Kebir" },
      { label: 'B', text: "Mizan" },
      { label: 'C', text: "Yevmiye Defteri (Günlük Defter)" },
      { label: 'D', text: "Envanter Defteri" },
      { label: 'E', text: "Bilanço" }
    ],
    correctLabel: 'C'
  },
  {
    number: 4,
    text: "Yevmiye Defteri'ne kaydedilen işlemlerin, niteliklerine göre \"Kasa\", \"Bankalar\", \"Ticari Borçlar\" gibi ilgili hesaplara sistemli bir şekilde dağıtılarak gruplandırıldığı sürece ve bu sürecin işlendiği deftere ne ad verilir?",
    options: [
      { label: 'A', text: "Saptama / Yevmiye Defteri" },
      { label: 'B', text: "Özetleme / Mizan" },
      { label: 'C', text: "Sınıflandırma / Defter-i Kebir (Büyük Defter)" },
      { label: 'D', text: "Kaydetme / Fişler" },
      { label: 'E', text: "Analiz / Gelir Tablosu" }
    ],
    correctLabel: 'C'
  },
  {
    number: 5,
    text: "Finansal tablolar hazırlanmadan önce, Defter-i Kebir'deki hesapların borç ve alacak toplamlarının birbirine eşit olup olmadığını kontrol ederek matematiksel bir sağlama yapma amacıyla düzenlenen özet tablo hangisidir?",
    options: [
      { label: 'A', text: "Bilanço" },
      { label: 'B', text: "Gelir Tablosu" },
      { label: 'C', text: "Mizan" },
      { label: 'D', text: "Nakit Akım Tablosu" },
      { label: 'E', text: "Fon Akım Tablosu" }
    ],
    correctLabel: 'C'
  },
  {
    number: 6,
    text: "Muhasebe sürecinin \"Özetleme\" işlevinin sonunda, işletmenin belirli bir andaki finansal durumunu (varlıklar ve kaynaklar) ve belirli bir dönemdeki faaliyet sonucunu (kâr/zarar) gösteren temel finansal tablolar sırasıyla hangileridir?",
    options: [
      { label: 'A', text: "Bilanço ve Gelir Tablosu" },
      { label: 'B', text: "Mizan ve Nakit Akım Tablosu" },
      { label: 'C', text: "Gelir Tablosu ve Fon Akım Tablosu" },
      { label: 'D', text: "Yevmiye Defteri ve Defter-i Kebir" },
      { label: 'E', text: "Özkaynak Değişim Tablosu ve Kâr Dağıtım Tablosu" }
    ],
    correctLabel: 'A'
  },
  {
    number: 7,
    text: "Muhasebe tarafından hazırlanan finansal tabloların alınıp, oranlar, trendler ve karşılaştırmalar yoluyla anlamlı sonuçlar çıkarılarak işletmenin performansı hakkında \"ne durumdayız, nereye gidiyoruz?\" gibi sorulara yanıt aranan son aşama hangisidir ve bu aşama kimin temel görevidir?",
    options: [
      { label: 'A', text: "Sınıflandırma / Muhasebecinin" },
      { label: 'B', text: "Kaydetme / Denetçinin" },
      { label: 'C', text: "Analiz ve Yorumlama / Finansçının ve Yöneticinin" },
      { label: 'D', text: "Özetleme / Vergi Dairesinin" },
      { label: 'E', text: "Saptama / Hukuk Müşavirinin" }
    ],
    correctLabel: 'C'
  },
  {
    number: 8,
    text: "Bir işletmenin anlık bir fotoğrafı gibi, belirli bir tarihteki varlıklarını (ekonomik gücünü) ve bu varlıkları fonlayan kaynakları (finansal yapısını) gösteren temel mali tablo hangisidir?",
    options: [
      { label: 'A', text: "Gelir Tablosu" },
      { label: 'B', text: "Nakit Akım Tablosu" },
      { label: 'C', text: "Bilanço" },
      { label: 'D', text: "Mizan" },
      { label: 'E', text: "Fon Akım Tablosu" }
    ],
    correctLabel: 'C'
  },
  {
    number: 9,
    text: "Bilançoda \"Birikmiş Amortismanlar (-)\" veya \"Karşılıklar (-)\" gibi, ait olduğu ana hesabın değerini düzenleyerek net değerini gösteren \"eksi karakterli\" hesaplara ne ad verilir?",
    options: [
      { label: 'A', text: "Nazım Hesap" },
      { label: 'B', text: "Kontra (Düzenleyici) Hesap" },
      { label: 'C', text: "Sonuç Hesabı" },
      { label: 'D', text: "Geçici Hesap" },
      { label: 'E', text: "Maliyet Hesabı" }
    ],
    correctLabel: 'B'
  },
  {
    number: 10,
    text: "Gelir Tablosu dikey analizi yapılırken, işletmenin ana faaliyetlerinden elde ettiği hâsılatı temsil ettiği için diğer tüm kalemlerin kendisine oranlandığı ve %100 kabul edilen temel kalem hangisidir?",
    options: [
      { label: 'A', text: "Brüt Satışlar" },
      { label: 'B', text: "Faaliyet Kârı" },
      { label: 'C', text: "Net Satışlar" },
      { label: 'D', text: "Dönem Net Kârı" },
      { label: 'E', text: "Olağan Kâr" }
    ],
    correctLabel: 'C'
  },
  {
    number: 11,
    text: "Potansiyel yatırımcıların bir şirkete ortak olup olmama kararını verirken; şirketin kârlılığını, gelecekteki kazanma gücünü ve hisse senedi değerini ölçmek amacıyla yaptırdığı analiz türü hangisidir?",
    options: [
      { label: 'A', text: "Yönetim Analizi" },
      { label: 'B', text: "Kredi Analizi" },
      { label: 'C', text: "Yatırım Analizi" },
      { label: 'D', text: "İç Analiz" },
      { label: 'E', text: "Statik Analiz" }
    ],
    correctLabel: 'C'
  },
  {
    number: 12,
    text: "İşletmenin tek bir dönemine ait mali tablolarını inceleyerek anlık bir durumu değerlendiren dikey analiz, kapsamına göre ne tür bir analizdir?",
    options: [
      { label: 'A', text: "Statik Analiz" },
      { label: 'B', text: "Dinamik Analiz" },
      { label: 'C', text: "Karşılaştırmalı Analiz" },
      { label: 'D', text: "Trend Analizi" },
      { label: 'E', text: "İçsel Analiz" }
    ],
    correctLabel: 'A'
  },
  {
    number: 13,
    text: "İşletmenin birbirini izleyen en az iki dönemine ait finansal tablolarını yan yana koyarak kalemlerdeki mutlak ve yüzdesel artış/azalışları inceleyen analiz tekniği hangisidir?",
    options: [
      { label: 'A', text: "Dikey Analiz" },
      { label: 'B', text: "Trend Analizi" },
      { label: 'C', text: "Karşılaştırmalı Tablolar Analizi (Yatay Analiz)" },
      { label: 'D', text: "Oran Analizi" },
      { label: 'E', text: "Statik Analiz" }
    ],
    correctLabel: 'C'
  },
  {
    number: 14,
    text: "Birden fazla dönemin verilerini incelerken, şirketin kurulduğu, iflas erteleme istediği veya olağandışı bir doğal afet yaşadığı bir yılın \"baz yıl\" olarak seçilmemesinin temel nedeni nedir?",
    options: [
      { label: 'A', text: "Bu yıllarda vergi oranları farklıdır." },
      { label: 'B', text: "Bu yıllar işletmenin normal ve stabil faaliyetlerini yansıtmadığı için sağlıklı bir karşılaştırma temeli oluşturmaz." },
      { label: 'C', text: "Bu yılların muhasebe kayıtları güvenilir değildir." },
      { label: 'D', text: "Bu yıllarda bilanço ve gelir tablosu hazırlanmaz." },
      { label: 'E', text: "Bu yıllar için analiz yapmak yasal olarak yasaktır." }
    ],
    correctLabel: 'B'
  },
  {
    number: 15,
    text: "Bir işletmenin toplam gelirlerinin, toplam maliyetlerine (sabit + değişken) tam olarak eşit olduğu ve kârın sıfır (0) olduğu üretim veya satış seviyesine ne ad verilir?",
    options: [
      { label: 'A', text: "Kâr Maksimizasyon Noktası" },
      { label: 'B', text: "Likidite Noktası" },
      { label: 'C', text: "Başa-Baş Noktası" },
      { label: 'D', text: "Finansal Kaldıraç Noktası" },
      { label: 'E', text: "Kapanma Noktası" }
    ],
    correctLabel: 'C'
  },
  {
    number: 16,
    text: `
      <p>Bir işletmenin "Kasa" hesabına ait veriler aşağıdaki gibidir. Yatay analize göre bu hesaptaki mutlak ve yüzdesel değişim nedir?</p>
      <table class="financial-table">
        <thead>
          <tr>
            <th>Hesap Adı</th>
            <th>2022 (TL)</th>
            <th>2023 (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>100 Kasa</td>
            <td class="numeric">80.000</td>
            <td class="numeric">100.000</td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "+20.000 TL ve %20 artış" },
      { label: 'B', text: "+20.000 TL ve %25 artış" },
      { label: 'C', text: "+100.000 TL ve %25 artış" },
      { label: 'D', text: "-20.000 TL ve %20 azalış" },
      { label: 'E', text: "+20.000 TL ve %125 artış" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 17,
    text: `
      <p>XYZ A.Ş.'nin "Ticari Borçlar"ı aşağıdaki gibidir. Yatay analize göre bu kalemdeki değişim yüzdesi kaçtır?</p>
      <table class="financial-table">
        <thead>
          <tr>
            <th>Hesap Adı</th>
            <th>Baz Dönem (TL)</th>
            <th>Cari Dönem (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>320 Ticari Borçlar</td>
            <td class="numeric">250.000</td>
            <td class="numeric">200.000</td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "%25 artış" },
      { label: 'B', text: "%20 artış" },
      { label: 'C', text: "%20 azalış" },
      { label: 'D', text: "%25 azalış" },
      { label: 'E', text: "%50 azalış" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 18,
    text: `
      <p>Aşağıdaki bilanço verilerine göre 2023 yılında "Dönen Varlıklar"ın "Aktif Toplamı" içindeki payı (dikey analiz) yüzde kaçtır?</p>
      <table class="financial-table">
        <thead>
          <tr>
            <th>AKTİF (2023)</th>
            <th>Tutar (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dönen Varlıklar</td>
            <td class="numeric">300.000</td>
          </tr>
          <tr>
            <td>Duran Varlıklar</td>
            <td class="numeric">900.000</td>
          </tr>
          <tr>
            <td><strong>AKTİF TOPLAMI</strong></td>
            <td class="numeric"><strong>1.200.000</strong></td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "%20" },
      { label: 'B', text: "%25" },
      { label: 'C', text: "%33,3" },
      { label: 'D', text: "%50" },
      { label: 'E', text: "%75" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 19,
    text: `
      <p>Aşağıdaki gelir tablosu verilerine göre "Faaliyet Kârı"nın "Net Satışlar" içindeki payı (dikey analiz) yüzde kaçtır?</p>
      <table class="financial-table">
        <thead>
          <tr>
            <th>GELİR TABLOSU</th>
            <th>Tutar (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Net Satışlar</strong></td>
            <td class="numeric"><strong>800.000</strong></td>
          </tr>
          <tr>
            <td>Brüt Satış Kârı</td>
            <td class="numeric">320.000</td>
          </tr>
          <tr>
            <td>Faaliyet Giderleri (-)</td>
            <td class="numeric">160.000</td>
          </tr>
          <tr>
            <td><strong>Faaliyet Kârı</strong></td>
            <td class="numeric"><strong>160.000</strong></td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "%20" },
      { label: 'B', text: "%25" },
      { label: 'C', text: "%30" },
      { label: 'D', text: "%40" },
      { label: 'E', text: "%50" }
    ],
    correctLabel: 'A',
    isQuantitative: true
  },
  {
    number: 20,
    text: `
      <p>Bir işletmenin "Ticari Alacaklar" kalemine ait veriler aşağıdaki gibidir. 2021 yılı baz alınarak yapılan trend analizine göre 2022 yılının eğilim yüzdesi kaçtır?</p>
      <table class="financial-table">
        <thead>
          <tr>
            <th>Yıl</th>
            <th>Ticari Alacaklar (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2021 (Baz Yıl)</td>
            <td class="numeric">400.000</td>
          </tr>
          <tr>
            <td>2022</td>
            <td class="numeric">500.000</td>
          </tr>
          <tr>
            <td>2023</td>
            <td class="numeric">480.000</td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "80" },
      { label: 'B', text: "100" },
      { label: 'C', text: "120" },
      { label: 'D', text: "125" },
      { label: 'E', text: "150" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 21,
    text: `
      <p>Yukarıdaki tabloya göre, 2021 yılı baz alındığında 2023 yılının trend yüzdesi kaçtır ve bu yüzde nasıl yorumlanır?</p>
      <table class="financial-table">
        <thead>
          <tr>
            <th>Yıl</th>
            <th>Ticari Alacaklar (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2021 (Baz Yıl)</td>
            <td class="numeric">400.000</td>
          </tr>
          <tr>
            <td>2022</td>
            <td class="numeric">500.000</td>
          </tr>
          <tr>
            <td>2023</td>
            <td class="numeric">480.000</td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "100 / Baz yıla göre değişim yoktur." },
      { label: 'B', text: "110 / Baz yıla göre %10 artış göstermiştir." },
      { label: 'C', text: "120 / Baz yıla göre %20 artış göstermiştir." },
      { label: 'D', text: "80 / Baz yıla göre %20 azalış göstermiştir." },
      { label: 'E', text: "96 / Baz yıla göre %4 azalış göstermiştir." }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 22,
    text: `
      <p>Aşağıdaki karşılaştırmalı bilanço verilerine göre "Binalar" hesabındaki yüzdesel değişim (yatay analiz) yaklaşık olarak kaçtır?</p>
      <table class="financial-table">
        <thead>
          <tr>
            <th>Hesap Adı</th>
            <th>Önceki Dönem (TL)</th>
            <th>Cari Dönem (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Binalar</td>
            <td class="numeric">8.000</td>
            <td class="numeric">10.000</td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "%20 artış" },
      { label: 'B', text: "%25 artış" },
      { label: 'C', text: "%30 artış" },
      { label: 'D', text: "%125 artış" },
      { label: 'E', text: "%80 azalış" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 23,
    text: `
      <p>Aşağıdaki bilanço verilerine göre cari dönemde (Y2) "Sermaye" hesabının "Pasif Toplamı" içindeki payı (dikey analiz) yüzde kaçtır?</p>
      <table class="financial-table">
        <thead>
          <tr>
            <th>PASİF (Y2)</th>
            <th>Tutar (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kısa Vadeli Yabancı Kaynaklar</td>
            <td class="numeric">2.000</td>
          </tr>
          <tr>
            <td>Uzun Vadeli Yabancı Kaynaklar</td>
            <td class="numeric">4.750</td>
          </tr>
          <tr>
            <td>Sermaye</td>
            <td class="numeric">12.000</td>
          </tr>
          <tr>
            <td>Özkaynaklar Toplamı</td>
            <td class="numeric">13.250</td>
          </tr>
          <tr>
            <td><strong>PASİF TOPLAMI</strong></td>
            <td class="numeric"><strong>20.000</strong></td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "%50" },
      { label: 'B', text: "%55" },
      { label: 'C', text: "%60" },
      { label: 'D', text: "%66,25" },
      { label: 'E', text: "%90,5" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 24,
    text: `
      <p>Aşağıdaki bilanço verilerine göre "Stoklar" hesabının "Dönen Varlıklar Toplamı" içindeki grup payı (dikey analiz) yüzde kaçtır?</p>
      <table class="financial-table">
        <thead>
          <tr>
            <th>DÖNEN VARLIKLAR</th>
            <th>Tutar (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kasa</td>
            <td class="numeric">500</td>
          </tr>
          <tr>
            <td>Ticari Alacaklar</td>
            <td class="numeric">1.000</td>
          </tr>
          <tr>
            <td>Stoklar</td>
            <td class="numeric">1.500</td>
          </tr>
          <tr>
            <td><strong>Dönen Varlıklar Toplamı</strong></td>
            <td class="numeric"><strong>3.000</strong></td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "%12,5" },
      { label: 'B', text: "%33,3" },
      { label: 'C', text: "%50,0" },
      { label: 'D', text: "%16,7" },
      { label: 'E', text: "%100" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 25,
    text: `
      <p>Aşağıdaki gelir tablosu verilerine göre "Dönem Net Kârı"nın "Net Satışlar"a oranı (dikey analiz) yaklaşık yüzde kaçtır?</p>
      <table class="financial-table">
        <thead>
          <tr>
            <th>GELİR TABLOSU</th>
            <th>Tutar (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Net Satışlar</strong></td>
            <td class="numeric"><strong>45.000</strong></td>
          </tr>
          <tr>
            <td><strong>Dönem Net Kârı</strong></td>
            <td class="numeric"><strong>1.050</strong></td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "%1,77" },
      { label: 'B', text: "%2,33" },
      { label: 'C', text: "%3,50" },
      { label: 'D', text: "%4,10" },
      { label: 'E', text: "%5,00" }
    ],
    correctLabel: 'B',
    isQuantitative: true
  },
  {
    number: 26,
    text: `
      <p>Aşağıdaki karşılaştırmalı gelir tablosu verilerine göre "Brüt Satış Kârı" kalemindeki yüzdesel artış (yatay analiz) kaçtır?</p>
      <table class="financial-table">
        <thead>
          <tr>
            <th>Hesap Adı</th>
            <th>Önceki Dönem (TL)</th>
            <th>Cari Dönem (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brüt Satış Kârı</td>
            <td class="numeric">10.000</td>
            <td class="numeric">12.500</td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "%10" },
      { label: 'B', text: "%20" },
      { label: 'C', text: "%25" },
      { label: 'D', text: "%50" },
      { label: 'E', text: "%125" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 27,
    text: "Bir işletmenin Dönen Varlıkları önceki dönem 8.000 TL iken cari dönemde 7.000 TL'ye düşmüştür. Yatay analize göre bu gruptaki yüzdesel değişim nedir?",
    options: [
      { label: 'A', text: "%14,28 azalış" },
      { label: 'B', text: "%10 azalış" },
      { label: 'C', text: "%12,5 azalış" },
      { label: 'D', text: "%1.000 azalış" },
      { label: 'E', text: "%12,5 artış" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 28,
    text: `
      <p>Aşağıdaki bilanço verilerine göre "Özkaynaklar Toplamı"nın "Pasif Toplamı" içindeki payı (dikey analiz) yaklaşık yüzde kaçtır?</p>
      <table class="financial-table">
        <thead>
          <tr>
            <th>PASİF</th>
            <th>Tutar (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>KVYK Toplamı</td>
            <td class="numeric">2.500</td>
          </tr>
          <tr>
            <td>UVYK Toplamı</td>
            <td class="numeric">4.430</td>
          </tr>
          <tr>
            <td><strong>Özkaynaklar Toplamı</strong></td>
            <td class="numeric"><strong>11.070</strong></td>
          </tr>
          <tr>
            <td><strong>PASİF TOPLAMI</strong></td>
            <td class="numeric"><strong>18.000</strong></td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "%55,5" },
      { label: 'B', text: "%58,2" },
      { label: 'C', text: "%61,5" },
      { label: 'D', text: "%68,4" },
      { label: 'E', text: "%72,1" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  },
  {
    number: 29,
    text: `
      <p>Aşağıdaki gelir tablosu verilerine göre "Satış İndirimleri"nin "Brüt Satışlar"a oranı yaklaşık yüzde kaçtır?</p>
      <table class="financial-table">
        <thead>
          <tr>
            <th>GELİR TABLOSU</th>
            <th>Tutar (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Brüt Satışlar</strong></td>
            <td class="numeric"><strong>50.000</strong></td>
          </tr>
          <tr>
            <td>Satış İndirimleri (-)</td>
            <td class="numeric">5.000</td>
          </tr>
          <tr>
            <td><strong>Net Satışlar</strong></td>
            <td class="numeric"><strong>45.000</strong></td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "%10" },
      { label: 'B', text: "%11,1" },
      { label: 'C', text: "%8,33" },
      { label: 'D', text: "%12,5" },
      { label: 'E', text: "%90" }
    ],
    correctLabel: 'A',
    isQuantitative: true
  },
  {
    number: 30,
    text: "Bir işletmenin Duran Varlıkları önceki dönem 10.000 TL'den cari dönemde 13.000 TL'ye yükselmiştir. Yatay analize göre bu artışın yüzdesi kaçtır?",
    options: [
      { label: 'A', text: "%13" },
      { label: 'B', text: "%23" },
      { label: 'C', text: "%25" },
      { label: 'D', text: "%30" },
      { label: 'E', text: "%130" }
    ],
    correctLabel: 'D',
    isQuantitative: true
  },
  {
    number: 31,
    text: `
      <p>Bir işletmenin Net Satışları 200.000 TL, Satışların Maliyeti ise 140.000 TL'dir. Dikey analize göre Satışların Maliyetinin Net Satışlar içindeki payı yüzde kaçtır?</p>
      <table class="financial-table">
        <thead>
          <tr>
            <th>Hesap Adı</th>
            <th>Tutar (TL)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Net Satışlar</strong></td>
            <td class="numeric"><strong>200.000</strong></td>
          </tr>
          <tr>
            <td>Satışların Maliyeti (-)</td>
            <td class="numeric">140.000</td>
          </tr>
        </tbody>
      </table>
    `.trim(),
    options: [
      { label: 'A', text: "%30" },
      { label: 'B', text: "%60" },
      { label: 'C', text: "%70" },
      { label: 'D', text: "%140" },
      { label: 'E', text: "%170" }
    ],
    correctLabel: 'C',
    isQuantitative: true
  }
];

const moduleMeta = {
  id: 'finansal-analiz',
  title: 'Finansal Analiz',
  description: 'Muhasebenin işlevlerinden finansal tablo analiz tekniklerine uzanan kapsamlı bir değerlendirme seti sunar. Sözel kavram soruları ile yatay/dikey/trend analizlerini içeren uygulamalı tablolar bir aradadır.',
  focusAreas: [
    'Muhasebenin temel işlevleri ve süreç adımları',
    'Finansal tabloların yapısı, ana kalemleri ve yorumlanması',
    'Yatay, dikey ve trend analizleri ile temel oran hesapları'
  ],
  learningObjectives: [
    'Muhasebenin bilgi üretim sürecindeki adımları sıralamak',
    'Finansal tablo kalemlerini ve ilişkilerini doğru yorumlamak',
    'Yatay ve dikey analiz sonuçlarını hesaplayıp anlamlandırmak',
    'Trend analizi yüzde ve yorumlarını uygulamak',
    'Finansal analiz tablolarını okuyup karar desteği sağlamak'
  ],
  additionalNotes: 'Modül; kavramsal sorularla birlikte tablolu sayısal alıştırmalar içerir. Sayısal sorular analiz listesine dahil edilmez.',
  testDetails: {
    questionCount: moduleQuestions.length,
    format: 'Sözel ve sayısal çoktan seçmeli sorular',
    storageHint: 'Cevaplarınız tarayıcıda saklanır; istediğiniz zaman devam edebilirsiniz.',
    extra: [
      'Tablolu sorular iş akışında otomatik olarak stilize edilir.'
    ]
  }
};

const STORAGE_KEY = 'finansalAnalizModuleState_v1';

window.moduleConfig = {
  storageKey: STORAGE_KEY,
  moduleMeta,
  moduleQuestions,
  excludeQuantitativeFromAnalysis: true
};

