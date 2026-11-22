function joon() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    //joon - линия
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle="green";
        tx.lineWidth = 3;
        tx.moveTo(50, 50); //alguspunkt
        tx.lineTo(200, 280); //lõpppunkt
        tx.stroke();
    }
}
function puhasta() {
    const canvas = document.getElementById('canvas');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.clearRect(0, 0, canvas.width, canvas.height);
    }
}
function kolmnurk() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    //kolmnurk
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle="orange";
        tx.strokeStyle="gold";
        tx.lineWidth = 3;
        tx.moveTo(50, 50); //alguspunkt
        tx.lineTo(200, 280); //lõpppunkt
        tx.lineTo(30, 350);
        tx.lineTo(50, 50);
        tx.fill(); //taust
        tx.stroke(); //välisjoon
    }
}
function riskylik() {
    const canvas = document.getElementById('canvas');
    const l=document.getElementById('Laius');
    const k=document.getElementById('kyrgus');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.fillStyle="teal";
        tx.fillRect(100, 150, l.value, k.value);
    }
}
//ümberjoon - окружность
//ring - круг
function ring() {
    const canvas = document.getElementById('canvas');
    const r=document.getElementById('raadius');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle="darkgreen";
        tx.fillStyle="lightgreen";
        tx.arc(100, 100, r.value, 0, 2*Math.PI, true); //x,y -keskpunkt, R-raadius
        tx.fill();
        //tx.stroke()
    }
}

function pilt() {
    const canvas = document.getElementById('canvas'); //määrame canvas element

    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        const fail=new Image();
        fail.src="https://picsum.photos/200/300?random=7";
        fail.onload=()=>{
            tx.drawImage(fail, 50, 50, 100, 100);
        }
    }
}

// ---------- AUTO (canvas2) ----------

function puhasta2() {
    const canvas = document.getElementById('canvas2');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function ratas() {
    const canvas = document.getElementById('canvas2');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle="darkred"; //fill vali varv raatas
        tx.arc(250, 300, 20, 0, 2*Math.PI, true);
        tx.arc(150, 300, 20, 0, 2*Math.PI, true);
        tx.fill();
        tx.beginPath();
        tx.fillStyle="silver";
        tx.arc(250, 300, 10, 0, 2*Math.PI, true); //x,y -keskpunkt, R-raadius
        tx.arc(150, 300, 10, 0, 2*Math.PI, true);
        tx.fill();
        //tx.stroke()
    }
}
// kere - alumine korpus
function kere() {
    const canvas = document.getElementById('canvas2');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.fillStyle="darkgreen";
        tx.fillRect(100, 220, 200, 75);
    }
}
// katus - ülemine osa (kabiin)
function katus() {
    const canvas = document.getElementById('canvas2');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.strokeStyle="darkgreen";
        tx.lineWidth = 3;
        tx.fillStyle="lightyellow";
        tx.fillRect(150, 170, 100, 50);
        tx.strokeRect(150, 170, 100, 50);
    }
}
function tuled() {
    const canvas = document.getElementById('canvas2');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.strokeStyle="orange";
        tx.lineWidth = 3;
        // teha 6 tuled joonidega
        tx.moveTo(300, 235);
        tx.lineTo(400, 200);
        tx.moveTo(300, 245);
        tx.lineTo(400, 220);
        tx.moveTo(300, 265);
        tx.lineTo(400, 265);
        tx.moveTo(300, 255);
        tx.lineTo(400, 255);
        tx.moveTo(300, 275);
        tx.lineTo(400, 290);
        tx.moveTo(300, 285);
        tx.lineTo(400, 310);
        tx.stroke();
    }
}
function aur() {
    const canvas = document.getElementById('canvas2');
    if(canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle="lightsteelblue";

        //tx.arc(377, 275, 15, 0, 2*Math.PI, true); //x,y -keskpunkt, R-raadius
        //tx.arc(355, 200, 10, 0, 2*Math.PI, true);
        tx.arc(72, 250, 30, 0, 2*Math.PI, true); //x,y -keskpunkt, R-raadius
        tx.arc(55, 200, 35, 0, 2*Math.PI, true);
        tx.fill();
        //tx.stroke()
    }
}
// kõik - joonistab kõik auto osad korraga
function koik() {
    kere();
    katus();
    ratas();
    tuled();
    aur();
}