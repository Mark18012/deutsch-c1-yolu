// ===== KELİME VERİSİ =====
// Yeni kelime eklemek için ilgili satırı kopyala, değerleri değiştir.
//
// seviye : "B1", "B2" ya da "C1"
// tur    : "isim", "fiil" ya da "sifat"
// artikel: sadece isimlerde ("der", "die", "das")
// de     : Almanca kelime (artikelsiz)
// tr     : Türkçe anlam
// ornek  : örnek cümle
// alan   : aşağıdaki ALANLAR listesindeki id'lerden biri

const ALANLAR = [
    { id: "denken", ad: "Argumentieren & Denken", aciklama: "Fikir bildirme, tartışma, karşılaştırma, karar verme" },
    { id: "arbeit", ad: "Arbeit & Beruf", aciklama: "İş hayatı, başvuru, meslek, çalışma koşulları" },
    { id: "bildung", ad: "Bildung & Studium", aciklama: "Okul, üniversite, sınav, öğrenme" },
    { id: "gesellschaft", ad: "Gesellschaft & Zusammenleben", aciklama: "Toplum, ilişkiler, değerler, etkileşim" },
    { id: "politik", ad: "Politik & Recht", aciklama: "Devlet, seçim, yasalar, haklar" },
    { id: "wirtschaft", ad: "Wirtschaft & Geld", aciklama: "Ekonomi, para, ticaret, fiyatlar" },
    { id: "medien", ad: "Medien & Kommunikation", aciklama: "Haber, iletişim, sosyal medya, konuşma" },
    { id: "technik", ad: "Technik & Wissenschaft", aciklama: "Teknoloji, araştırma, gelişme" },
    { id: "it", ad: "IT & Informatik", aciklama: "Bilgisayar, yazılım, internet, programlama" },
    { id: "gesundheit", ad: "Gesundheit & Psyche", aciklama: "Sağlık, hastalık, ruh sağlığı, spor" },
    { id: "umwelt", ad: "Umwelt & Natur", aciklama: "Çevre, iklim, doğa, enerji" },
    { id: "kultur", ad: "Kultur & Freizeit", aciklama: "Sanat, müzik, seyahat, boş zaman" },
    { id: "alltag", ad: "Wohnen & Alltag", aciklama: "Ev, günlük işler, İsviçre'de pratik hayat" }
];

