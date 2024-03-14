const passages = [
    {
        content: "The Great Barrier Reef, located off the coast of Australia, is the world's largest coral reef system. It stretches over 2,300 kilometers and is home to a diverse range of marine life, including hundreds of species of fish, mollusks, and coral. The reef also serves as a crucial habitat for endangered species such as the dugong and the green sea turtle. However, it faces threats from climate change, pollution, and overfishing, putting its delicate ecosystem at risk.",
        questions: [
            {
                question:
                    "The Great Barrier Reef is said to be..",
                answers: [
                    { text: "The largest coral reef", correct: false},
                    { text: "The largest sea", correct: false},
                    { text: "The largest coral reef system", correct: true},
                ]
            },
            {
                question:
                    "What are some of the threats facing the Great Barrier Reef?",
                answers: [
                    { text: "Climate change, Pollution, and Overfishing", correct: true},
                    { text: "Loitering, Plastics and Overpopulation", correct: false},
                    { text: "Global warming, Biodiversity loss and Greenhouse gasses", correct: false},
                ]
            }
        ]
    },
    {
        content: "In the heart of Paris, the Louvre Museum stands as one of the world's most renowned cultural institutions. Originally built as a fortress in the late 12th century, it was transformed into a museum in the late 18th century and now houses over 35,000 works of art spanning thousands of years of history. Among its most famous treasures is Leonardo da Vinci's masterpiece, the Mona Lisa, which attracts millions of visitors each year. The Louvre continues to be a symbol of artistic excellence and a must-visit destination for art enthusiasts worldwide",
        questions: [
            {
                question:
                    "What was the original purpose of the Louvre Museum?",
                answers: [
                    { text: "It was originally built to be an Art museum", correct: false},
                    { text: "It was originally built to be a Church", correct: false},
                    { text: "It was originally built to be a Fortress", correct: true},
                ]
            },
            {
                question:
                    "What is the famous artwork housed in the Louvre and describe its significance?",
                answers: [
                    { text: "Las Meninas, presents a several important figures in Spanish History", correct: false},
                    { text: "Mona Lisa, it attracts millions of visitors each year", correct: true},
                    { text: "Starry Night, brings a strong spark of emotion to the visitors", correct: false},
                ]
            }
        ]
    },
    {
        content: "Mount Everest, the highest peak on Earth, stands majestically in the Himalayas, straddling the border between Nepal and China. Rising to a breathtaking height of 8,848 meters above sea level, it has long captured the imagination of adventurers and mountaineers. Despite its awe-inspiring beauty, Everest poses significant challenges to those who attempt to summit it, including treacherous weather conditions and extreme altitude sickness. Nevertheless, each year, climbers from around the world embark on the perilous journey to conquer this iconic peak, seeking the ultimate test of human endurance and resilience.",
        questions: [
            {
                question:
                    "Where is Mount Everest located, and what is its significance?",
                answers: [
                    { text: "China,  it captures the imagination of adventurers and mountaineers", correct: false},
                    { text: "Nepal, serves as the ultimate test of human endurance and resilience for adventurers and mountaineers.", correct: false},
                    { text: "Himalayas, it is  known as the highest peak on Earth", correct: true},
                ]
            },
            {
                question:
                    "What are some of the challenges faced by climbers attempting to summit Mount Everest?",
                answers: [
                    { text: "Avalanche and frostbite", correct: false},
                    { text: "Fevers and Vomiting", correct: false},
                    { text: "Extreme treacherous weather conditions and altitude sickness", correct: true},
                ]
            }
        ]
    },
    {
        content: "The Amazon Rainforest, often referred to as the 'lungs of the Earth,' plays a crucial role in regulating the planet's climate and biodiversity. Spanning nine countries in South America, it is the largest tropical rainforest in the world, covering an area of over 5.5 million square kilometers. Home to countless species of plants and animals, many of which are found nowhere else on Earth, the Amazon is a treasure trove of biodiversity. However, rampant deforestation, primarily driven by agriculture and logging, poses a grave threat to this vital ecosystem.",
        questions: [
            {
                question:
                    "Why is the Amazon Rainforest often called the 'lungs of the Earth'",
                answers: [
                    { text: "Because it plays a crucial role in sheltering countless species of plants and animals", correct: false},
                    { text: "Because it plays a crucial role in regulating the planet's climate and biodiversity", correct: true},
                    { text: "Because it plays a crucial role in being the treasure trove of biodiversity", correct: false},
                ]
            },
            {
                question:
                    "What are the main causes of deforestation in the Amazon?",
                answers: [
                    { text: "Mining and Forest fires ", correct: false},
                    { text: "The growing Agriculture and Loggings", correct: true},
                    { text: "Soil erosion and Climate Change", correct: false},
                ]
            }
        ]
    },
    {
        content: "The Industrial Revolution, which began in Britain in the late 18th century, marked a profound shift in human history. It brought about significant advancements in technology, transportation, and manufacturing processes, leading to unprecedented economic growth and urbanization. However, it also brought social and environmental challenges, including poor working conditions, pollution, and exploitation of natural resources. Despite its complexities, the Industrial Revolution laid the groundwork for the modern world and continues to shape society in profound ways.",
        questions: [
            {
                question:
                    "When and where did the Industrial Revolution begin?",
                answers: [
                    { text: "Spain, 19th century", correct: false},
                    { text: "Italy, 17th century", correct: false},
                    { text: "Britain, 18th century", correct: true},
                ]
            },
            {
                question:
                    "What were some of the positive and negative consequences of the Industrial Revolution?",
                answers: [
                    { text: "Rise of Technology; Climate Change", correct: false},
                    { text: "Economic growth; Exploitation of natural resources", correct: true},
                    { text: "Advancements in Transportation and Manufacturing processes; Global Warming", correct: false},
                ]
            }
        ]
    },
    {
        content: "In the quiet town of Eldridge, mysterious occurrences began to unfold. As the moon cast an eerie glow, whispers of ancient secrets echoed through the cobblestone streets. Detective Anderson took it upon himself to unravel the enigma that shrouded the town.",
        questions: [
            {
                question:
                    "What motivated Detective Anderson to investigate the mysterious occurrences in Eldridge?",
                answers: [
                    { text: "Personal curiosity", correct: true},
                    { text: "Assigned duty", correct: false},
                    { text: "A cryptic message", correct: false},
                ]
            },
            {
                question:
                    "What added an unsettling atmosphere to Eldridge's streets?",
                answers: [
                    { text: "A full moon", correct: false},
                    { text: "An approaching storm", correct: false},
                    { text: "Strange whispers", correct: true},
                ]
            }
        ]
    },
    {
        content: "In the heart of the bustling city, nestled between towering skyscrapers, lies a quaint café called 'Sunshine Brews.' With its cozy ambiance and aromatic coffee blends, it has become a favorite spot for locals and tourists alike to unwind and savor a moment of tranquility amidst the urban chaos.",
        questions: [
            {
                question:
                    "Moonlight Mocha",
                answers: [
                    { text: "Sunshine Brews", correct: true},
                    { text: "Radiant Roasts", correct: false},
                    { text: "Stellar Sips", correct: false},
                ]
            },
            {
                question:
                    "What is one characteristic of Sunshine Brews mentioned in the passage?",
                answers: [
                    { text: "It's located in the countryside.", correct: false},
                    { text: "It's popular among students.", correct: false},
                    { text: "It's known for its cozy ambiance and aromatic coffee blends.", correct: true},
                ]
            }
        ]
    },
    {
        content: "As the sun dipped below the horizon, casting long shadows across the deserted street, Sarah quickened her pace. The sound of footsteps echoed behind her, growing louder with each passing moment. Heart pounding, she glanced over her shoulder, but the alley remained empty. Should she continue straight ahead or duck into the dimly lit side street?",
        questions: [
            {
                question:
                    "What did Sarah notice behind her?",
                answers: [
                    { text: "A cat", correct: false},
                    { text: "A shadowy figure", correct: false},
                    { text: "A streetlight", correct: true}, 
                ]
            },
            {
                question:
                    "What decision does Sarah need to make?",
                answers: [
                    { text: "Whether to turn left or right", correct: false},
                    { text: "Whether to walk faster or slower", correct: false},
                    { text: "Whether to continue straight ahead or turn into a side street", correct: true},
                ]
            },
             {
                question:
                    "What literary device is used in the following sentence: "The thunderclaps came closer, echoing like the footfalls of an angry god across the vast marble pavement of the sky."",
                answers: [
                    { text: "Simile", correct: false},
                    { text: "Metaphor", correct: false},
                    { text: "Personification", correct: true},
                ]
            }
        ]
    },
    {
        content: "The thunderclaps came closer, echoing like the footfalls of an angry god across the vast marble pavement of the sky. Lightning speared down, momentarily turning the world into a blinding tableau of silver and black. Rain lashed against the windows, a relentless drumbeat against the silence of the house.",
        questions: [
            {
                question:
                    "What is the author's purpose in using such vivid imagery in this passage? How does it contribute to the overall atmosphere of the story?",
                answers: [
                    { text: "to create a suspenseful and foreboding atmosphere", correct: true},
                    { text: "to describe the setting in detail and bring it to life for the reader", correct: false},
                    { text: "to foreshadow future events in the story", correct: false}, 
                ]
            }
        ]
    },
    {
        content: "Hegel's dialectic posits that history progresses through a series of conflicts between thesis, antithesis, and synthesis. This process leads to the gradual development of a more perfect and rational society. However, some critics argue that this view is overly deterministic and ignores the role of individual agency and historical contingency." ,
        questions: [
            {
                question:
                    "Briefly explain Hegel's theory of dialectical materialism. What are the main criticisms of this theory, and how valid do you find them?",
                answers: [
                    { text: "Hegel's dialectical materialism focuses on the material world as the driving force of history, but critics argue it ignores ideas.", correct: false},
                    { text: "Hegel's dialectic emphasizes historical contingency and individual agency, but critics find it overly idealistic.", correct: false},
                    { text: "Hegel's dialectic sees history as a series of conflicts leading to progress, but critics find it too deterministic and teleological.", correct: true}, 
                ]
            },
            {
                question:
                    "According to the passage, what is a criticism of Hegel's view of historical progress?",
                answers: [
                    { text: "History progresses through a random series of events.", correct: false},
                    { text: "Individuals have no influence on the course of history.", correct: false},
                    { text: "Historical events are unpredictable and shaped by individual choices.", correct: true},
                ]
            }
        ]
    }
]

let currentPassageIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let allQuestionsAnswered = false; // New variable to track if all questions have been answered

function startQuiz() {
    currentPassageIndex = 0;
    currentQuestionIndex = 0;
    score = 0;
    allQuestionsAnswered = false; // Reset the variable
    showPassage();
    showQuestion();
}

function showPassage() {
    const passageContent = document.getElementById("passage-content");
    passageContent.textContent = passages[currentPassageIndex].content;
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const answerButton = document.getElementById("answer-btns");

    resetState();
    let currentPassage = passages[currentPassageIndex];
    let currentQuestion = currentPassage.questions[currentQuestionIndex];
    let passageNo = currentPassageIndex + 1;
    let questionNo = currentQuestionIndex < 2 ? currentQuestionIndex + 1 : "1." + (currentQuestionIndex - 1);
    let questionHTML = passageNo + "." + questionNo + " " + currentQuestion.question;
    questionElement.textContent = questionHTML;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    const answerButton = document.getElementById("answer-btns");
    const nextButton = document.getElementById("nxt-btn");

    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(event) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++; // Increment score by 1 for each correct answer
    } else {
        selectedBtn.classList.add("incorrect");
    }
    const answerButton = document.getElementById("answer-btns");
    const nextButton = document.getElementById("nxt-btn");
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    if (currentQuestionIndex === passages[currentPassageIndex].questions.length - 1) {
        nextButton.textContent = "Next Passage";
    }
}

