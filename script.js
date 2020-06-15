var button = document.getElementById("btn");
var submitButton = document.getElementById("submit-btn");
var counter = 0;
var highScore = []
var finalTime;

let time = 75;
function setTimer() {
var timer = setInterval(function(){
 time--;
 console.log(timer); 
 document.getElementById("timer").textContent = time
 if(time < 1){
     clearInterval(timer)
 }
 }, 1000)
}

 function startQuiz () {
    console.log("click")
    setTimer()
    document.getElementById("intro").classList.add("hide")
    displayQuestion()
}

function displayQuestion () {
    document.getElementById("question").innerHTML = questions[counter].question
    var choices = questions[counter].choices
    displayChoices(choices)
}

function displayChoices (choices) {
    for (i=0; i < choices.length; i++) {
        var options = document.createElement("button");
        options.textContent = choices[i]
        options.classList.add("button-style")
        var container = document.createElement("div")
        container.appendChild(options);
        document.getElementById("question").appendChild(container)
        options.addEventListener("click", selectedAnswer)

    }
}
function selectedAnswer(e) {
console.log(e.target.innerText)
var correctAnswer = questions[counter].answer 
var isCorrect = "Correct!" 
    if (correctAnswer !== e.target.innerText) {
        isCorrect = "Wrong!"
        time = time - 10
    }
 document.getElementById("response").textContent = isCorrect
 counter ++
    if (counter < questions.length) {
        displayQuestion()
    }
    else {
        document.getElementById("done").classList.add("show");
        document.getElementById("done").classList.remove("hide");
        document.getElementById("question").classList.add("hide");
        document.getElementById("response").classList.add("hide");
        finalTime = time
        document.getElementById("score").innerText += finalTime;
    }
}

function submit() {
    document.getElementById("initials").value;
    highScore.push (
        document.getElementById("initials").value + " - " + finalTime
    ) 
    localStorage.setItem("highScore", highScore)
}

console.log(button);
 button.addEventListener("click", startQuiz);
 submitButton.addEventListener("click", submit);

 var questions = [
    {
    question: "Arrays in JavaScript can be used to store",
    choices: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of them"],
    answer: "1. Numbers and strings"
     },

    {
    question: "String values must be enclosed within ________ when being assigned to variables.",
    choices: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"],
    answer: "4. Parenthesis"
    },
    {
    question: "A very useful took used during development and debugging for printing content to the debugger is:",
    choices: ["1. JavaScript", "2. Terminal/bash", "3. For loops", "4. console.log"],
    answer: "4. console.log"
    },
    {
    question: "Commonly used data types DO NOT include:",
    choices:["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    answer: "3. Alerts"
    },
    {
    question: "The condition in an if/else statement is enclosed with ______.",
    choices: ["1. Quotes", "2. Curly brackets", "3. Parenthesis", "4. Square brackets"],
    answer: "3. Parenthesis"
    },
 ]

//function to create game over view
function gameOverView() {
    pageContentEl.innerHTML = "";

    var gameOverEl = document.createElement("div");
    gameOverEl.className = "game-over";
    gameOverEl.id = "game-over";

    var gameOverTextEl = document.createElement9("h2");
    gameOverTextEl.innerText = "All Done!"
    gameOverEl.appendChild(gameOverTextEl);

    var scoreMsgEl = document.createElement('h3');
    scoreMsgEl.innerHTML = "Your final score is ";

    var scoreEl = document.createElement('span');
    scoreEl.id = "player-score";

    if (counter >=0) {
        scoreEl.innerText = counter + ".";

    }
    else 
    scoreEl.innerText = 0 + ".";
}
scoreMsgEl.appendChild(scoreEl);
gameOverEl.appendChild(scoreMsgEl);



 // clear high scores
function handleClearScores() {
     scoreArr = [];
     saveScores();
     highScoresPage();
 }

function saveScores() {
     //sort high scores low to high
     scoreArr.sort((a, b) => b.score - a.score);
     localStorage.setItem('stats', JSON.stringify(scoreArr));
 }
//load high scores from storage
function loadScores() {
    var stats = localStorage.getItem('stats')
    if (!stats) {
        return false;
    }
    return (stats = JSON.parse(stats));
}

  




 


 



