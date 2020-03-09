var startBtn = $("#start-button");
var nextBtn = $("#next-button");
var home = $("#start-page");
var displayQuestion = $("#question-card").hide();
var questionNum = $("#question-num");
var question = $("#question");
var questions = ["Which html element might include the title of the document and links to any stylesheets or scripts?",
                "Which declaration must be included as the first item in a HTML document before any tags and is used to provide instruction to the web browser?",
                "What HTML tag is used to define an item in a list?",
                "What is the name of the stylesheet used primarily for creating the presentation of an HTML document?",
                "What is the css property that alters the space outside the borders of the content?",
                "What JavaScript element represents data type that is either true or false?",
                "What is the JavaScript element that allows a set of conditions to be executed repeatedly until a condition is satisfied?"]
var answers = ["<Head>", "!DOCTYPE", "<li>", "css", "margin", "Boolean", "for loop"]
var wrongAnswers = ["<ul>", "<header>", "<body>", "padding", "border", "text-align", "display", "conditional loop", "condition", "strings", "<ol>", "<title>", "<script>", "float", "position", "inline", "declaration", "event", "conditional argument", "<style>", "<p>", "<div>", "output", "function", "variable", "background", "objects", "foreground"]
var questionNum = 1
var questionChoice = []
var answersChoice = []
var shuffleAnswers = []
var m = 0

$(document).ready(function() {
$(startBtn).on("click", function(){
    //Hide the 1st Page
    $(home).hide();

    //Pick random questions and respective answers and push them into questionChoice and answersChoice
    for (i = 0; i < 5; i++){
        var n = Math.floor(Math.random() * questions.length);
        questionChoice.push(questions[n]);
        answersChoice.push(answers[n]);
    }

    //Add Question to Question Page
    $(questionNum).text("Question " + questionNum);
    $(question).text(questionChoice[m]);
    
    //Add Answers to shuffleAnswers Array
    shuffleAnswers.push(answersChoice[m]);
    for (i = 0; i < 3; i++){
        (shuffleAnswers).push(wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)]);
    }

    //Append Answers
    for (i = 0; i < shuffleAnswers.length; i++){
    $("#answer-choices").append("<li>"+ shuffleAnswers[i] +"</li>")
    }

    //Shuffle Answers
    var ol = document.querySelector('ol');
    for (var i = ol.children.length; i >= 0; i--) {
    ol.appendChild(ol.children[Math.random() * i | 0]);
    }

    //Create Click Events for the Answer Choices
    $("li").on("click", function(){
        if ($(this) == '<Head>'|| '!DOCTYPE' || '<li>' || 'css' || 'margin' || 'Boolean' || 'for loop'){
            $(this).css("color",  "green");
        }
        else{
            $(this).css("color",  "red");
        }
    })
    $(displayQuestion).show();
    
    
    
})

$(nextBtn).on("click", function(){
    $(shuffleAnswers).empty();
    $(question).empty();
     $("#answer-choices").empty();
    questionNum++;
    m++;
     shuffleAnswers=[];
        //Add Question to Question Page
    $(questionNum).text("Question " + questionNum);
    $(question).text(questionChoice[m]);
    //Add Answers to shuffleAnswers Array
    shuffleAnswers.push(answersChoice[m]);
    for (i = 0; i < 3; i++){
        (shuffleAnswers).push(wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)]);
    }

    //Append Answers
    for (i = 0; i < shuffleAnswers.length; i++){
    $("#answer-choices").append("<li>"+ shuffleAnswers[i] +"</li>")
    }

    //Shuffle Answers
    var ol = document.querySelector('ol');
    for (var i = ol.children.length; i >= 0; i--) {
    ol.appendChild(ol.children[Math.random() * i | 0]);
    }
    })
    
})






