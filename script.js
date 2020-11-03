$(document).ready(function(){

  var magic8Ball = {};
 magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."]; 
   
  // define the method
 
  magic8Ball.askQuestion = function(question) {
            $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
 
           $("#answer").fadeIn(4000);

        console.log("I show immediately!")
 
            setTimeout(
           function() {
            console.log("I wait 3 seconds, then show!")
           }, 3000);


    $("#8ball").effect( "shake" );  
       // create a random number
       var randomNumber = Math.random();
   
       // make the random number between 0 and the number of items in your array
       var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
   
       // round down the number to be a whole number
       var randomIndex = Math.floor(randomNumberForListOfAnswers);
   
       // use that number to index a random number from the answers array
       var answer = this.listOfAnswers[randomIndex];

      

       $ ("#answer").text(answer);  
   
       console.log(question);
       console.log(answer);
  };

  var onClick = function() {  
    $("#answer").hide(answer);
    var question = prompt("ASK A YES/NO QUESTION!");
    magic8Ball.askQuestion(question); 
};
 

$("#questionButton").click( onClick );  

$("#answer").hide();

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

//wait half a second before showing prompt
   setTimeout(
       function() {
           //show prompt
           var question = prompt("Ask a yes or no question")
           magic8Ball.askQuestion(question)
       }, 500);

});


