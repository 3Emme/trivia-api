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
      console.log(decodeURIComponent(`${response.results[0].question}`));
      $('#question1').text(decodeURIComponent(`${response.results[0].question}`));
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
      // Card 2 Event Listeners
      $(".card-2-button-true").click(function(){
        if (response.results[1].correct_answer === "True"){
          // Reveal the answer
          $(".card-answer-2").show();
          $(".card-2-button-true").hide();
          $(".card-2-button-false").hide();
          // Add 'You are correct!'
          $(".card2").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-2").show();
          $(".card-2-button-true").hide();
          $(".card-2-button-false").hide();
          $(".card2").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
      $(".card-2-button-false").click(function(){
        if (response.results[1].correct_answer === "False"){
          // Reveal the answer
          $(".card-answer-2").show();
          $(".card-2-button-true").hide();
          $(".card-2-button-false").hide();
          // Add 'You are correct!'
          $(".card2").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-2").show();
          $(".card-2-button-true").hide();
          $(".card-2-button-false").hide();
          $(".card2").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
      // Card 3 Event Listeners
      $(".card-3-button-true").click(function(){
        if (response.results[2].correct_answer === "True"){
          // Reveal the answer
          $(".card-answer-3").show();
          $(".card-3-button-true").hide();
          $(".card-3-button-false").hide();
          // Add 'You are correct!'
          $(".card3").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-3").show();
          $(".card-3-button-true").hide();
          $(".card-3-button-false").hide();
          $(".card3").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
      $(".card-3-button-false").click(function(){
        if (response.results[2].correct_answer === "False"){
          // Reveal the answer
          $(".card-answer-3").show();
          $(".card-3-button-true").hide();
          $(".card-3-button-false").hide();
          // Add 'You are correct!'
          $(".card3").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-3").show();
          $(".card-3-button-true").hide();
          $(".card-3-button-false").hide();
          $(".card3").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
      // Card 4 Event Listeners
      $(".card-4-button-true").click(function(){
        if (response.results[3].correct_answer === "True"){
          // Reveal the answer
          $(".card-answer-4").show();
          $(".card-4-button-true").hide();
          $(".card-4-button-false").hide();
          // Add 'You are correct!'
          $(".card4").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-4").show();
          $(".card-4-button-true").hide();
          $(".card-4-button-false").hide();
          $(".card4").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
      $(".card-4-button-false").click(function(){
        if (response.results[3].correct_answer === "False"){
          // Reveal the answer
          $(".card-answer-4").show();
          $(".card-4-button-true").hide();
          $(".card-4-button-false").hide();
          // Add 'You are correct!'
          $(".card4").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-4").show();
          $(".card-4-button-true").hide();
          $(".card-4-button-false").hide();
          $(".card4").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
      // Card 5 Event Listeners
      $(".card-5-button-true").click(function(){
        if (response.results[4].correct_answer === "True"){
          // Reveal the answer
          $(".card-answer-5").show();
          $(".card-5-button-true").hide();
          $(".card-5-button-false").hide();
          // Add 'You are correct!'
          $(".card5").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-5").show();
          $(".card-5-button-true").hide();
          $(".card-5-button-false").hide();
          $(".card5").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
      $(".card-5-button-false").click(function(){
        if (response.results[4].correct_answer === "False"){
          // Reveal the answer
          $(".card-answer-5").show();
          $(".card-5-button-true").hide();
          $(".card-5-button-false").hide();
          // Add 'You are correct!'
          $(".card5").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-5").show();
          $(".card-5-button-true").hide();
          $(".card-5-button-false").hide();
          $(".card5").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
      // Card 6 Event Listeners
      $(".card-6-button-true").click(function(){
        if (response.results[5].correct_answer === "True"){
          // Reveal the answer
          $(".card-answer-6").show();
          $(".card-6-button-true").hide();
          $(".card-6-button-false").hide();
          // Add 'You are correct!'
          $(".card6").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-6").show();
          $(".card-6-button-true").hide();
          $(".card-6-button-false").hide();
          $(".card6").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
      $(".card-6-button-false").click(function(){
        if (response.results[5].correct_answer === "False"){
          // Reveal the answer
          $(".card-answer-6").show();
          $(".card-6-button-true").hide();
          $(".card-6-button-false").hide();
          // Add 'You are correct!'
          $(".card6").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-6").show();
          $(".card-6-button-true").hide();
          $(".card-6-button-false").hide();
          $(".card6").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });// Card 7 Event Listeners
      $(".card-7-button-true").click(function(){
        if (response.results[6].correct_answer === "True"){
          // Reveal the answer
          $(".card-answer-7").show();
          $(".card-7-button-true").hide();
          $(".card-7-button-false").hide();
          // Add 'You are correct!'
          $(".card7").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-7").show();
          $(".card-7-button-true").hide();
          $(".card-7-button-false").hide();
          $(".card7").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
      $(".card-7-button-false").click(function(){
        if (response.results[6].correct_answer === "False"){
          // Reveal the answer
          $(".card-answer-7").show();
          $(".card-7-button-true").hide();
          $(".card-7-button-false").hide();
          // Add 'You are correct!'
          $(".card7").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-7").show();
          $(".card-7-button-true").hide();
          $(".card-7-button-false").hide();
          $(".card7").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
      // Card 8 Event Listeners
      $(".card-8-button-true").click(function(){
        if (response.results[7].correct_answer === "True"){
          // Reveal the answer
          $(".card-answer-8").show();
          $(".card-8-button-true").hide();
          $(".card-8-button-false").hide();
          // Add 'You are correct!'
          $(".card8").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-8").show();
          $(".card-8-button-true").hide();
          $(".card-8-button-false").hide();
          $(".card8").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
      $(".card-8-button-false").click(function(){
        if (response.results[7].correct_answer === "False"){
          // Reveal the answer
          $(".card-answer-8").show();
          $(".card-8-button-true").hide();
          $(".card-8-button-false").hide();
          // Add 'You are correct!'
          $(".card8").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-8").show();
          $(".card-8-button-true").hide();
          $(".card-8-button-false").hide();
          $(".card8").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
      // Card 9 Event Listeners
      $(".card-9-button-true").click(function(){
        if (response.results[8].correct_answer === "True"){
          // Reveal the answer
          $(".card-answer-9").show();
          $(".card-9-button-true").hide();
          $(".card-9-button-false").hide();
          // Add 'You are correct!'
          $(".card9").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-9").show();
          $(".card-9-button-true").hide();
          $(".card-9-button-false").hide();
          $(".card9").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
      $(".card-9-button-false").click(function(){
        if (response.results[8].correct_answer === "False"){
          // Reveal the answer
          $(".card-answer-9").show();
          $(".card-9-button-true").hide();
          $(".card-9-button-false").hide();
          // Add 'You are correct!'
          $(".card9").prepend("You are correct!");
          // Increment a counter by 1
          score +=1;
          $("#score").text(score);
        } else {
          $(".card-answer-9").show();
          $(".card-9-button-true").hide();
          $(".card-9-button-false").hide();
          $(".card9").prepend("You are incorrect!");
        }
        questionsAnswered +=1;
        $("#questionsAnswered").text(questionsAnswered);
      });
    };
  });
});