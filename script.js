const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('Questions-container');
const questionElement = document.getElementById('question');
const answerButtonElemnet = document.getElementById('answer-buttons');
// const shuffleQuestions, currentQuestion;

console.log(startButton);

startButton.addEventListener('click',startGame);

function startGame(){
  console.log('Started');
  startButton.classList.add('hide');
  shuffleQuestions = questions.sort(()=> Math.random()- .5)
  currentQuestion = 0;
//   questionContainerElement.classList.remove('hide');
  setNextQuestion();
}


function setNextQuestion(){
    showQuestion(shuffleQuestions[currentQuestion])
}

function showQuestion(question){

}


function selectAnswer(){
    
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