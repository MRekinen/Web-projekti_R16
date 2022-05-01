const quizData = [
    {
        question: "Antiikin ajaksi kutsutaan...",
        a: "Muinaisen Egyptin valtakunnan aikaa.",
        b: "Muinaisen Kreikan ja Rooman valtakunnan aikaa.",
        c: "Ötzin löytymisen aikaa.",
        correct: "b",
    },
    {
        question: "Antiikin ajanjakso kesti...",
        a: "13 vuotta.",
        b: "130 vuotta.",
        c: "1300 vuotta.",
        correct: "c",
    },
    {
        question: "Antiikin aika päättyi, kun...",
        a: "Länsi-Rooma tuhoutui.",
        b: "Kirjoitustaito keksittiin.",
        c: "Hieroglyfien arvoitus ratkaistiin.",
        correct: "a",
    },
    {
        question: "Demokratia tarkoittaa sitä, että kansalaiset...",
        a: "Päättävät yhteisistä asioista.",
        b: "Valitsevat kuninkaan.",
        c: "Viljelevät maata.",
        correct: "a",
    },
    {
        question: "Antiikin aika näkyy meidän aikanamme...",
        a: "Ruokakulttuurissa.",
        b: "Terveydenhuollossa.",
        c: "Rakennustyylissä.",
        correct: "c",
    },
]

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

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

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