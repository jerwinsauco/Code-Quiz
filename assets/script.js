// const for question bank as this will be constant all thoughout the program. 
// increases integrity of the question bank as this will not be altered thourhgout the code!
const QBANK = [
    {
        id:1,
        prompt: "The purpose of the .gitignore file is to prevent unwanted files from being committed.",
        choices:{
            a:"True",
            b:"False",
        },
        answer: "a"
    },
    {
        id:2,
        prompt: "Git is the version control software on your computer. GitHub is a website that can host remote Git repositories.",
        choices:{
            a:"True",
            b:"False",
        },
        answer: "a"
    },
    {
        id:3,
        prompt: "What is the command to 'push' code to GitHub",
        choices:{
            a:"git push origin main",
            b:"git config",
            c:"git branch",
        },
        answer: "a"
    },
    {
        id:4,
        prompt: "After you’re done creating and testing a new feature in a feature branch, what is the next step?",
        choices:{
            a:"Merge the feature branch into the main branch.",
            b:"Merge the feature branch into the develop branch.",
            c:"Create a new feature branch.",
        },
        answer: "b"
    }
    {
        id:5,
        prompt: "What is a pseudo-class?",
        choices:{
            a:"A CSS rule that contains no declarations.",
            b:"A CSS declaration that hides the element.",
            c:"An element that has more than one class.",
            d:"A CSS keyword to target an element's state.",
        },
        answer: "d"
    }
];

// User prompted to enter First Name and Last name
function userName () {
    var firstName = window.prompt("Enter First Name:");
    var lastName = window.prompt("Enter your Last Name:");
    var userName = (firstName + lastName);

    document.getElementById("user").innerHTML = userName;
}


// We start with a button labelled "start" prompting user to start the quiz
document.getElementById("btn").addEventListener("click", function(){
    //* timer starts after pressing btn
    // insert for loop here + 
    // setTimeout to incremenet/decrement 
    document.getElementById("questionText").textContent = "Question1"
    
})


// display the questions, the first question!!!!
// use var for questions or array or object
// then display on the page

var answer



//Starts a timer to track how long an operation takes. 
console.time()

// setTimeout is to provide elapse time value
setTimeout()