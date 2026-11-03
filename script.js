// ===== Kayıt fonksiyonları (tarayıcı hafızası: localStorage) =====

function kaydiOku(anahtar) {
    try {
        const metin = localStorage.getItem(anahtar);
        return metin ? JSON.parse(metin) : [];
    } catch (hata) {
        return [];
    }
}

function kaydiYaz(anahtar, liste) {
    try {
        localStorage.setItem(anahtar, JSON.stringify(liste));
    } catch (hata) {
        // Tarayıcı kaydı engellediyse site yine çalışır, sadece hatırlamaz.
    }
}

function isaretiKaydet(anahtar, id, isaretli) {
    let liste = kaydiOku(anahtar);

    if (isaretli) {
        if (!liste.includes(id)) {
            liste.push(id);
        }
    } else {
        liste = liste.filter(function (eleman) {
            return eleman !== id;
        });
    }

    kaydiYaz(anahtar, liste);
}


// ===== Dilbilgisi konuları için tik kutuları =====

function konuIlerlemesiniGuncelle() {
    const yazi = document.getElementById("ilerleme-yazi");
    const dolgu = document.getElementById("ilerleme-dolgu");

    if (!yazi || !dolgu) {
        return;
    }

    const toplam = document.querySelectorAll(".konu-listesi input").length;
    const biten = document.querySelectorAll(".konu-listesi input:checked").length;
    const yuzde = toplam === 0 ? 0 : Math.round((biten / toplam) * 100);

    yazi.textContent = biten + " / " + toplam + " konu bitti (%" + yuzde + ")";
    dolgu.style.width = yuzde + "%";
}

function konulariIsaretle() {
    const maddeler = document.querySelectorAll(".konu-listesi li");

    if (maddeler.length === 0) {
        return;
    }

    const anahtar = "deutsch-konular";
    const bitenler = kaydiOku(anahtar);

    maddeler.forEach(function (madde) {
        const link = madde.querySelector("a");
        const id = link.getAttribute("href");

        const kutu = document.createElement("input");
        kutu.type = "checkbox";
        kutu.title = "Bu konuyu bitirdim";
        kutu.checked = bitenler.includes(id);

        madde.classList.toggle("bitti", kutu.checked);
        madde.prepend(kutu);

        kutu.addEventListener("change", function () {
            isaretiKaydet(anahtar, id, kutu.checked);
            madde.classList.toggle("bitti", kutu.checked);
            konuIlerlemesiniGuncelle();
        });
    });

    konuIlerlemesiniGuncelle();
}


// ===== Kelimeler için tik kutuları =====

function kelimeSayaciniGuncelle(tablo, sayac) {
    const toplam = tablo.querySelectorAll("input").length;
    const biten = tablo.querySelectorAll("input:checked").length;

    sayac.textContent = biten + " / " + toplam + " kelime öğrenildi";
}

function kelimeleriIsaretle() {
    const tablo = document.querySelector(".kelime-tablosu");

    if (!tablo) {
        return;
    }

    const anahtar = "deutsch-kelimeler-" + tablo.dataset.kayit;
    const ogrenilenler = kaydiOku(anahtar);

    const sayac = document.createElement("p");
    sayac.className = "kelime-sayaci";
    tablo.before(sayac);

    tablo.querySelectorAll("tr").forEach(function (satir) {
        const ilkHucre = satir.cells[0];

        // Başlık satırı: sadece "✓" başlığı ekle
        if (ilkHucre.tagName === "TH") {
            const baslik = document.createElement("th");
            baslik.textContent = "✓";
            satir.prepend(baslik);
            return;
        }

        // Kelime satırı: ilk hücredeki yazı (örn. "der Vorschlag") kelimenin kimliği
        const id = ilkHucre.textContent.trim();

        const hucre = document.createElement("td");
        const kutu = document.createElement("input");
        kutu.type = "checkbox";
        kutu.title = "Bu kelimeyi öğrendim";
        kutu.checked = ogrenilenler.includes(id);

        hucre.append(kutu);
        satir.prepend(hucre);
        satir.classList.toggle("ogrenildi", kutu.checked);

        kutu.addEventListener("change", function () {
            isaretiKaydet(anahtar, id, kutu.checked);
            satir.classList.toggle("ogrenildi", kutu.checked);
            kelimeSayaciniGuncelle(tablo, sayac);
        });
    });

    kelimeSayaciniGuncelle(tablo, sayac);
}


// ===== Arama =====

// Aramayı kolaylaştırır: büyük/küçük harf, ä/ö/ü, ß ve ı fark etmesin
function sadelestir(metin) {
    return metin
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ß/g, "ss")
        .replace(/ı/g, "i");
}

function konulariSuz(sorgu) {
    const maddeler = document.querySelectorAll(".konu-listesi li");
    let gorunen = 0;

    maddeler.forEach(function (madde) {
        const link = madde.querySelector("a");
        // Hem görünen yazıda hem dosya adında ara (praeteritum.html gibi)
        const metin = sadelestir(link.textContent + " " + link.getAttribute("href"));
        const uyuyor = metin.includes(sorgu);

        madde.hidden = !uyuyor;

        if (uyuyor) {
            gorunen++;
        }
    });

    // Tamamen boş kalan listeleri ve üstlerindeki h3 başlıklarını gizle
    document.querySelectorAll(".konu-listesi").forEach(function (liste) {
        const bosMu = liste.querySelectorAll("li:not([hidden])").length === 0;
        liste.hidden = bosMu;

        const oncekiBaslik = liste.previousElementSibling;
        if (oncekiBaslik && oncekiBaslik.tagName === "H3") {
            oncekiBaslik.hidden = bosMu;
        }
    });

    // Hiç konusu kalmayan B1 / B2 / C1 kutularını gizle
    document.querySelectorAll("main section").forEach(function (bolum) {
        if (bolum.querySelector(".konu-listesi")) {
            bolum.hidden = bolum.querySelectorAll("li:not([hidden])").length === 0;
        }
    });

    return gorunen;
}

function kelimeleriSuz(tablo, sorgu) {
    let gorunen = 0;

    tablo.querySelectorAll("tr").forEach(function (satir) {
        // Başlık satırına dokunma
        if (satir.cells[0].tagName === "TH") {
            return;
        }

        const uyuyor = sadelestir(satir.textContent).includes(sorgu);
        satir.hidden = !uyuyor;

        if (uyuyor) {
            gorunen++;
        }
    });

    return gorunen;
}

function aramayiBagla() {
    const kutu = document.getElementById("arama");

    if (!kutu) {
        return;
    }

    const tablo = document.querySelector(".kelime-tablosu");

    const bos = document.createElement("p");
    bos.className = "arama-bos";
    bos.textContent = "Sonuç bulunamadı.";
    bos.hidden = true;
    kutu.after(bos);

    kutu.addEventListener("input", function () {
        const sorgu = sadelestir(kutu.value.trim());
        const sayi = tablo ? kelimeleriSuz(tablo, sorgu) : konulariSuz(sorgu);

        bos.hidden = sayi > 0;
    });
}


// ===== Başlat =====
// Her özellik kendi try/catch içinde: biri bozulursa diğerleri çalışmaya devam eder
// ve hata Console'a yazılır.

[konulariIsaretle, kelimeleriIsaretle, aramayiBagla].forEach(function (ozellik) {
    try {
        ozellik();
    } catch (hata) {
        console.error("Hata:", ozellik.name, hata);
    }
});