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
  console.log(questions)
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

const questions =[
    {
        question: 'who is the first computer programmer',
        answers : [
            {text : 'Ada Lovelace' , correct:true },
            {text : 'Donald Knuth' , correct:false },
            {text : 'Charles Babbage' , correct:false },
            {text : 'Dennis Ritchie' , correct:false },

        ]
    },

    {
        question: 'When was the first computer invented',
        answers : [
            {text : '1820' , correct:false },
            {text : '1850' , correct:false },
            {text : '1992' , correct:false },
            {text : '1822' , correct:true },

        ]
    },

    {
        question: 'Sound travels about 4 times faster in water than in air.',
        answers : [
            {text : 'True' , correct:true},
            {text : 'False' , correct:false },

        ]
    },

    {
        question: 'How many programming languages are there ',
        answers : [
            {text : 'approximately 3' , correct:false },
            {text : 'approximately 300' , correct:false },
            {text : 'approximately 700' , correct:true },
            {text : 'approximately 10' , correct:false },

        ]
    },


    {
        question: 'The first computer virus was created in.......',
        answers : [
            {text : '1986' , correct:true },
            {text : '2000' , correct:false },
            {text : '1912' , correct:false },
            {text : '1892' , correct:false },

        ]
    },


    {
        question: 'What was the first programming language called',
        answers : [
            {text : 'C++' , correct:false },
            {text : 'Assembly language' , correct:false },
            {text : 'FORTRAN' , correct:true },
            {text : 'PYTHON' , correct:false },

        ]
    },



    {
        question: 'Go is a programming language that was designed at Google in 2007 to enhance coding productivity in the time of multicore',
        answers : [
            {text : 'true' , correct:true },
            {text : 'false' , correct:false },
            {text : 'I do not know' , correct:false },
            {text : 'maybe' , correct:false },

        ]
    },


    {

        question: 'who is the father of computer science',
        answers : [
            {text : 'Grace Hopper' , correct:false },
            {text : 'Alan Turing' , correct:true },
            {text : 'Steve jobs' , correct:false },
            {text : 'Charles Babbage' , correct:false },

        ]

    }
]