const KELIMELER = [

    // ---------- Argumentieren & Denken: isimler ----------
    { seviye: "B1", tur: "isim", artikel: "der", de: "Vorschlag", tr: "öneri", ornek: "Ich habe einen Vorschlag für dich.", alan: "denken" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Vorteil", tr: "avantaj", ornek: "Ein Vorteil ist die Flexibilität.", alan: "denken" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Nachteil", tr: "dezavantaj", ornek: "Der Nachteil ist der hohe Preis.", alan: "denken" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Entscheidung", tr: "karar", ornek: "Die Entscheidung ist mir nicht leicht gefallen.", alan: "denken" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Möglichkeit", tr: "olanak, ihtimal", ornek: "Es gibt mehrere Möglichkeiten.", alan: "denken" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Ergebnis", tr: "sonuç", ornek: "Das Ergebnis hat mich überrascht.", alan: "denken" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Problem", tr: "sorun", ornek: "Das Problem ist leicht zu lösen.", alan: "denken" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Grund", tr: "sebep, neden", ornek: "Was ist der Grund für die Verspätung?", alan: "denken" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Unterschied", tr: "fark", ornek: "Der Unterschied ist sehr groß.", alan: "denken" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Zusammenhang", tr: "bağlantı", ornek: "Es gibt einen Zusammenhang zwischen Schlaf und Leistung.", alan: "denken" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Gegensatz", tr: "zıtlık", ornek: "Im Gegensatz zu gestern ist es heute kalt.", alan: "denken" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Absicht", tr: "niyet, amaç", ornek: "Ich habe nicht die Absicht, die Stelle zu wechseln.", alan: "denken" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Auseinandersetzung", tr: "bir konuyla derinlemesine ilgilenme, tartışma", ornek: "Die Auseinandersetzung mit dem Thema war intensiv.", alan: "denken" },
    { seviye: "C1", tur: "isim", artikel: "das", de: "Vorhaben", tr: "plan, niyet", ornek: "Mein Vorhaben ist es, jeden Tag zu üben.", alan: "denken" },

    // ---------- Argumentieren & Denken: fiiller ----------
    { seviye: "B1", tur: "fiil", de: "vermeiden", tr: "kaçınmak", ornek: "Man sollte unnötige Fehler vermeiden.", alan: "denken" },
    { seviye: "B1", tur: "fiil", de: "vorschlagen", tr: "önermek", ornek: "Ich schlage vor, dass wir früher anfangen.", alan: "denken" },
    { seviye: "B1", tur: "fiil", de: "zustimmen", tr: "onaylamak (fikre katılmak)", ornek: "Ich stimme dir zu.", alan: "denken" },
    { seviye: "B1", tur: "fiil", de: "sich erinnern", tr: "hatırlamak", ornek: "Ich erinnere mich an meinen ersten Tag.", alan: "denken" },
    { seviye: "B1", tur: "fiil", de: "sich entscheiden", tr: "karar vermek, tercih etmek", ornek: "Ich habe mich für das Studium entschieden.", alan: "denken" },
    { seviye: "B2", tur: "fiil", de: "berücksichtigen", tr: "dikkate almak", ornek: "Wir müssen alle Faktoren berücksichtigen.", alan: "denken" },
    { seviye: "B2", tur: "fiil", de: "verzichten", tr: "vazgeçmek", ornek: "Ich verzichte auf Zucker.", alan: "denken" },
    { seviye: "B2", tur: "fiil", de: "feststellen", tr: "tespit etmek, fark etmek", ornek: "Ich habe festgestellt, dass mein Wortschatz wächst.", alan: "denken" },
    { seviye: "B2", tur: "fiil", de: "überzeugen", tr: "ikna etmek", ornek: "Seine Argumente haben mich überzeugt.", alan: "denken" },
    { seviye: "B2", tur: "fiil", de: "unterscheiden", tr: "ayırt etmek", ornek: "Man muss zwischen Fakten und Meinungen unterscheiden.", alan: "denken" },
    { seviye: "B2", tur: "fiil", de: "vergleichen", tr: "karşılaştırmak", ornek: "Ich vergleiche das Angebot mit anderen.", alan: "denken" },
    { seviye: "B2", tur: "fiil", de: "betonen", tr: "vurgulamak", ornek: "Er betont, dass Pünktlichkeit wichtig ist.", alan: "denken" },
    { seviye: "B2", tur: "fiil", de: "ablehnen", tr: "reddetmek", ornek: "Sie hat das Angebot abgelehnt.", alan: "denken" },
    { seviye: "B2", tur: "fiil", de: "behaupten", tr: "iddia etmek", ornek: "Er behauptet, dass er nichts gewusst hat.", alan: "denken" },
    { seviye: "B2", tur: "fiil", de: "befürchten", tr: "endişe etmek, korkmak", ornek: "Ich befürchte, dass es schon zu spät ist.", alan: "denken" },
    { seviye: "C1", tur: "fiil", de: "nachvollziehen", tr: "mantığını kavramak", ornek: "Ich kann deine Entscheidung gut nachvollziehen.", alan: "denken" },
    { seviye: "C1", tur: "fiil", de: "sich auseinandersetzen", tr: "bir konuyla derinlemesine ilgilenmek", ornek: "Ich habe mich lange mit dem Thema auseinandergesetzt.", alan: "denken" },

    // ---------- Arbeit & Beruf ----------
    { seviye: "B1", tur: "isim", artikel: "die", de: "Erfahrung", tr: "deneyim", ornek: "Ich habe viel Erfahrung in diesem Bereich.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Ziel", tr: "hedef", ornek: "Mein Ziel ist das Niveau C1.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Bereich", tr: "alan, bölüm", ornek: "Ich arbeite im Bereich Informatik.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Bedingung", tr: "koşul, şart", ornek: "Unter dieser Bedingung stimme ich zu.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Herausforderung", tr: "zorluk, meydan okuma", ornek: "Das neue Studium ist eine große Herausforderung.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Verantwortung", tr: "sorumluluk", ornek: "Ich übernehme die Verantwortung für das Projekt.", alan: "arbeit" },
    { seviye: "B1", tur: "fiil", de: "sich bewerben", tr: "başvurmak", ornek: "Ich möchte mich um eine Stelle bewerben.", alan: "arbeit" },
    { seviye: "B1", tur: "fiil", de: "verbessern", tr: "iyileştirmek", ornek: "Ich möchte meine Aussprache verbessern.", alan: "arbeit" },
    { seviye: "B1", tur: "fiil", de: "erreichen", tr: "ulaşmak, başarmak", ornek: "Er hat sein Ziel erreicht.", alan: "arbeit" },

    // ---------- Bildung & Studium ----------
    { seviye: "B1", tur: "isim", artikel: "das", de: "Interesse", tr: "ilgi", ornek: "Ich habe großes Interesse an Informatik.", alan: "bildung" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Voraussetzung", tr: "ön koşul", ornek: "Gute Deutschkenntnisse sind eine Voraussetzung für das Studium.", alan: "bildung" },
    { seviye: "B1", tur: "fiil", de: "bestehen", tr: "(sınavı) geçmek", ornek: "Ich möchte die Prüfung bestehen.", alan: "bildung" },
    { seviye: "B1", tur: "fiil", de: "teilnehmen", tr: "(etkinliğe) katılmak", ornek: "Ich nehme an einem Deutschkurs teil.", alan: "bildung" },
    { seviye: "B1", tur: "fiil", de: "sich konzentrieren", tr: "odaklanmak", ornek: "Ich muss mich auf die Prüfung konzentrieren.", alan: "bildung" },
    { seviye: "B2", tur: "fiil", de: "ermöglichen", tr: "mümkün kılmak, olanak sağlamak", ornek: "Das Stipendium ermöglicht mir das Studium.", alan: "bildung" },

    // ---------- Gesellschaft & Zusammenleben ----------
    { seviye: "B2", tur: "isim", artikel: "der", de: "Einfluss", tr: "etki", ornek: "Die Medien haben großen Einfluss auf die Meinung der Menschen.", alan: "gesellschaft" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Verhältnis", tr: "ilişki, oran", ornek: "Das Verhältnis zu meinen Kollegen ist gut.", alan: "gesellschaft" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Gesellschaft", tr: "toplum", ornek: "Die Gesellschaft verändert sich schnell.", alan: "gesellschaft" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Verständnis", tr: "anlayış", ornek: "Ich habe Verständnis für deine Situation.", alan: "gesellschaft" },
    { seviye: "C1", tur: "isim", artikel: "das", de: "Bewusstsein", tr: "bilinç, farkındalık", ornek: "Es fehlt das Bewusstsein für das Problem.", alan: "gesellschaft" },
    { seviye: "B1", tur: "fiil", de: "unterstützen", tr: "desteklemek", ornek: "Meine Familie unterstützt mich beim Studium.", alan: "gesellschaft" },
    { seviye: "B2", tur: "fiil", de: "beeinflussen", tr: "etkilemek", ornek: "Das Wetter beeinflusst meine Laune.", alan: "gesellschaft" },

    // ---------- Wirtschaft & Geld ----------
    { seviye: "B1", tur: "isim", artikel: "das", de: "Angebot", tr: "teklif", ornek: "Ich habe ein interessantes Angebot bekommen.", alan: "wirtschaft" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Wert", tr: "değer", ornek: "Gesundheit hat für mich den höchsten Wert.", alan: "wirtschaft" },
    { seviye: "B1", tur: "fiil", de: "anbieten", tr: "teklif etmek", ornek: "Die Firma bietet mir eine Stelle an.", alan: "wirtschaft" },

    // ---------- Medien & Kommunikation ----------
    { seviye: "B1", tur: "isim", artikel: "das", de: "Thema", tr: "konu", ornek: "Das Thema ist sehr interessant.", alan: "medien" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Gespräch", tr: "görüşme, konuşma", ornek: "Morgen habe ich ein Gespräch mit meinem Chef.", alan: "medien" },

    // ---------- Technik & Wissenschaft ----------
    { seviye: "B2", tur: "isim", artikel: "die", de: "Entwicklung", tr: "gelişme, gelişim", ornek: "Die Entwicklung der Technik geht sehr schnell.", alan: "technik" },
    { seviye: "B1", tur: "fiil", de: "entwickeln", tr: "geliştirmek", ornek: "Die Firma entwickelt eine neue App.", alan: "technik" },

    // ---------- Politik & Recht ----------
    { seviye: "B2", tur: "isim", artikel: "der", de: "Anspruch", tr: "hak, talep", ornek: "Jeder hat Anspruch auf Urlaub.", alan: "politik" },

    // ---------- Wohnen & Alltag ----------
    { seviye: "B2", tur: "fiil", de: "sich beschweren", tr: "şikâyet etmek", ornek: "Er beschwert sich über den Lärm.", alan: "alltag" }
];


// ===== Yardımcı: kelimenin kimliği (ilerleme kaydı için) =====
// Örnek: "der Vorschlag", "vermeiden"

function kelimeKimligi(kelime) {
    return kelime.artikel ? kelime.artikel + " " + kelime.de : kelime.de;
}


// ===== Eski tik kayıtlarını yeni sisteme taşı (bir kereliğine) =====

(function () {
    try {
        if (localStorage.getItem("deutsch-kelimeler-tasindi") === "1") {
            return;
        }

        const yeniAnahtar = "deutsch-kelimeler-kelimeler";
        const birlesik = JSON.parse(localStorage.getItem(yeniAnahtar) || "[]");

        ["deutsch-kelimeler-isimler", "deutsch-kelimeler-fiiller"].forEach(function (anahtar) {
            const eskiListe = JSON.parse(localStorage.getItem(anahtar) || "[]");

            eskiListe.forEach(function (id) {
                if (!birlesik.includes(id)) {
                    birlesik.push(id);
                }
            });
        });

        localStorage.setItem(yeniAnahtar, JSON.stringify(birlesik));
        localStorage.setItem("deutsch-kelimeler-tasindi", "1");
    } catch (hata) {
        // Tarayıcı depolamayı engelliyorsa sessizce geç.
    }
})();