// palautteet
const OIKEA1 = "Oikea vastaus, hyvä! Kettu on monista kansansaduistakin tuttu petoeläin, jonka tunnistaa punertavasta väristä. "
const OIKEA2 = "Oikea vastaus, hyvä! Tiesitkö, että Suomessa karhut nukkuvat talviunta, joka saattaa kestää melkein puoli vuotta!"
const OIKEA3 = "Oikea vastaus, hyvä! Orava kiipeilee puunrungolla taitavasti. Sen lempiruokaa ovat siemenet. "
const OIKEA4 = "Oikea vastaus, hyvä! Ilves on yksi laajimmalle levinneistä kissaeläimistä. "
const OIKEA5 = "Oikea vastaus, hyvä! Tiesitkö, että jäniksiä on maailmassa 11 sukua ja jäniksiin kuuluvia lajeja on 61! "
const VÄÄRÄ = "Väärä vastaus, harmi! Kokeile uudelleen."
//const PUUTTUU = "Vastaus puuttuu, kirjoita vastaus kuvan alla olevaan kenttään."


// vastaukset ja oikea/väärä
let right1 = document.getElementById("right1");
let right2 = document.getElementById("right2");
let right3 = document.getElementById("right3");
let right4 = document.getElementById("right4");
let right5 = document.getElementById("right5");
let wrong = document.getElementsByClassName("wrong");

//tulostuspaikat palautteille
let feedback1 = document.getElementById("feedback1");
let feedback2 = document.getElementById("feedback2");
let feedback3 = document.getElementById("feedback3");
let feedback4 = document.getElementById("feedback4");
let feedback5 = document.getElementById("feedback5");


//alotusnäpäimen toiminta
function start() {
    feedback1.textContent = "";
    document.getElementById("kettu").style.display = "block";
    document.getElementById("header").style.display = "none";
    document.getElementById("aloitusnappi").style.display = "none";
    document.getElementById("seuraava2").style.display = "none";   
}

//kysymys 1 toiminta
function v1(){
    feedback1.textContent = ""; //tyhjennys
    if (right1.checked == true){feedback1.textContent = OIKEA1;
        document.getElementById("seuraava2").style.display = "block";
        document.getElementById("tarkista1").style.display = "none";
        document.getElementById("progressBar").style.display = "block";
        document.getElementById("firstBlock").style.display = "block";
        document.getElementById("progress").style.display = "block";
        document.getElementById("progressBar").value = +1;
    }
    else {feedback1.textContent = VÄÄRÄ;}

    document.getElementById("seuraava2").onclick = function(){
        document.getElementById("kettu").style.display ="none";
        document.getElementById("karhu").style.display ="block";
        document.getElementById("seuraava3").style.display = "none";
    }
}
//kysymys 2 toiminta
function v2(){
    feedback2.textContent = ""; //tyhjennys
    if (right2.checked == true){feedback2.textContent = OIKEA2;
        document.getElementById("seuraava3").style.display = "block";
        document.getElementById("tarkista2").style.display = "none";
        document.getElementById("secondBlock").style.display = "block";
        document.getElementById("progressBar").value += 1;
    }
    else {feedback2.textContent = VÄÄRÄ;}

    document.getElementById("seuraava3").onclick = function(){
        document.getElementById("karhu").style.display ="none";
        document.getElementById("orava").style.display ="block";
        document.getElementById("seuraava4").style.display = "none";
    }
}
//kysymys 3 toiminta
function v3(){
    feedback3.textContent = ""; //tyhjennys
    if (right3.checked == true){feedback3.textContent = OIKEA3;
        document.getElementById("seuraava4").style.display = "block";
        document.getElementById("tarkista3").style.display = "none";
        document.getElementById("thirdBlock").style.display = "block";
    }
    else {feedback3.textContent = VÄÄRÄ;}

    document.getElementById("seuraava4").onclick = function(){
        document.getElementById("orava").style.display ="none";
        document.getElementById("ilves").style.display ="block";
        document.getElementById("seuraava5").style.display = "none";
    }
} 
//kysymys 4 toiminta
function v4(){
    feedback4.textContent = ""; //tyhjennys
    if (right4.checked == true){feedback4.textContent = OIKEA4;
        document.getElementById("seuraava5").style.display = "block";
        document.getElementById("tarkista4").style.display = "none";
        document.getElementById("fourthBlock").style.display = "block";
    }
    else {feedback4.textContent = VÄÄRÄ;}

    document.getElementById("seuraava5").onclick = function(){
    document.getElementById("ilves").style.display ="none";
    document.getElementById("jänis").style.display ="block";
    document.getElementById("tulos").style.display = "none";
    }
}
//kysymys 5 toiminta
function v5(){
    feedback5.textContent = ""; //tyhjennys
    if (right5.checked == true){feedback5.textContent = OIKEA5;
        document.getElementById("tarkista5").style.display = "none";
        document.getElementById("fifthBlock").style.display = "block";
        document.getElementById("tulos").style.display = "block";
    }
    else {feedback5.textContent = VÄÄRÄ;}

    document.getElementById("tulos").onclick = function(){
        document.getElementById("jänis").style.display ="none";
        document.getElementById("prize").style.display ="block";
    }    

    document.getElementById("uudestaan").onclick = function(){
        feedback1.textContent = "";   
        location.reload(); //w3schools neuvon mukaan palauttaa alkuun, lataa sivun uudestaan-> toimii!
        }
}