// B1 ek sorular, parti 1: 8 konuya 7'şer soru.

SORULAR.push(

    // ---------- Perfekt ----------
    {
        seviye: "B1", konu: "perfekt", konuAdi: "Perfekt",
        soru: "Partizip II von 'essen'?",
        secenekler: ["gegessen", "geesst", "gegesst", "geessen"],
        dogru: 0,
        aciklama: "essen düzensiz bir fiildir: essen, aß, gegessen."
    },
    {
        seviye: "B1", konu: "perfekt", konuAdi: "Perfekt",
        soru: "Er ___ gestern spät nach Hause gekommen.",
        secenekler: ["ist", "hat", "wird", "wäre"],
        dogru: 0,
        aciklama: "kommen bir hareket fiilidir ve Perfekt'te sein alır: er ist gekommen."
    },
    {
        seviye: "B1", konu: "perfekt", konuAdi: "Perfekt",
        soru: "Partizip II von 'studieren'?",
        secenekler: ["studiert", "gestudiert", "studieret", "gestudieret"],
        dogru: 0,
        aciklama: "-ieren ile biten fiiller Partizip II'de ge- almaz: studiert, telefoniert."
    },
    {
        seviye: "B1", konu: "perfekt", konuAdi: "Perfekt",
        soru: "Ich ___ das Buch noch nicht gelesen.",
        secenekler: ["habe", "bin", "wurde", "war"],
        dogru: 0,
        aciklama: "lesen hareket ya da durum değişikliği anlatmaz, haben alır: ich habe gelesen."
    },
    {
        seviye: "B1", konu: "perfekt", konuAdi: "Perfekt",
        soru: "Welcher Satz ist richtig?",
        secenekler: ["Ich habe gestern einen Film gesehen.", "Ich habe gestern gesehen einen Film.", "Ich gesehen habe gestern einen Film.", "Ich bin gestern einen Film gesehen."],
        dogru: 0,
        aciklama: "Yardımcı fiil ikinci sırada, Partizip II cümlenin sonunda durur."
    },
    {
        seviye: "B1", konu: "perfekt", konuAdi: "Perfekt",
        soru: "Partizip II von 'bringen'?",
        secenekler: ["gebracht", "gebringt", "gebrungen", "bracht"],
        dogru: 0,
        aciklama: "bringen karışık bir fiildir (kök değişir, -t alır): bringen, brachte, gebracht."
    },
    {
        seviye: "B1", konu: "perfekt", konuAdi: "Perfekt",
        soru: "Ich weiß, dass er gestern nach Hause ___.",
        secenekler: ["gegangen ist", "ist gegangen", "gegangen hat", "hat gegangen"],
        dogru: 0,
        aciklama: "Yan cümlede çekimli yardımcı fiil en sona gider, Partizip II ondan önce durur: gegangen ist."
    },

    // ---------- Präteritum ----------
    {
        seviye: "B1", konu: "praeteritum", konuAdi: "Präteritum",
        soru: "Präteritum von 'sein' (wir)?",
        secenekler: ["waren", "wären", "wurden", "sind"],
        dogru: 0,
        aciklama: "sein'ın Präteritum'u: ich war, du warst, er war, wir waren, ihr wart, sie waren."
    },
    {
        seviye: "B1", konu: "praeteritum", konuAdi: "Präteritum",
        soru: "Präteritum von 'sehen' (er)?",
        secenekler: ["sah", "sahte", "gesehen", "seh"],
        dogru: 0,
        aciklama: "sehen düzensizdir: sehen, sah, gesehen."
    },
    {
        seviye: "B1", konu: "praeteritum", konuAdi: "Präteritum",
        soru: "Präteritum von 'machen' (ich)?",
        secenekler: ["machte", "mach", "machete", "gemacht"],
        dogru: 0,
        aciklama: "Düzenli fiiller kök + -te alır: ich machte."
    },
    {
        seviye: "B1", konu: "praeteritum", konuAdi: "Präteritum",
        soru: "Er ___ früh auf. (aufstehen, Präteritum)",
        secenekler: ["stand", "stehte", "aufstand", "gestanden"],
        dogru: 0,
        aciklama: "Ayrılabilen fiilde ön ek sona gider: Er stand früh auf."
    },
    {
        seviye: "B1", konu: "praeteritum", konuAdi: "Präteritum",
        soru: "Präteritum von 'arbeiten' (er)?",
        secenekler: ["arbeitete", "arbeitte", "arbeite", "gearbeitet"],
        dogru: 0,
        aciklama: "Kök -t ile bitiyorsa araya -e- girer: arbeitete."
    },
    {
        seviye: "B1", konu: "praeteritum", konuAdi: "Präteritum",
        soru: "Präteritum von 'müssen' (ich)?",
        secenekler: ["musste", "müsste", "muste", "musst"],
        dogru: 0,
        aciklama: "Modalverben Präteritum'da umlaut'u kaybeder: musste. müsste Konjunktiv II'dir."
    },
    {
        seviye: "B1", konu: "praeteritum", konuAdi: "Präteritum",
        soru: "Präteritum von 'bringen' (sie)?",
        secenekler: ["brachte", "bringte", "brang", "gebracht"],
        dogru: 0,
        aciklama: "bringen karışık fiildir: bringen, brachte, gebracht."
    },

    // ---------- Modalverben ----------
    {
        seviye: "B1", konu: "modalverben", konuAdi: "Modalverben",
        soru: "Du ___ hier nicht rauchen. (yasak)",
        secenekler: ["darfst", "musst", "willst", "magst"],
        dogru: 0,
        aciklama: "nicht dürfen = yasak. nicht müssen ise 'gerek yok' demektir."
    },
    {
        seviye: "B1", konu: "modalverben", konuAdi: "Modalverben",
        soru: "Du ___ gut Deutsch sprechen. (können)",
        secenekler: ["kannst", "kann", "könnt", "können"],
        dogru: 0,
        aciklama: "du için können: du kannst."
    },
    {
        seviye: "B1", konu: "modalverben", konuAdi: "Modalverben",
        soru: "Wir ___ heute früh aufstehen. (müssen)",
        secenekler: ["müssen", "muss", "müsst", "musst"],
        dogru: 0,
        aciklama: "wir için çoğul form Infinitiv ile aynıdır: wir müssen."
    },
    {
        seviye: "B1", konu: "modalverben", konuAdi: "Modalverben",
        soru: "Ihr ___ hier parken. (dürfen)",
        secenekler: ["dürft", "darf", "darfst", "dürfen"],
        dogru: 0,
        aciklama: "ihr için dürfen: ihr dürft."
    },
    {
        seviye: "B1", konu: "modalverben", konuAdi: "Modalverben",
        soru: "Welcher Satz ist richtig?",
        secenekler: ["Ich möchte einen Kaffee trinken.", "Ich möchte einen Kaffee zu trinken.", "Ich möchte trinken einen Kaffee.", "Ich einen Kaffee möchte trinken."],
        dogru: 0,
        aciklama: "Modalverben'den sonra zu kullanılmaz ve ana fiil Infinitiv olarak sona gider."
    },
    {
        seviye: "B1", konu: "modalverben", konuAdi: "Modalverben",
        soru: "Der Arzt sagt, ich ___ mehr schlafen. (doktor öyle söylüyor)",
        secenekler: ["soll", "will", "darf", "mag"],
        dogru: 0,
        aciklama: "sollen, başkasından gelen emir ya da tavsiyeyi anlatır."
    },
    {
        seviye: "B1", konu: "modalverben", konuAdi: "Modalverben",
        soru: "Ich bleibe zu Hause, weil ich heute arbeiten ___.",
        secenekler: ["muss", "musst", "müssen", "müsst"],
        dogru: 0,
        aciklama: "Yan cümlede çekimli Modalverb en sona gider: weil ich heute arbeiten muss."
    },

    // ---------- Wechselpräpositionen ----------
    {
        seviye: "B1", konu: "wechselpraepositionen", konuAdi: "Wechselpräpositionen",
        soru: "Ich wohne in ___ Stadt.",
        secenekler: ["der", "die", "den", "dem"],
        dogru: 0,
        aciklama: "wohnen durum anlatır (Wo?) → Dativ. Stadt feminin: in der Stadt."
    },
    {
        seviye: "B1", konu: "wechselpraepositionen", konuAdi: "Wechselpräpositionen",
        soru: "Das Bild hängt an ___ Wand.",
        secenekler: ["der", "die", "den", "das"],
        dogru: 0,
        aciklama: "hängen (asılı durmak) durum anlatır → Dativ. Wand feminin: an der Wand."
    },
    {
        seviye: "B1", konu: "wechselpraepositionen", konuAdi: "Wechselpräpositionen",
        soru: "Ich hänge das Bild an ___ Wand.",
        secenekler: ["die", "der", "den", "dem"],
        dogru: 0,
        aciklama: "hängen (asmak) hareket anlatır (Wohin?) → Akkusativ: an die Wand."
    },
    {
        seviye: "B1", konu: "wechselpraepositionen", konuAdi: "Wechselpräpositionen",
        soru: "Die Katze liegt unter ___ Bett.",
        secenekler: ["dem", "das", "den", "der"],
        dogru: 0,
        aciklama: "liegen durum anlatır → Dativ. Bett neutrum: unter dem Bett."
    },
    {
        seviye: "B1", konu: "wechselpraepositionen", konuAdi: "Wechselpräpositionen",
        soru: "Ich setze mich neben ___ Mann.",
        secenekler: ["den", "dem", "der", "das"],
        dogru: 0,
        aciklama: "sich setzen hareket anlatır (Wohin?) → Akkusativ. Mann maskulin: neben den Mann."
    },
    {
        seviye: "B1", konu: "wechselpraepositionen", konuAdi: "Wechselpräpositionen",
        soru: "Das Auto steht vor ___ Haus.",
        secenekler: ["dem", "das", "den", "der"],
        dogru: 0,
        aciklama: "stehen durum anlatır → Dativ. Haus neutrum: vor dem Haus."
    },
    {
        seviye: "B1", konu: "wechselpraepositionen", konuAdi: "Wechselpräpositionen",
        soru: "Wir treffen uns ___ Montag.",
        secenekler: ["am", "im", "um", "auf"],
        dogru: 0,
        aciklama: "Günler için an + Dativ kullanılır: am Montag (an dem → am)."
    },

    // ---------- Nebensätze ----------
    {
        seviye: "B1", konu: "nebensaetze", konuAdi: "Nebensätze",
        soru: "Ich glaube, dass er recht ___.",
        secenekler: ["hat", "er hat", "hat er", "haben"],
        dogru: 0,
        aciklama: "dass yan cümle yapar, çekimli fiil sonda: dass er recht hat."
    },
    {
        seviye: "B1", konu: "nebensaetze", konuAdi: "Nebensätze",
        soru: "Welcher Satz ist richtig?",
        secenekler: ["Ich lerne Deutsch, weil ich in der Schweiz lebe.", "Ich lerne Deutsch, weil ich lebe in der Schweiz.", "Ich lerne Deutsch, weil lebe ich in der Schweiz.", "Ich lerne Deutsch, weil ich in der Schweiz."],
        dogru: 0,
        aciklama: "weil yan cümlesinde çekimli fiil (lebe) cümlenin sonuna gider."
    },
    {
        seviye: "B1", konu: "nebensaetze", konuAdi: "Nebensätze",
        soru: "Ich bin müde, ___ ich schlecht geschlafen habe. (çünkü)",
        secenekler: ["weil", "obwohl", "dass", "ob"],
        dogru: 0,
        aciklama: "weil sebep bildirir. obwohl karşıtlık, dass içerik cümlesi, ob dolaylı soru bağlacıdır."
    },
    {
        seviye: "B1", konu: "nebensaetze", konuAdi: "Nebensätze",
        soru: "Ich bleibe zu Hause, ___ ich bin krank. (fiil ikinci sırada)",
        secenekler: ["denn", "weil", "obwohl", "dass"],
        dogru: 0,
        aciklama: "denn yan cümle yapmaz: sonrasında normal ana cümle sırası gelir (denn ich bin krank)."
    },
    {
        seviye: "B1", konu: "nebensaetze", konuAdi: "Nebensätze",
        soru: "Ich weiß, dass er gestern gekommen ___.",
        secenekler: ["ist", "hat", "wurde", "wäre"],
        dogru: 0,
        aciklama: "Yan cümlede yardımcı fiil sonda: gekommen ist. kommen sein ile kurulur."
    },
    {
        seviye: "B1", konu: "nebensaetze", konuAdi: "Nebensätze",
        soru: "Welcher Satz ist richtig?",
        secenekler: ["Er sagt, dass er keine Zeit hat.", "Er sagt, dass er hat keine Zeit.", "Er sagt, dass hat er keine Zeit.", "Er sagt, dass er keine Zeit."],
        dogru: 0,
        aciklama: "dass cümlesinde çekimli fiil (hat) en sonda durur."
    },
    {
        seviye: "B1", konu: "nebensaetze", konuAdi: "Nebensätze",
        soru: "Welcher Satz ist richtig?",
        secenekler: ["Ich bleibe zu Hause, weil ich heute arbeiten muss.", "Ich bleibe zu Hause, weil ich muss heute arbeiten.", "Ich bleibe zu Hause, weil ich heute muss arbeiten.", "Ich bleibe zu Hause, weil muss ich heute arbeiten."],
        dogru: 0,
        aciklama: "Yan cümlede Modalverb en sona gider, Infinitiv ondan önce durur: arbeiten muss."
    },

    // ---------- Adjektivdeklination ----------
    {
        seviye: "B1", konu: "adjektivdeklination", konuAdi: "Adjektivdeklination",
        soru: "Die ___ Frau wohnt hier. (nett)",
        secenekler: ["nette", "nett", "netter", "netten"],
        dogru: 0,
        aciklama: "Belirli artikel + feminin Nominativ: sıfat -e alır."
    },
    {
        seviye: "B1", konu: "adjektivdeklination", konuAdi: "Adjektivdeklination",
        soru: "Ich sehe den ___ Mann. (groß)",
        secenekler: ["großen", "große", "großer", "großem"],
        dogru: 0,
        aciklama: "Belirli artikel + maskulin Akkusativ: sıfat -en alır."
    },
    {
        seviye: "B1", konu: "adjektivdeklination", konuAdi: "Adjektivdeklination",
        soru: "Das ist eine ___ Idee. (interessant)",
        secenekler: ["interessante", "interessanter", "interessantes", "interessanten"],
        dogru: 0,
        aciklama: "eine + feminin Nominativ: sıfat -e alır."
    },
    {
        seviye: "B1", konu: "adjektivdeklination", konuAdi: "Adjektivdeklination",
        soru: "Er hat einen ___ Hund. (klein)",
        secenekler: ["kleinen", "kleiner", "kleines", "kleine"],
        dogru: 0,
        aciklama: "ein + maskulin Akkusativ: sıfat -en alır."
    },
    {
        seviye: "B1", konu: "adjektivdeklination", konuAdi: "Adjektivdeklination",
        soru: "Ich esse gern ___ Brot. (frisch)",
        secenekler: ["frisches", "frische", "frischen", "frischer"],
        dogru: 0,
        aciklama: "Artikelsiz, neutrum Akkusativ: sıfat -es alır."
    },
    {
        seviye: "B1", konu: "adjektivdeklination", konuAdi: "Adjektivdeklination",
        soru: "Mit dem ___ Auto fahre ich zur Arbeit. (alt)",
        secenekler: ["alten", "alte", "altem", "altes"],
        dogru: 0,
        aciklama: "Belirli artikel + Dativ: sıfat her zaman -en alır."
    },
    {
        seviye: "B1", konu: "adjektivdeklination", konuAdi: "Adjektivdeklination",
        soru: "Wo sind die ___ Bücher? (neu)",
        secenekler: ["neuen", "neue", "neuer", "neues"],
        dogru: 0,
        aciklama: "Belirli artikel + Plural: sıfat -en alır."
    },

    // ---------- Personalpronomen ----------
    {
        seviye: "B1", konu: "personalpronomen", konuAdi: "Personalpronomen",
        soru: "Ich liebe ___. (du)",
        secenekler: ["dich", "dir", "du", "dein"],
        dogru: 0,
        aciklama: "lieben Akkusativ ister: du → dich."
    },
    {
        seviye: "B1", konu: "personalpronomen", konuAdi: "Personalpronomen",
        soru: "Er schenkt ___ Blumen. (ich)",
        secenekler: ["mir", "mich", "ich", "mein"],
        dogru: 0,
        aciklama: "Kime? sorusu Dativ ister: ich → mir."
    },
    {
        seviye: "B1", konu: "personalpronomen", konuAdi: "Personalpronomen",
        soru: "Wo ist das Buch? Ich suche ___. (es)",
        secenekler: ["es", "ihm", "ihn", "sie"],
        dogru: 0,
        aciklama: "suchen Akkusativ ister. es'in Akkusativ'i yine es'dir."
    },
    {
        seviye: "B1", konu: "personalpronomen", konuAdi: "Personalpronomen",
        soru: "Ich kenne den Mann nicht. Kennst du ___? (er)",
        secenekler: ["ihn", "ihm", "er", "sein"],
        dogru: 0,
        aciklama: "kennen Akkusativ ister: er → ihn."
    },
    {
        seviye: "B1", konu: "personalpronomen", konuAdi: "Personalpronomen",
        soru: "Das Handy gehört ___. (sie, tekil)",
        secenekler: ["ihr", "sie", "ihn", "ihnen"],
        dogru: 0,
        aciklama: "gehören Dativ ister: sie (tekil) → ihr."
    },
    {
        seviye: "B1", konu: "personalpronomen", konuAdi: "Personalpronomen",
        soru: "Hast du ___ gesehen? ('bizi')",
        secenekler: ["uns", "wir", "euch", "unser"],
        dogru: 0,
        aciklama: "sehen Akkusativ ister: wir → uns."
    },
    {
        seviye: "B1", konu: "personalpronomen", konuAdi: "Personalpronomen",
        soru: "Ich danke ___ für die Hilfe. (Sie, resmi)",
        secenekler: ["Ihnen", "Sie", "Ihr", "Dich"],
        dogru: 0,
        aciklama: "danken Dativ ister: Sie → Ihnen (resmi hitapta büyük harf)."
    },

    // ---------- Präpositionen ----------
    {
        seviye: "B1", konu: "praepositionen", konuAdi: "Präpositionen (Akkusativ / Dativ)",
        soru: "Ich wohne ___ meinen Eltern.",
        secenekler: ["bei", "mit", "zu", "von"],
        dogru: 0,
        aciklama: "bei + Dativ, birinin yanında/evinde kalmayı anlatır."
    },
    {
        seviye: "B1", konu: "praepositionen", konuAdi: "Präpositionen (Akkusativ / Dativ)",
        soru: "Er kommt ___ der Türkei.",
        secenekler: ["aus", "von", "nach", "bei"],
        dogru: 0,
        aciklama: "Köken (ülke, şehir) için aus + Dativ kullanılır."
    },
    {
        seviye: "B1", konu: "praepositionen", konuAdi: "Präpositionen (Akkusativ / Dativ)",
        soru: "Wir fliegen ___ Wien.",
        secenekler: ["nach", "zu", "in", "an"],
        dogru: 0,
        aciklama: "Artikelsiz şehir ve ülkelere gidişte nach kullanılır."
    },
    {
        seviye: "B1", konu: "praepositionen", konuAdi: "Präpositionen (Akkusativ / Dativ)",
        soru: "Ich gehe ___ Arzt.",
        secenekler: ["zum", "nach", "beim", "ins"],
        dogru: 0,
        aciklama: "Kişiye ya da kuruma gidişte zu + Dativ: zu dem Arzt = zum Arzt."
    },
    {
        seviye: "B1", konu: "praepositionen", konuAdi: "Präpositionen (Akkusativ / Dativ)",
        soru: "Das Geschenk ist ___ meiner Mutter.",
        secenekler: ["von", "für", "mit", "aus"],
        dogru: 0,
        aciklama: "Verenin kim olduğunu von + Dativ söyler: von meiner Mutter. (für Akkusativ alırdı: für meine Mutter.)"
    },
    {
        seviye: "B1", konu: "praepositionen", konuAdi: "Präpositionen (Akkusativ / Dativ)",
        soru: "Ich lerne ___ einem Jahr Deutsch.",
        secenekler: ["seit", "für", "vor", "nach"],
        dogru: 0,
        aciklama: "seit + Dativ, başlangıçtan beri süren bir durumu anlatır ve Präsens ile kullanılır."
    },
    {
        seviye: "B1", konu: "praepositionen", konuAdi: "Präpositionen (Akkusativ / Dativ)",
        soru: "Er arbeitet ___ einer Bank.",
        secenekler: ["bei", "an", "zu", "von"],
        dogru: 0,
        aciklama: "Çalışılan şirket ya da kurum için bei + Dativ kullanılır."
    }
);