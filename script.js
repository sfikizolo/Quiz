const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('Questions-container');
const questionElement = document.getElementById('question');
const answerButtonElemnet = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
let shuffleQuestions, currentQuestion;

console.log(startButton);

startButton.addEventListener('click',startGame);

function startGame(){
  console.log('Started');
  startButton.classList.add('hide');
  shuffleQuestions = questions.sort(()=> Math.random()- .5)
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
    nextButton.classList.remove('hide');
    
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

        ]
    }
]