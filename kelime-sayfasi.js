// konu.html: adres çubuğundaki ?alan=... ya da ?tur=fiil değerine göre tabloyu doldurur.

(function () {
    const SEVIYE_SIRASI = { B1: 1, B2: 2, C1: 3 };
    const TUR_SIRASI = { isim: 1, fiil: 2, sifat: 3 };

    const parametreler = new URLSearchParams(location.search);
    const alanId = parametreler.get("alan");
    const tur = parametreler.get("tur");

    const baslik = document.getElementById("sayfa-baslik");
    const aciklama = document.getElementById("sayfa-aciklama");
    const listeBasligi = document.getElementById("liste-baslik");
    const mesaj = document.getElementById("kelime-mesaj");
    const filtreKutusu = document.getElementById("seviye-filtre");
    const arama = document.getElementById("arama");
    const tablo = document.querySelector(".kelime-tablosu");

    // ----- Hangi kelimeler gösterilecek? -----

    let kelimeler = [];

    if (alanId) {
        const alan = ALANLAR.find(function (a) {
            return a.id === alanId;
        });

        if (alan) {
            baslik.textContent = alan.ad;
            aciklama.textContent = alan.aciklama;
            document.title = alan.ad + " | Deutsch C1 Yolu";

            kelimeler = KELIMELER.filter(function (kelime) {
                return kelime.alan === alan.id;
            });
        }
    } else if (tur === "fiil") {
        baslik.textContent = "Fiiller";
        aciklama.textContent = "Tüm konulardaki fiiller, seviyeye göre sıralı";
        listeBasligi.textContent = "Fiiller";
        document.title = "Fiiller | Deutsch C1 Yolu";

        kelimeler = KELIMELER.filter(function (kelime) {
            return kelime.tur === "fiil";
        });
    }

    // ----- Boşsa mesaj göster ve çık -----

    if (kelimeler.length === 0) {
        mesaj.textContent = "Bu konuda henüz kelime yok ya da adres yanlış. Kelimeler sayfasına dönüp bir konu seç.";
        mesaj.hidden = false;
        filtreKutusu.remove();
        arama.remove();
        tablo.remove();
        return;
    }

    // ----- Sırala: seviye, tür, alfabe -----

    kelimeler = kelimeler.slice().sort(function (a, b) {
        if (SEVIYE_SIRASI[a.seviye] !== SEVIYE_SIRASI[b.seviye]) {
            return SEVIYE_SIRASI[a.seviye] - SEVIYE_SIRASI[b.seviye];
        }

        if (TUR_SIRASI[a.tur] !== TUR_SIRASI[b.tur]) {
            return TUR_SIRASI[a.tur] - TUR_SIRASI[b.tur];
        }

        return a.de.localeCompare(b.de, "de");
    });

    // ----- Satırları oluştur -----

    function hucreYap(icerik) {
        const hucre = document.createElement("td");
        hucre.append(icerik);
        return hucre;
    }

    function satirYap(kelime) {
        const satir = document.createElement("tr");
        satir.dataset.seviye = kelime.seviye;

        // 1. hücre: artikel (renkli) + kelime
        const almanca = document.createElement("td");

        if (kelime.artikel) {
            const artikel = document.createElement("span");
            artikel.className = kelime.artikel;
            artikel.textContent = kelime.artikel;
            almanca.append(artikel, " " + kelime.de);
        } else {
            almanca.textContent = kelime.de;
        }

        // 4. hücre: seviye rozeti
        const rozet = document.createElement("span");
        rozet.className = "seviye-rozeti seviye-" + kelime.seviye;
        rozet.textContent = kelime.seviye;

        satir.append(almanca, hucreYap(kelime.tr), hucreYap(kelime.ornek), hucreYap(rozet));
        return satir;
    }

    const govde = tablo.tBodies[0];

    kelimeler.forEach(function (kelime) {
        govde.append(satirYap(kelime));
    });

    // ----- Seviye filtresi -----

    function seviyeyiFiltrele(seviye) {
        tablo.querySelectorAll("tr[data-seviye]").forEach(function (satir) {
            const gizle = seviye !== "Hepsi" && satir.dataset.seviye !== seviye;
            satir.classList.toggle("seviye-gizli", gizle);
        });

        filtreKutusu.querySelectorAll(".filtre-butonu").forEach(function (dugme) {
            dugme.classList.toggle("aktif", dugme.dataset.seviye === seviye);
        });
    }

    ["Hepsi", "B1", "B2", "C1"].forEach(function (seviye) {
        const sayi = seviye === "Hepsi"
            ? kelimeler.length
            : kelimeler.filter(function (kelime) { return kelime.seviye === seviye; }).length;

        if (sayi === 0) {
            return;
        }

        const dugme = document.createElement("button");
        dugme.className = "filtre-butonu";
        dugme.dataset.seviye = seviye;
        dugme.textContent = seviye + " (" + sayi + ")";

        dugme.addEventListener("click", function () {
            seviyeyiFiltrele(seviye);
        });

        filtreKutusu.append(dugme);
    });

    seviyeyiFiltrele("Hepsi");
})();