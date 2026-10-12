function teisendaYhik() {
    let arv = Number(document.getElementById('kogus3').value);
    let vastus = document.getElementById('vastus3');
    let pilt = document.getElementById('vastusepilt3');

    if (document.getElementById('km_miil').checked) {
        let tulemus = arv * 0.621371;
        vastus.innerHTML = arv + " km on " + tulemus.toFixed(2) + " miili";
        vastus.style.color = "blue";
        pilt.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCrPCUA8gNOAwgqinjG95qc81m5J3xUYcwDWwAb9anA&s";
        pilt.alt = "Kilomeetrid";
    }
    else if (document.getElementById('kg_nael').checked) {
        let tulemus = arv * 2.20462;
        vastus.innerHTML = arv + " kg on " + tulemus.toFixed(2) + " naela";
        vastus.style.color = "green";
        pilt.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XDLt7LR77E9175-a42KaNLm4wNRh79Xfp99V70ATjA&s=10";
        pilt.alt = "Kilogrammid";
    }
    else if (document.getElementById('c_f').checked) {
        let tulemus = (arv * 9/5) + 32;
        vastus.innerHTML = arv + " °C on " + tulemus.toFixed(1) + " °F";
        vastus.style.color = "red";
        pilt.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__I6J9bqx5E9NSdDFEaw3a4kicZXdabo5LWPrrWeP7A&s=10";
        pilt.alt = "Temperatuur";
    }
}