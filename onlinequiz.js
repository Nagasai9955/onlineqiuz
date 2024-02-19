const quizData = [
    {
        question:"What is  'a' tag?",
        options:["Anchor tag","BreakRow tag","Bold tag","Link tag"],
        correctAnswer:"Anchor tag"
    },
    {
        question:"Which programming language is used for web development?",
        options:["Java","Python","JavaScript","C#"],
        correctAnswer:"JavaScript"
    },
    {
        question:"What is capital of india?",
        options:["Delhi","Hyderbad","Chenni","Assam"],
        correctAnswer:"Delhi"
    },
    //add more ifr you need 
];
const questioncontainer = document.getElementById("questionContainer");
const nextbtn = document.getElementById("nextBtn");
const submitbtn = document.getElementById("submitBtn");

let currentquestion = 0;


function loadQuestion(){
    const currentquestionData = quizData[currentquestion];
    questioncontainer.innerHTML = `<h2>${currentquestionData.question}</h2>`;
    const optionList = document.createElement('ol');
    currentquestionData.options.forEach((option, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<input type="radio" name="answer" value="${option}" id="options${index}"> <label for="options${index}">${option}</label>`;
        optionList.appendChild(listItem);
    });
    questioncontainer.appendChild(optionList);
}
function nextQuestion(){
    const selectedOption=document.querySelector('input[name="answer"]:checked');
    if(!selectedOption){
        alert("Please select the answer");
        return;
    }
    if(currentquestion<quizData.length-1){
        currentquestion++;
        loadQuestion();
    }else{
        nextbtn.style.display="none";
        submitbtn.style.display="block"
    }
}
function submitQuiz(){
    alert("quiz is submitted");
    //add logic to handle submission (eg:send data to the server)
}
loadQuestion();
nextbtn.addEventListener("click", nextQuestion);
submitbtn.addEventListener("click", submitQuiz);
