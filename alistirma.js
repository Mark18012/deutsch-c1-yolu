// ===== Yardımcılar =====

// Listeyi karıştırır (Fisher-Yates). Asıl listeyi bozmaz, kopyasını döndürür.
function karistir(liste) {
    const kopya = liste.slice();

    for (let i = kopya.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const gecici = kopya[i];
        kopya[i] = kopya[j];
        kopya[j] = gecici;
    }

    return kopya;
}

// Sayfada hangi ekran görünsün?
function goster(ekranId) {
    document.querySelectorAll(".ekran").forEach(function (ekran) {
        ekran.hidden = ekran.id !== ekranId;
    });
}


// ===== Durum (uygulamanın o anki hâli) =====

const durum = {
    seviye: "",
    tur: "",
    konu: "",
    alan: "",
    sorular: [],
    sira: 0,
    puan: 0,
    yanlislar: [],
    cevaplandi: false
};


// ===== Kelime sorularını üret =====

function kelimeSorulariUret(seviye, alan) {
    const secilenler = KELIMELER.filter(function (kelime) {
        if (kelime.seviye !== seviye) {
            return false;
        }

        if (alan === "karisik") {
            return true;
        }

        if (alan === "fiiller") {
            return kelime.tur === "fiil";
        }

        return kelime.alan === alan;
    });

    const sorular = [];

    secilenler.forEach(function (kelime) {
        // 1) Anlam sorusu: yanlış şıkları aynı türden (isim/fiil) kelimelerden seç
        const ayniTur = KELIMELER.filter(function (k) {
            return k.tur === kelime.tur && k.tr !== kelime.tr;
        });

        const yanlisSiklar = karistir(ayniTur).slice(0, 3).map(function (k) {
            return k.tr;
        });

        const gorunenKelime = kelime.artikel ? kelime.artikel + " " + kelime.de : kelime.de;

        sorular.push({
            soru: gorunenKelime + " ne demek?",
            secenekler: [kelime.tr].concat(yanlisSiklar),
            dogru: 0,
            aciklama: gorunenKelime + " = " + kelime.tr + ". Örnek: " + kelime.ornek
        });

        // 2) Artikel sorusu: sadece isimler için
        if (kelime.artikel) {
            const artikeller = ["der", "die", "das"];

            sorular.push({
                soru: "Artikel? ___ " + kelime.de,
                secenekler: artikeller,
                dogru: artikeller.indexOf(kelime.artikel),
                aciklama: kelime.artikel + " " + kelime.de + " = " + kelime.tr + ". Örnek: " + kelime.ornek,
                sabitSira: true
            });
        }
    });

    return sorular;
}


// ===== Seçim ekranları =====

function listeButonuYap(eylem, deger, yazi) {
    const dugme = document.createElement("button");
    dugme.className = "konu-butonu";
    dugme.dataset.eylem = eylem;
    dugme.dataset.deger = deger;
    dugme.textContent = yazi;
    return dugme;
}

function konuListesiniKur() {
    const kutu = document.getElementById("konu-secenekleri");
    kutu.innerHTML = "";

    const sayilar = {};
    const adlar = {};

    SORULAR.forEach(function (soru) {
        if (soru.seviye !== durum.seviye) {
            return;
        }

        sayilar[soru.konu] = (sayilar[soru.konu] || 0) + 1;
        adlar[soru.konu] = soru.konuAdi;
    });

    const anahtarlar = Object.keys(sayilar);

    if (anahtarlar.length === 0) {
        const mesaj = document.createElement("p");
        mesaj.textContent = "Bu seviye için henüz soru yok.";
        kutu.append(mesaj);
        return;
    }

    kutu.append(listeButonuYap("konu", "karisik", "🎲 Karışık (bu seviyenin tüm soruları)"));

    anahtarlar.forEach(function (anahtar) {
        kutu.append(listeButonuYap("konu", anahtar, adlar[anahtar] + " (" + sayilar[anahtar] + " soru)"));
    });
}