function handleNextButton() {
    console.log("Current Passage Index:", currentPassageIndex);
    console.log("Total Passages:", passages.length);
    currentQuestionIndex++;
    if (currentPassageIndex < passages.length) {
        let currentPassage = passages[currentPassageIndex];
        console.log("Current Passage:", currentPassage);
        if (currentPassage && currentPassage.questions) {
            if (currentQuestionIndex < currentPassage.questions.length) {
                showQuestion();
            } else {
                console.log("No more questions for this passage");
                currentPassageIndex++;
                currentQuestionIndex = 0; // Reset question index
                if (currentPassageIndex < passages.length) {
                    showPassage();
                    showQuestion();
                } else {
                    console.log("End of passages. Showing score.");
                    allQuestionsAnswered = true; // Set to true when all questions have been answered
                    showScore();
                }
            }
        } else {
            console.log("Current passage or questions are undefined.");
        }
    }
}

function showScore() {
    const passageContent = document.getElementById("passage-content");
    const questionElement = document.getElementById("question");
    const nextButton = document.getElementById("nxt-btn");

    resetState();

    // Hide passage content
    passageContent.style.display = "none";

    // Check if all questions have been answered
    if (allQuestionsAnswered) {
        // Calculate the total number of questions
        let totalQuestions = 0;
        passages.forEach(passage => {
            totalQuestions += passage.questions.length;
        });

        // Display the score
        questionElement.innerHTML = `You scored ${score} out of ${totalQuestions}!`;
        nextButton.innerHTML = "Back";
        nextButton.style.display = "block";

        nextButton.addEventListener("click", () => {
            window.location.href = "quizmain.html"; // Redirect to modeselector.html
        });
    }
}

document.getElementById("nxt-btn").addEventListener("click", () => {
    if (currentQuestionIndex < passages[currentPassageIndex].questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
