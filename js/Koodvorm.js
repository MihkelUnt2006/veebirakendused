
function keeledValik(){
    let vastus1=document.getElementById("vastus1");
    let js=document.getElementById("js");
    let python=document.getElementById("python");
    let java=document.getElementById("java");
    let csharp=document.getElementById("csharp");
    let php=document.getElementById("php");

    let valik="";

    if(js.checked){
        valik+=js.value+", ";
    }
    if(python.checked){
        valik+=python.value+", ";
    }
    if(java.checked){
        valik+=java.value+", ";
    }
    if(csharp.checked){
        valik+=csharp.value+", ";
    }
    if(php.checked){
        valik+=php.value+", ";
    }
    vastus1.innerHTML="Sinu valitud programmeerimiskeeled: "+valik;
    return valik;
}

function arvamusLugemine(){
    let vastus2=document.getElementById("vastus2");
    let arvamus=document.getElementById("arvamus");
    vastus2.innerHTML="Sinu arvamus: "+arvamus.value;
    return arvamus.value;
}

function tunnidValik(){
    let vastus3=document.getElementById("vastus3");
    let tunnid=document.getElementById("tunnid");
    vastus3.innerHTML="Tegeled programmeerimisega "+tunnid.value+" tundi nädalas.";
    return tunnid.value;
}

function meeldibValik(){
    let vastus4=document.getElementById("vastus4");
    let smiley=document.getElementById("smiley");
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");

    let valik="";

    if(jah.checked){
        valik="Programmeerimine meeldib!";
        smiley.src="happy.png";
    }
    else if(ei.checked){
        valik="Programmeerimine ei meeldi.";
        smiley.src="sad.png";
    }
    vastus4.innerHTML=valik;
    return valik;
}

function tooriistadLugemine(){
    let vastus5=document.getElementById("vastus5");
    let tooriistad=document.getElementById("tooriistad");

    vastus5.innerHTML="Sinu nimetatud tööriistad: "+tooriistad.value;
    return tooriistad.value;
}

function soovValik(){
    let vastus6=document.getElementById("vastus6");
    let soov=document.getElementById("soov");
    vastus6.innerHTML="Sinu valik: "+soov.value;
    return soov.value;
}

function saada(){
    let vastusKoik=document.getElementById("vastusKoik");

     let keeled=keeledValik();
     let arvamus=arvamusLugemine();
    let tunnid=tunnidValik();
    let meeldib=meeldibValik();
    let tooriistad=tooriistadLugemine();
    let soov=soovValik();

    vastusKoik.innerHTML="Programmeerimiskeeled: "+keeled+'<br>'+
        'Arvamus: '+arvamus+'<br>'+
        'Tunde nädalas: '+tunnid+'<br>'+
        meeldib+'<br>'+
        'Tööriistad: '+tooriistad+'<br>'+
        'Soovid õppida: '+soov;
}

function puhasta(){
    document.getElementById("js").checked=false;
    document.getElementById("python").checked=false;
    document.getElementById("java").checked=false;
    document.getElementById("csharp").checked=false;
    document.getElementById("php").checked=false;
    document.getElementById("jah").checked=false;
    document.getElementById("ei").checked=false;
    document.getElementById("arvamus").value="";
    document.getElementById("tunnid").value=0;
    document.getElementById("tooriistad").value="";
    document.getElementById("soov").selectedIndex=0;

    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
    vastusKoik.innerHTML="";
}