function alanListesiniKur() {
    const kutu = document.getElementById("alan-secenekleri");
    kutu.innerHTML = "";

    document.getElementById("alan-baslik").textContent = durum.seviye + ": hangi konu?";

    const seviyeKelimeleri = KELIMELER.filter(function (kelime) {
        return kelime.seviye === durum.seviye;
    });

    if (seviyeKelimeleri.length === 0) {
        const mesaj = document.createElement("p");
        mesaj.textContent = "Bu seviye için henüz kelime yok.";
        kutu.append(mesaj);
        return;
    }

    kutu.append(listeButonuYap("alan", "karisik", "🎲 Karışık (" + seviyeKelimeleri.length + " kelime)"));

    const fiilSayisi = seviyeKelimeleri.filter(function (kelime) {
        return kelime.tur === "fiil";
    }).length;

    if (fiilSayisi > 0) {
        kutu.append(listeButonuYap("alan", "fiiller", "Fiiller (" + fiilSayisi + " kelime)"));
    }

    ALANLAR.forEach(function (alan) {
        const sayi = seviyeKelimeleri.filter(function (kelime) {
            return kelime.alan === alan.id;
        }).length;

        if (sayi > 0) {
            kutu.append(listeButonuYap("alan", alan.id, alan.ad + " (" + sayi + " kelime)"));
        }
    });
}


// ===== Test =====

function testiBaslat() {
    let havuz;

    if (durum.tur === "kelime") {
        havuz = kelimeSorulariUret(durum.seviye, durum.alan);
    } else {
        havuz = SORULAR.filter(function (soru) {
            return soru.seviye === durum.seviye &&
                (durum.konu === "karisik" || soru.konu === durum.konu);
        });
    }

    if (havuz.length === 0) {
        alert("Bu seçim için henüz soru yok.");
        return;
    }

    durum.sorular = karistir(havuz).slice(0, 10);
    durum.sira = 0;
    durum.puan = 0;
    durum.yanlislar = [];

    goster("ekran-test");
    soruyuGoster();
}

function soruyuGoster() {
    const soru = durum.sorular[durum.sira];
    durum.cevaplandi = false;

    document.getElementById("test-ilerleme").textContent = "Soru " + (durum.sira + 1) + " / " + durum.sorular.length;
    document.getElementById("test-puan").textContent = "Puan: " + durum.puan;
    document.getElementById("test-cubuk").style.width = ((durum.sira / durum.sorular.length) * 100) + "%";
    document.getElementById("soru-metni").textContent = soru.soru;

    // Her şıkka "doğru mu?" bilgisini iliştir, sonra karıştır
    const siklar = soru.secenekler.map(function (metin, sira) {
        return { metin: metin, dogruMu: sira === soru.dogru };
    });

    const gosterilecek = soru.sabitSira ? siklar : karistir(siklar);

    const kutu = document.getElementById("secenekler");
    kutu.innerHTML = "";

    gosterilecek.forEach(function (sik) {
        const dugme = document.createElement("button");
        dugme.className = "secenek";
        dugme.textContent = sik.metin;
        dugme.dataset.dogru = sik.dogruMu ? "evet" : "hayir";

        dugme.addEventListener("click", function () {
            cevapla(sik, dugme, soru);
        });

        kutu.append(dugme);
    });

    document.getElementById("geri-bildirim").hidden = true;
    document.getElementById("sonraki").hidden = true;
}

