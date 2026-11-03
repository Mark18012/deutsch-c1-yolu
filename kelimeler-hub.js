// kelimeler.html: fiil özeti ve konu listesi

(function () {
    function ogrenilenleriOku() {
        try {
            return JSON.parse(localStorage.getItem("deutsch-kelimeler-kelimeler") || "[]");
        } catch (hata) {
            return [];
        }
    }

    function ogrenilenSayisi(kelimeler, ogrenilenler) {
        return kelimeler.filter(function (kelime) {
            return ogrenilenler.includes(kelimeKimligi(kelime));
        }).length;
    }

    const ogrenilenler = ogrenilenleriOku();

    // Fiil özeti
    const fiiller = KELIMELER.filter(function (kelime) {
        return kelime.tur === "fiil";
    });

    document.getElementById("fiil-ozet").textContent =
        fiiller.length + " fiil · " + ogrenilenSayisi(fiiller, ogrenilenler) + " öğrenildi";

    // Konu listesi
    const liste = document.getElementById("alan-listesi");

    ALANLAR.forEach(function (alan) {
        const kelimeler = KELIMELER.filter(function (kelime) {
            return kelime.alan === alan.id;
        });

        const madde = document.createElement("li");
        const sayac = document.createElement("span");
        sayac.className = "alan-sayac";

        if (kelimeler.length === 0) {
            const kutu = document.createElement("span");
            kutu.className = "alan-link";
            kutu.append(alan.ad + " ");

            sayac.textContent = "Yakında";
            kutu.append(sayac);

            madde.className = "alan-bos";
            madde.append(kutu);
        } else {
            const link = document.createElement("a");
            link.className = "alan-link";
            link.href = "konu.html?alan=" + alan.id;
            link.append(alan.ad + " ");

            sayac.textContent = kelimeler.length + " kelime · " + ogrenilenSayisi(kelimeler, ogrenilenler) + " öğrenildi";
            link.append(sayac);

            madde.append(link);
        }

        liste.append(madde);
    });
})();