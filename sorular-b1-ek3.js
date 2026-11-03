// B1 ek sorular, parti 3: 6 konuya 6'şar soru.

SORULAR.push(

    // ---------- Passiv ----------
    {
        seviye: "B1", konu: "passiv", konuAdi: "Passiv",
        soru: "Das Auto ___ repariert. (Präteritum Passiv)",
        secenekler: ["wurde", "wird", "ist", "wäre"],
        dogru: 0,
        aciklama: "Präteritum Passiv: wurde + Partizip II."
    },
    {
        seviye: "B1", konu: "passiv", konuAdi: "Passiv",
        soru: "Der Brief ___ gestern geschrieben worden.",
        secenekler: ["ist", "wird", "wurde", "hat"],
        dogru: 0,
        aciklama: "Perfekt Passiv: ist + Partizip II + worden."
    },
    {
        seviye: "B1", konu: "passiv", konuAdi: "Passiv",
        soru: "Welcher Satz steht im Passiv?",
        secenekler: ["Das Fenster wird geöffnet.", "Das Fenster ist offen.", "Er öffnet das Fenster.", "Er hat das Fenster geöffnet."],
        dogru: 0,
        aciklama: "Passiv: werden + Partizip II. Diğer seçenekler Aktiv ya da sonuç durumunu (ist offen) anlatır."
    },
    {
        seviye: "B1", konu: "passiv", konuAdi: "Passiv",
        soru: "Hier ___ Deutsch gesprochen. (Passiv, Präsens)",
        secenekler: ["wird", "werden", "wurde", "ist"],
        dogru: 0,
        aciklama: "Özne tekil (Deutsch), Präsens: wird gesprochen. Aktiv karşılığı: Hier spricht man Deutsch."
    },
    {
        seviye: "B1", konu: "passiv", konuAdi: "Passiv",
        soru: "Das Problem muss sofort ___ werden.",
        secenekler: ["gelöst", "lösen", "gelösen", "löst"],
        dogru: 0,
        aciklama: "Modalverb + Partizip II + werden: muss gelöst werden."
    },
    {
        seviye: "B1", konu: "passiv", konuAdi: "Passiv",
        soru: "Die Bücher ___ von den Studenten gelesen.",
        secenekler: ["werden", "wird", "wurde", "ist"],
        dogru: 0,
        aciklama: "Özne çoğul (die Bücher), Präsens: werden gelesen."
    },

    // ---------- Konjunktiv II ----------
    {
        seviye: "B1", konu: "konjunktiv2", konuAdi: "Konjunktiv II",
        soru: "Wenn ich reich ___, würde ich reisen.",
        secenekler: ["wäre", "bin", "war", "würde"],
        dogru: 0,
        aciklama: "sein'ın Konjunktiv II'si wäre'dir."
    },
    {
        seviye: "B1", konu: "konjunktiv2", konuAdi: "Konjunktiv II",
        soru: "Ich wünschte, ich ___ mehr Zeit.",
        secenekler: ["hätte", "habe", "hatte", "hat"],
        dogru: 0,
        aciklama: "Gerçek olmayan dilek: wünschte + Konjunktiv II (hätte)."
    },
    {
        seviye: "B1", konu: "konjunktiv2", konuAdi: "Konjunktiv II",
        soru: "Konjunktiv II von 'können' (ich)?",
        secenekler: ["könnte", "konnte", "kann", "könnt"],
        dogru: 0,
        aciklama: "können → könnte (umlaut'lu). konnte Präteritum'dur."
    },
    {
        seviye: "B1", konu: "konjunktiv2", konuAdi: "Konjunktiv II",
        soru: "Wenn ich du ___, würde ich das nicht tun.",
        secenekler: ["wäre", "bin", "war", "würde"],
        dogru: 0,
        aciklama: "Wenn ich du wäre, ... 'Senin yerinde olsaydım' kalıbıdır."
    },
    {
        seviye: "B1", konu: "konjunktiv2", konuAdi: "Konjunktiv II",
        soru: "Ich würde gern ___. (reisen)",
        secenekler: ["reisen", "gereist", "reist", "zu reisen"],
        dogru: 0,
        aciklama: "würde + Infinitiv: ana fiil Infinitiv olarak sona gider, zu almaz."
    },
    {
        seviye: "B1", konu: "konjunktiv2", konuAdi: "Konjunktiv II",
        soru: "Welcher Satz drückt einen unrealistischen Wunsch aus?",
        secenekler: ["Wenn ich doch mehr Zeit hätte!", "Ich habe mehr Zeit.", "Hast du mehr Zeit?", "Ich hatte mehr Zeit."],
        dogru: 0,
        aciklama: "Gerçek olmayan dilekler Konjunktiv II ile ve çoğunlukla doch / nur ile kurulur."
    },

    // ---------- Komparativ und Superlativ ----------
    {
        seviye: "B1", konu: "komparativ-superlativ", konuAdi: "Komparativ und Superlativ",
        soru: "Komparativ von 'gut'?",
        secenekler: ["besser", "guter", "gutter", "bester"],
        dogru: 0,
        aciklama: "gut → besser → am besten (düzensiz)."
    },
    {
        seviye: "B1", konu: "komparativ-superlativ", konuAdi: "Komparativ und Superlativ",
        soru: "Er ist ___ als sein Bruder. (jung)",
        secenekler: ["jünger", "junger", "jungere", "am jüngsten"],
        dogru: 0,
        aciklama: "jung → jünger → am jüngsten (umlaut alır)."
    },
    {
        seviye: "B1", konu: "komparativ-superlativ", konuAdi: "Komparativ und Superlativ",
        soru: "Er hat ___ Geld.  ('en çok')",
        secenekler: ["am meisten", "am viellsten", "mehr", "am mehrsten"],
        dogru: 0,
        aciklama: "viel → mehr → am meisten (düzensiz)."
    },
    {
        seviye: "B1", konu: "komparativ-superlativ", konuAdi: "Komparativ und Superlativ",
        soru: "Je mehr ich lerne, ___ besser werde ich.",
        secenekler: ["desto", "als", "wie", "dann"],
        dogru: 0,
        aciklama: "je ... desto = -dikçe ... -er. desto'dan sonra fiil ikinci sırada gelir."
    },
    {
        seviye: "B1", konu: "komparativ-superlativ", konuAdi: "Komparativ und Superlativ",
        soru: "Das Wetter wird ___ kälter. (gittikçe)",
        secenekler: ["immer", "je", "mehr", "sehr"],
        dogru: 0,
        aciklama: "immer + Komparativ = gittikçe: immer kälter."
    },
    {
        seviye: "B1", konu: "komparativ-superlativ", konuAdi: "Komparativ und Superlativ",
        soru: "Das ist das ___ Haus der Stadt. (groß, Superlativ)",
        secenekler: ["größte", "am größten", "größer", "größeste"],
        dogru: 0,
        aciklama: "İsmin önünde Superlativ artikelle ve sıfat eki ile gelir: das größte Haus. groß'un Superlativ'i -ß- ile bittiği için -e- girmez."
    },

    // ---------- Genitiv ----------
    {
        seviye: "B1", konu: "genitiv", konuAdi: "Genitiv",
        soru: "Das Auto ___ Mutter ist neu.",
        secenekler: ["der", "des", "dem", "die"],
        dogru: 0,
        aciklama: "Feminin Genitiv: der Mutter."
    },
    {
        seviye: "B1", konu: "genitiv", konuAdi: "Genitiv",
        soru: "Trotz ___ Wetters gehen wir spazieren.",
        secenekler: ["des", "dem", "der", "das"],
        dogru: 0,
        aciklama: "trotz Genitiv alır. Wetter neutrum: des Wetters."
    },
    {
        seviye: "B1", konu: "genitiv", konuAdi: "Genitiv",
        soru: "Während ___ Studiums arbeitet er nebenbei.",
        secenekler: ["des", "dem", "das", "der"],
        dogru: 0,
        aciklama: "während (zaman) Genitiv alır. Studium neutrum: des Studiums."
    },
    {
        seviye: "B1", konu: "genitiv", konuAdi: "Genitiv",
        soru: "Die Bücher ___ Kinder liegen auf dem Tisch.",
        secenekler: ["der", "des", "den", "die"],
        dogru: 0,
        aciklama: "Plural Genitiv: der Kinder."
    },
    {
        seviye: "B1", konu: "genitiv", konuAdi: "Genitiv",
        soru: "'Wessen Buch ist das?' sorusu ne anlama gelir?",
        secenekler: ["Bu kimin kitabı?", "Bu kime ait?", "Bu hangi kitap?", "Bu kitabı kim yazdı?"],
        dogru: 0,
        aciklama: "wessen = kimin (Genitiv soru kelimesi)."
    },
    {
        seviye: "B1", konu: "genitiv", konuAdi: "Genitiv",
        soru: "Das ist Peter___ Auto.",
        secenekler: ["s", "es", "en", "er"],
        dogru: 0,
        aciklama: "Özel isimlerde Genitiv için isme -s eklenir (kesme işareti yok): Peters Auto."
    },

    // ---------- Wortstellung und Negation ----------
    {
        seviye: "B1", konu: "wortstellung-negation", konuAdi: "Wortstellung und Negation",
        soru: "Welcher Satz ist richtig?",
        secenekler: ["Ich kenne ihn nicht.", "Ich nicht kenne ihn.", "Ich kenne ihn kein.", "Ich keine kenne ihn."],
        dogru: 0,
        aciklama: "Fiili olumsuz yapan nicht cümlenin sonuna gelir."
    },
    {
        seviye: "B1", konu: "wortstellung-negation", konuAdi: "Wortstellung und Negation",
        soru: "Hast du ein Auto? – Nein, ich habe ___ Auto.",
        secenekler: ["kein", "keins", "nicht", "keine"],
        dogru: 0,
        aciklama: "ein-li isimler kein ile olumsuz yapılır. Auto neutrum: kein Auto."
    },
    {
        seviye: "B1", konu: "wortstellung-negation", konuAdi: "Wortstellung und Negation",
        soru: "Welcher Satz ist richtig?",
        secenekler: ["Morgen fahre ich mit dem Zug nach Bern.", "Morgen ich fahre mit dem Zug nach Bern.", "Ich morgen fahre mit dem Zug nach Bern.", "Morgen fahre mit dem Zug ich nach Bern."],
        dogru: 0,
        aciklama: "Fiil ikinci sırada. Zarflar TeKaMoLo sırasıyla gelir: Te (morgen), Mo (mit dem Zug), Lo (nach Bern)."
    },
    {
        seviye: "B1", konu: "wortstellung-negation", konuAdi: "Wortstellung und Negation",
        soru: "Hast du Hunger? – Nein, ich habe ___ Hunger.",
        secenekler: ["keinen", "kein", "keine", "nicht"],
        dogru: 0,
        aciklama: "Hunger maskulin, haben Akkusativ ister: keinen Hunger."
    },
    {
        seviye: "B1", konu: "wortstellung-negation", konuAdi: "Wortstellung und Negation",
        soru: "Ich habe ___ gesehen. ('hiç kimseyi')",
        secenekler: ["niemanden", "niemand", "nichts", "keinen"],
        dogru: 0,
        aciklama: "niemand Akkusativ'de niemanden olur. (Günlük dilde ek çoğu zaman düşer, yazıda niemanden kullan.)"
    },
    {
        seviye: "B1", konu: "wortstellung-negation", konuAdi: "Wortstellung und Negation",
        soru: "'Henüz değil' nasıl söylenir?",
        secenekler: ["noch nicht", "nicht mehr", "nie mehr", "kein mehr"],
        dogru: 0,
        aciklama: "noch nicht = henüz değil. nicht mehr = artık değil."
    },

    // ---------- Konnektoren ----------
    {
        seviye: "B1", konu: "konnektoren", konuAdi: "Konnektoren",
        soru: "Das Hotel ist günstig. ___ liegt es zentral.",
        secenekler: ["Außerdem", "Obwohl", "Weil", "Ob"],
        dogru: 0,
        aciklama: "außerdem = ayrıca. Position 1 bağlacıdır: fiil hemen arkasından gelir."
    },
    {
        seviye: "B1", konu: "konnektoren", konuAdi: "Konnektoren",
        soru: "Beeil dich, ___ verpasst du den Zug.",
        secenekler: ["sonst", "weil", "dass", "ob"],
        dogru: 0,
        aciklama: "sonst = yoksa, aksi hâlde."
    },
    {
        seviye: "B1", konu: "konnektoren", konuAdi: "Konnektoren",
        soru: "Ich lerne viel, ___ ich möchte die Prüfung bestehen.",
        secenekler: ["denn", "weil", "dass", "damit"],
        dogru: 0,
        aciklama: "denn yan cümle yapmaz, normal ana cümle sırası (ich möchte) gelir. weil olsaydı fiil sonda olurdu."
    },
    {
        seviye: "B1", konu: "konnektoren", konuAdi: "Konnektoren",
        soru: "Welcher Satz ist richtig?",
        secenekler: ["Er ist müde, aber er geht arbeiten.", "Er ist müde, aber geht er arbeiten.", "Er ist müde, trotzdem er geht arbeiten.", "Er ist müde, obwohl geht er arbeiten."],
        dogru: 0,
        aciklama: "aber Position 0'dadır, cümle sırasını etkilemez: aber er geht."
    },
    {
        seviye: "B1", konu: "konnektoren", konuAdi: "Konnektoren",
        soru: "Ich habe weder Zeit ___ Lust.",
        secenekler: ["noch", "oder", "und", "aber"],
        dogru: 0,
        aciklama: "weder ... noch = ne ... ne de."
    },
    {
        seviye: "B1", konu: "konnektoren", konuAdi: "Konnektoren",
        soru: "Das Auto ist zwar teuer, ___ es ist zuverlässig.",
        secenekler: ["aber", "denn", "sondern", "obwohl"],
        dogru: 0,
        aciklama: "zwar ... aber = gerçi ... ama. sondern olumsuz bir ifadeden sonra gelir."
    }
);