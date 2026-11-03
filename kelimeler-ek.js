// Ek kelimeler. Her parti dosyanın EN ALTINA eklenir.
// Her blok kendi başına bir KELIMELER.push(...) komutudur.

// ===== Parti 1: IT & Informatik, Arbeit & Beruf =====

KELIMELER.push(

    // ---------- IT & Informatik: isimler ----------
    { seviye: "B1", tur: "isim", artikel: "das", de: "Programm", tr: "program", ornek: "Das Programm läuft auf allen Geräten.", alan: "it" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Datei", tr: "dosya", ornek: "Ich speichere die Datei auf dem Laptop.", alan: "it" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Passwort", tr: "şifre", ornek: "Ich habe mein Passwort vergessen.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Datenbank", tr: "veritabanı", ornek: "Die Datenbank enthält alle Kundendaten.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Server", tr: "sunucu", ornek: "Der Server ist gerade nicht erreichbar.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Software", tr: "yazılım", ornek: "Die Software wird regelmäßig aktualisiert.", alan: "it" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Fehler", tr: "hata", ornek: "Der Fehler liegt im Programmcode.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Sicherheit", tr: "güvenlik", ornek: "Sicherheit ist beim Online-Banking besonders wichtig.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Datenschutz", tr: "veri koruma, gizlilik", ornek: "Der Datenschutz spielt eine immer größere Rolle.", alan: "it" },
    { seviye: "C1", tur: "isim", artikel: "der", de: "Algorithmus", tr: "algoritma", ornek: "Der Algorithmus sortiert die Daten nach Datum.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Programmiersprache", tr: "programlama dili", ornek: "Python ist eine beliebte Programmiersprache.", alan: "it" },
    { seviye: "C1", tur: "isim", artikel: "der", de: "Quellcode", tr: "kaynak kod", ornek: "Der Quellcode ist öffentlich einsehbar.", alan: "it" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Schnittstelle", tr: "arayüz (API)", ornek: "Die Schnittstelle verbindet zwei Systeme miteinander.", alan: "it" },

    // ---------- IT & Informatik: fiiller ----------
    { seviye: "B1", tur: "fiil", de: "programmieren", tr: "programlamak, kod yazmak", ornek: "Ich möchte besser programmieren lernen.", alan: "it" },
    { seviye: "B1", tur: "fiil", de: "herunterladen", tr: "indirmek", ornek: "Ich lade die Datei herunter.", alan: "it" },
    { seviye: "B1", tur: "fiil", de: "speichern", tr: "kaydetmek, saklamak", ornek: "Bitte speichere die Datei regelmäßig.", alan: "it" },
    { seviye: "B1", tur: "fiil", de: "installieren", tr: "kurmak (yazılım)", ornek: "Ich muss zuerst das Programm installieren.", alan: "it" },
    { seviye: "B2", tur: "fiil", de: "aktualisieren", tr: "güncellemek", ornek: "Das System wird jede Nacht aktualisiert.", alan: "it" },
    { seviye: "B2", tur: "fiil", de: "abstürzen", tr: "çökmek (program)", ornek: "Das Programm ist plötzlich abgestürzt.", alan: "it" },
    { seviye: "B2", tur: "fiil", de: "verschlüsseln", tr: "şifrelemek", ornek: "Alle Daten werden verschlüsselt gespeichert.", alan: "it" },
    { seviye: "C1", tur: "fiil", de: "implementieren", tr: "uygulamaya geçirmek, hayata geçirmek", ornek: "Das Team implementiert die neue Funktion.", alan: "it" },

    // ---------- IT & Informatik: sıfatlar ----------
    { seviye: "B2", tur: "sifat", de: "digital", tr: "dijital", ornek: "Die Verwaltung wird zunehmend digital.", alan: "it" },
    { seviye: "C1", tur: "sifat", de: "kompatibel", tr: "uyumlu", ornek: "Die Software ist mit allen Systemen kompatibel.", alan: "it" },
    { seviye: "C1", tur: "sifat", de: "fehlerhaft", tr: "hatalı", ornek: "Die Datei ist fehlerhaft und lässt sich nicht öffnen.", alan: "it" },
    { seviye: "B2", tur: "sifat", de: "zuverlässig", tr: "güvenilir", ornek: "Das System läuft sehr zuverlässig.", alan: "it" },

    // ---------- Arbeit & Beruf: isimler ----------
    { seviye: "B1", tur: "isim", artikel: "die", de: "Bewerbung", tr: "başvuru", ornek: "Ich schicke meine Bewerbung morgen ab.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Lebenslauf", tr: "özgeçmiş (CV)", ornek: "Mein Lebenslauf ist auf dem neuesten Stand.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Vorstellungsgespräch", tr: "iş görüşmesi", ornek: "Morgen habe ich ein Vorstellungsgespräch.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Stelle", tr: "pozisyon, iş", ornek: "Die Firma hat eine neue Stelle ausgeschrieben.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Arbeitgeber", tr: "işveren", ornek: "Mein Arbeitgeber bietet flexible Arbeitszeiten an.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Gehalt", tr: "maaş", ornek: "Das Gehalt wird am Monatsende überwiesen.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Vertrag", tr: "sözleşme", ornek: "Ich habe den Vertrag noch nicht unterschrieben.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Kündigung", tr: "fesih, işten çıkarma bildirimi", ornek: "Er hat die Kündigung per Post erhalten.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Weiterbildung", tr: "mesleki gelişim eğitimi", ornek: "Die Firma fördert die Weiterbildung ihrer Mitarbeiter.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Lehre", tr: "çıraklık, meslek eğitimi", ornek: "Er macht eine Lehre als Informatiker.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Probezeit", tr: "deneme süresi", ornek: "Die Probezeit dauert drei Monate.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Arbeitszeugnis", tr: "iş referans belgesi", ornek: "Ich brauche ein Arbeitszeugnis von meiner letzten Firma.", alan: "arbeit" },

    // ---------- Arbeit & Beruf: fiiller ----------
    { seviye: "B2", tur: "fiil", de: "kündigen", tr: "sözleşmeyi feshetmek, istifa etmek", ornek: "Ich habe zum Monatsende gekündigt.", alan: "arbeit" },
    { seviye: "B2", tur: "fiil", de: "einstellen", tr: "işe almak", ornek: "Die Firma stellt neue Mitarbeiter ein.", alan: "arbeit" },
    { seviye: "B1", tur: "fiil", de: "verdienen", tr: "kazanmak (para)", ornek: "Sie verdient gut in ihrem Beruf.", alan: "arbeit" },
    { seviye: "B1", tur: "fiil", de: "unterschreiben", tr: "imzalamak", ornek: "Bitte unterschreiben Sie den Vertrag.", alan: "arbeit" },
    { seviye: "B1", tur: "fiil", de: "sich vorstellen", tr: "kendini tanıtmak", ornek: "Ich stelle mich morgen bei der Firma vor.", alan: "arbeit" },
    { seviye: "C1", tur: "fiil", de: "befördern", tr: "terfi ettirmek", ornek: "Er wurde letztes Jahr zum Abteilungsleiter befördert.", alan: "arbeit" },
    { seviye: "B2", tur: "fiil", de: "leiten", tr: "yönetmek", ornek: "Sie leitet ein Team von zehn Personen.", alan: "arbeit" },
    { seviye: "B2", tur: "fiil", de: "zusammenarbeiten", tr: "işbirliği yapmak", ornek: "Wir arbeiten eng mit anderen Abteilungen zusammen.", alan: "arbeit" },
    { seviye: "B2", tur: "fiil", de: "sich weiterbilden", tr: "kendini mesleki olarak geliştirmek", ornek: "Ich bilde mich neben der Arbeit weiter.", alan: "arbeit" },

    // ---------- Arbeit & Beruf: sıfatlar ----------
    { seviye: "B1", tur: "sifat", de: "pünktlich", tr: "dakik, vaktinde", ornek: "Er ist immer pünktlich.", alan: "arbeit" },
    { seviye: "B2", tur: "sifat", de: "erfahren", tr: "deneyimli", ornek: "Sie ist eine sehr erfahrene Ärztin.", alan: "arbeit" },
    { seviye: "B2", tur: "sifat", de: "flexibel", tr: "esnek", ornek: "Die Arbeitszeiten sind flexibel.", alan: "arbeit" },
    { seviye: "B2", tur: "sifat", de: "verantwortlich", tr: "sorumlu", ornek: "Er ist für das Projekt verantwortlich.", alan: "arbeit" }
);


// ===== Parti 2: Bildung & Studium, Wohnen & Alltag =====

KELIMELER.push(

    // ---------- Bildung & Studium: isimler ----------
    { seviye: "B1", tur: "isim", artikel: "das", de: "Studium", tr: "üniversite eğitimi", ornek: "Das Studium dauert in der Regel sechs Semester.", alan: "bildung" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Hochschule", tr: "yüksekokul, üniversite", ornek: "Er studiert an einer Hochschule in Bern.", alan: "bildung" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Prüfung", tr: "sınav", ornek: "Die Prüfung findet nächste Woche statt.", alan: "bildung" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Abschluss", tr: "mezuniyet, diploma", ornek: "Mit diesem Abschluss hat man gute Chancen auf dem Arbeitsmarkt.", alan: "bildung" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Zeugnis", tr: "karne, diploma belgesi", ornek: "Bei der Bewerbung muss ich mein Zeugnis mitschicken.", alan: "bildung" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Stipendium", tr: "burs", ornek: "Sie bekommt ein Stipendium für ihr Studium.", alan: "bildung" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Vorlesung", tr: "ders (üniversitede)", ornek: "Die Vorlesung beginnt um acht Uhr.", alan: "bildung" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Fach", tr: "ders, branş", ornek: "Mein Lieblingsfach ist Mathematik.", alan: "bildung" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Note", tr: "not", ornek: "Er hat in der Prüfung eine gute Note bekommen.", alan: "bildung" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Praktikum", tr: "staj", ornek: "Ich mache im Sommer ein Praktikum bei einer Bank.", alan: "bildung" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Studiengang", tr: "bölüm, program", ornek: "Der Studiengang ist sehr beliebt.", alan: "bildung" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Abschlussarbeit", tr: "bitirme tezi", ornek: "Ich schreibe gerade meine Abschlussarbeit.", alan: "bildung" },

    // ---------- Bildung & Studium: fiiller ----------
    { seviye: "B1", tur: "fiil", de: "studieren", tr: "üniversitede okumak", ornek: "Sie studiert Medizin in Basel.", alan: "bildung" },
    { seviye: "B2", tur: "fiil", de: "sich einschreiben", tr: "kayıt olmak (üniversiteye)", ornek: "Ich habe mich für den Studiengang eingeschrieben.", alan: "bildung" },
    { seviye: "B2", tur: "fiil", de: "abschließen", tr: "tamamlamak, bitirmek", ornek: "Sie hat ihr Studium erfolgreich abgeschlossen.", alan: "bildung" },
    { seviye: "B1", tur: "fiil", de: "wiederholen", tr: "tekrar etmek", ornek: "Vor der Prüfung wiederhole ich den Stoff.", alan: "bildung" },
    { seviye: "B2", tur: "fiil", de: "durchfallen", tr: "(sınavda) kalmak", ornek: "Er ist in der Prüfung durchgefallen.", alan: "bildung" },
    { seviye: "B1", tur: "fiil", de: "sich vorbereiten", tr: "hazırlanmak", ornek: "Ich bereite mich auf die Prüfung vor.", alan: "bildung" },
    { seviye: "B2", tur: "fiil", de: "fördern", tr: "desteklemek, teşvik etmek", ornek: "Der Staat fördert die Bildung.", alan: "bildung" },
    { seviye: "C1", tur: "fiil", de: "erwerben", tr: "edinmek, kazanmak (bilgi, beceri)", ornek: "Im Studium erwirbt man wichtige Kenntnisse.", alan: "bildung" },
    { seviye: "B2", tur: "fiil", de: "belegen", tr: "(ders) almak, kaydolmak", ornek: "Ich belege im Herbst zwei Kurse.", alan: "bildung" },

    // ---------- Bildung & Studium: sıfatlar ----------
    { seviye: "B1", tur: "sifat", de: "schriftlich", tr: "yazılı", ornek: "Die Prüfung besteht aus einem schriftlichen Teil.", alan: "bildung" },
    { seviye: "B1", tur: "sifat", de: "mündlich", tr: "sözlü", ornek: "Die mündliche Prüfung dauert zwanzig Minuten.", alan: "bildung" },
    { seviye: "B2", tur: "sifat", de: "anspruchsvoll", tr: "zorlu, yüksek nitelik gerektiren", ornek: "Das Studium ist sehr anspruchsvoll.", alan: "bildung" },
    { seviye: "B1", tur: "sifat", de: "fleißig", tr: "çalışkan", ornek: "Er ist ein fleißiger Student.", alan: "bildung" },

    // ---------- Wohnen & Alltag: isimler ----------
    { seviye: "B1", tur: "isim", artikel: "die", de: "Wohnung", tr: "daire", ornek: "Wir suchen eine Wohnung in der Nähe vom Bahnhof.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Miete", tr: "kira", ornek: "Die Miete wird am Monatsanfang überwiesen.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Mietvertrag", tr: "kira sözleşmesi", ornek: "Ich habe den Mietvertrag gestern unterschrieben.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Nebenkosten", tr: "yan giderler (aidat, ısınma vb.)", ornek: "Die Nebenkosten sind in der Miete nicht enthalten.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Vermieter", tr: "ev sahibi", ornek: "Der Vermieter lässt die Heizung reparieren.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Krankenkasse", tr: "sağlık sigortası kurumu", ornek: "Ich vergleiche die Prämien verschiedener Krankenkassen.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Prämie", tr: "prim (sigorta, İsviçre kullanımı)", ornek: "Die Prämie steigt jedes Jahr.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Gemeinde", tr: "belediye, yerel yönetim", ornek: "Die Anmeldung erfolgt bei der Gemeinde.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Anmeldung", tr: "kayıt, ikamet bildirimi", ornek: "Nach dem Umzug ist die Anmeldung bei der Gemeinde Pflicht.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Umzug", tr: "taşınma", ornek: "Der Umzug ist für nächsten Monat geplant.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Rechnung", tr: "fatura, hesap", ornek: "Die Rechnung muss bis Ende des Monats bezahlt werden.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Nachbar", tr: "komşu", ornek: "Meine Nachbarn sind sehr freundlich.", alan: "alltag" },

    // ---------- Wohnen & Alltag: fiiller ----------
    { seviye: "B1", tur: "fiil", de: "mieten", tr: "kiralamak (kiracı olarak)", ornek: "Wir möchten eine Wohnung in der Stadt mieten.", alan: "alltag" },
    { seviye: "B2", tur: "fiil", de: "vermieten", tr: "kiraya vermek", ornek: "Sie vermietet ein Zimmer an Studenten.", alan: "alltag" },
    { seviye: "B1", tur: "fiil", de: "umziehen", tr: "taşınmak", ornek: "Wir ziehen nächsten Monat um.", alan: "alltag" },
    { seviye: "B1", tur: "fiil", de: "einziehen", tr: "yeni eve taşınmak, girmek", ornek: "Wir ziehen am Ersten in die neue Wohnung ein.", alan: "alltag" },
    { seviye: "B1", tur: "fiil", de: "sich anmelden", tr: "kayıt yaptırmak, ikamet bildirmek", ornek: "Ich muss mich bei der Gemeinde anmelden.", alan: "alltag" },
    { seviye: "B2", tur: "fiil", de: "überweisen", tr: "havale etmek", ornek: "Ich überweise die Miete jeden Monat.", alan: "alltag" },
    { seviye: "B1", tur: "fiil", de: "reparieren", tr: "tamir etmek", ornek: "Der Techniker repariert die Waschmaschine.", alan: "alltag" },
    { seviye: "B2", tur: "fiil", de: "versichern", tr: "sigortalamak", ornek: "Ich habe mein Fahrrad gegen Diebstahl versichert.", alan: "alltag" },
    { seviye: "B2", tur: "fiil", de: "sich kümmern", tr: "ilgilenmek, bir işi üstlenmek", ornek: "Ich kümmere mich um die Anmeldung.", alan: "alltag" },

    // ---------- Wohnen & Alltag: sıfatlar ----------
    { seviye: "B1", tur: "sifat", de: "günstig", tr: "uygun fiyatlı", ornek: "Die Wohnung ist günstig, aber ziemlich klein.", alan: "alltag" },
    { seviye: "B1", tur: "sifat", de: "gemütlich", tr: "rahat, sıcak (ortam)", ornek: "Die Wohnung ist klein, aber gemütlich.", alan: "alltag" },
    { seviye: "B1", tur: "sifat", de: "ruhig", tr: "sakin", ornek: "Wir wohnen in einer ruhigen Gegend.", alan: "alltag" },
    { seviye: "B2", tur: "sifat", de: "obligatorisch", tr: "zorunlu", ornek: "Die Krankenversicherung ist in der Schweiz obligatorisch.", alan: "alltag" }
);


// ===== Parti 3: Gesellschaft & Zusammenleben, Politik & Recht =====

KELIMELER.push(

    // ---------- Gesellschaft & Zusammenleben: isimler ----------
    { seviye: "B2", tur: "isim", artikel: "die", de: "Gemeinschaft", tr: "topluluk", ornek: "Die Gemeinschaft hilft sich gegenseitig.", alan: "gesellschaft" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Meinung", tr: "görüş, fikir", ornek: "Jeder hat das Recht auf seine eigene Meinung.", alan: "gesellschaft" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Kultur", tr: "kültür", ornek: "Jede Kultur hat ihre eigenen Traditionen.", alan: "gesellschaft" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Tradition", tr: "gelenek", ornek: "Diese Tradition gibt es seit mehr als hundert Jahren.", alan: "gesellschaft" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Integration", tr: "uyum, entegrasyon", ornek: "Die Integration von Zugewanderten ist eine wichtige Aufgabe.", alan: "gesellschaft" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Vielfalt", tr: "çeşitlilik", ornek: "Die Vielfalt macht unsere Gesellschaft reicher.", alan: "gesellschaft" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Vorurteil", tr: "önyargı", ornek: "Vorurteile entstehen oft aus Unwissen.", alan: "gesellschaft" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Gleichberechtigung", tr: "eşit haklara sahip olma, eşitlik", ornek: "Die Gleichberechtigung von Frauen und Männern ist gesetzlich verankert.", alan: "gesellschaft" },
    { seviye: "C1", tur: "isim", artikel: "der", de: "Zusammenhalt", tr: "dayanışma, bir arada durma", ornek: "Der Zusammenhalt in der Gesellschaft ist besonders in Krisen wichtig.", alan: "gesellschaft" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Toleranz", tr: "hoşgörü", ornek: "Toleranz ist die Grundlage des Zusammenlebens.", alan: "gesellschaft" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Herkunft", tr: "köken", ornek: "Seine Herkunft spielt dabei keine Rolle.", alan: "gesellschaft" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Konflikt", tr: "çatışma", ornek: "Der Konflikt wurde friedlich gelöst.", alan: "gesellschaft" },

    // ---------- Gesellschaft & Zusammenleben: fiiller ----------
    { seviye: "B2", tur: "fiil", de: "zusammenleben", tr: "birlikte yaşamak", ornek: "In dieser Stadt leben viele Kulturen friedlich zusammen.", alan: "gesellschaft" },
    { seviye: "B2", tur: "fiil", de: "sich integrieren", tr: "uyum sağlamak, entegre olmak", ornek: "Er hat sich schnell in die Gesellschaft integriert.", alan: "gesellschaft" },
    { seviye: "B1", tur: "fiil", de: "respektieren", tr: "saygı göstermek", ornek: "Man muss andere Meinungen respektieren.", alan: "gesellschaft" },
    { seviye: "B1", tur: "fiil", de: "akzeptieren", tr: "kabul etmek", ornek: "Ich akzeptiere deine Entscheidung.", alan: "gesellschaft" },
    { seviye: "B2", tur: "fiil", de: "diskriminieren", tr: "ayrımcılık yapmak", ornek: "Niemand darf wegen seiner Herkunft diskriminiert werden.", alan: "gesellschaft" },
    { seviye: "B2", tur: "fiil", de: "sich engagieren", tr: "aktif olarak görev almak, gönüllü çalışmak", ornek: "Sie engagiert sich ehrenamtlich für Geflüchtete.", alan: "gesellschaft" },
    { seviye: "B2", tur: "fiil", de: "sich einsetzen", tr: "uğruna çaba göstermek, arka çıkmak", ornek: "Er setzt sich für die Rechte der Kinder ein.", alan: "gesellschaft" },
    { seviye: "C1", tur: "fiil", de: "ausgrenzen", tr: "dışlamak", ornek: "Niemand sollte aus der Gruppe ausgegrenzt werden.", alan: "gesellschaft" },
    { seviye: "C1", tur: "fiil", de: "zusammenhalten", tr: "bir arada durmak, birbirini tutmak", ornek: "In schwierigen Zeiten hält die Familie zusammen.", alan: "gesellschaft" },

    // ---------- Gesellschaft & Zusammenleben: sıfatlar ----------
    { seviye: "B2", tur: "sifat", de: "gesellschaftlich", tr: "toplumsal", ornek: "Das ist ein gesellschaftliches Problem.", alan: "gesellschaft" },
    { seviye: "B2", tur: "sifat", de: "tolerant", tr: "hoşgörülü", ornek: "Sie ist sehr tolerant gegenüber anderen Meinungen.", alan: "gesellschaft" },
    { seviye: "B2", tur: "sifat", de: "multikulturell", tr: "çok kültürlü", ornek: "Zürich ist eine multikulturelle Stadt.", alan: "gesellschaft" },
    { seviye: "B2", tur: "sifat", de: "ehrenamtlich", tr: "gönüllü, karşılıksız", ornek: "Sie arbeitet ehrenamtlich im Verein.", alan: "gesellschaft" },

    // ---------- Politik & Recht: isimler ----------
    { seviye: "B1", tur: "isim", artikel: "die", de: "Regierung", tr: "hükümet", ornek: "Die Regierung hat ein neues Gesetz vorgeschlagen.", alan: "politik" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Gesetz", tr: "yasa", ornek: "Das Gesetz tritt nächstes Jahr in Kraft.", alan: "politik" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Wahl", tr: "seçim", ornek: "Die Wahl findet im Herbst statt.", alan: "politik" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Abstimmung", tr: "oylama", ornek: "Die Abstimmung findet am Sonntag statt.", alan: "politik" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Bürger", tr: "vatandaş", ornek: "Jeder Bürger hat das Recht zu wählen.", alan: "politik" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Verfassung", tr: "anayasa", ornek: "Die Verfassung garantiert die Grundrechte.", alan: "politik" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Recht", tr: "hukuk; (genel) hak", ornek: "Jeder Mensch hat das Recht auf Bildung.", alan: "politik" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Pflicht", tr: "yükümlülük, görev", ornek: "Es ist meine Pflicht, mich zu informieren.", alan: "politik" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Gericht", tr: "mahkeme", ornek: "Der Fall wird vor Gericht verhandelt.", alan: "politik" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Urteil", tr: "mahkeme hükmü", ornek: "Das Urteil wurde gestern verkündet.", alan: "politik" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Partei", tr: "parti", ornek: "Welche Partei wirst du wählen?", alan: "politik" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Demokratie", tr: "demokrasi", ornek: "Die Schweiz ist eine direkte Demokratie.", alan: "politik" },

    // ---------- Politik & Recht: fiiller ----------
    { seviye: "B1", tur: "fiil", de: "wählen", tr: "seçmek, oy vermek", ornek: "Am Sonntag dürfen alle Bürger wählen.", alan: "politik" },
    { seviye: "B2", tur: "fiil", de: "abstimmen", tr: "oylamaya katılmak, oy vermek", ornek: "Das Volk stimmt über das neue Gesetz ab.", alan: "politik" },
    { seviye: "B2", tur: "fiil", de: "beschließen", tr: "kararlaştırmak", ornek: "Der Stadtrat hat beschlossen, mehr Parkplätze zu bauen.", alan: "politik" },
    { seviye: "B1", tur: "fiil", de: "verbieten", tr: "yasaklamak", ornek: "Das Rauchen wurde in Restaurants verboten.", alan: "politik" },
    { seviye: "B2", tur: "fiil", de: "verabschieden", tr: "(yasayı) kabul etmek, yasalaştırmak", ornek: "Das Parlament hat das Gesetz verabschiedet.", alan: "politik" },
    { seviye: "C1", tur: "fiil", de: "verurteilen", tr: "mahkûm etmek", ornek: "Der Täter wurde zu einer Geldstrafe verurteilt.", alan: "politik" },
    { seviye: "B2", tur: "fiil", de: "klagen", tr: "dava açmak", ornek: "Er hat gegen die Firma geklagt.", alan: "politik" },
    { seviye: "B2", tur: "fiil", de: "fordern", tr: "talep etmek, istemek", ornek: "Die Bürger fordern mehr Transparenz.", alan: "politik" },
    { seviye: "C1", tur: "fiil", de: "vertreten", tr: "temsil etmek, (görüş) savunmak", ornek: "Der Abgeordnete vertritt seinen Wahlkreis.", alan: "politik" },

    // ---------- Politik & Recht: sıfatlar ----------
    { seviye: "B1", tur: "sifat", de: "politisch", tr: "siyasi", ornek: "Er interessiert sich für politische Themen.", alan: "politik" },
    { seviye: "B2", tur: "sifat", de: "gesetzlich", tr: "yasal", ornek: "Die gesetzliche Regelung wurde geändert.", alan: "politik" },
    { seviye: "B2", tur: "sifat", de: "demokratisch", tr: "demokratik", ornek: "Das Land hat ein demokratisches System.", alan: "politik" },
    { seviye: "B2", tur: "sifat", de: "gültig", tr: "geçerli", ornek: "Der Pass ist noch drei Jahre gültig.", alan: "politik" }
);


// ===== Parti 4: Wirtschaft & Geld, Medien & Kommunikation =====

KELIMELER.push(

    // ---------- Wirtschaft & Geld: isimler ----------
    { seviye: "B2", tur: "isim", artikel: "die", de: "Wirtschaft", tr: "ekonomi", ornek: "Die Wirtschaft wächst in diesem Jahr langsamer.", alan: "wirtschaft" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Konto", tr: "banka hesabı", ornek: "Ich habe ein Konto bei einer Schweizer Bank.", alan: "wirtschaft" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Steuer", tr: "vergi", ornek: "Die Steuer wird direkt vom Gehalt abgezogen.", alan: "wirtschaft" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Gewinn", tr: "kâr, kazanç", ornek: "Die Firma hat einen hohen Gewinn gemacht.", alan: "wirtschaft" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Verlust", tr: "zarar, kayıp", ornek: "Das Unternehmen hat einen großen Verlust gemacht.", alan: "wirtschaft" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Schulden", tr: "borçlar", ornek: "Er hat viele Schulden bei der Bank.", alan: "wirtschaft" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Kredit", tr: "kredi", ornek: "Wir haben einen Kredit für das Haus aufgenommen.", alan: "wirtschaft" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Versicherung", tr: "sigorta", ornek: "Die Versicherung zahlt den Schaden.", alan: "wirtschaft" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Inflation", tr: "enflasyon", ornek: "Die Inflation belastet viele Haushalte.", alan: "wirtschaft" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Nachfrage", tr: "talep", ornek: "Die Nachfrage nach Wohnungen steigt.", alan: "wirtschaft" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Unternehmen", tr: "şirket, girişim", ornek: "Das Unternehmen hat 200 Mitarbeiter.", alan: "wirtschaft" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Markt", tr: "pazar, piyasa", ornek: "Der Markt reagiert schnell auf neue Preise.", alan: "wirtschaft" },

    // ---------- Wirtschaft & Geld: fiiller ----------
    { seviye: "B1", tur: "fiil", de: "sparen", tr: "biriktirmek, tasarruf etmek", ornek: "Ich spare jeden Monat 200 Franken.", alan: "wirtschaft" },
    { seviye: "B1", tur: "fiil", de: "ausgeben", tr: "harcamak", ornek: "Sie gibt zu viel Geld für Kleidung aus.", alan: "wirtschaft" },
    { seviye: "B1", tur: "fiil", de: "bezahlen", tr: "ödemek", ornek: "Kann ich mit Karte bezahlen?", alan: "wirtschaft" },
    { seviye: "B1", tur: "fiil", de: "steigen", tr: "artmak, yükselmek", ornek: "Die Preise steigen jedes Jahr.", alan: "wirtschaft" },
    { seviye: "B2", tur: "fiil", de: "sinken", tr: "düşmek, azalmak", ornek: "Die Zinsen sind gesunken.", alan: "wirtschaft" },
    { seviye: "B2", tur: "fiil", de: "investieren", tr: "yatırım yapmak", ornek: "Er investiert in Aktien.", alan: "wirtschaft" },
    { seviye: "B2", tur: "fiil", de: "sich leisten", tr: "(maddi olarak) karşılayabilmek", ornek: "Ich kann mir kein Auto leisten.", alan: "wirtschaft" },
    { seviye: "B2", tur: "fiil", de: "zurückzahlen", tr: "geri ödemek", ornek: "Er muss den Kredit in fünf Jahren zurückzahlen.", alan: "wirtschaft" },
    { seviye: "B2", tur: "fiil", de: "abheben", tr: "(para) çekmek", ornek: "Ich hebe Bargeld am Automaten ab.", alan: "wirtschaft" },

    // ---------- Wirtschaft & Geld: sıfatlar ----------
    { seviye: "B1", tur: "sifat", de: "teuer", tr: "pahalı", ornek: "Das Essen im Restaurant ist sehr teuer.", alan: "wirtschaft" },
    { seviye: "B1", tur: "sifat", de: "billig", tr: "ucuz (kalitesiz çağrışımı olabilir)", ornek: "Das Handy war ziemlich billig.", alan: "wirtschaft" },
    { seviye: "B2", tur: "sifat", de: "wirtschaftlich", tr: "ekonomik", ornek: "Die wirtschaftliche Lage ist schwierig.", alan: "wirtschaft" },
    { seviye: "B2", tur: "sifat", de: "finanziell", tr: "mali", ornek: "Er hat finanzielle Probleme.", alan: "wirtschaft" },

    // ---------- Medien & Kommunikation: isimler ----------
    { seviye: "B1", tur: "isim", artikel: "die", de: "Nachricht", tr: "haber, mesaj", ornek: "Hast du die Nachricht schon gelesen?", alan: "medien" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Zeitung", tr: "gazete", ornek: "Er liest jeden Morgen die Zeitung.", alan: "medien" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Artikel", tr: "makale, yazı", ornek: "Ich habe einen interessanten Artikel gelesen.", alan: "medien" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Berichterstattung", tr: "haber kapsamı, habercilik", ornek: "Die Berichterstattung über den Fall war sehr ausführlich.", alan: "medien" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Schlagzeile", tr: "manşet", ornek: "Die Schlagzeile hat viel Aufmerksamkeit erregt.", alan: "medien" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Interview", tr: "röportaj", ornek: "Das Interview wurde gestern im Radio gesendet.", alan: "medien" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Quelle", tr: "kaynak", ornek: "Man sollte immer die Quelle prüfen.", alan: "medien" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Werbung", tr: "reklam", ornek: "Die Werbung erreicht vor allem junge Leute.", alan: "medien" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Netzwerk", tr: "ağ (sosyal ağ)", ornek: "In sozialen Netzwerken verbreiten sich Nachrichten schnell.", alan: "medien" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Meinungsfreiheit", tr: "ifade özgürlüğü", ornek: "Die Meinungsfreiheit ist ein Grundrecht.", alan: "medien" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Öffentlichkeit", tr: "kamuoyu, halk", ornek: "Die Öffentlichkeit wurde über den Vorfall informiert.", alan: "medien" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Kommunikation", tr: "iletişim", ornek: "Gute Kommunikation ist im Team wichtig.", alan: "medien" },

    // ---------- Medien & Kommunikation: fiiller ----------
    { seviye: "B1", tur: "fiil", de: "berichten", tr: "haber vermek, bildirmek", ornek: "Die Zeitung berichtet über den Unfall.", alan: "medien" },
    { seviye: "B1", tur: "fiil", de: "informieren", tr: "bilgilendirmek", ornek: "Bitte informieren Sie mich über die Änderungen.", alan: "medien" },
    { seviye: "B2", tur: "fiil", de: "veröffentlichen", tr: "yayımlamak", ornek: "Das Buch wurde letzte Woche veröffentlicht.", alan: "medien" },
    { seviye: "B2", tur: "fiil", de: "verbreiten", tr: "yaymak (sich verbreiten: yayılmak)", ornek: "Falschmeldungen verbreiten sich schnell.", alan: "medien" },
    { seviye: "B2", tur: "fiil", de: "sich äußern", tr: "görüş bildirmek", ornek: "Der Minister hat sich nicht dazu geäußert.", alan: "medien" },
    { seviye: "B2", tur: "fiil", de: "kommentieren", tr: "yorum yapmak", ornek: "Viele Nutzer kommentieren den Beitrag.", alan: "medien" },
    { seviye: "B2", tur: "fiil", de: "übertragen", tr: "canlı yayınlamak, aktarmak", ornek: "Das Spiel wird live im Fernsehen übertragen.", alan: "medien" },
    { seviye: "B2", tur: "fiil", de: "recherchieren", tr: "araştırmak (gazetecilikte)", ornek: "Der Journalist recherchiert die Hintergründe.", alan: "medien" },
    { seviye: "C1", tur: "fiil", de: "manipulieren", tr: "manipüle etmek", ornek: "Bilder können leicht manipuliert werden.", alan: "medien" },

    // ---------- Medien & Kommunikation: sıfatlar ----------
    { seviye: "B1", tur: "sifat", de: "aktuell", tr: "güncel", ornek: "Die aktuellen Nachrichten findest du online.", alan: "medien" },
    { seviye: "B2", tur: "sifat", de: "glaubwürdig", tr: "inandırıcı, güvenilir", ornek: "Die Quelle ist glaubwürdig.", alan: "medien" },
    { seviye: "B2", tur: "sifat", de: "objektiv", tr: "nesnel, tarafsız", ornek: "Ein guter Bericht sollte objektiv sein.", alan: "medien" },
    { seviye: "C1", tur: "sifat", de: "einseitig", tr: "tek taraflı", ornek: "Die Berichterstattung war einseitig.", alan: "medien" }
);


// ===== Parti 5: Technik & Wissenschaft, Gesundheit & Psyche =====

KELIMELER.push(

    // ---------- Technik & Wissenschaft: isimler ----------
    { seviye: "B2", tur: "isim", artikel: "die", de: "Forschung", tr: "araştırma", ornek: "Die Forschung hat in den letzten Jahren große Fortschritte gemacht.", alan: "technik" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Fortschritt", tr: "ilerleme", ornek: "Der technische Fortschritt verändert unseren Alltag.", alan: "technik" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Erfindung", tr: "icat", ornek: "Das Telefon war eine wichtige Erfindung.", alan: "technik" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Technologie", tr: "teknoloji", ornek: "Neue Technologien verändern die Arbeitswelt.", alan: "technik" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Experiment", tr: "deney", ornek: "Das Experiment wurde im Labor durchgeführt.", alan: "technik" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Wissenschaft", tr: "bilim", ornek: "Die Wissenschaft sucht Antworten auf viele Fragen.", alan: "technik" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Wissenschaftler", tr: "bilim insanı", ornek: "Der Wissenschaftler präsentiert seine Ergebnisse.", alan: "technik" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Gerät", tr: "cihaz", ornek: "Das Gerät funktioniert nicht mehr.", alan: "technik" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Studie", tr: "çalışma, araştırma raporu", ornek: "Eine neue Studie zeigt, dass Bewegung gesund ist.", alan: "technik" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Erkenntnis", tr: "bulgu, kavrayış", ornek: "Die Studie liefert neue Erkenntnisse.", alan: "technik" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Hypothese", tr: "hipotez, varsayım", ornek: "Die Hypothese wurde durch das Experiment bestätigt.", alan: "technik" },
    { seviye: "C1", tur: "isim", artikel: "das", de: "Verfahren", tr: "yöntem, işlem", ornek: "Das Verfahren ist einfach und kostengünstig.", alan: "technik" },

    // ---------- Technik & Wissenschaft: fiiller ----------
    { seviye: "B2", tur: "fiil", de: "forschen", tr: "araştırma yapmak", ornek: "Sie forscht an einem neuen Medikament.", alan: "technik" },
    { seviye: "B2", tur: "fiil", de: "erfinden", tr: "icat etmek", ornek: "Wer hat das Telefon erfunden?", alan: "technik" },
    { seviye: "B2", tur: "fiil", de: "untersuchen", tr: "incelemek, araştırmak", ornek: "Die Forscher untersuchen die Ursachen.", alan: "technik" },
    { seviye: "B2", tur: "fiil", de: "beweisen", tr: "kanıtlamak", ornek: "Die Studie beweist den Zusammenhang.", alan: "technik" },
    { seviye: "B2", tur: "fiil", de: "messen", tr: "ölçmek", ornek: "Man misst die Temperatur mit einem Thermometer.", alan: "technik" },
    { seviye: "B2", tur: "fiil", de: "ersetzen", tr: "yerine koymak, ikame etmek", ornek: "Roboter ersetzen in der Fabrik viele Arbeiter.", alan: "technik" },
    { seviye: "B1", tur: "fiil", de: "funktionieren", tr: "çalışmak, işlemek", ornek: "Der Drucker funktioniert nicht.", alan: "technik" },
    { seviye: "B2", tur: "fiil", de: "herstellen", tr: "üretmek", ornek: "Die Firma stellt Medikamente her.", alan: "technik" },
    { seviye: "B2", tur: "fiil", de: "bestätigen", tr: "doğrulamak, onaylamak", ornek: "Das Ergebnis bestätigt die Vermutung.", alan: "technik" },

    // ---------- Technik & Wissenschaft: sıfatlar ----------
    { seviye: "B2", tur: "sifat", de: "technisch", tr: "teknik", ornek: "Es gab ein technisches Problem.", alan: "technik" },
    { seviye: "B2", tur: "sifat", de: "wissenschaftlich", tr: "bilimsel", ornek: "Die Ergebnisse sind wissenschaftlich bewiesen.", alan: "technik" },
    { seviye: "B1", tur: "sifat", de: "modern", tr: "modern, çağdaş", ornek: "Das Labor ist sehr modern ausgestattet.", alan: "technik" },
    { seviye: "C1", tur: "sifat", de: "effizient", tr: "verimli", ornek: "Die neue Maschine arbeitet sehr effizient.", alan: "technik" },

    // ---------- Gesundheit & Psyche: isimler ----------
    { seviye: "B1", tur: "isim", artikel: "die", de: "Gesundheit", tr: "sağlık", ornek: "Gesundheit ist wichtiger als Geld.", alan: "gesundheit" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Krankheit", tr: "hastalık", ornek: "Die Krankheit dauerte drei Wochen.", alan: "gesundheit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Behandlung", tr: "tedavi", ornek: "Die Behandlung dauert mehrere Wochen.", alan: "gesundheit" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Medikament", tr: "ilaç", ornek: "Das Medikament muss dreimal täglich genommen werden.", alan: "gesundheit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Therapie", tr: "terapi", ornek: "Die Therapie hat ihr gut geholfen.", alan: "gesundheit" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Stress", tr: "stres", ornek: "Zu viel Stress ist ungesund.", alan: "gesundheit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Erholung", tr: "dinlenme, toparlanma", ornek: "Nach der Arbeit brauche ich etwas Erholung.", alan: "gesundheit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Ernährung", tr: "beslenme", ornek: "Eine gesunde Ernährung ist wichtig.", alan: "gesundheit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Bewegung", tr: "hareket, egzersiz", ornek: "Regelmäßige Bewegung hält fit.", alan: "gesundheit" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Symptom", tr: "belirti", ornek: "Fieber ist ein typisches Symptom.", alan: "gesundheit" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Vorsorge", tr: "önleyici sağlık hizmeti, önlem", ornek: "Die Vorsorge kann viele Krankheiten verhindern.", alan: "gesundheit" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Belastung", tr: "yük, baskı", ornek: "Die psychische Belastung im Beruf nimmt zu.", alan: "gesundheit" },

    // ---------- Gesundheit & Psyche: fiiller ----------
    { seviye: "B2", tur: "fiil", de: "sich erholen", tr: "dinlenmek, toparlanmak", ornek: "Ich muss mich nach der Arbeit erholen.", alan: "gesundheit" },
    { seviye: "B2", tur: "fiil", de: "behandeln", tr: "tedavi etmek", ornek: "Der Arzt behandelt den Patienten.", alan: "gesundheit" },
    { seviye: "B2", tur: "fiil", de: "heilen", tr: "iyileşmek, iyileştirmek", ornek: "Die Wunde heilt langsam.", alan: "gesundheit" },
    { seviye: "C1", tur: "fiil", de: "vorbeugen", tr: "önlemek", ornek: "Sport kann vielen Krankheiten vorbeugen.", alan: "gesundheit" },
    { seviye: "B2", tur: "fiil", de: "sich ernähren", tr: "beslenmek", ornek: "Sie ernährt sich vegetarisch.", alan: "gesundheit" },
    { seviye: "B2", tur: "fiil", de: "leiden", tr: "acı çekmek, rahatsızlığı olmak", ornek: "Er leidet an Rückenschmerzen.", alan: "gesundheit" },
    { seviye: "B2", tur: "fiil", de: "sich verletzen", tr: "yaralanmak", ornek: "Er hat sich beim Sport verletzt.", alan: "gesundheit" },
    { seviye: "B2", tur: "fiil", de: "sich entspannen", tr: "gevşemek, rahatlamak", ornek: "Ich entspanne mich bei Musik.", alan: "gesundheit" },
    { seviye: "B2", tur: "fiil", de: "impfen", tr: "aşılamak", ornek: "Kinder werden gegen Masern geimpft.", alan: "gesundheit" },

    // ---------- Gesundheit & Psyche: sıfatlar ----------
    { seviye: "B1", tur: "sifat", de: "gesund", tr: "sağlıklı", ornek: "Gemüse ist gesund.", alan: "gesundheit" },
    { seviye: "B1", tur: "sifat", de: "krank", tr: "hasta", ornek: "Er ist seit einer Woche krank.", alan: "gesundheit" },
    { seviye: "B2", tur: "sifat", de: "psychisch", tr: "ruhsal, psikolojik", ornek: "Psychische Gesundheit ist genauso wichtig wie körperliche.", alan: "gesundheit" },
    { seviye: "B2", tur: "sifat", de: "erschöpft", tr: "bitkin, tükenmiş", ornek: "Nach dem Marathon war sie völlig erschöpft.", alan: "gesundheit" }
);


// ===== Parti 6: Umwelt & Natur, Kultur & Freizeit =====

KELIMELER.push(

    // ---------- Umwelt & Natur: isimler ----------
    { seviye: "B1", tur: "isim", artikel: "die", de: "Umwelt", tr: "çevre", ornek: "Wir müssen die Umwelt besser schützen.", alan: "umwelt" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Klima", tr: "iklim", ornek: "Das Klima verändert sich weltweit.", alan: "umwelt" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Klimawandel", tr: "iklim değişikliği", ornek: "Der Klimawandel betrifft alle Länder.", alan: "umwelt" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Energie", tr: "enerji", ornek: "Erneuerbare Energie wird immer wichtiger.", alan: "umwelt" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Müll", tr: "çöp", ornek: "In der Schweiz wird der Müll streng getrennt.", alan: "umwelt" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Umweltschutz", tr: "çevre koruma", ornek: "Umweltschutz beginnt im Alltag.", alan: "umwelt" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Verschmutzung", tr: "kirlilik", ornek: "Die Verschmutzung der Meere ist ein großes Problem.", alan: "umwelt" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Nachhaltigkeit", tr: "sürdürülebilirlik", ornek: "Nachhaltigkeit spielt bei der Planung eine große Rolle.", alan: "umwelt" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Ressource", tr: "doğal zenginlik, hammadde", ornek: "Wasser ist eine wertvolle Ressource.", alan: "umwelt" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Verbrauch", tr: "tüketim", ornek: "Der Verbrauch von Strom steigt jedes Jahr.", alan: "umwelt" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Gletscher", tr: "buzul", ornek: "Der Gletscher wird jedes Jahr kleiner.", alan: "umwelt" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Erderwärmung", tr: "küresel ısınma", ornek: "Die Erderwärmung führt zu schmelzenden Gletschern.", alan: "umwelt" },

    // ---------- Umwelt & Natur: fiiller ----------
    { seviye: "B1", tur: "fiil", de: "schützen", tr: "korumak", ornek: "Wir müssen die Natur schützen.", alan: "umwelt" },
    { seviye: "B2", tur: "fiil", de: "verschmutzen", tr: "kirletmek", ornek: "Fabriken verschmutzen die Luft.", alan: "umwelt" },
    { seviye: "B1", tur: "fiil", de: "trennen", tr: "ayırmak", ornek: "Wir trennen den Müll nach Papier, Glas und Plastik.", alan: "umwelt" },
    { seviye: "B2", tur: "fiil", de: "recyceln", tr: "geri dönüştürmek", ornek: "Glas lässt sich gut recyceln.", alan: "umwelt" },
    { seviye: "B2", tur: "fiil", de: "verbrauchen", tr: "tüketmek", ornek: "Das Gerät verbraucht viel Strom.", alan: "umwelt" },
    { seviye: "B2", tur: "fiil", de: "schmelzen", tr: "erimek", ornek: "Die Gletscher schmelzen immer schneller.", alan: "umwelt" },
    { seviye: "B2", tur: "fiil", de: "aussterben", tr: "soyu tükenmek", ornek: "Viele Tierarten sterben aus.", alan: "umwelt" },
    { seviye: "B2", tur: "fiil", de: "reduzieren", tr: "azaltmak", ornek: "Wir wollen den Energieverbrauch reduzieren.", alan: "umwelt" },
    { seviye: "B2", tur: "fiil", de: "belasten", tr: "yük olmak, zarar vermek", ornek: "Der Verkehr belastet die Umwelt.", alan: "umwelt" },

    // ---------- Umwelt & Natur: sıfatlar ----------
    { seviye: "B2", tur: "sifat", de: "umweltfreundlich", tr: "çevre dostu", ornek: "Fahrräder sind ein umweltfreundliches Verkehrsmittel.", alan: "umwelt" },
    { seviye: "B2", tur: "sifat", de: "nachhaltig", tr: "sürdürülebilir", ornek: "Wir wollen nachhaltiger leben.", alan: "umwelt" },
    { seviye: "B2", tur: "sifat", de: "erneuerbar", tr: "yenilenebilir", ornek: "Solarenergie ist eine erneuerbare Energiequelle.", alan: "umwelt" },
    { seviye: "B2", tur: "sifat", de: "schädlich", tr: "zararlı", ornek: "Plastik ist schädlich für die Umwelt.", alan: "umwelt" },

    // ---------- Kultur & Freizeit: isimler ----------
    { seviye: "B1", tur: "isim", artikel: "die", de: "Kunst", tr: "sanat", ornek: "Er interessiert sich für moderne Kunst.", alan: "kultur" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Museum", tr: "müze", ornek: "Das Museum ist sonntags geöffnet.", alan: "kultur" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Ausstellung", tr: "sergi", ornek: "Die Ausstellung zeigt Werke junger Künstler.", alan: "kultur" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Konzert", tr: "konser", ornek: "Wir gehen am Samstag zu einem Konzert.", alan: "kultur" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Künstler", tr: "sanatçı", ornek: "Der Künstler stellt seine Bilder aus.", alan: "kultur" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Theater", tr: "tiyatro", ornek: "Wir waren gestern im Theater.", alan: "kultur" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Veranstaltung", tr: "etkinlik", ornek: "Die Veranstaltung findet im Freien statt.", alan: "kultur" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Hobby", tr: "hobi", ornek: "Mein Hobby ist Fotografieren.", alan: "kultur" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Reise", tr: "seyahat", ornek: "Die Reise nach Italien war wunderbar.", alan: "kultur" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Urlaub", tr: "tatil", ornek: "Im Urlaub möchte ich mich erholen.", alan: "kultur" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Sehenswürdigkeit", tr: "görülmeye değer yer", ornek: "Die Sehenswürdigkeiten der Stadt kann man zu Fuß besuchen.", alan: "kultur" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Erlebnis", tr: "yaşanmış olay, anı", ornek: "Die Reise war ein unvergessliches Erlebnis.", alan: "kultur" },

    // ---------- Kultur & Freizeit: fiiller ----------
    { seviye: "B2", tur: "fiil", de: "besichtigen", tr: "gezmek (müze, yapı)", ornek: "Wir besichtigen morgen das Schloss.", alan: "kultur" },
    { seviye: "B2", tur: "fiil", de: "verreisen", tr: "seyahate çıkmak", ornek: "Wir verreisen im Sommer nach Spanien.", alan: "kultur" },
    { seviye: "B2", tur: "fiil", de: "sich amüsieren", tr: "eğlenmek", ornek: "Wir haben uns auf der Party gut amüsiert.", alan: "kultur" },
    { seviye: "B2", tur: "fiil", de: "genießen", tr: "keyfini çıkarmak", ornek: "Ich genieße den Abend am See.", alan: "kultur" },
    { seviye: "B1", tur: "fiil", de: "besuchen", tr: "ziyaret etmek", ornek: "Am Wochenende besuchen wir ein Museum.", alan: "kultur" },
    { seviye: "B2", tur: "fiil", de: "ausstellen", tr: "sergilemek", ornek: "Das Museum stellt Bilder aus dem 19. Jahrhundert aus.", alan: "kultur" },
    { seviye: "C1", tur: "fiil", de: "aufführen", tr: "sahnelemek, oynamak (tiyatro)", ornek: "Das Theater führt ein neues Stück auf.", alan: "kultur" },
    { seviye: "B1", tur: "fiil", de: "sich verabreden", tr: "buluşmak için sözleşmek", ornek: "Ich habe mich mit Freunden zum Essen verabredet.", alan: "kultur" },
    { seviye: "B1", tur: "fiil", de: "wandern", tr: "doğa yürüyüşü yapmak", ornek: "Im Sommer wandern wir gern in den Bergen.", alan: "kultur" },

    // ---------- Kultur & Freizeit: sıfatlar ----------
    { seviye: "B2", tur: "sifat", de: "kulturell", tr: "kültürel", ornek: "Die Stadt hat ein reiches kulturelles Angebot.", alan: "kultur" },
    { seviye: "B2", tur: "sifat", de: "beliebt", tr: "popüler, sevilen", ornek: "Das Museum ist bei Touristen sehr beliebt.", alan: "kultur" },
    { seviye: "B1", tur: "sifat", de: "spannend", tr: "heyecan verici, sürükleyici", ornek: "Der Film war sehr spannend.", alan: "kultur" },
    { seviye: "B2", tur: "sifat", de: "unvergesslich", tr: "unutulmaz", ornek: "Es war ein unvergesslicher Abend.", alan: "kultur" }
);


// ===== C1 turu, parti 1 =====

KELIMELER.push(

    // ---------- Argumentieren & Denken ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Auswirkung", tr: "etki, sonuç (yansıma)", ornek: "Die Auswirkungen der Entscheidung sind noch nicht absehbar.", alan: "denken" },
    { seviye: "C1", tur: "fiil", de: "abwägen", tr: "tartmak, değerlendirmek", ornek: "Man muss Vor- und Nachteile sorgfältig abwägen.", alan: "denken" },
    { seviye: "C1", tur: "fiil", de: "hinterfragen", tr: "sorgulamak, eleştirel incelemek", ornek: "Man sollte Behauptungen kritisch hinterfragen.", alan: "denken" },
    { seviye: "C1", tur: "sifat", de: "plausibel", tr: "makul, akla yatkın", ornek: "Die Erklärung klingt plausibel.", alan: "denken" },

    // ---------- Arbeit & Beruf ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Anforderung", tr: "gereklilik, talep", ornek: "Die Anforderungen an die Bewerber sind hoch.", alan: "arbeit" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Qualifikation", tr: "nitelik, yeterlilik", ornek: "Für diese Stelle braucht man eine entsprechende Qualifikation.", alan: "arbeit" },
    { seviye: "C1", tur: "fiil", de: "gewährleisten", tr: "güvence altına almak, sağlamak", ornek: "Der Arbeitgeber muss die Sicherheit der Mitarbeiter gewährleisten.", alan: "arbeit" },
    { seviye: "C1", tur: "fiil", de: "ausscheiden", tr: "ayrılmak, görevden çekilmek", ornek: "Er scheidet zum Jahresende aus der Firma aus.", alan: "arbeit" },

    // ---------- Bildung & Studium ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Kompetenz", tr: "yetkinlik, beceri", ornek: "Soziale Kompetenzen werden im Beruf immer wichtiger.", alan: "bildung" },
    { seviye: "C1", tur: "fiil", de: "vermitteln", tr: "aktarmak, öğretmek, aracılık etmek", ornek: "Gute Lehrer vermitteln Wissen auf verständliche Weise.", alan: "bildung" },
    { seviye: "C1", tur: "fiil", de: "sich aneignen", tr: "edinmek, özümsemek (bilgi, beceri)", ornek: "Er hat sich in kurzer Zeit viel Wissen angeeignet.", alan: "bildung" },
    { seviye: "C1", tur: "sifat", de: "fundiert", tr: "sağlam temelli", ornek: "Er hat fundierte Kenntnisse in Mathematik.", alan: "bildung" },

    // ---------- Gesellschaft & Zusammenleben ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Chancengleichheit", tr: "fırsat eşitliği", ornek: "Chancengleichheit ist ein wichtiges Ziel der Bildungspolitik.", alan: "gesellschaft" },
    { seviye: "C1", tur: "isim", artikel: "der", de: "Wandel", tr: "değişim, dönüşüm", ornek: "Der gesellschaftliche Wandel verläuft immer schneller.", alan: "gesellschaft" },
    { seviye: "C1", tur: "fiil", de: "benachteiligen", tr: "dezavantajlı duruma sokmak", ornek: "Niemand darf wegen seines Geschlechts benachteiligt werden.", alan: "gesellschaft" },
    { seviye: "C1", tur: "sifat", de: "umstritten", tr: "tartışmalı", ornek: "Das Gesetz ist in der Bevölkerung umstritten.", alan: "gesellschaft" },

    // ---------- Politik & Recht ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Gesetzgebung", tr: "yasama", ornek: "Die Gesetzgebung liegt beim Parlament.", alan: "politik" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Zuständigkeit", tr: "yetki alanı, sorumluluk alanı", ornek: "Für die Schulen liegt die Zuständigkeit bei den Kantonen.", alan: "politik" },
    { seviye: "C1", tur: "fiil", de: "einhalten", tr: "uymak (kural, süre)", ornek: "Alle müssen die Vorschriften einhalten.", alan: "politik" },
    { seviye: "C1", tur: "fiil", de: "umsetzen", tr: "uygulamaya koymak, hayata geçirmek", ornek: "Das Gesetz wird schrittweise umgesetzt.", alan: "politik" },

    // ---------- Wohnen & Alltag ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Frist", tr: "süre, son tarih", ornek: "Die Frist für die Anmeldung läuft nächste Woche ab.", alan: "alltag" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Verpflichtung", tr: "yükümlülük", ornek: "Der Mietvertrag enthält mehrere Verpflichtungen.", alan: "alltag" },
    { seviye: "C1", tur: "fiil", de: "beantragen", tr: "başvurmak, talep etmek (resmî)", ornek: "Ich beantrage einen neuen Reisepass.", alan: "alltag" },

    // ---------- Wirtschaft & Geld ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Rezession", tr: "resesyon, durgunluk", ornek: "Die Wirtschaft befindet sich in einer Rezession.", alan: "wirtschaft" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Rendite", tr: "getiri", ornek: "Die Rendite dieser Geldanlage ist niedrig.", alan: "wirtschaft" },
    { seviye: "C1", tur: "isim", artikel: "der", de: "Wettbewerb", tr: "rekabet, yarışma", ornek: "Der Wettbewerb zwingt die Firmen zu niedrigeren Preisen.", alan: "wirtschaft" },
    { seviye: "C1", tur: "fiil", de: "haften", tr: "hukuken sorumlu olmak", ornek: "Der Verkäufer haftet für Mängel.", alan: "wirtschaft" },

    // ---------- Medien & Kommunikation ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Falschmeldung", tr: "yalan haber", ornek: "Falschmeldungen verbreiten sich im Netz besonders schnell.", alan: "medien" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Reichweite", tr: "erişim, kapsama alanı", ornek: "Der Beitrag hatte eine große Reichweite.", alan: "medien" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Zensur", tr: "sansür", ornek: "Die Zensur schränkt die Pressefreiheit ein.", alan: "medien" },
    { seviye: "C1", tur: "fiil", de: "zitieren", tr: "alıntılamak", ornek: "Der Autor zitiert mehrere Studien.", alan: "medien" },

    // ---------- Technik & Wissenschaft ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Innovation", tr: "yenilik, inovasyon", ornek: "Innovationen treiben die Wirtschaft an.", alan: "technik" },
    { seviye: "C1", tur: "isim", artikel: "der", de: "Durchbruch", tr: "atılım, çığır açan gelişme", ornek: "Den Forschern gelang ein medizinischer Durchbruch.", alan: "technik" },
    { seviye: "C1", tur: "fiil", de: "auswerten", tr: "değerlendirmek, analiz etmek (veri)", ornek: "Die Daten werden mit einer Software ausgewertet.", alan: "technik" },

    // ---------- Gesundheit & Psyche ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Diagnose", tr: "teşhis", ornek: "Die Diagnose war für die Familie ein Schock.", alan: "gesundheit" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Beschwerden", tr: "şikâyetler, rahatsızlık belirtileri", ornek: "Er hat seit Tagen Beschwerden im Rücken.", alan: "gesundheit" },
    { seviye: "C1", tur: "fiil", de: "verschreiben", tr: "reçete etmek", ornek: "Der Arzt hat mir Tabletten verschrieben.", alan: "gesundheit" },
    { seviye: "C1", tur: "sifat", de: "chronisch", tr: "kronik", ornek: "Er leidet an einer chronischen Krankheit.", alan: "gesundheit" },

    // ---------- Umwelt & Natur ----------
    { seviye: "C1", tur: "isim", artikel: "der", de: "Ausstoß", tr: "emisyon, salınım", ornek: "Der Ausstoß von CO2 muss deutlich sinken.", alan: "umwelt" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Abholzung", tr: "ağaç kesimi, ormansızlaşma", ornek: "Die Abholzung des Regenwaldes bedroht viele Tierarten.", alan: "umwelt" },
    { seviye: "C1", tur: "isim", artikel: "der", de: "Lebensraum", tr: "yaşam alanı", ornek: "Viele Tiere verlieren ihren Lebensraum.", alan: "umwelt" },
    { seviye: "C1", tur: "fiil", de: "eindämmen", tr: "sınırlamak, önüne geçmek", ornek: "Man will die Verschmutzung der Flüsse eindämmen.", alan: "umwelt" },

    // ---------- Kultur & Freizeit ----------
    { seviye: "C1", tur: "isim", artikel: "das", de: "Publikum", tr: "izleyici kitlesi, seyirci", ornek: "Das Publikum applaudierte begeistert.", alan: "kultur" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Aufführung", tr: "gösteri, temsil", ornek: "Die Aufführung dauerte fast drei Stunden.", alan: "kultur" },
    { seviye: "C1", tur: "fiil", de: "eintauchen", tr: "dalmak, kendini kaptırmak", ornek: "Beim Reisen kann man in eine andere Kultur eintauchen.", alan: "kultur" },
    { seviye: "C1", tur: "sifat", de: "beeindruckend", tr: "etkileyici", ornek: "Die Aufführung war beeindruckend.", alan: "kultur" },

    // ---------- IT & Informatik ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Verschlüsselung", tr: "şifreleme", ornek: "Die Verschlüsselung schützt die Nachrichten vor fremdem Zugriff.", alan: "it" },
    { seviye: "C1", tur: "isim", artikel: "der", de: "Zugriff", tr: "erişim", ornek: "Der Zugriff auf die Datei ist nur für Administratoren erlaubt.", alan: "it" },
    { seviye: "C1", tur: "fiil", de: "zugreifen", tr: "erişmek", ornek: "Nur berechtigte Nutzer können auf die Daten zugreifen.", alan: "it" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Benutzeroberfläche", tr: "kullanıcı arayüzü", ornek: "Die Benutzeroberfläche ist übersichtlich gestaltet.", alan: "it" }
);


// ===== C1 turu, parti 2 =====

KELIMELER.push(

    // ---------- Argumentieren & Denken ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Schlussfolgerung", tr: "sonuç çıkarma, çıkarım", ornek: "Aus den Daten lässt sich eine klare Schlussfolgerung ziehen.", alan: "denken" },
    { seviye: "C1", tur: "isim", artikel: "der", de: "Widerspruch", tr: "çelişki; itiraz", ornek: "Seine Aussagen stehen im Widerspruch zueinander.", alan: "denken" },
    { seviye: "C1", tur: "fiil", de: "voraussetzen", tr: "varsaymak, ön koşul olarak gerektirmek", ornek: "Diese Stelle setzt Berufserfahrung voraus.", alan: "denken" },
    { seviye: "C1", tur: "sifat", de: "schlüssig", tr: "tutarlı, mantıklı", ornek: "Seine Argumentation ist schlüssig.", alan: "denken" },

    // ---------- Arbeit & Beruf ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Zusammenarbeit", tr: "işbirliği", ornek: "Die Zusammenarbeit im Team funktioniert sehr gut.", alan: "arbeit" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Kündigungsfrist", tr: "fesih süresi", ornek: "Die Kündigungsfrist beträgt drei Monate.", alan: "arbeit" },
    { seviye: "C1", tur: "fiil", de: "delegieren", tr: "görev devretmek", ornek: "Als Teamleiter muss man Aufgaben delegieren.", alan: "arbeit" },
    { seviye: "C1", tur: "sifat", de: "belastbar", tr: "baskıya dayanıklı", ornek: "Wir suchen eine belastbare Mitarbeiterin.", alan: "arbeit" },

    // ---------- Bildung & Studium ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Lehrkraft", tr: "öğretmen, eğitmen (resmî)", ornek: "Die Schule sucht eine neue Lehrkraft.", alan: "bildung" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Zulassung", tr: "kabul, izin", ornek: "Für diesen Studiengang ist eine Zulassung erforderlich.", alan: "bildung" },
    { seviye: "C1", tur: "fiil", de: "vertiefen", tr: "derinleştirmek", ornek: "Im Master kann man sein Wissen vertiefen.", alan: "bildung" },
    { seviye: "C1", tur: "sifat", de: "eigenständig", tr: "bağımsız, kendi başına", ornek: "Das Studium erfordert eigenständiges Arbeiten.", alan: "bildung" },

    // ---------- Gesellschaft & Zusammenleben ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Einstellung", tr: "tutum, bakış açısı (ayrıca: işe alma)", ornek: "Seine positive Einstellung beeindruckt mich.", alan: "gesellschaft" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Ungleichheit", tr: "eşitsizlik", ornek: "Die soziale Ungleichheit nimmt zu.", alan: "gesellschaft" },
    { seviye: "C1", tur: "fiil", de: "sich abgrenzen", tr: "kendini ayırmak, sınır çizmek", ornek: "Er grenzt sich bewusst von dieser Meinung ab.", alan: "gesellschaft" },
    { seviye: "C1", tur: "sifat", de: "solidarisch", tr: "dayanışmacı", ornek: "In der Krise zeigten sich viele Menschen solidarisch.", alan: "gesellschaft" },

    // ---------- Wirtschaft & Geld ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Konjunktur", tr: "ekonomik konjonktür", ornek: "Die Konjunktur erholt sich langsam.", alan: "wirtschaft" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Bilanz", tr: "bilanço, dengeli değerlendirme", ornek: "Die Bilanz des Unternehmens ist positiv.", alan: "wirtschaft" },
    { seviye: "C1", tur: "fiil", de: "subventionieren", tr: "sübvanse etmek, devlet desteği vermek", ornek: "Der Staat subventioniert die Landwirtschaft.", alan: "wirtschaft" },
    { seviye: "C1", tur: "sifat", de: "rentabel", tr: "kârlı", ornek: "Das Geschäft ist nicht mehr rentabel.", alan: "wirtschaft" },

    // ---------- Medien & Kommunikation ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Glaubwürdigkeit", tr: "güvenilirlik", ornek: "Die Glaubwürdigkeit der Quelle ist entscheidend.", alan: "medien" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Darstellung", tr: "betimleme, sunum", ornek: "Die Darstellung des Konflikts in den Medien war einseitig.", alan: "medien" },
    { seviye: "C1", tur: "fiil", de: "aufklären", tr: "aydınlatmak, bilgilendirmek", ornek: "Die Kampagne will über die Risiken aufklären.", alan: "medien" },
    { seviye: "C1", tur: "sifat", de: "voreingenommen", tr: "önyargılı, taraflı", ornek: "Der Journalist wirkt voreingenommen.", alan: "medien" },

    // ---------- Technik & Wissenschaft ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Anwendung", tr: "uygulama, kullanım", ornek: "Die Anwendung der neuen Technik ist einfach.", alan: "technik" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Leistung", tr: "performans, başarı", ornek: "Die Leistung des Motors wurde deutlich verbessert.", alan: "technik" },
    { seviye: "C1", tur: "fiil", de: "optimieren", tr: "optimize etmek", ornek: "Die Firma optimiert ihre Prozesse.", alan: "technik" },

    // ---------- Gesundheit & Psyche ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Genesung", tr: "iyileşme", ornek: "Wir wünschen Ihnen gute Genesung.", alan: "gesundheit" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Nebenwirkung", tr: "yan etki", ornek: "Das Medikament hat kaum Nebenwirkungen.", alan: "gesundheit" },
    { seviye: "C1", tur: "fiil", de: "lindern", tr: "hafifletmek", ornek: "Die Tabletten lindern die Schmerzen.", alan: "gesundheit" },
    { seviye: "C1", tur: "sifat", de: "ansteckend", tr: "bulaşıcı", ornek: "Die Grippe ist sehr ansteckend.", alan: "gesundheit" },

    // ---------- Umwelt & Natur ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Artenvielfalt", tr: "biyolojik çeşitlilik", ornek: "Die Artenvielfalt geht weltweit zurück.", alan: "umwelt" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Dürre", tr: "kuraklık", ornek: "Die Dürre hat die Ernte zerstört.", alan: "umwelt" },
    { seviye: "C1", tur: "fiil", de: "aufforsten", tr: "yeniden ağaçlandırmak", ornek: "Man will die abgeholzten Flächen wieder aufforsten.", alan: "umwelt" },
    { seviye: "C1", tur: "sifat", de: "klimaneutral", tr: "iklim nötr", ornek: "Die Firma will klimaneutral werden.", alan: "umwelt" },

    // ---------- Kultur & Freizeit ----------
    { seviye: "C1", tur: "isim", artikel: "das", de: "Brauchtum", tr: "gelenek, görenek", ornek: "In vielen Dörfern wird das Brauchtum bis heute gepflegt.", alan: "kultur" },
    { seviye: "C1", tur: "isim", artikel: "das", de: "Kulturerbe", tr: "kültürel miras", ornek: "Die Altstadt gehört zum Kulturerbe der Region.", alan: "kultur" },
    { seviye: "C1", tur: "fiil", de: "würdigen", tr: "takdir etmek, değerini teslim etmek", ornek: "Der Künstler wurde für sein Lebenswerk gewürdigt.", alan: "kultur" },
    { seviye: "C1", tur: "sifat", de: "vielseitig", tr: "çok yönlü", ornek: "Sie ist eine vielseitige Künstlerin.", alan: "kultur" },

    // ---------- IT & Informatik ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Plattform", tr: "platform", ornek: "Die Plattform bietet viele Funktionen.", alan: "it" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Sicherheitslücke", tr: "güvenlik açığı", ornek: "Die Sicherheitslücke wurde schnell geschlossen.", alan: "it" },
    { seviye: "C1", tur: "fiil", de: "vernetzen", tr: "ağa bağlamak, birbirine bağlamak", ornek: "Geräte werden zunehmend miteinander vernetzt.", alan: "it" },
    { seviye: "C1", tur: "fiil", de: "automatisieren", tr: "otomatikleştirmek", ornek: "Viele Prozesse lassen sich automatisieren.", alan: "it" },

    // ---------- Politik & Recht ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Verhandlung", tr: "müzakere; duruşma", ornek: "Die Verhandlungen dauern schon mehrere Wochen.", alan: "politik" },
    { seviye: "C1", tur: "isim", artikel: "der", de: "Entwurf", tr: "taslak", ornek: "Der Entwurf des Gesetzes wird im Parlament diskutiert.", alan: "politik" },
    { seviye: "C1", tur: "fiil", de: "genehmigen", tr: "onaylamak, izin vermek (resmî)", ornek: "Die Behörde hat den Antrag genehmigt.", alan: "politik" },
    { seviye: "C1", tur: "sifat", de: "rechtskräftig", tr: "kesinleşmiş (hüküm)", ornek: "Das Urteil ist inzwischen rechtskräftig.", alan: "politik" },

    // ---------- Wohnen & Alltag ----------
    { seviye: "C1", tur: "isim", artikel: "die", de: "Behörde", tr: "resmî kurum, makam", ornek: "Die Behörde bearbeitet den Antrag.", alan: "alltag" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Kaution", tr: "depozito, güvence bedeli", ornek: "Bei der Wohnung muss man eine Kaution hinterlegen.", alan: "alltag" },
    { seviye: "C1", tur: "sifat", de: "fristgerecht", tr: "süresi içinde", ornek: "Der Mietvertrag wurde fristgerecht gekündigt.", alan: "alltag" }
);


// ===== 100'e tamamlama: IT & Informatik =====

KELIMELER.push(

    // ---------- IT & Informatik: isimler ----------
    { seviye: "B1", tur: "isim", artikel: "der", de: "Computer", tr: "bilgisayar", ornek: "Mein Computer startet sehr langsam.", alan: "it" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Bildschirm", tr: "ekran", ornek: "Der Bildschirm ist zu hell eingestellt.", alan: "it" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Tastatur", tr: "klavye", ornek: "Die Tastatur ist verschmutzt.", alan: "it" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Maus", tr: "fare (bilgisayar)", ornek: "Ich arbeite lieber mit einer Maus als mit dem Touchpad.", alan: "it" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Drucker", tr: "yazıcı", ornek: "Der Drucker hat kein Papier mehr.", alan: "it" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Internet", tr: "internet", ornek: "Ohne Internet kann ich nicht arbeiten.", alan: "it" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Webseite", tr: "web sitesi", ornek: "Die Webseite lädt sehr langsam.", alan: "it" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Browser", tr: "tarayıcı", ornek: "Ich öffne die Seite im Browser.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Suchmaschine", tr: "arama motoru", ornek: "Eine Suchmaschine zeigt in Sekunden passende Ergebnisse.", alan: "it" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "E-Mail", tr: "e-posta", ornek: "Ich schicke dir die Unterlagen per E-Mail.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Anhang", tr: "ek dosya (e-posta)", ornek: "Bitte öffne den Anhang der E-Mail.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Speicher", tr: "bellek, depolama alanı", ornek: "Der Speicher meines Handys ist fast voll.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Festplatte", tr: "sabit disk", ornek: "Auf der Festplatte ist kein Platz mehr.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Betriebssystem", tr: "işletim sistemi", ornek: "Das Betriebssystem muss aktualisiert werden.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Update", tr: "güncelleme", ornek: "Das Update dauert etwa zehn Minuten.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Cloud", tr: "bulut (depolama)", ornek: "Die Fotos sind in der Cloud gespeichert.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Backup", tr: "yedek", ornek: "Ich mache jede Woche ein Backup.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Nutzer", tr: "kullanıcı", ornek: "Der Nutzer muss sich zuerst einloggen.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Benutzerkonto", tr: "kullanıcı hesabı", ornek: "Ich habe ein Benutzerkonto angelegt.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Eingabe", tr: "veri girişi", ornek: "Die Eingabe wurde nicht erkannt.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Ausgabe", tr: "çıktı (program, cihaz)", ornek: "Die Ausgabe des Programms ist falsch.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Funktion", tr: "işlev, fonksiyon", ornek: "Diese Funktion berechnet den Durchschnitt.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Variable", tr: "değişken", ornek: "Die Variable speichert eine Zahl.", alan: "it" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Schleife", tr: "döngü", ornek: "Die Schleife wird zehnmal durchlaufen.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Befehl", tr: "komut", ornek: "Mit diesem Befehl startet man das Programm.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Code", tr: "kod", ornek: "Der Code ist schwer zu lesen.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Entwickler", tr: "geliştirici, yazılımcı", ornek: "Der Entwickler arbeitet an einer neuen App.", alan: "it" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "App", tr: "mobil uygulama", ornek: "Die App ist kostenlos.", alan: "it" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Daten", tr: "veriler", ornek: "Die Daten werden verschlüsselt übertragen.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Hardware", tr: "donanım", ornek: "Die Hardware ist schon ziemlich alt.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Zugang", tr: "giriş izni", ornek: "Ohne Passwort bekommst du keinen Zugang.", alan: "it" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Ordner", tr: "klasör", ornek: "Ich lege die Datei in einen neuen Ordner.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Absturz", tr: "çökme", ornek: "Der Absturz hat alle ungespeicherten Daten gelöscht.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Störung", tr: "arıza, aksaklık", ornek: "Es gibt eine technische Störung.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Virus", tr: "virüs", ornek: "Der Virus hat den Computer infiziert.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Hacker", tr: "bilgisayar korsanı", ornek: "Ein Hacker hat sich Zugang zum System verschafft.", alan: "it" },
    { seviye: "C1", tur: "isim", artikel: "der", de: "Angriff", tr: "saldırı", ornek: "Der Angriff wurde schnell abgewehrt.", alan: "it" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Fehlermeldung", tr: "hata mesajı", ornek: "Auf dem Bildschirm erscheint eine Fehlermeldung.", alan: "it" },

    // ---------- IT & Informatik: fiiller ----------
    { seviye: "B2", tur: "fiil", de: "sich einloggen", tr: "oturum açmak", ornek: "Ich logge mich mit meinem Passwort ein.", alan: "it" },
    { seviye: "B2", tur: "fiil", de: "sich ausloggen", tr: "oturumu kapatmak", ornek: "Vergiss nicht, dich auszuloggen.", alan: "it" },
    { seviye: "B1", tur: "fiil", de: "klicken", tr: "tıklamak", ornek: "Klick auf den blauen Button.", alan: "it" },
    { seviye: "B1", tur: "fiil", de: "eingeben", tr: "girmek (veri)", ornek: "Bitte gib dein Passwort ein.", alan: "it" },
    { seviye: "B1", tur: "fiil", de: "löschen", tr: "silmek", ornek: "Er hat versehentlich die Datei gelöscht.", alan: "it" },
    { seviye: "B1", tur: "fiil", de: "kopieren", tr: "kopyalamak", ornek: "Ich kopiere den Text in ein neues Dokument.", alan: "it" },
    { seviye: "B1", tur: "fiil", de: "einfügen", tr: "yapıştırmak, eklemek", ornek: "Füge das Bild in das Dokument ein.", alan: "it" },
    { seviye: "B1", tur: "fiil", de: "hochladen", tr: "yüklemek (upload)", ornek: "Ich lade die Fotos in die Cloud hoch.", alan: "it" },
    { seviye: "B1", tur: "fiil", de: "verbinden", tr: "bağlamak", ornek: "Ich verbinde das Handy mit dem Laptop.", alan: "it" },
    { seviye: "B1", tur: "fiil", de: "testen", tr: "test etmek", ornek: "Wir testen die neue Funktion.", alan: "it" },
    { seviye: "B2", tur: "fiil", de: "beheben", tr: "gidermek (hata, sorun)", ornek: "Die Firma hat das Problem schnell behoben.", alan: "it" },
    { seviye: "B2", tur: "fiil", de: "berechnen", tr: "hesaplamak", ornek: "Das Programm berechnet das Ergebnis automatisch.", alan: "it" },
    { seviye: "B2", tur: "fiil", de: "sortieren", tr: "sıralamak", ornek: "Die Liste wird alphabetisch sortiert.", alan: "it" },
    { seviye: "B2", tur: "fiil", de: "filtern", tr: "filtrelemek", ornek: "Man kann die Daten nach Datum filtern.", alan: "it" },
    { seviye: "B2", tur: "fiil", de: "analysieren", tr: "analiz etmek", ornek: "Das System analysiert große Datenmengen.", alan: "it" },
    { seviye: "C1", tur: "fiil", de: "synchronisieren", tr: "senkronize etmek", ornek: "Die Daten werden automatisch synchronisiert.", alan: "it" },
    { seviye: "C1", tur: "fiil", de: "überwachen", tr: "izlemek, denetlemek", ornek: "Das System überwacht den Stromverbrauch.", alan: "it" },
    { seviye: "C1", tur: "fiil", de: "blockieren", tr: "engellemek", ornek: "Die Firewall blockiert unbekannte Zugriffe.", alan: "it" },
    { seviye: "C1", tur: "fiil", de: "wiederherstellen", tr: "geri yüklemek, eski hâline getirmek", ornek: "Nach dem Absturz konnte ich die Datei wiederherstellen.", alan: "it" },
    { seviye: "C1", tur: "fiil", de: "konfigurieren", tr: "yapılandırmak", ornek: "Du musst den Router zuerst konfigurieren.", alan: "it" },
    { seviye: "C1", tur: "fiil", de: "ausführen", tr: "çalıştırmak, yürütmek", ornek: "Das Programm führt die Befehle nacheinander aus.", alan: "it" },

    // ---------- IT & Informatik: sıfatlar ----------
    { seviye: "B1", tur: "sifat", de: "schnell", tr: "hızlı", ornek: "Die Verbindung ist schnell und stabil.", alan: "it" },
    { seviye: "B1", tur: "sifat", de: "langsam", tr: "yavaş", ornek: "Das Internet ist heute ungewöhnlich langsam.", alan: "it" },
    { seviye: "B2", tur: "sifat", de: "stabil", tr: "kararlı, sağlam", ornek: "Die Internetverbindung ist nicht stabil.", alan: "it" },
    { seviye: "B1", tur: "sifat", de: "online", tr: "çevrimiçi", ornek: "Ich bin gerade online.", alan: "it" },
    { seviye: "B2", tur: "sifat", de: "offline", tr: "çevrimdışı", ornek: "Die App funktioniert auch offline.", alan: "it" },
    { seviye: "B2", tur: "sifat", de: "benutzerfreundlich", tr: "kullanıcı dostu", ornek: "Die Software ist sehr benutzerfreundlich.", alan: "it" },
    { seviye: "B2", tur: "sifat", de: "veraltet", tr: "eskimiş, güncelliğini yitirmiş", ornek: "Die Software ist veraltet und unsicher.", alan: "it" },
    { seviye: "B2", tur: "sifat", de: "defekt", tr: "arızalı", ornek: "Das Ladekabel ist defekt.", alan: "it" }
);


// ===== 100'e tamamlama: Arbeit & Beruf =====

KELIMELER.push(

    // ---------- Arbeit & Beruf: isimler ----------
    { seviye: "B1", tur: "isim", artikel: "der", de: "Beruf", tr: "meslek", ornek: "Welchen Beruf möchtest du später ausüben?", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Arbeitsplatz", tr: "iş yeri, çalışma pozisyonu", ornek: "Mein Arbeitsplatz liegt in der Nähe vom Bahnhof.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Kollege", tr: "iş arkadaşı", ornek: "Mit meinen Kollegen verstehe ich mich gut.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Chef", tr: "patron, amir", ornek: "Mein Chef ist heute nicht im Büro.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Mitarbeiter", tr: "çalışan", ornek: "Die Firma hat über hundert Mitarbeiter.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Besprechung", tr: "toplantı", ornek: "Die Besprechung dauert eine Stunde.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Termin", tr: "randevu, görüşme saati", ornek: "Ich habe morgen einen wichtigen Termin.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Aufgabe", tr: "görev", ornek: "Meine Aufgabe ist die Betreuung der Kunden.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Projekt", tr: "proje", ornek: "Das Projekt soll bis Ende des Jahres fertig sein.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Kunde", tr: "müşteri", ornek: "Der Kunde ist mit dem Service zufrieden.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Abteilung", tr: "departman, birim", ornek: "Ich wechsle in eine andere Abteilung.", alan: "arbeit" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Team", tr: "ekip", ornek: "Unser Team trifft sich jeden Montag.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Arbeitszeit", tr: "çalışma saatleri", ornek: "Die tägliche Arbeitszeit beträgt acht Stunden.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Feierabend", tr: "mesai bitişi", ornek: "Nach Feierabend gehe ich joggen.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Überstunden", tr: "fazla mesai", ornek: "Ich mache diese Woche viele Überstunden.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Berufserfahrung", tr: "iş tecrübesi", ornek: "Sie hat zehn Jahre Berufserfahrung.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Fähigkeit", tr: "yetenek, kabiliyet", ornek: "Teamfähigkeit ist eine wichtige Fähigkeit.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Kenntnisse", tr: "bilgi birikimi", ornek: "Für diese Stelle sind gute Computerkenntnisse nötig.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Auftrag", tr: "sipariş, iş emri", ornek: "Die Firma hat einen großen Auftrag erhalten.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Branche", tr: "sektör", ornek: "Sie arbeitet seit Jahren in der IT-Branche.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Stellenanzeige", tr: "iş ilanı", ornek: "Ich habe die Stellenanzeige in der Zeitung gelesen.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Anschreiben", tr: "ön yazı (başvuru)", ornek: "Das Anschreiben sollte nicht länger als eine Seite sein.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Bewerber", tr: "aday, başvuran", ornek: "Der Bewerber wurde zum Gespräch eingeladen.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Arbeitsvertrag", tr: "iş sözleşmesi", ornek: "Im Arbeitsvertrag stehen alle Rechte und Pflichten.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Arbeitsklima", tr: "iş ortamı", ornek: "Das Arbeitsklima in unserem Team ist sehr gut.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Arbeitsmarkt", tr: "iş piyasası", ornek: "Auf dem Arbeitsmarkt sind IT-Fachleute gefragt.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Lohn", tr: "ücret (saatlik, haftalık)", ornek: "Der Lohn wird jeden Monat ausgezahlt.", alan: "arbeit" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Vorgesetzte", tr: "amir", ornek: "Mein Vorgesetzter ist sehr verständnisvoll.", alan: "arbeit" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Beförderung", tr: "terfi", ornek: "Er hofft auf eine Beförderung.", alan: "arbeit" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Befugnis", tr: "yetki, selahiyet", ornek: "Er hat die Befugnis, Verträge zu unterschreiben.", alan: "arbeit" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Fachkraft", tr: "nitelikli eleman", ornek: "Die Firma sucht qualifizierte Fachkräfte.", alan: "arbeit" },
    { seviye: "C1", tur: "isim", artikel: "der", de: "Fachkräftemangel", tr: "nitelikli işgücü açığı", ornek: "Der Fachkräftemangel betrifft viele Branchen.", alan: "arbeit" },
    { seviye: "C1", tur: "isim", artikel: "der", de: "Leistungsdruck", tr: "performans baskısı", ornek: "Der Leistungsdruck im Beruf nimmt zu.", alan: "arbeit" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Vereinbarkeit", tr: "(iş ve aile) bağdaştırılabilirlik", ornek: "Die Vereinbarkeit von Beruf und Familie ist oft schwierig.", alan: "arbeit" },

    // ---------- Arbeit & Beruf: fiiller ----------
    { seviye: "B1", tur: "fiil", de: "arbeiten", tr: "çalışmak", ornek: "Er arbeitet als Ingenieur in Zürich.", alan: "arbeit" },
    { seviye: "B2", tur: "fiil", de: "sich einarbeiten", tr: "işe alışmak, konuya hâkim olmak", ornek: "Ich muss mich noch in das neue Aufgabengebiet einarbeiten.", alan: "arbeit" },
    { seviye: "B2", tur: "fiil", de: "vereinbaren", tr: "anlaşmak, (randevu) ayarlamak", ornek: "Wir vereinbaren einen Termin für nächste Woche.", alan: "arbeit" },
    { seviye: "B2", tur: "fiil", de: "absagen", tr: "iptal etmek, ret cevabı vermek", ornek: "Er hat den Termin kurzfristig abgesagt.", alan: "arbeit" },
    { seviye: "B2", tur: "fiil", de: "zusagen", tr: "kabul cevabı vermek", ornek: "Die Firma hat mir die Stelle zugesagt.", alan: "arbeit" },
    { seviye: "B2", tur: "fiil", de: "verhandeln", tr: "müzakere etmek, pazarlık etmek", ornek: "Ich möchte über das Gehalt verhandeln.", alan: "arbeit" },
    { seviye: "B2", tur: "fiil", de: "entlassen", tr: "işten çıkarmak", ornek: "Die Firma musste zehn Mitarbeiter entlassen.", alan: "arbeit" },
    { seviye: "B2", tur: "fiil", de: "sich krankmelden", tr: "hastalık nedeniyle izin bildirmek", ornek: "Ich habe mich für zwei Tage krankgemeldet.", alan: "arbeit" },
    { seviye: "B1", tur: "fiil", de: "organisieren", tr: "organize etmek", ornek: "Sie organisiert die Besprechungen im Team.", alan: "arbeit" },
    { seviye: "C1", tur: "fiil", de: "koordinieren", tr: "koordine etmek", ornek: "Er koordiniert die Arbeit mehrerer Abteilungen.", alan: "arbeit" },
    { seviye: "B2", tur: "fiil", de: "überprüfen", tr: "kontrol etmek, gözden geçirmek", ornek: "Der Chef überprüft die Ergebnisse.", alan: "arbeit" },
    { seviye: "B2", tur: "fiil", de: "bearbeiten", tr: "işleme almak, üzerinde çalışmak", ornek: "Ich bearbeite gerade mehrere Anfragen.", alan: "arbeit" },
    { seviye: "C1", tur: "fiil", de: "sich bewähren", tr: "kendini kanıtlamak", ornek: "Er hat sich in der Probezeit bewährt.", alan: "arbeit" },
    { seviye: "B2", tur: "fiil", de: "sich spezialisieren", tr: "uzmanlaşmak", ornek: "Sie hat sich auf Steuerrecht spezialisiert.", alan: "arbeit" },
    { seviye: "C1", tur: "fiil", de: "bewältigen", tr: "üstesinden gelmek", ornek: "Sie bewältigt die Arbeit trotz Zeitdruck.", alan: "arbeit" },
    { seviye: "C1", tur: "fiil", de: "anleiten", tr: "yol göstermek, eğitmek", ornek: "Sie leitet die neuen Mitarbeiter an.", alan: "arbeit" },
    { seviye: "C1", tur: "fiil", de: "ausüben", tr: "icra etmek (meslek)", ornek: "Er übt seinen Beruf mit Leidenschaft aus.", alan: "arbeit" },
    { seviye: "B2", tur: "fiil", de: "verfassen", tr: "kaleme almak, yazmak", ornek: "Ich verfasse das Anschreiben heute Abend.", alan: "arbeit" },

    // ---------- Arbeit & Beruf: sıfatlar ----------
    { seviye: "B2", tur: "sifat", de: "zuständig", tr: "yetkili, görev alanına giren", ornek: "Dafür ist unsere Abteilung zuständig.", alan: "arbeit" },
    { seviye: "B2", tur: "sifat", de: "berufstätig", tr: "çalışan, mesleği olan", ornek: "Beide Eltern sind berufstätig.", alan: "arbeit" },
    { seviye: "B2", tur: "sifat", de: "befristet", tr: "süreli", ornek: "Der Vertrag ist auf zwei Jahre befristet.", alan: "arbeit" },
    { seviye: "B2", tur: "sifat", de: "unbefristet", tr: "süresiz", ornek: "Sie bekam einen unbefristeten Arbeitsvertrag.", alan: "arbeit" },
    { seviye: "B2", tur: "sifat", de: "teamfähig", tr: "takım çalışmasına yatkın", ornek: "Wir suchen eine teamfähige Mitarbeiterin.", alan: "arbeit" },
    { seviye: "B2", tur: "sifat", de: "motiviert", tr: "motive, istekli", ornek: "Sie ist sehr motiviert und lernt schnell.", alan: "arbeit" }
);


// ===== 100'e tamamlama: Wohnen & Alltag =====

KELIMELER.push(

    // ---------- Wohnen & Alltag: isimler ----------
    { seviye: "B2", tur: "isim", artikel: "der", de: "Haushalt", tr: "ev işleri, hane", ornek: "Im Haushalt helfen alle mit.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Möbel", tr: "mobilya (çoğul)", ornek: "Die Möbel wurden gestern geliefert.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Schlüssel", tr: "anahtar", ornek: "Ich habe meinen Schlüssel verloren.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Zimmer", tr: "oda", ornek: "Die Wohnung hat drei Zimmer.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Heizung", tr: "kalorifer, ısıtma", ornek: "Die Heizung funktioniert nicht richtig.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Strom", tr: "elektrik, akım", ornek: "Heute Morgen ist der Strom ausgefallen.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Hausmeister", tr: "bina görevlisi", ornek: "Der Hausmeister repariert die Haustür.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Abwart", tr: "bina görevlisi", ornek: "Der Abwart kümmert sich um das Treppenhaus.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Aufzug", tr: "asansör", ornek: "Der Aufzug ist seit gestern außer Betrieb.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Waschmaschine", tr: "çamaşır makinesi", ornek: "Die Waschmaschine läuft schon seit einer Stunde.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Hausordnung", tr: "apartman iç tüzüğü", ornek: "Die Hausordnung verbietet Lärm nach 22 Uhr.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Lärm", tr: "gürültü", ornek: "Der Lärm der Baustelle stört mich.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Wohngemeinschaft", tr: "ortak ev (WG)", ornek: "Ich wohne in einer Wohngemeinschaft.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Mitbewohner", tr: "ev arkadaşı", ornek: "Mein Mitbewohner kocht sehr gut.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Einkauf", tr: "alışveriş", ornek: "Der Einkauf dauert heute länger.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Quittung", tr: "fiş, makbuz", ornek: "Bitte bewahre die Quittung gut auf.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Öffnungszeiten", tr: "çalışma saatleri (çoğul)", ornek: "Die Öffnungszeiten stehen an der Tür.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Fahrplan", tr: "sefer tarifesi", ornek: "Der Fahrplan ändert sich im Dezember.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Billett", tr: "bilet", ornek: "Ich kaufe ein Billett am Automaten.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Abonnement", tr: "abonelik", ornek: "Ich habe ein Abonnement für den Zug.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Haltestelle", tr: "durak", ornek: "Die Haltestelle liegt direkt vor dem Haus.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Verspätung", tr: "gecikme", ornek: "Der Zug hat zehn Minuten Verspätung.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Velo", tr: "bisiklet", ornek: "Ich fahre jeden Tag mit dem Velo zur Arbeit.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Trottoir", tr: "kaldırım", ornek: "Bitte parken Sie nicht auf dem Trottoir.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Kehricht", tr: "çöp", ornek: "Der Kehricht wird am Dienstag abgeholt.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "die", de: "Post", tr: "posta, postane", ornek: "Ich muss noch zur Post gehen.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "das", de: "Paket", tr: "paket, koli", ornek: "Das Paket kommt morgen an.", alan: "alltag" },
    { seviye: "B1", tur: "isim", artikel: "der", de: "Ausweis", tr: "kimlik belgesi", ornek: "Bitte zeigen Sie Ihren Ausweis.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "das", de: "Formular", tr: "form", ornek: "Bitte füllen Sie das Formular aus.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Antrag", tr: "başvuru, dilekçe", ornek: "Der Antrag wird innerhalb von zwei Wochen bearbeitet.", alan: "alltag" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Bewilligung", tr: "izin, ruhsat", ornek: "Für den Umbau braucht man eine Bewilligung.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Kanton", tr: "kanton (İsviçre eyaleti)", ornek: "Die Steuern sind von Kanton zu Kanton verschieden.", alan: "alltag" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Einwohnerkontrolle", tr: "ikamet kayıt dairesi", ornek: "Die Einwohnerkontrolle ist für die Anmeldung zuständig.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "die", de: "Steuererklärung", tr: "vergi beyannamesi", ornek: "Ich muss noch meine Steuererklärung ausfüllen.", alan: "alltag" },
    { seviye: "C1", tur: "isim", artikel: "die", de: "Haftpflichtversicherung", tr: "sorumluluk sigortası", ornek: "Die Haftpflichtversicherung zahlt den Schaden.", alan: "alltag" },
    { seviye: "B2", tur: "isim", artikel: "der", de: "Verein", tr: "dernek, kulüp", ornek: "Ich bin Mitglied in einem Verein.", alan: "alltag" },

    // ---------- Wohnen & Alltag: fiiller ----------
    { seviye: "B1", tur: "fiil", de: "wohnen", tr: "oturmak (ikamet etmek)", ornek: "Sie wohnt seit zwei Jahren in Bern.", alan: "alltag" },
    { seviye: "B1", tur: "fiil", de: "einkaufen", tr: "alışveriş yapmak", ornek: "Ich kaufe immer am Samstag ein.", alan: "alltag" },
    { seviye: "B1", tur: "fiil", de: "kochen", tr: "yemek pişirmek", ornek: "Am Wochenende koche ich gern für Freunde.", alan: "alltag" },
    { seviye: "B1", tur: "fiil", de: "putzen", tr: "temizlemek", ornek: "Ich putze jeden Samstag die Wohnung.", alan: "alltag" },
    { seviye: "B1", tur: "fiil", de: "aufräumen", tr: "toplamak, düzenlemek", ornek: "Ich muss noch das Zimmer aufräumen.", alan: "alltag" },
    { seviye: "B1", tur: "fiil", de: "waschen", tr: "yıkamak", ornek: "Ich wasche die Wäsche am Sonntag.", alan: "alltag" },
    { seviye: "B1", tur: "fiil", de: "abholen", tr: "gidip almak", ornek: "Ich hole das Paket bei der Post ab.", alan: "alltag" },
    { seviye: "B2", tur: "fiil", de: "liefern", tr: "teslim etmek, getirmek", ornek: "Die Möbel werden nächste Woche geliefert.", alan: "alltag" },
    { seviye: "B1", tur: "fiil", de: "bestellen", tr: "sipariş vermek", ornek: "Ich bestelle das Sofa online.", alan: "alltag" },
    { seviye: "B1", tur: "fiil", de: "zurückgeben", tr: "geri vermek, iade etmek", ornek: "Ich möchte die Jacke zurückgeben.", alan: "alltag" },
    { seviye: "B2", tur: "fiil", de: "umtauschen", tr: "değiştirmek (satın alınan ürünü)", ornek: "Kann ich den Pullover umtauschen?", alan: "alltag" },
    { seviye: "B2", tur: "fiil", de: "ausfüllen", tr: "doldurmak (form)", ornek: "Bitte füllen Sie das Formular vollständig aus.", alan: "alltag" },
    { seviye: "C1", tur: "fiil", de: "einreichen", tr: "sunmak, teslim etmek (belge)", ornek: "Ich reiche den Antrag bei der Gemeinde ein.", alan: "alltag" },
    { seviye: "B2", tur: "fiil", de: "verlängern", tr: "uzatmak", ornek: "Ich möchte mein Abonnement verlängern.", alan: "alltag" },
    { seviye: "B2", tur: "fiil", de: "ablaufen", tr: "süresi dolmak", ornek: "Mein Ausweis läuft im Mai ab.", alan: "alltag" },
    { seviye: "B2", tur: "fiil", de: "sich abmelden", tr: "kaydını sildirmek", ornek: "Beim Wegzug muss man sich bei der Gemeinde abmelden.", alan: "alltag" },
    { seviye: "B1", tur: "fiil", de: "umsteigen", tr: "aktarma yapmak", ornek: "In Zürich muss ich in den Bus umsteigen.", alan: "alltag" },
    { seviye: "B1", tur: "fiil", de: "verpassen", tr: "kaçırmak", ornek: "Ich habe den Zug verpasst.", alan: "alltag" },
    { seviye: "B2", tur: "fiil", de: "sich verspäten", tr: "gecikmek", ornek: "Ich habe mich leider etwas verspätet.", alan: "alltag" },
    { seviye: "B1", tur: "fiil", de: "leihen", tr: "ödünç almak, ödünç vermek", ornek: "Kann ich mir dein Velo leihen?", alan: "alltag" },
    { seviye: "B2", tur: "fiil", de: "renovieren", tr: "yenilemek (ev)", ornek: "Wir renovieren im Sommer die Küche.", alan: "alltag" },
    { seviye: "B2", tur: "fiil", de: "einrichten", tr: "döşemek, düzenlemek", ornek: "Sie hat die Wohnung gemütlich eingerichtet.", alan: "alltag" },

    // ---------- Wohnen & Alltag: sıfatlar ----------
    { seviye: "B2", tur: "sifat", de: "möbliert", tr: "mobilyalı", ornek: "Das Zimmer wird möbliert vermietet.", alan: "alltag" },
    { seviye: "B1", tur: "sifat", de: "hell", tr: "aydınlık, açık renkli", ornek: "Die Wohnung ist hell und freundlich.", alan: "alltag" },
    { seviye: "B1", tur: "sifat", de: "laut", tr: "gürültülü, yüksek sesli", ornek: "Die Straße ist abends sehr laut.", alan: "alltag" },
    { seviye: "B1", tur: "sifat", de: "sauber", tr: "temiz", ornek: "Die Küche ist sauber.", alan: "alltag" },
    { seviye: "B1", tur: "sifat", de: "geöffnet", tr: "açık (mağaza)", ornek: "Das Geschäft ist bis 19 Uhr geöffnet.", alan: "alltag" },
    { seviye: "B1", tur: "sifat", de: "geschlossen", tr: "kapalı", ornek: "Die Post ist sonntags geschlossen.", alan: "alltag" },
    { seviye: "C1", tur: "sifat", de: "kostenpflichtig", tr: "ücretli", ornek: "Der Parkplatz ist kostenpflichtig.", alan: "alltag" },
    { seviye: "C1", tur: "sifat", de: "umständlich", tr: "zahmetli, dolambaçlı", ornek: "Die Anmeldung war ziemlich umständlich.", alan: "alltag" },
    { seviye: "B1", tur: "sifat", de: "zentral", tr: "merkezî", ornek: "Die Wohnung liegt sehr zentral.", alan: "alltag" },
    { seviye: "C1", tur: "sifat", de: "barrierefrei", tr: "engelsiz erişilebilir", ornek: "Das Gebäude ist barrierefrei zugänglich.", alan: "alltag" }
);

