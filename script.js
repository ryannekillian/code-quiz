var button = document.getElementById("btn");
var submitButton = document.getElementById("submit-btn");
var counter = 0;
var finalTime = 0;
var viewHighScores = document.getElementById("view-high-scores");
var goBack = document.getElementById("go-back")
var clearHighScores = document.getElementById("clear-high-scores")


button.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submit);
viewHighScores.addEventListener("click", viewScores);
goBack.addEventListener("click", backButton);
clearHighScores.addEventListener("click", clear);


let time = 75;
function setTimer() {
var timer = setInterval(function(){
 time--;
 document.getElementById("timer").textContent = time
 if(time < 1){
     console.log("here")
     clearInterval(timer)
     document.getElementById("done").classList.add("show-block")
     document.getElementById("done").classList.remove("hide")
     document.getElementById("question").classList.add("hide")
     document.getElementById("question").classList.remove("show-flex")
     document.getElementById("response").classList.add("hide")
     document.getElementById("response").classList.remove("show-flex")
     document.getElementById("score").innerText += finalTime;
 }
 }, 1000)
}

 function startQuiz () {
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
        document.getElementById("done").classList.add("show-block");
        document.getElementById("done").classList.remove("hide");
        document.getElementById("question").classList.add("hide");
        document.getElementById("response").classList.add("hide");
        finalTime = time
        document.getElementById("score").innerText += finalTime;
    }
}

function submit() {
    document.getElementById("initials").value;
    var scores = JSON.parse(localStorage.getItem("highScore"))
     if (!scores) {
         scores = []
     }
    scores.push ( {
        initials:document.getElementById("initials").value,  
        score: finalTime
    }   
    ) 
    scores.sort((i, j) => j.score - i.score)
    localStorage.setItem("highScore", JSON.stringify(scores))
    document.getElementById("ending-of-quiz").classList.add("hide")
    ranking ()
}

function ranking() {
    document.getElementById("ranking").classList.add("show-block")
    document.getElementById("high-scores").classList.add("show-block")
    var scores = JSON.parse(localStorage.getItem("highScore"))
    var place = 1
    var container = document.createElement("div")
    if (!scores) {
        scores = []
    }
    for (i = 0; i < scores.length; i++) {
        var rank = document.createElement("div") 
        rank.innerText = "" + place + ". " + scores[i].initials + " - " + scores[i].score
        container.appendChild(rank)
        place++ 
    }
    container.setAttribute("id", "topScores")
    document.getElementById("ranking").appendChild(container);
}
function viewScores() {
    document.getElementById("intro").classList.add("hide")
    document.getElementById("intro").classList.remove("show-flex")
    ranking ()
} 

function clear() {
    localStorage.removeItem("highScore")
    backButton()
}

function backButton() {
    document.getElementById("high-scores").classList.add("hide")
    document.getElementById("high-scores").classList.remove("show-block")
    document.getElementById("intro").classList.add("show-flex")
    document.getElementById("intro").classList.remove("hide")
    document.getElementById("topScores").remove()
  




}

 var questions = [
    {
    question: "Arrays in JavaScript can be used to store",
    choices: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of them"],
    answer: "4. All of them"
     },
    {
    question: "String values must be enclosed within ________ when being assigned to variables.",
    choices: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"],
    answer: "3. Quotes"
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

  




 


 



