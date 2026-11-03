// B1 ek sorular, parti 2: 7 konuya 6'şar soru.

SORULAR.push(

    // ---------- Plusquamperfekt und Futur I ----------
    {
        seviye: "B1", konu: "plusquamperfekt-futur", konuAdi: "Plusquamperfekt und Futur I",
        soru: "Ich war müde, weil ich schlecht ___. (schlafen, Plusquamperfekt)",
        secenekler: ["geschlafen hatte", "hatte geschlafen", "geschlafen habe", "geschlafen war"],
        dogru: 0,
        aciklama: "schlafen haben alır. Yan cümlede çekimli yardımcı fiil sonda: geschlafen hatte."
    },
    {
        seviye: "B1", konu: "plusquamperfekt-futur", konuAdi: "Plusquamperfekt und Futur I",
        soru: "Plusquamperfekt von 'gehen' (ich)?",
        secenekler: ["war gegangen", "hatte gegangen", "ging", "bin gegangen"],
        dogru: 0,
        aciklama: "gehen sein alır. Plusquamperfekt: war + Partizip II (ich war gegangen)."
    },
    {
        seviye: "B1", konu: "plusquamperfekt-futur", konuAdi: "Plusquamperfekt und Futur I",
        soru: "Plusquamperfekt von 'machen' (wir)?",
        secenekler: ["hatten gemacht", "waren gemacht", "haben gemacht", "machten"],
        dogru: 0,
        aciklama: "machen haben alır. Plusquamperfekt: hatte + Partizip II (wir hatten gemacht)."
    },
    {
        seviye: "B1", konu: "plusquamperfekt-futur", konuAdi: "Plusquamperfekt und Futur I",
        soru: "Morgen ___ es regnen. (Futur I)",
        secenekler: ["wird", "würde", "wurde", "ist"],
        dogru: 0,
        aciklama: "Futur I: werden + Infinitiv. es için werden: wird."
    },
    {
        seviye: "B1", konu: "plusquamperfekt-futur", konuAdi: "Plusquamperfekt und Futur I",
        soru: "Welche Zeitenfolge ist richtig?",
        secenekler: ["Nachdem er gegessen hatte, ging er schlafen.", "Nachdem er gegessen hatte, geht er schlafen.", "Nachdem er gegessen hat, ging er schlafen.", "Nachdem er aß, hatte er geschlafen."],
        dogru: 0,
        aciklama: "Zaman uyumu: nachdem + Plusquamperfekt → ana cümle Präteritum. (nachdem + Perfekt → ana cümle Präsens.)"
    },
    {
        seviye: "B1", konu: "plusquamperfekt-futur", konuAdi: "Plusquamperfekt und Futur I",
        soru: "Ich werde morgen ___.",
        secenekler: ["kommen", "gekommen", "komme", "kommst"],
        dogru: 0,
        aciklama: "Futur I'de ana fiil Infinitiv olarak sona gider: Ich werde morgen kommen."
    },

    // ---------- Trennbare und untrennbare Verben ----------
    {
        seviye: "B1", konu: "trennbare-verben", konuAdi: "Trennbare und untrennbare Verben",
        soru: "Welches Verb ist trennbar (ayrılabilir)?",
        secenekler: ["ankommen", "bekommen", "erzählen", "vergessen"],
        dogru: 0,
        aciklama: "an- ayrılabilen bir ön ektir. be-, er-, ver- ayrılamayan ön eklerdir."
    },
    {
        seviye: "B1", konu: "trennbare-verben", konuAdi: "Trennbare und untrennbare Verben",
        soru: "Welcher Satz ist richtig?",
        secenekler: ["Der Zug kommt um 9 Uhr an.", "Der Zug ankommt um 9 Uhr.", "Der Zug an kommt um 9 Uhr.", "Der Zug um 9 Uhr kommt an."],
        dogru: 0,
        aciklama: "Çekimli fiil ikinci sırada, ayrılan ön ek cümlenin sonunda: kommt ... an."
    },
    {
        seviye: "B1", konu: "trennbare-verben", konuAdi: "Trennbare und untrennbare Verben",
        soru: "Partizip II von 'einkaufen'?",
        secenekler: ["eingekauft", "geeinkauft", "einkauft", "eingekaufen"],
        dogru: 0,
        aciklama: "Ayrılabilen fiillerde ge araya girer: ein + ge + kauft = eingekauft."
    },
    {
        seviye: "B1", konu: "trennbare-verben", konuAdi: "Trennbare und untrennbare Verben",
        soru: "Partizip II von 'bekommen'?",
        secenekler: ["bekommen", "gebekommen", "begekommen", "bekommt"],
        dogru: 0,
        aciklama: "be- ayrılamaz, Partizip II'de ge- gelmez. kommen düzensizdir: bekommen, bekam, bekommen."
    },
    {
        seviye: "B1", konu: "trennbare-verben", konuAdi: "Trennbare und untrennbare Verben",
        soru: "Ich bin müde, weil ich früh ___.",
        secenekler: ["aufstehe", "stehe auf", "aufstehen", "aufgestehe"],
        dogru: 0,
        aciklama: "Yan cümlede ayrılabilen fiil birleşir ve sona gider: weil ich früh aufstehe."
    },
    {
        seviye: "B1", konu: "trennbare-verben", konuAdi: "Trennbare und untrennbare Verben",
        soru: "___ bitte auf! (aufstehen, du-Imperativ)",
        secenekler: ["Steh", "Stehe", "Aufsteh", "Stand"],
        dogru: 0,
        aciklama: "Imperativ'de ön ek yine sona gider: Steh bitte auf!"
    },

    // ---------- Reflexive Verben ----------
    {
        seviye: "B1", konu: "reflexive-verben", konuAdi: "Reflexive Verben",
        soru: "Du musst ___ beeilen.",
        secenekler: ["dich", "mich", "sich", "dir"],
        dogru: 0,
        aciklama: "du için Akkusativ Reflexivpronomen: dich."
    },
    {
        seviye: "B1", konu: "reflexive-verben", konuAdi: "Reflexive Verben",
        soru: "Ich putze ___ die Zähne.",
        secenekler: ["mir", "mich", "dich", "sich"],
        dogru: 0,
        aciklama: "Cümlede Akkusativ nesne (die Zähne) varsa Reflexivpronomen Dativ olur: mir."
    },
    {
        seviye: "B1", konu: "reflexive-verben", konuAdi: "Reflexive Verben",
        soru: "Wir freuen ___ auf den Urlaub.",
        secenekler: ["uns", "sich", "euch", "mich"],
        dogru: 0,
        aciklama: "wir için Reflexivpronomen: uns."
    },
    {
        seviye: "B1", konu: "reflexive-verben", konuAdi: "Reflexive Verben",
        soru: "Sie erinnert ___ an den ersten Tag. (sie, tekil)",
        secenekler: ["sich", "sie", "ihr", "dich"],
        dogru: 0,
        aciklama: "sie (tekil ve çoğul) için Reflexivpronomen sich'tir."
    },
    {
        seviye: "B1", konu: "reflexive-verben", konuAdi: "Reflexive Verben",
        soru: "Welcher Satz ist richtig?",
        secenekler: ["Er hat sich sehr gefreut.", "Er ist sich sehr gefreut.", "Er hat ihn sehr gefreut.", "Er hat sehr gefreut sich."],
        dogru: 0,
        aciklama: "Reflexive fiiller Perfekt'te haben alır. Reflexivpronomen yardımcı fiilden sonra gelir."
    },
    {
        seviye: "B1", konu: "reflexive-verben", konuAdi: "Reflexive Verben",
        soru: "Ich kaufe ___ ein Buch.",
        secenekler: ["mir", "mich", "dich", "uns"],
        dogru: 0,
        aciklama: "sich etwas kaufen = kendine bir şey almak. Akkusativ nesne (ein Buch) var, o yüzden Dativ: mir."
    },

    // ---------- Verben mit Präpositionen ----------
    {
        seviye: "B1", konu: "verben-mit-praepositionen", konuAdi: "Verben mit Präpositionen",
        soru: "Er ärgert sich ___ den Lärm.",
        secenekler: ["über", "auf", "für", "an"],
        dogru: 0,
        aciklama: "sich ärgern über + Akkusativ."
    },
    {
        seviye: "B1", konu: "verben-mit-praepositionen", konuAdi: "Verben mit Präpositionen",
        soru: "Ich bewerbe mich ___ eine Stelle.",
        secenekler: ["um", "für", "auf", "an"],
        dogru: 0,
        aciklama: "sich bewerben um + Akkusativ."
    },
    {
        seviye: "B1", konu: "verben-mit-praepositionen", konuAdi: "Verben mit Präpositionen",
        soru: "Sie träumt ___ einer Reise.",
        secenekler: ["von", "an", "auf", "über"],
        dogru: 0,
        aciklama: "träumen von + Dativ."
    },
    {
        seviye: "B1", konu: "verben-mit-praepositionen", konuAdi: "Verben mit Präpositionen",
        soru: "Denkst du an den Termin? – Ja, ich denke ___.",
        secenekler: ["daran", "dafür", "darauf", "dabei"],
        dogru: 0,
        aciklama: "denken an → şey için da(r)an. Ünlüyle başlayan edatta araya -r- girer."
    },
    {
        seviye: "B1", konu: "verben-mit-praepositionen", konuAdi: "Verben mit Präpositionen",
        soru: "Ich frage ___ dem Weg.",
        secenekler: ["nach", "für", "an", "auf"],
        dogru: 0,
        aciklama: "fragen nach + Dativ."
    },
    {
        seviye: "B1", konu: "verben-mit-praepositionen", konuAdi: "Verben mit Präpositionen",
        soru: "Ich freue mich ___ den Urlaub. (gelecekteki bir şeye)",
        secenekler: ["auf", "über", "für", "von"],
        dogru: 0,
        aciklama: "sich freuen auf: gelecekteki şey. sich freuen über: şimdiki ya da geçmişteki şey."
    },

    // ---------- wenn, als, ob, damit... ----------
    {
        seviye: "B1", konu: "wenn-als-ob-damit", konuAdi: "wenn, als, ob, damit...",
        soru: "___ es regnet, bleibe ich zu Hause.",
        secenekler: ["Wenn", "Als", "Ob", "Damit"],
        dogru: 0,
        aciklama: "Şimdiki zaman, gelecek ve koşul için wenn kullanılır."
    },
    {
        seviye: "B1", konu: "wenn-als-ob-damit", konuAdi: "wenn, als, ob, damit...",
        soru: "Immer ___ ich müde war, trank ich Kaffee. (geçmişte tekrar eden)",
        secenekler: ["wenn", "als", "ob", "bevor"],
        dogru: 0,
        aciklama: "Geçmişte tekrar eden olaylar için de wenn kullanılır. als sadece tek seferlik geçmiş olaylar içindir."
    },
    {
        seviye: "B1", konu: "wenn-als-ob-damit", konuAdi: "wenn, als, ob, damit...",
        soru: "Ich weiß nicht, ___ er heute kommt. (ne zaman?)",
        secenekler: ["wann", "ob", "dass", "weil"],
        dogru: 0,
        aciklama: "W-sorularında soru kelimesi bağlaç olur: wann. ob sadece evet/hayır sorularında kullanılır."
    },
    {
        seviye: "B1", konu: "wenn-als-ob-damit", konuAdi: "wenn, als, ob, damit...",
        soru: "Ich warte, ___ du kommst. (-e kadar)",
        secenekler: ["bis", "bevor", "seit", "damit"],
        dogru: 0,
        aciklama: "bis = -e kadar."
    },
    {
        seviye: "B1", konu: "wenn-als-ob-damit", konuAdi: "wenn, als, ob, damit...",
        soru: "Ich gebe dir das Buch, ___ du dich vorbereiten kannst.",
        secenekler: ["damit", "um", "weil", "obwohl"],
        dogru: 0,
        aciklama: "Amaç ve farklı özneler (ich / du): damit. Özne aynı olsaydı um ... zu."
    },
    {
        seviye: "B1", konu: "wenn-als-ob-damit", konuAdi: "wenn, als, ob, damit...",
        soru: "___ ich in Zürich wohne, spreche ich mehr Deutsch. (-diğinden beri)",
        secenekler: ["Seit", "Bis", "Bevor", "Damit"],
        dogru: 0,
        aciklama: "seit / seitdem = -diğinden beri. Cümlede Präsens kullanılır."
    },

    // ---------- Relativsätze ----------
    {
        seviye: "B1", konu: "relativsaetze", konuAdi: "Relativsätze",
        soru: "Das ist das Haus, ___ ich wohne.",
        secenekler: ["in dem", "in das", "in der", "in den"],
        dogru: 0,
        aciklama: "wohnen durum anlatır (Wo?) → Dativ. Haus neutrum: in dem."
    },
    {
        seviye: "B1", konu: "relativsaetze", konuAdi: "Relativsätze",
        soru: "Die Stadt, ___ ich wohne, ist ruhig.",
        secenekler: ["in der", "in die", "in dem", "in den"],
        dogru: 0,
        aciklama: "wohnen → Dativ. Stadt feminin: in der."
    },
    {
        seviye: "B1", konu: "relativsaetze", konuAdi: "Relativsätze",
        soru: "Das Buch, ___ du mir empfohlen hast, ist spannend.",
        secenekler: ["das", "dem", "den", "dessen"],
        dogru: 0,
        aciklama: "Buch yan cümlede Akkusativ nesne, neutrum: das."
    },
    {
        seviye: "B1", konu: "relativsaetze", konuAdi: "Relativsätze",
        soru: "Die Kinder, ___ im Garten spielen, sind meine Neffen.",
        secenekler: ["die", "den", "der", "denen"],
        dogru: 0,
        aciklama: "Kinder yan cümlede özne (Nominativ), Plural: die."
    },
    {
        seviye: "B1", konu: "relativsaetze", konuAdi: "Relativsätze",
        soru: "Der Kollege, mit ___ ich arbeite, kommt aus Bern.",
        secenekler: ["dem", "den", "der", "dessen"],
        dogru: 0,
        aciklama: "mit Dativ alır. Kollege maskulin: mit dem."
    },
    {
        seviye: "B1", konu: "relativsaetze", konuAdi: "Relativsätze",
        soru: "Alles, ___ du sagst, ist richtig.",
        secenekler: ["was", "das", "dass", "wer"],
        dogru: 0,
        aciklama: "alles, nichts, etwas kelimelerinden sonra relativ zamir was olur."
    },

    // ---------- Infinitiv mit zu ----------
    {
        seviye: "B1", konu: "infinitiv-zu", konuAdi: "Infinitiv mit zu",
        soru: "Es ist wichtig, regelmäßig ___.",
        secenekler: ["zu üben", "üben zu", "zu geübt", "übt zu"],
        dogru: 0,
        aciklama: "es ist wichtig ifadesinden sonra zu + Infinitiv gelir."
    },
    {
        seviye: "B1", konu: "infinitiv-zu", konuAdi: "Infinitiv mit zu",
        soru: "Ich habe keine Lust, heute ___.",
        secenekler: ["zu lernen", "lernen", "zu gelernt", "lerne"],
        dogru: 0,
        aciklama: "Lust haben ifadesinden sonra zu + Infinitiv gelir."
    },
    {
        seviye: "B1", konu: "infinitiv-zu", konuAdi: "Infinitiv mit zu",
        soru: "Er hört auf, ___. (rauchen)",
        secenekler: ["zu rauchen", "rauchen", "rauchen zu", "raucht"],
        dogru: 0,
        aciklama: "aufhören'den sonra zu + Infinitiv gelir: Er hört auf zu rauchen."
    },
    {
        seviye: "B1", konu: "infinitiv-zu", konuAdi: "Infinitiv mit zu",
        soru: "Er spielt, ___ zu lernen. (öğrenmek yerine)",
        secenekler: ["anstatt", "um", "ohne", "damit"],
        dogru: 0,
        aciklama: "(an)statt ... zu = -mek yerine."
    },
    {
        seviye: "B1", konu: "infinitiv-zu", konuAdi: "Infinitiv mit zu",
        soru: "Welcher Satz ist richtig?",
        secenekler: ["Ich habe vergessen, dich anzurufen.", "Ich habe vergessen, dich zu anrufen.", "Ich habe vergessen, anrufen zu dich.", "Ich habe vergessen, dich anrufen zu."],
        dogru: 0,
        aciklama: "Ayrılabilen fiilde zu ön ekle fiilin arasına girer: an-zu-rufen."
    },
    {
        seviye: "B1", konu: "infinitiv-zu", konuAdi: "Infinitiv mit zu",
        soru: "In welchem Satz steht KEIN 'zu'?",
        secenekler: ["Ich muss früh aufstehen.", "Ich habe Lust, früh aufzustehen.", "Es ist wichtig, früh aufzustehen.", "Ich versuche, früh aufzustehen."],
        dogru: 0,
        aciklama: "Modalverben'den (müssen, können, wollen...) sonra zu kullanılmaz."
    }
);