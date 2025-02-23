const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride" , "true" , "40" , "Trajectory" , "3" ];
let candidateAnswers = [""];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let candidateName = input.question("what is your name?: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


  // for (i = 0; i < questions.length; i++) {
  //   candidateAnswer[i]= input.question[i]
  //   candidateAnswers[i] = input.question[i]
  //   console.log(`Candidate answer: ${candidateAnswer[i]}`);
  //   console.log(`Correct Answer: ${correctAnswer[i]}`)
  // }

  for (i = 0; i < questions.length; i++) {
    while (candidateAnswers[i] == input.question[i]) {
      return `Candidate answer: ${candidateAnswer[i]} \n Correct Answer: ${correctAnswers[i]}`;
    } 
  }
}

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  if (candidateAnswer == correctAnswer) {
    console.log("you got it");
  } else {
    console.log("Try again");
  }

  if (candidateAnswer == correctAnswer) ? "you got it" : "Try again";

for (i = 0; i < questions.length; i++) {
  if (candidateAnswers[i] == correctAnswers[i]) {
    console.log("you got it");
  } else {
    console.log("Try again");
  }
}

//TODO 3.2 use this variable to calculate the candidates score.
function gradeQuiz(candidateAnswers) {
  let grade = '';
  let numOfCorrectAnswer = '';

  for (i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      numOfCorrectAnswer++
    }
  }
  grade = ((numOfCorrectAnswer)/(correctAnswers.length))*100;
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};