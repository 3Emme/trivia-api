import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("button.playButton").click(function() {
    $(".button").hide();
    // Make API Call
    let request = new XMLHttpRequest;
    let url = "https://opentdb.com/api.php?amount=9&category=9&type=boolean";

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
        attachEventListeners(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('#question1').text(`${response.results[0].question}`);
      $('#answer1').text(`${response.results[0].correct_answer}`);
      $('#question2').text(`${response.results[1].question}`);
      $('#answer2').text(`${response.results[1].correct_answer}`);
      $('#question3').text(`${response.results[2].question}`);
      $('#answer3').text(`${response.results[2].correct_answer}`);
      $('#question4').text(`${response.results[3].question}`);
      $('#answer4').text(`${response.results[3].correct_answer}`);
      $('#question5').text(`${response.results[4].question}`);
      $('#answer5').text(`${response.results[4].correct_answer}`);
      $('#question6').text(`${response.results[5].question}`);
      $('#answer6').text(`${response.results[5].correct_answer}`);
      $('#question7').text(`${response.results[6].question}`);
      $('#answer7').text(`${response.results[6].correct_answer}`);
      $('#question8').text(`${response.results[7].question}`);
      $('#answer8').text(`${response.results[7].correct_answer}`);
      $('#question9').text(`${response.results[8].question}`);
      $('#answer9').text(`${response.results[8].correct_answer}`);
    }
    $(".trivia").show();
    // Establish Counter
    let score = 0;
    let questionsAnswered = 0;
    $(".score").show();
    $("#score").text(score);
    $("#questionsAnswered").text(questionsAnswered);

    function attachEventListeners(response){
      // Card 1 Event Listeners
      $(".card-1-button-true").click(function(){
        if (response.results[0].correct_answer === "True"){
          // Reveal the answer
          $(".card-answer-1").show();
          $(".card-1-button-true").hide();
          $(".card-1-button-false").hide();
          // Add 'You are correct!'
          $(".card1").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-1").show();
          $(".card-1-button-true").hide();
          $(".card-1-button-false").hide();
          $(".card1").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
      $(".card-1-button-false").click(function(){
        if (response.results[0].correct_answer === "False"){
          // Reveal the answer
          $(".card-answer-1").show();
          $(".card-1-button-true").hide();
          $(".card-1-button-false").hide();
          // Add 'You are correct!'
          $(".card1").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-1").show();
          $(".card-1-button-true").hide();
          $(".card-1-button-false").hide();
          $(".card1").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
    };
    
  })

  

  $("h5.card-question-1").click(function() {
    $(".card-question-1").toggle();
    $(".card-answer-1").toggle();
  });

  $("p.card-answer-1").click(function() {
    $(".card-question-1").toggle();
    $(".card-answer-1").toggle();
  });

  $("h5.card-question-2").click(function() {
    $(".card-question-2").toggle();
    $(".card-answer-2").toggle();
  });

  $("p.card-answer-2").click(function() {
    $(".card-question-2").toggle();
    $(".card-answer-2").toggle();
  });

  $("h5.card-question-3").click(function() {
    $(".card-question-3").toggle();
    $(".card-answer-3").toggle();
  });

  $("p.card-answer-3").click(function() {
    $(".card-question-3").toggle();
    $(".card-answer-3").toggle();
  });

  $("h5.card-question-4").click(function() {
    $(".card-question-4").toggle();
    $(".card-answer-4").toggle();
  });

  $("p.card-answer-4").click(function() {
    $(".card-question-4").toggle();
    $(".card-answer-4").toggle();
  });

  $("h5.card-question-5").click(function() {
    $(".card-question-5").toggle();
    $(".card-answer-5").toggle();
  });

  $("p.card-answer-5").click(function() {
    $(".card-question-5").toggle();
    $(".card-answer-5").toggle();
  });

  $("h5.card-question-6").click(function() {
    $(".card-question-6").toggle();
    $(".card-answer-6").toggle();
  });

  $("p.card-answer-6").click(function() {
    $(".card-question-6").toggle();
    $(".card-answer-6").toggle();
  });

  $("h5.card-question-7").click(function() {
    $(".card-question-7").toggle();
    $(".card-answer-7").toggle();
  });

  $("p.card-answer-7").click(function() {
    $(".card-question-7").toggle();
    $(".card-answer-7").toggle();
  });

  $("h5.card-question-8").click(function() {
    $(".card-question-8").toggle();
    $(".card-answer-8").toggle();
  });

  $("p.card-answer-8").click(function() {
    $(".card-question-8").toggle();
    $(".card-answer-8").toggle();
  });

  $("h5.card-question-9").click(function() {
    $(".card-question-9").toggle();
    $(".card-answer-9").toggle();
  });

  $("p.card-answer-9").click(function() {
    $(".card-question-9").toggle();
    $(".card-answer-9").toggle();
  });
});