// naming the variables

var WordOptions = ["rugrats", "spongebob","recess", "dexter", "proudfamily", "ededdeddy"];


//var images = ["90kidbanner.png", "billyandmmandy.png", 
//"Chuckie_Finster.png","dexter.png","ededdeddy.png",
//"fairlyoddparents.png","kimpossible.png","powerpuff.png",
//"proudfamily.png","recess.png", "spongebob.png"];


       var s = "";
       var lettersinWord = "";
       var num = 0;
       var blanks = [];
       var wrong = [];
       var pictures=[];
       
       var winCount = 0;
       var lossCount = 0;
       var guesses = 9; 
       var hintTime = 0
       
       //------------------------------------------
       
       function startGame(){
           
        s = WordOptions[Math.floor(Math.random() * WordOptions.length)];
        var lettersinWord = s.split("");
           num = lettersinWord.length;
           //reset
           guesses = 9;
           wrong = [];
           blanks = [];
           //hintTime = 0;
        
       
           //populate 
           for (var i = 0; i < num; i++){
               blanks.push("_");
           }
       
           document.getElementById("wordToGuess").innerHTML = blanks.join(" ");
           document.getElementById("numGuesses").innerHTML = guesses; 
           document.getElementById("winCounter").innerHTML = winCount; 
           document.getElementById("lossCounter").innerHTML = lossCount;
       
       }
       
       
       function checkLetters(letter) {
       
           //determine whether user is typing a letter only
     if (letter >= "A" && letter <="Z") {
             console.log("hello");
               
       
     var isLetterInWord = false; 
       
        for(var i = 0; i < num; i++) { 
          if (s[i] === letter){
                 isLetterInWord = true; 
       
            }
         }
       
        if(isLetterInWord){
             for (var i = 0; i < num; i++){
                if (s[i] === letter){
                  blanks[i] = letter; 
                     }
                 }
                   hintTime ++;
               }
       
    else { 
         var isAlreadyThere = false;
            for (var i = 0; i < wrong.length; i++){
       
                 if (wrong[i] === letter){
                           
                    isAlreadyThere = true;
                     }  
                 }
       
                if (!isAlreadyThere) {
                     wrong.push(letter);
                     guesses--;  
                  }
       
               }
           } 
       }
       
       function roundComplete(){ 
       
           document.getElementById("wordToGuess").innerHTML = blanks.join(" ");
           document.getElementById("numGuesses").innerHTML = guesses;
       
           document.getElementById("wrongGuesses").innerHTML = wrong.join(" ");
          
          
         
       
           
           //check if user won or lost
           if (lettersinWord == blanks.toString()) {
       
               //Score win point
               winCount++; 
       
               document.getElementById("winCounter").innerHTML = winCount; 
       
       
               startGame();
       
           }
           else if (guesses === 0){
               console.log("Not working")
               lossCount++;
               document.getElementById("lossCounter").innerHTML = lossCount;
               wrong = [];
       
              
               startGame();
           }
       }
       
       startGame();
           //reset image
       
       document.onkeyup = function(event) { 
           var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
           console.log(checkLetters(letterGuessed));
           console.log(letterGuessed);
           roundComplete();
           console.log(wrong);
        }