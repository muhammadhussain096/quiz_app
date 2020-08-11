var questionsArray = [
    {
        question: "Which one is the first search engine in internet",
        answer: "Archie",
        options: [
            "Google",
            "Bing",
            "Archie",
            "Altavista",
        ]
    },
    {
        question: "Number of bit used by the IPv6 address",
        answer: "128 bit",
        options: [
            "32 bit",
            "64 bit",
            "128 bit",
            "256 bit",
        ]
    },
    {
        question: "Which one is the first web browser invented in 1990",
        answer: "Nexus",
        options: [
            "Nexus",
            "Internet Explorer",
            "Mozilla",
            "Mosaic",
        ]
    },
    {
        question: "Firewall in computer is used for",
        answer: "Security",
        options: [
            "Data Transmission",
            "Authentication",
            "Monitoring",
            "Security",
        ]
    },
    {
        question: "In computer world trojan refer to",
        answer: "Malware",
        options: [
            "Virus",
            "Worm",
            "Malware",
            "none of the above",
        ]
    },
];



function startQuiz(){
    window.location.href = "quiz.html";
}

var questionCount = 0;
var score = 0;
var currentAns = "";

function renderQuestion(x){
    var questionElement = document.getElementById("divQuestion");
    questionElement.innerHTML = "Q"+(x+1)+". "+questionsArray[x].question;
    var optionsElement = document.getElementsByClassName("divOption");
    for(var i = 0; i < optionsElement.length; i++){
        optionsElement[i].innerHTML = questionsArray[x].options[i];
    }
}

function putActiveClass(x){
    var optionsElement = document.getElementsByClassName("card-text");
    for(var i = 0; i < optionsElement.length; i++){
        optionsElement[i].classList.remove("active")
    }
    optionsElement[x].classList.add("active");
}

function removeActiveClass(){
    var optionsElement = document.getElementsByClassName("card-text");
    for(var i = 0; i < optionsElement.length; i++){
        optionsElement[i].classList.remove("active")
    }
}

function checkAnswer(x){
    var userAns = document.getElementsByClassName("active");
    if(userAns[0].innerHTML == questionsArray[x].answer){
        score += 10;
    }
}   

function showNextQuestion(){
    
    checkAnswer(questionCount);
    questionCount++;
    if(questionCount <= questionsArray.length-1){
        renderQuestion(questionCount);
    }
    removeActiveClass();
    if(questionCount == questionsArray.length){
        document.write("<h1 class='class=text-center my-4'>Result</h1>");
        document.write("You scored "+score+" out of 50");
        document.write("<br>Thanks ");
    }
   
}
renderQuestion(questionCount);