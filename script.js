const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('Questions-container');
const questionElement = document.getElementById('question');
const answerButtonElemnet = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
let shuffleQuestions, currentQuestion;

console.log(startButton);

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',()=>{
    currentQuestion++;
    setNextQuestion();
})

function startGame(){
  console.log('Started');
  startButton.classList.add('hide');
  shuffleQuestions = questions.sort(()=> Math.random()- .5)
  console.log(questions.sort(()=> Math.random()- .5))
  currentQuestion = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}


function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestion])
}

function showQuestion(question){
    questionElement.innerHTML = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
        answerButtonElemnet.appendChild(button);
    })

}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonElemnet.firstChild){
        answerButtonElemnet.removeChild(answerButtonElemnet.firstChild);
    }
}


function selectAnswer(e){
    const selectButton = e.target;
    const correct = selectButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonElemnet.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct);
    })
    console.log(shuffleQuestions.length);
    console.log(currentQuestion+1);
    if(shuffleQuestions.length > currentQuestion+1){
        nextButton.classList.remove('hide')
    }
    else{
        startButton.innerText='Restart';
        startButton.classList.remove('hide');
    }

    
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    }else{
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');

}

const questions = [
    {
        question: 'what is 2 + 2',
        answers : [
            {text : '4' , correct:true },
            {text : '22' , correct:false },
            {text : '6' , correct:false },
            {text : '0' , correct:false },

        ],

        question: 'what is 2 * 2',
        answers : [
            {text : '1' , correct:false },
            {text : '44' , correct:false },
            {text : '6' , correct:false },
            {text : '4' , correct:true },

        ],

        question: 'what is 5*5',
        answers : [
            {text : '3' , correct:false },
            {text : '50' , correct:false },
            {text : '10' , correct:false },
            {text : '25' , correct:true },

        ]

    }
]