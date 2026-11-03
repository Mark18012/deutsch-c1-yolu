// Konu sayfalarının sonuna "bu konunun testini çöz" bölümü ekler.
// Konu adı dosya adından gelir: perfekt.html -> "perfekt"

(function () {
    const dosya = location.pathname.split("/").pop();
    const konu = dosya.replace(".html", "");
    const ana = document.querySelector("main");

    if (!konu || !ana) {
        return;
    }

    const bolum = document.createElement("section");
    bolum.className = "konu-testi-kutusu";

    const baslik = document.createElement("h2");
    baslik.textContent = "Kendini dene";

    const aciklama = document.createElement("p");
    aciklama.textContent = "Bu konuyu okudun. Şimdi 10 soruluk bir testle pekiştir.";

    const link = document.createElement("a");
    link.className = "buton";
    link.href = "alistirma.html?konu=" + konu;
    link.textContent = "Bu konunun testini çöz →";

    bolum.append(baslik, aciklama, link);
    ana.append(bolum);
})();