function nimiLugemineKastist(){
    let vastus1=document.getElementById("vastus1");
    let nimi=document.getElementById("nimi");

    vastus1.innerHTML="Sisestatud nimi on: "+nimi.value;
    vastus1.style.background="lightgreen";

    return nimi.value;
}

//raadio valikud
function raadiovalik(){

}

//checkboxvalik
function checkboxvalik(){
    let vastus3=document.getElementById("vastus3");
    let Oasis=document.getElementById("Oasis");
    let Radiohead=document.getElementById("Radiohead");
    let RHCP=document.getElementById("RHCP");
    let AC=document.getElementById("AC-DC");

    let valik2="";
    if(Oasis.checked){
        valik2+=Oasis.value + ', <br>';
    }
    if(Radiohead.checked){
        valik2+=Radiohead.value + ', <br>';
    }
    if(RHCP.checked){
        valik2+=RHCP.value + ', <br>';

    }
    if(AC.checked){
        valik2+=AC.value + ', <br>';
    }

    vastus3.innerHTML="Sinu lemmikud on : "+valik2;
    vastus3.style.background="lightgreen";
    return valik2;
}
//range
function rangeValik(){
    let vastus4=document.getElementById("vastus4");
    let tund=document.getElementById("tund");

    vastus4.innerHTML="Sa kuulad muusikat: "+tund.value + " tundi";

    return tund.value
}

//select Valik
function selectValik(){
    let vastus5=document.getElementById("vastus5");
    let stiil=document.getElementById("stiil");
    // 0 on esimene rida loetelus
    if(stiil.selectedIndex!==0){
        vastus5.innerHTML="Sa valisid " + stiil.value;

    }
    else{
        vastus5.innerHTML="palun tee oma valik";
    }
    return stiil.value;
}
//kasutab teisi funktsioone

function naitaKoike(){
    let vastusKoik=document.getElementById("vastusKoik");
    let nimi=nimiLugemineKastist();
    let valik=radiovalik();
    let valik2=checkboxvalik();
    let tund=rangeValik();
    let stiil=selectValik();
    let valik3=raadioValik2();
    let raadiojaaam=raadiojaamvalik()

    vastusKoik.innerHTML="Sinu nimi on " +nimi+'<br>' +
        'Sinu lemmikud on : ' + valik2+ '<br>'+
        'Sa kastuad '+valik +'<br>' +
        'Sa kuulad muusikat '+tund+' tundi<br>'+
        'Sa valisid '+stiil+'<br>'+
        'Sinu arvamus on : '+arvamus+'<br>'+
        valik3+'<br>'+
        raadiojaaam+'<br>' ;


}
function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
    vastus7.innerHTML="";
    vastusKoik.innerHTML="";
}


function arvamusLugeminde(){
    let vastus6=document.getElementById("vastus6");
    let arvamus=document.getElementById("arvamus");

    vastus6.innerHTML="Teie arvamus on: " +arvamus.value;
    vastus6.style.background="lightgreen";
    return arvamus.value;

}
function raadioValik2(){
    let vastus7=document.getElementById("vastus7");
    let Jah = document.getElementById("Jah");
    let Ei = document.getElementById("Ei");



    let valik3="";
    if(Jah.checked){
        valik3=Jah.value;
    }
    else if (Ei.checked){
        valik3=Ei.value;
    }
    else {
        valik3="Tee oma valik";
    }

    //vastus
    vastus7.innerHTML="Valik on: "+valik3;

    return valik3;
}
function raadiojaamvalik(){
    let vastus8=document.getElementById("vastus8");
    let raadiojaam=document.getElementById("raadiojaam");

    vastus8.innerHTML="raadiojaam: "+raadiojaam.value;
    return raadiojaam.value;
}