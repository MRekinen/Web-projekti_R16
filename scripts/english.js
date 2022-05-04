//Koodin alkuperä: https://www.codingninjas.com/blog/2020/11/03/how-to-create-a-quiz-in-javascript/
//Muokkaukset koodiin (c) Anni Tonttila


//Elementtien vakiointi
const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const false1Btn = document.getElementById("False1");
const false2Btn = document.getElementById("False2");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");


//Lähtöarvot
let currentQuestion = 0;
let score = 0;


//Asetetaan kysymykset ja vastausvaihtoehdot
let questions = [{
        question: "1. Mikä seuraavista tarkoittaa mansikkaa englanniksi?",
        answers: [{
                option: "Blueberry",
                answer: false
            },
            {
                option: "Lingonberry",
                aswer: false
            },
            {
                option: "Strawberry",
                answer: true
            },
        ]
    },
    {
        question: "2. 'Elephant', on suomeksi:",
        answers: [{
                option: "Norsu",
                answer: true
            },
            {
                option: "Ilves",
                answer: false
            },
            {
                option: "Kettu",
                answer: false
            },
        ]
    },
    {
        question: "3. Minkä maan englanninkielinen nimi on Greece",
        answers: [{
                option: "Kreikka",
                answer: true
            },
            {
                option: "Kroatia",
                answer: false
            },
            {
                option: "Kypros",
                answer: false
            },
        ]
    },
    {
        question: "4. Rakkaus/Rakastaa on englanniksi:",
        answers: [{
                option: "Live",
                answer: false
            },
            {
                option: "Love",
                answer: true
            },
            {
                option: "Laugh",
                answer: false
            },
        ]
    },
    {
        question: " 5. Mikä seuraavista tarkoittaa englanniksi lomaa?",
        answers: [{
                option: "Holiday",
                answer: true
            },
            {
                option: "Friday",
                answer: false
            },
            {
                option: "Mayday",
                answer: false
            },
        ]
    }
]

//Painikkeiden toiminnot ja funktioiden kutsuminen
restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", submit);


//Aloitetaan kysely
function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if (questions[currentQuestion].answers[0].answer) {
            if (score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 5) {
            next();
        }
    }

    false1Btn.innerHTML = questions[currentQuestion].answers[1].option;
    false1Btn.onclick = () => {
        if (questions[currentQuestion].answers[1].answer) {
            if (score < 5) {
                score++;
            }
        }

        userScore.innerHTML = score;
        if (currentQuestion < 5) {
            next();
        }
    }

    false2Btn.innerHTML = questions[currentQuestion].answers[2].option;
    false2Btn.onclick = () => {
        if (questions[currentQuestion].answers[2].answer) {
            if (score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 5) {
            next();
        }
    }
    prevBtn.classList.add("hide");
    submitBtn.classList.add("hide");

}


beginQuiz();

//Alusta -painikkeen toiminto
function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.remove("hide");
    false1Btn.classList.remove("hide");
    false2Btn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

//Seuraava kysymys -painikkeen toiminto
function next() {
    currentQuestion++;
    if (currentQuestion >= 5) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
        submitBtn.classList.remove("hide");
    }

    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if (questions[currentQuestion].answers[0].answer) {
            if (score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 5) {
            next();
        }
    }
    false1Btn.innerHTML = questions[currentQuestion].answers[1].option;
    false1Btn.onclick = () => {
        if (questions[currentQuestion].answers[1].answer) {
            if (score < 5) {
                score++;
            }
        }

        userScore.innerHTML = score;
        if (currentQuestion < 5) {
            next();
        }
    }

    false2Btn.innerHTML = questions[currentQuestion].answers[2].option;
    false2Btn.onclick = () => {
        if (questions[currentQuestion].answers[2].answer) {
            if (score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 5) {
            next();
        }
    }
    prevBtn.classList.remove("hide");

}

//Edellinen -painikkeen toiminto
function prev() {
    currentQuestion--;
    if (currentQuestion <= 0) {
        prevBtn.classList.add("hide");
        nextBtn.classList.remove("hide");
        submitBtn.classList.add("hide");
    }

    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if (questions[currentQuestion].answers[0].answer) {
            if (score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 5) {
            score++
        }
    }

    false1Btn.innerHTML = questions[currentQuestion].answers[1].option;
    false1Btn.onclick = () => {
        if (questions[currentQuestion].answers[1].answer) {
            if (score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 5) {
            next();
        }
    }

    false2Btn.innerHTML = questions[currentQuestion].answers[2].option;
    false2Btn.onclick = () => {
        if (questions[currentQuestion].answers[2].answer) {
            if (score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 5) {
            next();
        }
    }
    nextBtn.classList.remove("hide");
    submitBtn.classList.add("hide");

}

// Vastaukset painikkeen toiminto
function submit() {

    let reply = ""

    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    false1Btn.classList.add("hide");
    false2Btn.classList.add("hide");


    //Määritetään palaute tulosten mukaan

    questionText.innerHTML = reply;

    if (score <= 4) {

        questionText.innerHTML = "Tarkista oikeat vastaukset:<br>" +
            "1. Mansikka on englanniksi Strawberry <br>" +
            "2. Elephant tarkoittaa norsua <br>" +
            "3. Greece on suomeksi Kreikka <br>" +
            "4. Rakkaus/Rakastaa = Love <br>" +
            "5. Loma = Holiday"
    } else {
        restartBtn.classList.add("hide");
        questionText.innerHTML = "Loistavaa, sait kaikki oikein!";
        document.getElementById("picture").appendChild(pic);
    }

}
//Vastaukset nappulan toiminto
function showResults() {
    submitBtn.addEventListener(click, showResults);
}