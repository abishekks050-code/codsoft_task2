const questions=[

{
question:"What does HTML stand for?",
answers:[
{text:"Hyper Text Markup Language",correct:true},
{text:"Home Tool Markup Language",correct:false},
{text:"Hyper Transfer Language",correct:false},
{text:"Hyper Link Language",correct:false}
]
},

{
question:"Which language is used for styling web pages?",
answers:[
{text:"HTML",correct:false},
{text:"CSS",correct:true},
{text:"Python",correct:false},
{text:"Java",correct:false}
]
},

{
question:"Which language is used for website functionality?",
answers:[
{text:"JavaScript",correct:true},
{text:"HTML",correct:false},
{text:"CSS",correct:false},
{text:"SQL",correct:false}
]
}

];

const home=document.getElementById("home");
const quiz=document.getElementById("quiz");
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
const result=document.getElementById("result");
const scoreElement=document.getElementById("score");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
home.classList.add("hide");
quiz.classList.remove("hide");
showQuestion();
}

function showQuestion(){

resetState();

let currentQuestion=questions[currentQuestionIndex];

questionElement.innerHTML=currentQuestion.question;

currentQuestion.answers.forEach(answer=>{

const button=document.createElement("button");

button.innerHTML=answer.text;

button.classList.add("btn");

if(answer.correct){
button.dataset.correct=answer.correct;
}

button.addEventListener("click",selectAnswer);

answerButtons.appendChild(button);

});

}

function resetState(){

nextButton.style.display="none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
}

}

function selectAnswer(e){

const selected=e.target;

const correct=selected.dataset.correct==="true";

if(correct){
score++;
selected.classList.add("correct");
}
else{
selected.classList.add("wrong");
}

Array.from(answerButtons.children).forEach(button=>{

if(button.dataset.correct==="true"){
button.classList.add("correct");
}

button.disabled=true;

});

nextButton.style.display="block";

}

nextButton.addEventListener("click",()=>{

currentQuestionIndex++;

if(currentQuestionIndex<questions.length){
showQuestion();
}
else{
showScore();
}

});

function showScore(){

quiz.classList.add("hide");

result.classList.remove("hide");

scoreElement.innerHTML=score+" / "+questions.length;

}