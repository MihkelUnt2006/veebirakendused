// 1. Raamatu objekt
let raamat = {
    pealkiri: "Tõde ja õigus I",
    autor: "A. H. Tammsaare",
    aasta: 1926,
    kuvaKirjeldus() {
        return `${this.pealkiri}, autor ${this.autor}, aastal ${this.aasta}`;
    },
    muudaAasta(uusAasta) {
        this.aasta = uusAasta;
    }
};
// 2. Raamatukogu objekt
let raamatukogu = {
    raamatud: [
        { pealkiri: "Tõde ja õigus I", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Rehepapp", autor: "Andrus Kivirähk", aasta: 2000 },
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Serafima ja Bogdan", autor: "Vahur Afanasjev", aasta: 2017 }
    ],
    kuvaKõik() {
        return this.raamatud.map(r => `${r.pealkiri} - ${r.autor} (${r.aasta})`).join("<br>");
    },
    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri, autor, aasta });
    },
    koguarv() {
        return this.raamatud.length;
    },
    pärast2000() {
        return this.raamatud.filter(r => r.aasta > 2000).length;
    },
    // Kohandatud meetod: otsib raamatut autori järgi
    otsiAutoriJärgi(autorNimi) {
        let leitud = this.raamatud.filter(r => r.autor.toLowerCase().includes(autorNimi.toLowerCase()));
        return leitud.map(r => `${r.pealkiri} (${r.autor})`).join("<br>");
    }
};
// Funktsioonid, mis käivituvad HTML-i nuppude vajutamisel (onclick)
function kuvaRaamat() {
    document.getElementById("vastus").innerHTML = raamat.kuvaKirjeldus();
}
function kuvaKikRaamatud() {
    document.getElementById("vastus2").innerHTML = raamatukogu.kuvaKõik();
}
function kuvaKoguarv() {
    document.getElementById("vastus3").innerHTML = "Raamatuid kokku: " + raamatukogu.koguarv();
}
function kuvaParast2000() {
    document.getElementById("vastus4").innerHTML = "Pärast 2000. aastat ilmunud: " + raamatukogu.pärast2000();
}
function kuvaOtsing() {
    document.getElementById("vastus5").innerHTML = "Otsingu tulemus: " + raamatukogu.otsiAutoriJärgi("Tammsaare");
}