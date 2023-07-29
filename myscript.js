/* global document, window, local variable */
// Array variable to contain questions and answers

var questions = [
	{
		question: "What might be the first code typed by a Dev?",
		choices: ["Apple", "Beginner", "Hello World", "Programming"],
		correctAnswer: 2
	},
	{
		question: "Fastest backend language for Web development?",
		choices: ["Python", "NodeJS", "PHP", "Ruby"],
		correctAnswer: 0
	},
	{
		question: "If we cast a vote which of these might be the coolest Tech company to work with?",
		choices: ["Amazon", "Google", "Apple", "Meta"],
		correctAnswer: 1
	},
	{
		question: "We discriminate these developers because their is a conception that they have a minute workload?",
		choices: ["Backend Developer", "Frontend Developer", "App Developer", "UI/UX Developer"],
		correctAnswer: 3
	}
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

// Function to execute quiz code - $ sign indicates an extension of the jquery library
// it will also switch questions or display error message if their is no selected answer

$(document).ready(function(){
	// Show current question
	displayCurrentQuestion();
	$(this).find('.quizMessage').hide();
	//function to be executed when the nextbutton is clicked
	$(this).find('.nextButton').on('click', function(){
		if(!quizOver){ //if quiz is on
			console.log('input radio value 1: ' + $("input[type='radio']:checked").val());
			value = $("input[type='radio']:checked").val();
			if(value == undefined){ //if the user does not select a value
				$(document).find('.quizMessage').text('Hey... pick an answer');
				$(document).find('.quizMessage').show();
			}else{	// if the the answer chosen is correct
				$(document).find('.quizMessage').hide();
				if(value == questions[currentQuestion].correctAnswer){
					correctAnswers++;
					// console.log(value);
				};
				currentQuestion++; // this switches the quiz to the next question
				if(currentQuestion < questions.length){	//code to continue or end quiz
					displayCurrentQuestion();
				}else{
					displayScore();
					$(document).find('.nextButton').text('Want to Retry?');
					quizOver = true;
				}
			}
			// return correctAnswers;
			// return currentQuestion;			
		} else{
			quizOver = false;
			$(document).find('.nextButton').text('Next Question');
			resetQuiz();
			displayCurrentQuestion();
			hideScore();
		}
	})

// Checking my variables
console.log('correctAnswers: ' + correctAnswers);
// console.log(value);
console.log('questions array value: ' + questions[currentQuestion].correctAnswer);
console.log('input radio value: ' + $("input[type='radio']:checked").val());
console.log('currentQuestion: ' + currentQuestion);

});



// Function to display current question

function displayCurrentQuestion(){


	var question = questions[currentQuestion].question;
	var questionClass = $(document).find('.quizContainer > .question');
	var choiceList = $(document).find('.quizContainer > .choiceList');
	var numChoices = questions[currentQuestion].choices.length;

	// set current class text to current question
	$(questionClass).text(question);

	// remove all current li elements (if any)
	$(choiceList).find('li').remove();

	var choice;
	for(i=0; i < numChoices; i++){
		choice = questions[currentQuestion].choices[i];
		$("<li><input name='dynradio' type='radio' value=" + i + ">" + choice + "</li>").appendTo(choiceList);
	}

	console.log('Display current question');
	console.log(question);
	console.log(questionClass);
	console.log(choiceList);
	console.log(numChoices);

};

function resetQuiz(){
	currentQuestion = 0;
	correctAnswers = 0;
	hideScore();
}

function displayScore(){
	$(document).find('.quizContainer > .result').text('Drumroll!!! You got ' + correctAnswers + ' answers correctly' /*, out of ' + questions.length*/);
	$(document).find('.quizContainer > .result').show();
}

function hideScore(){
	$(document).find('.result').hide();
}