function cevapla(sik, dugme, soru) {
    if (durum.cevaplandi) {
        return;
    }

    durum.cevaplandi = true;

    // Şıkları kilitle, doğruyu yeşil yap
    document.querySelectorAll("#secenekler .secenek").forEach(function (d) {
        d.disabled = true;

        if (d.dataset.dogru === "evet") {
            d.classList.add("dogru");
        }
    });

    if (sik.dogruMu) {
        durum.puan++;
    } else {
        dugme.classList.add("yanlis");
        durum.yanlislar.push(soru);
    }

    document.getElementById("test-puan").textContent = "Puan: " + durum.puan;

    const geriBildirim = document.getElementById("geri-bildirim");
    geriBildirim.hidden = false;
    geriBildirim.className = sik.dogruMu ? "dogru-cevap" : "yanlis-cevap";

    const baslangic = sik.dogruMu
        ? "Doğru! "
        : "Yanlış. Doğru cevap: " + soru.secenekler[soru.dogru] + ". ";

    geriBildirim.textContent = baslangic + soru.aciklama;

    const sonraki = document.getElementById("sonraki");
    sonraki.hidden = false;
    sonraki.textContent = durum.sira === durum.sorular.length - 1 ? "Sonucu gör" : "Sonraki →";
}

function sonrakiSoru() {
    durum.sira++;

    if (durum.sira >= durum.sorular.length) {
        sonucuGoster();
    } else {
        soruyuGoster();
    }
}


// ===== Sonuç ekranı =====

function sonucuGoster() {
    const toplam = durum.sorular.length;
    const yuzde = Math.round((durum.puan / toplam) * 100);

    document.getElementById("sonuc-puan").textContent = durum.puan + " / " + toplam + " (%" + yuzde + ")";

    let mesaj;

    if (yuzde === 100) {
        mesaj = "Mükemmel!";
    } else if (yuzde >= 70) {
        mesaj = "Çok iyi. Yanlışlarına bir göz at.";
    } else if (yuzde >= 40) {
        mesaj = "Fena değil. Yanlışlarına bak, konuyu tekrar oku ve yine dene.";
    } else {
        mesaj = "Önce konuyu tekrar oku, sonra yeniden dene. Başlangıçta normal.";
    }

    document.getElementById("sonuc-mesaj").textContent = mesaj;

    const liste = document.getElementById("yanlis-listesi");
    liste.innerHTML = "";

    if (durum.yanlislar.length > 0) {
        const baslik = document.createElement("h3");
        baslik.textContent = "Tekrar etmen gerekenler";
        liste.append(baslik);

        durum.yanlislar.forEach(function (soru) {
            const kart = document.createElement("div");
            kart.className = "yanlis-kart";

            const metin = document.createElement("p");
            metin.textContent = soru.soru + " → " + soru.secenekler[soru.dogru];

            const aciklama = document.createElement("p");
            aciklama.textContent = soru.aciklama;

            kart.append(metin, aciklama);

            // Dilbilgisi sorularında konu sayfasına link ver
            if (soru.konu) {
                const link = document.createElement("a");
                link.href = soru.konu + ".html";
                link.textContent = "Konuyu tekrar oku →";
                kart.append(link);
            }

            liste.append(kart);
        });
    }

    goster("ekran-sonuc");
}


// ===== Tıklamaları yönet =====
// Tek bir dinleyici: data-eylem özelliği olan her butona tıklanınca çalışır.

document.addEventListener("click", function (olay) {
    const dugme = olay.target.closest("[data-eylem]");

    if (!dugme) {
        return;
    }

    const eylem = dugme.dataset.eylem;
    const deger = dugme.dataset.deger;

    if (eylem === "seviye") {
        durum.seviye = deger;
        document.getElementById("tur-baslik").textContent = deger + ": ne çalışmak istersin?";
        goster("ekran-tur");
    } else if (eylem === "tur") {
        durum.tur = deger;

        if (deger === "kelime") {
            alanListesiniKur();
            goster("ekran-alan");
        } else {
            konuListesiniKur();
            goster("ekran-konu");
        }
    } else if (eylem === "alan") {
        durum.alan = deger;
        testiBaslat();
    } else if (eylem === "konu") {
        durum.konu = deger;
        testiBaslat();
    } else if (eylem === "sonraki") {
        sonrakiSoru();
    } else if (eylem === "tekrar") {
        testiBaslat();
    } else if (eylem === "baska") {
        goster(durum.tur === "kelime" ? "ekran-alan" : "ekran-konu");
    } else if (eylem === "geri") {
        goster("ekran-" + deger);
    }
});