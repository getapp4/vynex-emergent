export const posts = [
  {
    title: "HDMI 2.1 Kablosu Seçim Rehberi",
    description:
      "4K 120Hz ve 8K desteği için doğru HDMI 2.1 kablosunu nasıl seçersiniz? Bandwidth, sertifikasyon ve kalite ipuçları.",
    slug: "hdmi-21-kablo-rehberi",
    category: "Kablolar",
    cover: "/covers/hdmi21.jpg",
    affiliateKey: "hdmi_ultra",
  },
  {
    title: "USB-C E-Marker — Gizli Çip Neden Önemli?",
    description:
      "E-Marker çipli USB-C kablolar, yüksek watt değerlerinde güvenli ve doğru güç iletimi için kritik rol oynar. Yanlış kablo hem cihazı yavaş şarj eder hem de uzun vadede zarar verebilir.",
    slug: "usbc-emarker-240w",
    category: "USB Teknolojileri",
    cover: "/covers/usbc-emarker.jpg",
    affiliateKey: "usbc_emarker",
    youtubeId: "ptlFdk37IBo",
    body: [
      "USB-C artık her yerde: telefonlar, laptoplar, tabletler, powerbankler… Ama her USB-C kablo aynı değil. Özellikle 100W ve üstü (örneğin 140W, 240W) güç çeken cihazlarda kablonun içinde E-Marker adı verilen küçük bir çip bulunması gerekiyor. Bu çip, adaptör ile cihaz arasındaki ‘ben şu kadar gücü güvenle taşıyabilirim’ bilgisini ileten kimlik kartı gibi çalışıyor.",
      "Basitçe söyleyelim: E-Marker çipi olmayan ucuz bir USB-C kabloyu 240W destekli bir adaptöre takarsan, iki ihtimal var: ya adaptör güvenlik nedeniyle gücü kısar ve cihaz yavaş şarj olur, ya da kablo sınırlarının üzerinde yük biner ve ısınma, kararsızlık, hatta uzun vadede hasar riski ortaya çıkar.",
      "USB-C E-Marker çipi, USB Power Delivery (USB-PD) protokolüyle konuşur. Adaptör, kablo ve cihaz arasında küçük bir müzakere yapılır: Hangi voltaj? Hangi amper? Maksimum kaç watt? Eğer kablonun E-Marker'ı ‘ben 240W taşıyabilirim’ diyorsa, adaptör yüksek profilleri açar. Eğer E-Marker zayıf bir profil bildiriyorsa, sistem kendini otomatik kısar.",
      "Piyasada ‘240W destekli’ diye satılan ama içinde doğru E-Marker çipi olmayan ya da yanlış programlanmış kablolar var. Bunlar, özellikle gaming laptop, profesyonel ultrabook veya hızlı şarj destekli tabletlerde beklenenden düşük performans verir. VYNEX olarak yaptığımız testlerde, bazı kabloların etiketinde 240W yazmasına rağmen pratikte 65W üzerinde kararsız davrandığını gördük.",
      "E-Marker kontrolü yapmanın birden fazla yolu var. En garanti yöntem, kabloyu profesyonel USB-C test cihazlarına (USB-C tester, PD analyzer) bağlayıp gerçek zamanlı PD müzakeresini okumak. İkinci yöntem, güvenilir markaların sertifikalı kablolarını tercih etmek ve mümkünse üreticinin teknik dokümanını incelemek. Üçüncü yöntem ise pratik saha testi: aynı adaptör ve aynı cihazla farklı kabloları deneyerek şarj gücünü, sıcaklığı ve kararlılığı karşılaştırmak.",
      "Özetle: Eğer cihazın 100W ve üzeri güç çekiyorsa, kablonun sadece ‘USB-C’ olması yetmez. E-Marker çipli, üreticisi belli, mümkünse 240W desteği açıkça belirtilmiş bir kablo kullanmak gerçek performans ve güvenlik için şart. VYNEX Tech Hub’da hem laboratuvar testleriyle hem de günlük kullanım senaryolarıyla bu kabloları inceleyip sonuçları şeffaf şekilde paylaşıyoruz.",
    ],
  },
  {
    title: "Eski Telefonu Güvenlik Kamerasına Dönüştürme",
    description:
      "Kullanmadığınız akıllı telefonu ücretsiz uygulamalarla IP kamera yapın. Adım adım kurulum rehberi.",
    slug: "telefon-kamera-donusumu",
    category: "Pratik Çözümler",
    cover: "/covers/phone-camera.jpg",
  },
  {
    title: "USB Lehim Kalemi İncelemesi",
    description:
      "Taşınabilir USB-C lehim kalemini test ettik. Güç tüketimi, performans ve pratiklik analizi.",
    slug: "usb-lehim-kalemi",
    category: "Aletler",
    cover: "/covers/soldering.jpg",
  },
  {
    title: "HDMI Logo ve Sertifikasyon Rehberi",
    description:
      "Sertifikalı HDMI kabloları nasıl ayırt edersiniz? Logo standartları ve sahte ürünlerden korunma yolları.",
    slug: "hdmi-logo-rehberi",
    category: "Standartlar",
    cover: "/covers/hdmi-cert.jpg",
  },
  {
    title: "PoE Sınıfları ve Güç Standartları",
    description:
      "PoE, PoE+ ve PoE++ arasındaki farklar. IEEE 802.3 standartları ve doğru ekipman seçimi.",
    slug: "poe-siniflari",
    category: "Ağ Teknolojileri",
    cover: "/covers/poe.jpg",
    affiliateKey: "poe_switch",
  },
  {
    title: "Thunderbolt 4 vs USB4: Karşılaştırma",
    description:
      "Thunderbolt 4 ve USB4 protokollerinin farkları, hız limitleri ve uyumluluk rehberi.",
    slug: "thunderbolt4-usb4",
    category: "USB Teknolojileri",
    cover: "/covers/thunderbolt.jpg",
  },
  {
    title: "DisplayPort 2.1 UHBR Modları Açıklandı",
    description:
      "DisplayPort 2.1'in UHBR10, UHBR13.5 ve UHBR20 modları. 16K görüntü desteği ve bandwidth hesaplamaları.",
    slug: "displayport-21-uhbr",
    category: "Görüntü Standartları",
    cover: "/covers/displayport.jpg",
  },
];
