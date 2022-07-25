// const for question bank as this will be constant all thoughout the program. 
// increases integrity of the question bank as this will not be altered thourhgout the code!
//QBANK[1].choices.b 
var questionText = document.getElementById("questionText")
var choiceText = document.getElementById("choicesDiv")
var timeText = document.getElementById("timer")
var index = 0;

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

// User prompted to enter First Name and Last name
// This data is presented on DOM to add test feel interface.
function userName() {
    var firstName = window.prompt("Enter First Name:");
    var lastName = window.prompt("Enter your Last Name:");
    var userName = (firstName + " " + lastName);

    // insert an if statement: user cannot enter number as name

    document.getElementById("user").innerHTML = userName;
}
userName()

// Timer starts after pressing btn
// count down timer shown on right upper corner of page
function countDown(i) {
    var timeUser = setInterval(function () {
        document.getElementById("timer").innerHTML = "Time: " + i + " seconds remaining";
        i-- || clearInterval(timeUser);  //if i is 0, then stop the interval
    }, 1000);

}

function displayQuestion() {
    var question = QBANK[index].prompt;
    var choices = QBANK[index].choices;
    console.log(question)
    console.log("HEYYY")
    questionText.textContent = question
    //choiceText.textContent = 
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

function checkAnswer() {
    var chosenAnswer = this.getAttribute('class')
    //compare answer
    var result = (QBANK[index].answer == chosenAnswer)
    console.log(result); 
    //If either true or false
    if (result) {
        countDown+=1000;
    } else {
        countDown-=1000;
    }
    //increase question index index++
        //displayQuestion()
}

// We start with a button labelled "start" prompting user to start the quiz
document.getElementById("btn").addEventListener("click", function () {
    countDown(5);
    displayQuestion();

    // insert for loop here + 
    // setTimeout to incremenet/decrement 

})


// display the questions, the first question!!!!
// use var for questions or array or object
// then display on the page

// var answer



//Starts a timer to track how long an operation takes.
// console.time()

// setTimeout is to provide elapse time value
// setTimeout()