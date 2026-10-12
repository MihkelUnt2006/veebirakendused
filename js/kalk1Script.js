function teisendamine(){
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik"); //mitu elemendi ühe nimega
    let arv=document.getElementsByName("arv");

    const tolli=39.37;
    const meeter= 0.0254;
    //tsükli
    for(let i=0;i<valik.length;i++){
        if (valik[i].checked){
            if (valik[i].value==="meeter"){
                vastus.innerHTML=arv.value +' meetri = ' +
                    (arv.value*toll).toFixed(1) + ' tolli' ;
                vastus.style.color="red";
                vastusepilt.src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Toll_Port_Side_Port_of_Tallinn_15_January_2017.jpg?utm_source=et.wikipedia.org&utm_campaign=index&utm_content=original";

            }else if(valik[i].value=="tolli"){
                vastus.innerHTML=arv.value +' meetri = '+
                arv.value*toll + 'meetri' ;
                vastus.style.color="green";



            }else {
                vastus.innerHTML= " vali ühiku - kas meeter või toll"
            }

        }
    }
}