// Koodin pohja kopioitu henkilöltä Saku Penttilä TIK21SP, löytyi GitHubista (Nyt alan ymmärtämään sen kuinka pirunmoisen kova homma on muokata toisen koodi sopivaksi omaan pohjaan. Oppia ikä kaikki.)

let questionsRight = 0
//answers
let correctAnswer1 = document.getElementById("right") 
let correctAnswer2 = document.getElementById("right2")
let correctAnswer3 = document.getElementById("right3")
let correctAnswer4 = document.getElementById("right4")
let correctAnswer5 = document.getElementById("right5")
let wrongAnswer = document.getElementById("wrong")
//right or wrong
let result = document.querySelector("#result")
let right = new String("Oikein!").fontcolor("green")
let wrong = new String("Väärin!").fontcolor("red")
//progressbar 
let progress = document.getElementById("progressbar")
//images
let image1 = document.getElementById("kysymys1")
let image2 = document.getElementById("kysymys2")
let image3 = document.getElementById("kysymys3")
let image4 = document.getElementById("kysymys4")
let image5 = document.getElementById("kysymys5")
//tarkistus funktiot
function question1() {
	//jos kysymyksiin ei ole vielä vastattu
	document.querySelector("#quesright").className="visible"
	document.querySelector("#progressbar").className="visible"
	//jos oikea radiobutton on valittu
	if (correctAnswer1.checked == true) {
		//kasvata "kysymyksiä oikein" yhdellä
		questionsRight++
		//näyttää "Oikein!"
		result.innerHTML= right
		//antaa kuvan ja piilottaa kysymyksen
		document.getElementById("question1").className="hidden"
		image1.className="visible"
		//näyttää seuraavan kysymyksen
		document.getElementById("question2").className="visible"
		document.getElementById("yleisvisaHeading").innerHTML="<h1>Yleistieto</h1>"
	} else {
		//printtaa "Väärin!"
		result.innerHTML = wrong
		document.getElementById("yleisvisaHeading").innerHTML="<h1>Yleistieto/h1>"
		//piilottaa kysymyksen
		document.getElementById("question1").className="hidden"
		//näyttää seuraavan kysymyksen 
		document.getElementById("question2").className="visible"
	}
    //etenemis jutut
	//kuinka monta kysymystä on oikein Kysymyksiä oikein ~/5
    document.getElementById("correctAnswers").innerText = questionsRight  
	//etenemispalkin päivitys 
    progress.value = questionsRight
}
function question2(){
	if (correctAnswer2.checked == true) {
		questionsRight++
		result.innerHTML= right
		document.getElementById("question2").className="hidden"
		image2.className="visible"
		document.getElementById("question3").className="visible"
	} else {
		result.innerHTML = wrong
		document.getElementById("question2").className="hidden"
		document.getElementById("question3").className="visible"
	}
    document.getElementById("correctAnswers").innerText = questionsRight 
    progress.value = questionsRight
}
function question3(){
	if (correctAnswer3.checked == true) {
		questionsRight++
		result.innerHTML= right
		document.getElementById("question3").className="hidden"
		image3.className="visible"
		document.getElementById("question4").className="visible"
	} else {
		result.innerHTML = wrong
		document.getElementById("question3").className="hidden"
		document.getElementById("question4").className="visible"
	}
    document.getElementById("correctAnswers").innerText = questionsRight
    progress.value = questionsRight
}
function question4(){
	if (correctAnswer4.checked == true) {
		questionsRight++
		result.innerHTML= right
		document.getElementById("question4").className="hidden"
		image4.className="visible"
		document.getElementById("question5").className="visible"
	} else {
		result.innerHTML = wrong
		document.getElementById("question4").className="hidden"
		document.getElementById("question5").className="visible"
	}
    document.getElementById("correctAnswers").innerText = questionsRight
    progress.value = questionsRight
}
function question5(){
	if (correctAnswer5.checked == true) {
		questionsRight++
		result.innerHTML= right
		document.getElementById("question5").className="hidden"
		image5.className="visible"
		document.getElementById("bigQuestion").innerText = "Pääsit visan loppuun."
		//näyttää "pelaa uudelleen" -napin
	} else {
		result.innerHTML = wrong
		document.getElementById("question5").className="hidden"
		document.getElementById("bigQuestion").innerText = "Pääsit visan loppuun."
		//näyttää "pelaa uudelleen" -napin
	}
    document.getElementById("correctAnswers").innerText = questionsRight
    progress.value = questionsRight
	//vastaukset-nappi
	document.querySelector("#vastaukset").className=""
	//uudestaan-nappi
	document.querySelector("#uudestaan").className=""
	//jos kaikki kysymykset oikein
	if (progress.value == 5) {
		document.querySelector("#vastaukset").className="hidden"
		document.getElementById("bigQuestion").innerText = "Hienoa! Sait kaikki oikein!"
		start()
        stop()
	}
}
function uudestaan(){
	location.reload();
}
function vastaukset(){
	image1.className="visible"
	image2.className="visible"
	image3.className="visible"
	image4.className="visible"
	image5.className="visible"
}


