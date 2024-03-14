const questions = [
    {
        question:[
            "Ninny", //word
            "(a fool; dolt)", //definition
            "Don't be a ninny darling, you can't fly.",  //sentence
            "Which of these words describe a ninny?", //question
        ],
        answers: [
            { text: "A smart person", correct: false}, 
            { text: "Someone who helps with household chores", correct: false},
            { text: "A poor person", correct: false},
            { text: "A dumb person", correct: true},
        ]
    },
    {
        question:[
            "Serene",
            "(clear; unclouded; undisturbed; calm)",
            "Her eyes were closed and she looked very serene.",
            "Which of the following sentences uses ‘serene’ incorrectly?",
        ],
        answers: [
            { text: "I always go to serene places to calm myself whenever I get upset.", correct: false},
            { text: "He has a serene mind because he panics most of the time.", correct: true},
            { text: "They always go to the mountains to see the serene view it offers.", correct: false},
            { text: "The nurse seems so serene all the time so as to not disturb the patients. ", correct: false},
        ]
    },
    {
        question:[
            "Denigrate",
            "(to belittle the character of)",
            "They insult their opponents, they denigrate their arguments and they offer few facts.",
            "Which phrase is similar to denigrate?",
        ],
        answers: [
            { text: "to  defame", correct: true},
            { text: "to cook", correct: false},
            { text: "to praise", correct: false},
            { text: "to express in a professional manner", correct: false},
        ]
    },
    {
        question:[
            "Inane",
            "(lacking sense; silly;)",
            "The last sentence is so inane you wonder whether he realizes what he’s saying.",
            "Which word isn’t similar to ‘inane’?",
        ],
        answers: [
            { text: "crazy", correct: false},
            { text: "idiotic", correct: false},
            { text: "amazing", correct: true},
            { text: "foolish", correct: false},
        ]
    },
    {
        question:[
            "Perspicacious", //word
            "(having keen judgment)",
            "The critic made some perspicacious observations about the film.",
            "Which word is similar to ‘perspicacious’?", //question
        ],
        answers: [
            { text: "discerning", correct: true}, 
            { text: "uncomplaining", correct: false},
            { text: "stupid", correct: false},
            { text: "sigmoid", correct: false},
        ]
    },
    {
        question:[
            " indefatigable", //word
            "(that cannot be tired out)", //definition
            " His indefatigable spirit helped him cope with his illness.",  //sentence
            " Which word is similar to ‘indefatigable’?", //question
        ],
        answers: [
            { text: "destructive", correct: false}, 
            { text: "inoperable", correct: false},
            { text: "inexhaustible", correct: true},
            { text: "infinite", correct: false},
        ]
    },
{
        question:[
            " implore", //word
            "(to beg (a person) to do something)", //definition
            " She implored her son not to go.",  //sentence
            "  Which definition best describes the word ‘implore’?", //question
        ],
        answers: [
            { text: "to explode", correct: false}, 
            { text: " to explore", correct: false},
            { text: "to ask earnestly for", correct: true},
            { text: "to explain (to a person)", correct: false},
        ]
    },
{
        question:[
            " pious", //word
            "(having or showing religious devotion; only seemingly virtuous; sacred)", //definition
            " They lived a quiet, pious life.",  //sentence
            "  Which word is similar to ‘pious’?", //question
        ],
        answers: [
            { text: "adventurous", correct: false}, 
            { text: " sacred", correct: true},
            { text: "luxurious", correct: false},
            { text: "quiet", correct: false},
        ]
    },
{
        question:[
            " prolific", //word
            "(producing many young or much fruit; turning out many products of the mind)", //definition
            " Mahogany was once prolific in the tropical forests.",  //sentence
            "   Which sentences use the word ‘prolific’ incorrectly?", //question
        ],
        answers: [
            { text: "Guppies are so prolific that in many countries they overwhelm native species in numbers.", correct: false}, 
            { text: "  Banana trees are prolific in the Philippines because of its tropical climate.", correct: false},
            { text: "Jenny is a prolific writer and has published over a 100 books.", correct: false},
            { text: "The bear acts prolific around the trees because it is hungry.", correct: true},
        ]
    },
{
        question:[
            " opulent", //word
            "(abundant)", //definition
            "  He lives a very opulent lifestyle.",  //sentence
            "  Which word is the opposite of ‘opulent’?", //question
        ],
        answers: [
            { text: "poor", correct: true}, 
            { text: " very wealthy", correct: false},
            { text: "rich", correct: false},
            { text: "abundant", correct: false},
        ]
    },
{
        question:[
            " perplex", //word
            "( uncertain, doubtful)", //definition
            " There was a look of perplexity on his face.",  //sentence
            "  Which word is similar to ‘perplex’?", //question
        ],
        answers: [
            { text: "simple", correct: false}, 
            { text: " confused", correct: true},
            { text: "certain", correct: false},
            { text: "dangerous", correct: false},
        ]
    },
{
        question:[
            " contemplate", //word
            "( to look at or think about intently)", //definition
            "  The results of a trade war are too horrifying to contemplate.",  //sentence
            " Which word is the opposite of ‘contemplate’?", //question
        ],
        answers: [
            { text: "to expect or intend", correct: false},
            { text: "to look at or think about intently", correct: false},
            { text: "ignore or disregard", correct: true},
            { text: "think profoundly at length", correct: false},
        ]
    },
{
        question:[
            " asinine", //word
            "( like an ass; silly)", //definition
            "Now this was asinine enough to get him some serious humiliation",
            " Which word is similar to ‘asinine’?", //question
        ],
        answers: [
            { text: "a kind of dog", correct: false}, 
            { text: "ugly", correct: false},
            { text: "complicated", correct: false},
            { text: "stupid", correct: true},
        ]
    },
{
        question:[
            " aspire", //word
            "(to be ambitious (to get or do something))", //definition
            " Most children aspire to be doctors nowadays.",  //sentence
            " What definition best describes the word ‘aspire’?", //question
        ],
        answers: [
            { text: " to seek (after)", correct: true}, 
            { text: "inspire", correct: false},
            { text: "insult", correct: false},
            { text: "to think profoundly", correct: false},
        ]
    },
{
        question:[
            " baleful", //word
            "( harmful; dangerous)", //definition
            " Drug money has had a baleful impact on the country.",  //sentence
            "Which word is the opposite of ‘baleful’?", //question
        ],
        answers: [
            { text: "ominous", correct: false}, 
            { text: "safe", correct: true},
            { text: "deadly", correct: false},
            { text: "harmful", correct: false},
        ]
    },
{
        question:[
            " chutney", //word
            "(a relish of fruits and spices)", //definition
            " You can eat chutney straight away, but it's best once the flavors mellow after a month or so of aging.",  //sentence
            "Which definition best describes the word ‘chutney’?", //question
        ],
        answers: [
            { text: " a kind of chimney", correct: false}, 
            { text: "a basket used for fruits", correct: false},
            { text: "a relish of fruits, spices, herbs and vinegar", correct: true},
            { text: " a large amount of something", correct: false},
        ]
    },
{
question:[
            " domineer", //word
            "( to rule (over) in a harsh or arrogant way)", //definition
            " The lions always domineer over other competing predators in the area.",  //sentence
            "Which definition best describes the word ‘domineer’?", //question
        ],
        answers: [
            { text: "to have an adventure", correct: false}, 
            { text: "to escape from", correct: false},
            { text: "to observe from a far distance", correct: false},
            { text: "tyrannize", correct: true},
        ]
    },
{
        question:[
            " estuary", //word
            "( the wide mouth of a river into which the tide flows from the sea)", //definition
            " There are huge concentrations of people on the great river estuaries.",  //sentence
            "Which sentence uses the word ‘estuary’ appropriately?", //question
        ],
        answers: [
            { text: "A lot of crabs live in estuaries because there are lots of places to hide and feed.", correct: true}, 
            { text: "Estuaries cost a lot of money because of its wide space.", correct: false},
            { text: "My friend likes to eat estuaries because of its nutritional value.", correct: false},
            { text: "There are few estuaries found in a lot of people, especially amongst children.", correct: false},
        ]
    },
{
        question:[
            " finagle", //word
            "(to get by, or use, craftiness)", //definition
            "He finagled his way into the conference by claiming to be a reporter.",  //sentence
            "Which definition best describes the word ‘finagle’?", //question
       ],
        answers: [
            { text: "to smuggle something", correct: false}, 
            { text: "to get by,or use trickery", correct: true},
            { text: "a fish sold in the market", correct: false},
            { text: "to attack blindly without planning", correct: false},
        ]
    },
{
        question:[
            " guile", //word
            "(cunning in dealing with others)", //definition
            " They need to show more guile and craft going forward.",  //sentence
            "Which definition best describes the word ‘guile’?", //question
        ],
        answers: [
            { text: "a disguise", correct: false}, 
            { text: "stylish", correct: false},
            { text: "slyness", correct: true},
            { text: "honesty", correct: false},
        ]
    },
{
        question:[
            " hoarse", //word
            "(harsh and grating in sound; having a rough, husky voice)", //definition
            " His voice is always a bit hoarse during the morning.",  //sentence
            "Which sentence uses the word ‘hoarse’ appropriately?", //question
        ],
        answers: [
            { text: "He rode his hoarse every morning to go to his barn.", correct: false}, 
            { text: "She completed the obstacle hoarse and broke a new record.", correct: false},
            { text: "Before dessert, people would finish the appetizers and the main hoarse.", correct: false},
            { text: "After yelling for a long time, his voice sounded hoarse.", correct: true},
        ]
    },
{
        question:[
            "insouciant", //word
            "(untroubled;)", //definition
            " His friends envy his insouciant way of living.",  //sentence
            "Which word is the opposite of ‘insouciant’?", //question
        ],
        answers: [
            { text: "worrying", correct: true}, 
            { text: "untroubled", correct: false},
            { text: "carefree", correct: false},
            { text: "calm", correct: false},
        ]
    },
{
        question:[
            "jobber", //word
            "(wholesaler; one who works by the job or does piecework)", //definition
            "All the businesses had to go through the jobbers.",  //sentence
            "Which definition does not describe the word ‘jobber’?", //question
        ],
        answers: [
            { text: "someone who performs piecework or works by the task", correct: false}, 
            { text: "a person who constantly jabs at someone", correct: true},
            { text: "wholesaler", correct: false},
            { text: "one who buys goods in quantity and sells them to dealers", correct: false},
        ]
    },
{
        question:[
            "knoll", //word
            "(a small hill)", //definition
            " He sat down next to me on the grassy knoll by Tommy's grave.",  //sentence
            "Which definition does not describe the word ‘knoll’?", //question
        ],
        answers: [
            { text: "a small hill", correct: false}, 
            { text: "mound", correct: false},
            { text: "a hump", correct: false},
            { text: "having no value", correct: true},
        ]
    },
{
        question:[
            "lachrymose", //word
            "(shedding or causing to shed tears;)", //definition
            " She broke down and burst into a flood of tears, the group lachrymose in sympathy and wiping their eyes.",  //sentence
            "Which definition describes the opposite of ‘lachrymose’?", //question
        ],
        answers: [
            { text: "to rejoice", correct: true}, 
            { text: "tearful", correct: false},
            { text: "sad", correct: false},
            { text: "to be in sorrow", correct: false},
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion(){
    const questionElement = document.getElementById("question");
    const answerButton = document.getElementById("answer-btns");
    const nextButton = document.getElementById("nxt-btn");

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    let questionHTML = questionNo + ". ";
    currentQuestion.question.forEach((part, index) => {
        if (index === 2) {
            questionHTML += `<span style="color: gray;">"${part}"</span><br>`;
        } else if (index > 0 && index < 3) {
            questionHTML += `<span style="color: gray;">${part}</span><br>`;
        } else {
            questionHTML += part + "<br>";
        }
    });
    questionElement.innerHTML = questionHTML;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", () => selectAnswer(answerButton, nextButton));
    });
}

function resetState(){
    const answerButton = document.getElementById("answer-btns");
    const nextButton = document.getElementById("nxt-btn");

    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(answerButton, nextButton){
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = "Show Score";
    }
}

function showScore(){
    const questionElement = document.getElementById("question");
    const nextButton = document.getElementById("nxt-btn");

    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Back";
    nextButton.style.display = "block";

    nextButton.addEventListener("click", () => {
        window.location.href = "quizmain.html"; // Redirect to modeselector.html
    });
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

document.getElementById("nxt-btn").addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
