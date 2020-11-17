$(document).ready(function(){
   var magic8Ball = {};
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
      magic8Ball.askQuestion = function(question){
      var randomNumber = Math.random();
      var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
      var randomIndex = Math.floor(randomNumberForListOfAnswers);
      var answer = this.listOfAnswers[randomIndex];

      $("#answer").text( answer );
     
      console.log(question);
      console.log(answer);
  };  
       $("#answer").hide();       
     
var onClick = function() {
        $("#answer").hide();  
          
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");        
              
      setTimeout(
     function() {
         //show prompt
     magic8Ball.askQuestion(question);
     }, 500);
     $("#8ball").effect( "shake" );      
      $("#answer").fadeIn(4000);
     var question = prompt("Will today be a great day? ASK A YES/NO QUESTION!");    
    }
    $("#questionButton").click( onClick);
   //wait half a seond before showing prompt
  });