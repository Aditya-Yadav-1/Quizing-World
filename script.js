const questions = [
    {
        question:"Today is Sunday in 2023, what was the day on today's date in 2022.",
        answers: [
            {text:"Monday", correct:false},
            {text:"Tuesday", correct:false},
            {text:"Saturday", correct:true},
            {text:"Sunday", correct:false},
        ]
    },
    {
        question: "How many laws of motion were given by Issac Newton.",
        answers: [
            {text:"3", correct:true},
            {text:"4", correct:false},
            {text:"5", correct:false},
            {text:"6", correct:false},
        ]
    },
    {
        question: "Which among the following is not a bird.",
        answers: [
            {text:"Crow", correct:false},
            {text:"Elephant", correct:true},
            {text:"Sparrow", correct:false},
            {text:"Peacock", correct:false},
        ]
    },
    {
        question: "Which of these is not a Tree Traversal technique.",
        answers: [
            {text:"Inorder", correct:false},
            {text:"Preorder", correct:false},
            {text:"Dijkstra", correct:true},
            {text:"Postorder", correct:false},
        ]
    },
    {
        question: "Which language is used to style a web page.",
        answers: [
            {text:"HTML", correct:false},
            {text:"C++", correct:false},
            {text:"CSS", correct:true},
            {text:"Python", correct:false},
        ]
    },
];

// let len=4;

const questionElement=document.getElementById("ques");
const answerButtons=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");

let currentQuestionNo=0;
let score=0;

function startquiz(){
    currentQuestionNo=0;
    score=0;
    nextButton.innerHTML="Next"; 
    showQuestion();
};

function showQuestion(){
    resetstate();
    let currentques=questions[currentQuestionNo];
    let quesno=currentQuestionNo+1;
    questionElement.innerHTML=quesno + ". " + currentques.question;

    currentques.answers.forEach(answer =>{
        const button=document.createElement("button"); // naya element banaya hai aur uski class hai "button"
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); // isse wo 4 options me answer replace hojayega
        if(answer.correct) button.dataset.correct=answer.correct;
        // button.dataset.correct=answer.correct;
        button.addEventListener("click", iscorrect);
    }); 
};

function resetstate(){
    // currentQuestionNo=0;
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function iscorrect(e){
    const selectbtn=e.target;
    const sahi=selectbtn.dataset.correct==="true"; 
    // const sahi=selectbtn.dataset.correct;

    if(sahi){
        score++;
        selectbtn.classList.add("correct");
    }
    else{
        selectbtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";  
}

function displayscore(){
    resetstate();
    nextButton.innerHTML="Start Again";
    nextButton.style.display="block";
    questionElement.innerHTML='Your score is ' + score + ' out of ' + questions.length;
}

function nexthandler(){
    currentQuestionNo++;
    if(currentQuestionNo<questions.length){
        showQuestion();
    }
    else{
        displayscore();   
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionNo<questions.length){
        nexthandler();
    }
    else{
        startquiz();
    }
});

startquiz();


