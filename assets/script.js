// const for question bank as this will be constant all thoughout the program. 
// increases integrity of the question bank as this will not be altered throughout the code!

var questionText = document.getElementById("questionText")
var choiceText = document.getElementById("choicesDiv")
var timeText = document.getElementById("timer")
var startButton = document.getElementById("btn")
var index = 0;
var record = document.querySelector(".record")
var localRecord = JSON.parse(localStorage.getItem('leaderBoard')) || [];
var scoreEl = document.getElementById("scoreEl")

const QBANK = [
    {
        id: 1,
        prompt: "The purpose of the .gitignore file is to prevent unwanted files from being committed.",
        choices: {
            a: "True",
            b: "False",
        },
        answer: "a"
    },
    {
        id: 2,
        prompt: "Git is the version control software on your computer. GitHub is a website that can host remote Git repositories.",
        choices: {
            a: "True",
            b: "False",
        },
        answer: "a"
    },
    {
        id: 3,
        prompt: "What is the command to 'push' code to GitHub",
        choices: {
            a: "git push origin main",
            b: "git config",
            c: "git branch",
        },
        answer: "a"
    },
    {
        id: 4,
        prompt: "After you’re done creating and testing a new feature in a feature branch, what is the next step?",
        choices: {
            a: "Merge the feature branch into the main branch.",
            b: "Merge the feature branch into the develop branch.",
            c: "Create a new feature branch.",
        },
        answer: "b"
    },
    {
        id: 5,
        prompt: "What is a pseudo-class?",
        choices: {
            a: "A CSS rule that contains no declarations.",
            b: "A CSS declaration that hides the element.",
            c: "An element that has more than one class.",
            d: "A CSS keyword to target an element's state.",
        },
        answer: "d"
    }
];

var timeUser;
var fullName;
// User prompted to enter First Name and Last name
// This data is presented on DOM to add test feel interface.
function userName() {
    var firstName = window.prompt("Enter First Name:");
    var lastName = window.prompt("Enter your Last Name:");
    fullName = (firstName + " " + lastName);

    // insert an if statement: user cannot enter number as name

    document.getElementById("user").innerHTML = fullName;
}
userName()

var timer = 5;
// Timer starts after pressing btn
// count down timer shown on right upper corner of page
function countDown() {
    timeUser = setInterval(function () {
        timer--;
        timeText.innerHTML = "Time: " + timer + " seconds remaining";
        // if i is 0, then stop the interval
        if (timer <= 0) {
            endQuiz();
            showLeaderBoard()
        }
    }, 1000);

}

function displayQuestion() {
    if (index === QBANK.length) {
        endQuiz()
        showLeaderBoard()
    } else {
    console.log(QBANK[index].prompt)
    var question = QBANK[index].prompt;
    var choices = QBANK[index].choices;
    console.log(question)
    console.log("HEYYY")
    questionText.textContent = question
    choiceText.textContent = "";
    Object.entries(choices).forEach(([key, val]) => {
        console.log(key); // the name of the current key.
        console.log(val); // the value of the current key.
        //create a blank button for each of of the choices
        var btn = document.createElement('button');
        //display each choice on the button
        btn.textContent = key + ': ' + val
        //add class to button
        btn.classList.add(key)
        //append the button to choiceText div
        choiceText.appendChild(btn)
        //click on an answer
        btn.onclick = checkAnswer;
   
    });
}
}


// function endQuiz() {
//     clearInterval(timeUser);
//     questionText.textContent = "";
//     choiceText.textContent = "";
// }


function endQuiz() {
    clearInterval(timeUser);
    questionText.textContent = "";
    choiceText.textContent = "";
    scoreEl.textContent = timer;
}

const submitButton = document.querySelector("#submit-button");
const inputElement = document.querySelector("#initials");

submitButton.addEventListener("click", storeScore);
submitButton.setAttribute("hidden", true);

function storeScore(event) {
    event.preventDefault();
    event.preventDefault();

    // check for input
    if (!inputElement.value) {
        alert("Please enter your initials before pressing submit!");
        return;
    }

    // store score and initials in an object
    let leaderBoardItem = {
        initials: inputElement.value,
        score: time,
    };

    updateStoredLeaderboard(leaderBoardItem);

    // hide question card, display the leaderboard
    renderLeaderboard();

}

function updateStoredLeaderboard(leaderBoardItem) {
    let leaderBoardArray = getLeaderboard();

    // append new leaderboard item to leaderboard array
    leaderBoardArray.push(leaderBoardItem);
    localStorage.setItem("leaderboardArray", JSON.stringify(leaderboardArray));
}

// get "leaderBoardArray" from local storage (if it exists) and pasre it into a javascript object using JSON.parse
function getLeaderboard() {
    let storedLeaderboard = localStorage.getItem("leaderboardArray");
    if (storedLeaderboard !== null) {
        let leaderboardArray = JSON.parse(storedLeaderboard);
        return leaderboardArray;
    } else {
        leaderBoardArray = [];
    }
    return leaderboardArray;
}

// display leaderboard on leaderboard card
function renderLeaderboard() {
    let sortedLeaderboardArray = sortLeaderboard();
    const highscoreList = document.querySelector("#highscore-list");
    highscoreList.innerHTML = "";
    for (let i = 0; i < sortedLeaderboardArray.length; i++) {
        let leaderboardEntry = sortedLeaderboardArray[i];
        let newListItem = document.createElement("li");
        newListItem.textContent =
            leaderboardEntry.initials + " - " + leaderboardEntry.score;
        highscoreList.append(newListItem);

    }
}


function showLeaderBoard() {
    var leaderBoard = JSON.parse(window.localStorage.getItem("leaderBoard"))
    var newRecord = {
        user: fullName,
        time: timer
    }
    localRecord.push(newRecord)
    //save user and time to local storage
    localStorage.setItem('leaderBoard', JSON.stringify(localRecord))
    record.textContent = "User: " + newRecord.user + " scores " + newRecord.time
    var runningString = "";

    for (var i = 0; i < leaderBoard.length; i++) {
        runningString += leaderBoard.user + " " + leaderBoard.time
    }
    // console.log(runningString, "i am here!")
}

function checkAnswer() {
    var chosenAnswer = this.getAttribute('class')
    //compare answer
    var result = (QBANK[index].answer == chosenAnswer)
    console.log(result);
    //If either true or false
    //increase question index index++ 
    if (result) {
        timer += 5;
        timeText.innerText = "Time: " + timer + " seconds remaining";
    } else {
        timer--;
        if (timer < 0) {
            timer = 0;
        }
        timeText.innerText = "Time: " + timer + " seconds remaining";
    }
    if (index === QBANK.length) {
        endQuiz()
        showLeaderBoard()
    } else {
        index++;
        displayQuestion()
    }
}

// We start with a button labelled "start" prompting user to start the quiz
startButton.addEventListener("click", function () {
    startButton.setAttribute("hidden", true)
    submitButton.addEventListener("click", storeScore);
    countDown(5);
    displayQuestion();

})
// display the questions, the first question!!!!
// use var for questions or array or object
// then display on the page

// var answer



//Starts a timer to track how long an operation takes.
// console.time()

// setTimeout is to provide elapse time value
// setTimeout(