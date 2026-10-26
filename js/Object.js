let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

// Elemendi lisamine lõppu ja algusesse
autod.push({ mark: 'BMW', mudel: '320i', aasta: 2015 });
autod.unshift({ mark: 'Ford', mudel: 'Focus', aasta: 2020 });
console.log("Massiiv pärast lisamisi:", autod);

// Otsimine (leiab esimese vastava objekti)
let otsing = autod.find(auto => auto.aasta > 2018 && auto.mark === "Tesla");
console.log("Otsingu tulemus:", otsing);

// Filtreerimine (uue massiivi loomine)
let filterTulemus = autod.filter(auto => auto.aasta > 2018);
console.log("Filtreeritud autod (uudsemad kui 2018):", filterTulemus);

// Sorteerimine aasta järgi
autod.sort((a, b) => a.aasta - b.aasta);
console.log("Sorteeritud autod aasta järgi:", autod);