//kysymykset

const quizData = [
    {
        question: "Antiikin ajaksi kutsutaan... 1/5",
        a: "Muinaisen Egyptin valtakunnan aikaa.",
        b: "Muinaisen Kreikan ja Rooman valtakunnan aikaa.",
        c: "Ötzin löytymisen aikaa.",
        correct: "b",
    },
    {
        question: "Antiikin ajanjakso kesti... 2/5",
        a: "13 vuotta.",
        b: "130 vuotta.",
        c: "1300 vuotta.",
        correct: "c",
    },
    {
        question: "Antiikin aika päättyi, kun... 3/5",
        a: "Länsi-Rooma tuhoutui.",
        b: "Kirjoitustaito keksittiin.",
        c: "Hieroglyfien arvoitus ratkaistiin.",
        correct: "a",
    },
    {
        question: "Demokratia tarkoittaa sitä, että kansalaiset... 4/5",
        a: "Päättävät yhteisistä asioista.",
        b: "Valitsevat kuninkaan.",
        c: "Viljelevät maata.",
        correct: "a",
    },
    {
        question: "Antiikin aika näkyy meidän aikanamme... 5/5",
        a: "Ruokakulttuurissa.",
        b: "Terveydenhuollossa.",
        c: "Rakennustyylissä.",
        correct: "c",
    },
]
//luetaan arvot

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const submitBtn = document.getElementById("submit")


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
//katsotaan mitä on vastattu

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}
//katsotaan onko vastaus oikein ja lisätään pisteitä jos on ja kuinka moneen kysymykseen on vastattu oikein

submitBtn.addEventListener("click", () => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>Sinä vastasit ${score}/${quizData.length} kysymykseen oikein</h2>

            <button onclick="location.reload()">Kokeile uudestaan</button>
            `
        }
    }
})