
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")

const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, correctQuestionIndex;
let quizScore = 0;


startButton.addEventListener("click", startGame)

nextButton.addEventListener("click", () => {
    currectQuestionIndex++
    setnextQuestion()
})

function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() + 0.5)
    currectQuestionIndex = 0;
    questionContainerElement.classList.remove("hide")
    setnextQuestion()
    quizScore = 0
}



function setnextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currectQuestionIndex])
}


function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement("button")
        button.innerText = answer.text;
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}



function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currectQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "restart"
        startButton.classList.remove("hide")
    }
    if (selectedButton.dataset = correct) {
        quizScore++
    }
    document.getElementById("right-answers").innerText = quizScore
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    }
    else {
        element.classList.add("wrong")
    }
}



function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}
const questions = [
    {
        question: "Antiikin ajaksi kutsutaan...",
        answers: [
            { text: "Muinaisen Egyptin valtakunnan aikaa.", correct: false },
            { text: "Muinaisen Kreikan ja Rooman valtakunnan aikaa.", correct: true },
            { text: "Ötzin löytymisen aikaa.", correct: false },
        ],
    },
    {
        question: "Antiikin ajanjakso kesti...",
        answers: [
            { text: "13-vuotta.", correct: false },
            { text: "130-vuotta.", correct: false },
            { text: "1300-vuotta.", correct: true },
        ],
    },
    {
        question: "Antiikin aika päättyi, kun...",
        answers: [
            { text: "Länsi-Rooma tuhoutui.", correct: true },
            { text: "Kirjoitustaito keksittiin.", correct: false },
            { text: "Hieroglyfien arvoitus ratkaistiin.", correct: false },
        ],
    },
    {
        question: "Demokratia tarkoittaa sitä, että kansalaiset...",
        answers: [
            { text: "Päättävät yhteisistä asioista.", correct: true },
            { text: "Valitsevat kuninkaan.", correct: false },
            { text: "Viljelevät maata.", correct: false },
        ],
    },
    {
        question: "Antiikin aika näkyy meidän aikanamme...",
        answers: [
            { text: "Ruokakulttuurissa.", correct: false },
            { text: "Terveydenhuollossa.", correct: false },
            { text: "Rakennustyylissä.", correct: true },
        ],
    },
]