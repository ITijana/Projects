let questionOne = {
    question: "The 'function' and 'var' are known as:",
    answer: ["Keywords", "Data types", "Prototypes", "Declaration statements"],
    index: 3
};

let questionTwo = {
    question: "Which of the following number object function returns the value of the number?",
    answer: ["toString()", "toLocaleString()", "valueOf()", "toPrecision()"],
    index: 2
};

let questionThree = {
    question: "JavaScript Code can be called by using _________ .",
    answer: ["RMI", "Function/Method", "Preprocessor", "Triggering Event"],
    index: 1
};

let questionFour = {
    question: "Choose the correct snippet from the following to check if the variable 'a' is not equal the 'NULL':",
    answer: ["if(a!)", "if(a!null)", "if(a!==null)", "if(a!=null)"],
    index: 2
};

let questionFive = {
    question: "How do you find the minimum of x and y using JavaScript?",
    answer: ["min(x,y)", "Math.min(xy)", "Math.min(x,y)", "min(xy"],
    index: 2
};

let questionSix = {
    question: "Which JavaScript label catches all the values, expect for the ones specified?",
    answer: ["default", "try", "label", "catch"],
    index: 0
};

let questionSeven = {
    question: "What will the code return? Boolean(3 < 7)",
    answer: ["false", "NaN", "SyntaxError", "true"],
    index: 3
};

let questionEight = {
    question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    answer: ["alertBox(“Hello DataFlair!”);", "alert(“Hello DataFlair!”);", "msgAlert(“Hello DataFlair!”);", "alert(Hello DataFlair!);"],
    index: 1
};

let questionNine = {
    question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
    answer: ["if(x 2)", "if(x = 2)", "if(x == 2)", "if(x != 2)"],
    index: 2
};

let questionTen = {
    question: "How to write an IF statement in JavaScript?",
    answer: ["if i = 5 then", "if i = 5", "if i == 5 then", "if (i == 5)"],
    index: 3
};

let quiz = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

for (let i = quiz.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
}

let questionAndAnswers = quiz => {
    let div = document.getElementById("div");
    div.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        let header = document.createElement("h4");
        header.innerText = `${i + 1}. ${quiz[i].question}`;
        header.id = "header4";
        div.append(header);

        quiz[i].answer.forEach((element, j) => {
            let br = document.createElement("br");
            div.append(br)

            let radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `radioBtn${i}`;
            radio.id = "radioButton";
            radio.value = j;
            if (j == 0) {
                radio.checked = `checked`;
            }
            div.append(radio)

            let answers = document.createElement("label");
            answers.innerText = element;
            div.append(answers);
            div.append(br);
        });
    }
};

questionAndAnswers(quiz);

let btnAnswer = document.getElementById("btnAns");
let btnQuestion = document.getElementById("btnQuest");
let divResult = document.getElementById("divText");

divResult.hidden = true;

btnAnswer.addEventListener("click", () => {
    divResult.hidden = false;
    divResult.innerHTML = "";
    for (let j = 0; j < quiz.length; j++) {
        let radioButtons = document.getElementsByName(`radioBtn${j}`);
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked && radioButtons[i].value == quiz[j].index) {
                let correct = document.createElement("p");
                correct.innerHTML = `The answer of ${j + 1}. question is correct! &#x2705;`;
                correct.style.color = "white";
                correct.id = "correct";
                divResult.append(correct);
            }
            else if (radioButtons[i].checked && radioButtons[i].value != quiz[j].index) {
                let notCorrect = document.createElement("p");
                notCorrect.innerHTML = `The answer of ${j + 1}. question is not correct! \u274C`;
                notCorrect.style.color = "white";
                notCorrect.id = "notCorrect";
                divResult.append(notCorrect);
            }
            radioButtons[i].disabled = true;
        }
    }
});

btnQuestion.addEventListener("click", () => {
    divResult.hidden = true;
    function random(quiz) {
        for (let i = quiz.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
        }
        return quiz;
    }
    quiz = random(quiz);
    questionAndAnswers(quiz);
});