const now=new  Date();
const paev=now.getDate();
console.log("Tänane paev " + paev +" paev");

const kuu=now.getMonth()+1;//tagastab kuu 0-11
console.log("kuu number on "+kuu);

const aasta=now.getFullYear();
console.log("Aasta on "+aasta);

const nadalapaev=now.getDay();//0-6, kus 0-pühapäev
console.log("Nädalapaeva number on : " + nadalapaev);

function tana(){
    let vasuts=document.getElementById("vastus");
    vastus.innerHTML= "Täna on "+paev+"."+kuu+"."+aasta;
}
//lisa veel getHours() getMinutes ja lisa veel üks funktisoon mis näitab aeg-kellaaeg
const tund=now.getHours();
console.log("Praegu on "+tund +" tundi");
const minutid=now.getMinutes();
console.log("Praegu on "+minutid+ " minutid");

function kell(){
    let vastus2=document.getElementById("vastus2");
    vastus2.innerHTML= "Paegu on "+tund +":" +minutid;
}

const konsultastisoon=new Date(2026, 10, 2);
const vahe=konsultastisoon.getTime() -now.getTime();
const konspaev=vahe/(1000*60*60*24);
console.log("Konsultatsiooni nädalani  "+konspaev.toFixed(0)+ " päeva");

//nupp - konsultatisooni nädalani
//nupp - minu sünnipäevani
function konsultatsiooninadal(){
    let vastus3=document.getElementById("vastus3");
    vastus3.innerHTML= "Konsultatsiooninadalani on "+konspaev.toFixed(0)+ " päeva";
}

const sunnipaev=new Date(2026, 11, 29);
const vahe2=sunnipaev.getTime()-now.getTime();
const sunnip=vahe2/(1000*60*60*24);
console.log("Sunnipaevani on " +sunnip.toFixed(0)+" päeva");

function sunnipaevani(){
    let vastus4=document.getElementById("vastus4");
    vastus4.innerHTML= "Sünipäevani on "+sunnip.toFixed(0)+ " päeva";
}