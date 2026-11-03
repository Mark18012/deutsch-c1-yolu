// ===== DİLBİLGİSİ SORULARI =====
// Her soru: seviye, konu (sayfa adı, .html olmadan), konuAdi, soru, secenekler,
// dogru (doğru seçeneğin sırası, 0'dan başlar), aciklama

const SORULAR = [

    // ---------- B1: Perfekt ----------
    {
        seviye: "B1", konu: "perfekt", konuAdi: "Perfekt",
        soru: "Ich ___ gestern nach Bern gefahren.",
        secenekler: ["habe", "bin", "wurde", "hatte"],
        dogru: 1,
        aciklama: "fahren yer değiştirmeyi (hareketi) anlatır ve Perfekt'te sein alır: ich bin gefahren."
    },
    {
        seviye: "B1", konu: "perfekt", konuAdi: "Perfekt",
        soru: "Welcher Satz ist richtig?",
        secenekler: ["Er ist früh aufgestanden.", "Er hat früh aufgestanden.", "Er ist früh aufgestehen.", "Er hat früh aufgestehen."],
        dogru: 0,
        aciklama: "aufstehen bir durum değişikliğidir, sein alır. Ayrılabilen fiilde ge araya girer: aufgestanden."
    },
    {
        seviye: "B1", konu: "perfekt", konuAdi: "Perfekt",
        soru: "Partizip II von 'verstehen'?",
        secenekler: ["verstanden", "geverstanden", "verstandet", "verstehen"],
        dogru: 0,
        aciklama: "ver- ayrılamayan bir ön ektir, bu yüzden Partizip II'de ge- almaz: verstanden."
    },

    // ---------- B1: Präteritum ----------
    {
        seviye: "B1", konu: "praeteritum", konuAdi: "Präteritum",
        soru: "Präteritum von 'gehen' (er)?",
        secenekler: ["ging", "gehte", "gegangen", "gang"],
        dogru: 0,
        aciklama: "gehen düzensiz bir fiildir: gehen, ging, gegangen."
    },
    {
        seviye: "B1", konu: "praeteritum", konuAdi: "Präteritum",
        soru: "Gestern ___ ich keine Zeit.",
        secenekler: ["hatte", "habe", "hätte", "hab"],
        dogru: 0,
        aciklama: "haben'in Präteritum'u hatte'dir. hätte Konjunktiv II'dir ve başka bir anlam taşır."
    },
    {
        seviye: "B1", konu: "praeteritum", konuAdi: "Präteritum",
        soru: "Präteritum von 'können' (ich)?",
        secenekler: ["konnte", "könnte", "kannte", "konnt"],
        dogru: 0,
        aciklama: "Modalverben Präteritum'da umlaut'u kaybeder: konnte. könnte Konjunktiv II'dir."
    },

    // ---------- B1: Modalverben ----------
    {
        seviye: "B1", konu: "modalverben", konuAdi: "Modalverben",
        soru: "Hangisi 'Gelmek zorunda değilsin' demektir?",
        secenekler: ["Du musst nicht kommen.", "Du darfst nicht kommen.", "Du sollst nicht kommen.", "Du kannst nicht kommen."],
        dogru: 0,
        aciklama: "nicht müssen = gerek yok. nicht dürfen = yasak. nicht können = yapamazsın."
    },
    {
        seviye: "B1", konu: "modalverben", konuAdi: "Modalverben",
        soru: "Ich ___ gern einen Kaffee. (kibar istek)",
        secenekler: ["möchte", "will", "muss", "soll"],
        dogru: 0,
        aciklama: "möchten kibar istek bildirir. wollen daha sert ve doğrudan duyulur."
    },
    {
        seviye: "B1", konu: "modalverben", konuAdi: "Modalverben",
        soru: "Er ___ gut schwimmen. (können)",
        secenekler: ["kann", "kannst", "können", "könnt"],
        dogru: 0,
        aciklama: "ich ve er/sie/es için Modalverb formu aynıdır ve ek almaz: er kann."
    },

    // ---------- B1: Wechselpräpositionen ----------
    {
        seviye: "B1", konu: "wechselpraepositionen", konuAdi: "Wechselpräpositionen",
        soru: "Ich lege das Buch auf ___ Tisch.",
        secenekler: ["den", "dem", "der", "die"],
        dogru: 0,
        aciklama: "legen hareket anlatır (Wohin?) → Akkusativ. Tisch maskulin: auf den Tisch."
    },
    {
        seviye: "B1", konu: "wechselpraepositionen", konuAdi: "Wechselpräpositionen",
        soru: "Das Buch liegt auf ___ Tisch.",
        secenekler: ["dem", "den", "der", "das"],
        dogru: 0,
        aciklama: "liegen durum anlatır (Wo?) → Dativ. Tisch maskulin: auf dem Tisch."
    },
    {
        seviye: "B1", konu: "wechselpraepositionen", konuAdi: "Wechselpräpositionen",
        soru: "Wir gehen in ___ Kino.",
        secenekler: ["das", "dem", "den", "die"],
        dogru: 0,
        aciklama: "gehen hareket anlatır (Wohin?) → Akkusativ. Kino neutrum: in das Kino (kısaltma: ins Kino)."
    },

    // ---------- B1: Nebensätze ----------
    {
        seviye: "B1", konu: "nebensaetze", konuAdi: "Nebensätze",
        soru: "Welcher Satz ist richtig?",
        secenekler: ["Ich bleibe zu Hause, weil ich krank bin.", "Ich bleibe zu Hause, weil ich bin krank.", "Ich bleibe zu Hause, weil bin ich krank.", "Ich bleibe zu Hause, weil ich krank."],
        dogru: 0,
        aciklama: "weil yan cümle yapar: çekimli fiil (bin) cümlenin sonuna gider."
    },
    {
        seviye: "B1", konu: "nebensaetze", konuAdi: "Nebensätze",
        soru: "Obwohl ich müde ___, gehe ich arbeiten.",
        secenekler: ["bin", "war ich", "bin ich", "ich bin"],
        dogru: 0,
        aciklama: "obwohl yan cümle yapar. Fiil sonda: obwohl ich müde bin."
    },
    {
        seviye: "B1", konu: "nebensaetze", konuAdi: "Nebensätze",
        soru: "Welcher Satz ist richtig?",
        secenekler: ["Weil ich müde bin, gehe ich früh schlafen.", "Weil ich müde bin, ich gehe früh schlafen.", "Weil ich bin müde, gehe ich früh schlafen.", "Weil ich müde bin, früh gehe ich schlafen."],
        dogru: 0,
        aciklama: "Yan cümle başa gelirse ana cümlenin fiili hemen arkasından gelir: ..., gehe ich ..."
    },

    // ---------- B1: Adjektivdeklination ----------
    {
        seviye: "B1", konu: "adjektivdeklination", konuAdi: "Adjektivdeklination",
        soru: "Das ist ein ___ Auto. (neu)",
        secenekler: ["neues", "neue", "neuer", "neuen"],
        dogru: 0,
        aciklama: "ein + neutrum Nominativ: sıfat -es alır (ein neues Auto)."
    },
    {
        seviye: "B1", konu: "adjektivdeklination", konuAdi: "Adjektivdeklination",
        soru: "Ich helfe dem ___ Kollegen. (neu)",
        secenekler: ["neuen", "neue", "neuem", "neues"],
        dogru: 0,
        aciklama: "Belirli artikelden sonra Dativ'de sıfat -en alır: dem neuen Kollegen."
    },
    {
        seviye: "B1", konu: "adjektivdeklination", konuAdi: "Adjektivdeklination",
        soru: "Ich trinke ___ Wasser. (kalt)",
        secenekler: ["kaltes", "kalte", "kalten", "kalter"],
        dogru: 0,
        aciklama: "Artikelsiz, neutrum Akkusativ: sıfat -es alır (kaltes Wasser)."
    },

    // ---------- B1: Personalpronomen ----------
    {
        seviye: "B1", konu: "personalpronomen", konuAdi: "Personalpronomen",
        soru: "Ich gebe ___ das Buch. (er)",
        secenekler: ["ihm", "ihn", "er", "sein"],
        dogru: 0,
        aciklama: "Kime? sorusu Dativ ister: er → ihm."
    },
    {
        seviye: "B1", konu: "personalpronomen", konuAdi: "Personalpronomen",
        soru: "Ich sehe ___ jeden Tag. (sie, tekil)",
        secenekler: ["sie", "ihr", "ihnen", "ihn"],
        dogru: 0,
        aciklama: "sehen Akkusativ ister. sie'nin Akkusativ'i yine sie'dir."
    },
    {
        seviye: "B1", konu: "personalpronomen", konuAdi: "Personalpronomen",
        soru: "Ich helfe ___. (du)",
        secenekler: ["dir", "dich", "du", "dein"],
        dogru: 0,
        aciklama: "helfen Dativ alan bir fiildir: ich helfe dir."
    },

    // ---------- B1: Präpositionen ----------
    {
        seviye: "B1", konu: "praepositionen", konuAdi: "Präpositionen (Akkusativ / Dativ)",
        soru: "Das Geschenk ist für ___. (du)",
        secenekler: ["dich", "dir", "du", "dein"],
        dogru: 0,
        aciklama: "für her zaman Akkusativ alır: für dich."
    },
    {
        seviye: "B1", konu: "praepositionen", konuAdi: "Präpositionen (Akkusativ / Dativ)",
        soru: "Ich fahre mit ___ Zug.",
        secenekler: ["dem", "den", "der", "das"],
        dogru: 0,
        aciklama: "mit her zaman Dativ alır. Zug maskulin: mit dem Zug."
    },
    {
        seviye: "B1", konu: "praepositionen", konuAdi: "Präpositionen (Akkusativ / Dativ)",
        soru: "Ich gehe ___ Hause.",
        secenekler: ["nach", "zu", "in", "bei"],
        dogru: 0,
        aciklama: "nach Hause = eve (yön). zu Hause = evde (yer): Ich gehe nach Hause. Ich bin zu Hause."
    },

    // ---------- B2: Konjunktiv II der Vergangenheit ----------
    {
        seviye: "B2", konu: "konjunktiv2-vergangenheit", konuAdi: "Konjunktiv II der Vergangenheit",
        soru: "Wenn ich mehr gelernt ___, hätte ich die Prüfung bestanden.",
        secenekler: ["hätte", "wäre", "würde", "hatte"],
        dogru: 0,
        aciklama: "lernen, haben ile kurulur: gelernt hätte. Yan cümlede çekimli yardımcı fiil sonda."
    },
    {
        seviye: "B2", konu: "konjunktiv2-vergangenheit", konuAdi: "Konjunktiv II der Vergangenheit",
        soru: "Wenn ich früher aufgestanden ___, wäre ich pünktlich gewesen.",
        secenekler: ["wäre", "hätte", "würde", "war"],
        dogru: 0,
        aciklama: "aufstehen bir durum değişikliğidir, sein alır: aufgestanden wäre."
    },
    {
        seviye: "B2", konu: "konjunktiv2-vergangenheit", konuAdi: "Konjunktiv II der Vergangenheit",
        soru: "Welcher Satz ist richtig?",
        secenekler: ["Ich hätte früher anrufen sollen.", "Ich hätte früher anrufen gesollt.", "Ich würde früher angerufen haben.", "Ich hatte früher anrufen sollen."],
        dogru: 0,
        aciklama: "Geçmişte Modalverb ile hätte + Infinitiv + Modalverb (Infinitiv) kullanılır, Partizip II değil."
    },

    // ---------- B2: Modalverben subjektiv ----------
    {
        seviye: "B2", konu: "modalverben-subjektiv", konuAdi: "Modalverben: subjektiver Gebrauch",
        soru: "Er ist nicht da. Er ___ krank sein. (olsa gerek)",
        secenekler: ["muss", "soll", "will", "darf"],
        dogru: 0,
        aciklama: "müssen subjektif kullanımda neredeyse kesin bir tahmin anlatır: Er muss krank sein."
    },
    {
        seviye: "B2", konu: "modalverben-subjektiv", konuAdi: "Modalverben: subjektiver Gebrauch",
        soru: "Der Zug ___ Verspätung haben. (söylentiye göre)",
        secenekler: ["soll", "will", "muss", "kann"],
        dogru: 0,
        aciklama: "sollen subjektif kullanımda duyduğun bir söylentiyi anlatır."
    },
    {
        seviye: "B2", konu: "modalverben-subjektiv", konuAdi: "Modalverben: subjektiver Gebrauch",
        soru: "Sie ___ den Unfall gesehen haben. (kendi iddiası)",
        secenekler: ["will", "soll", "muss", "mag"],
        dogru: 0,
        aciklama: "wollen subjektif kullanımda kişinin kendi (şüpheli olabilecek) iddiasını anlatır."
    },

    // ---------- B2: Nebensätze B2 ----------
    {
        seviye: "B2", konu: "nebensaetze-b2", konuAdi: "Nebensätze B2",
        soru: "Er spart Geld, ___ er weniger ausgibt.",
        secenekler: ["indem", "damit", "obwohl", "sodass"],
        dogru: 0,
        aciklama: "indem '-erek, -ip' anlamı verir ve yöntemi anlatır."
    },
    {
        seviye: "B2", konu: "nebensaetze-b2", konuAdi: "Nebensätze B2",
        soru: "Es war ___ kalt, dass wir zu Hause blieben.",
        secenekler: ["so", "sodass", "weil", "obwohl"],
        dogru: 0,
        aciklama: "so ... dass yapısında derece vurgulanır. sodass ise tek kelime olarak ayrı bir bağlaçtır."
    },
    {
        seviye: "B2", konu: "nebensaetze-b2", konuAdi: "Nebensätze B2",
        soru: "Wir gehen wandern, ___ es regnet. ('-medikçe')",
        secenekler: ["es sei denn,", "obwohl", "indem", "solange"],
        dogru: 0,
        aciklama: "es sei denn '-medikçe, -mezse' anlamına gelir: ..., es sei denn, es regnet."
    },

    // ---------- C1: Indirekte Rede ----------
    {
        seviye: "C1", konu: "indirekte-rede", konuAdi: "Indirekte Rede (Konjunktiv I)",
        soru: "'Ich bin müde.' → Sie sagt, sie ___ müde.",
        secenekler: ["sei", "ist", "wurde", "war"],
        dogru: 0,
        aciklama: "sein'ın Konjunktiv I formu (er/sie/es) sei'dır."
    },
    {
        seviye: "C1", konu: "indirekte-rede", konuAdi: "Indirekte Rede (Konjunktiv I)",
        soru: "'Wir haben keine Zeit.' → Sie sagten, sie ___ keine Zeit.",
        secenekler: ["hätten", "haben", "habe", "hatten"],
        dogru: 0,
        aciklama: "Konjunktiv I (sie haben) Indikativ ile aynı çıkıyorsa Konjunktiv II kullanılır: hätten."
    },
    {
        seviye: "C1", konu: "indirekte-rede", konuAdi: "Indirekte Rede (Konjunktiv I)",
        soru: "'Komm früher!' → Sie sagte, ich ___ früher kommen.",
        secenekler: ["solle", "soll", "sollen", "sollst"],
        dogru: 0,
        aciklama: "Emir cümleleri dolaylı anlatımda sollen ile aktarılır: ich solle ..."
    }
];

