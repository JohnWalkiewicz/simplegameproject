

/*OWL MOVEMENT*/
var numberOfFoodEaten = 0;
document.addEventListener("keydown", function(e){
  var owl = document.getElementById("owl")
  var owlXPosition = Number(owl.getAttribute("x"));
  var owlYPosition = Number(owl.getAttribute("y"));

  function RandomNumberGenertor(min,max){
    return Math.floor((Math.random()*(max-min+1)+min));
  }







  var mice = document.getElementById("mice");
  var miceX = Number(mice.getAttribute("x"));
  var miceY = Number(mice.getAttribute("y"));
  var miceWidth = Number(mice.getAttribute("width"))
  var miceHeight = Number(mice.getAttribute("height"));

  var mice2 = document.getElementById("mice2");
  var mice2X = Number(mice2.getAttribute("x"));
  var mice2Y = Number(mice2.getAttribute("y"));
  var mice2Width = Number(mice2.getAttribute("width"))
  var mice2Height = Number(mice2.getAttribute("height"));
  if(e.keyCode == 37){
    owl.setAttribute("x", owlXPosition - 1)
    owlXPosition = owlXPosition - 1;

    if(owlXPosition > miceX && owlXPosition < miceX + miceWidth && owlYPosition > miceY &&  owlYPosition < miceY + miceHeight){
      document.getElementById("mice").setAttribute("x", RandomNumberGenertor(0,190));
      console.log("overlap");

      numberOfFoodEaten = numberOfFoodEaten + 1;
      document.getElementById("foodCounterText").textContent = numberOfFoodEaten;
      console.log(numberOfFoodEaten);
    }
    if(owlXPosition > mice2X && owlXPosition < mice2X + mice2Width && owlYPosition > mice2Y &&  owlYPosition < mice2Y + mice2Height){
      document.getElementById("mice2").setAttribute("x", RandomNumberGenertor(0,190));
      console.log("overlap");

      numberOfFoodEaten = numberOfFoodEaten + 1;
      document.getElementById("foodCounterText").textContent = numberOfFoodEaten;

    }

  }
  else if(e.keyCode == 39){
    owl.setAttribute("x", owlXPosition + 1)
    owlXPosition = owlXPosition + 1;

    if(owlXPosition > miceX && owlXPosition < miceX + miceWidth && owlYPosition > miceY &&  owlYPosition < miceY + miceHeight){
      document.getElementById("mice").setAttribute("x", RandomNumberGenertor(0,190));
      console.log("overlap");

      numberOfFoodEaten = numberOfFoodEaten + 1;
      document.getElementById("foodCounterText").textContent = numberOfFoodEaten;
    }
    if(owlXPosition > mice2X && owlXPosition < mice2X + mice2Width && owlYPosition > mice2Y &&  owlYPosition < mice2Y + mice2Height){
      document.getElementById("mice2").setAttribute("x", RandomNumberGenertor(0,190));
      console.log("overlap");

      numberOfFoodEaten = numberOfFoodEaten + 1;
      document.getElementById("foodCounterText").textContent = numberOfFoodEaten;
    }
  }
  else if(e.keyCode == 38){
    owl.setAttribute("y", owlYPosition - 1)
    owlYPosition = owlYPosition - 1;

    if(owlXPosition > miceX && owlXPosition < miceX + miceWidth && owlYPosition > miceY &&  owlYPosition < miceY + miceHeight){
      document.getElementById("mice").setAttribute("x", RandomNumberGenertor(0,190));
      console.log("overlap");

      numberOfFoodEaten = numberOfFoodEaten + 1;
      document.getElementById("foodCounterText").textContent = numberOfFoodEaten;
    }
    if(owlXPosition > mice2X && owlXPosition < mice2X + mice2Width && owlYPosition > mice2Y &&  owlYPosition < mice2Y + mice2Height){
      document.getElementById("mice2").setAttribute("x", RandomNumberGenertor(0,190));
      console.log("overlap");

      numberOfFoodEaten = numberOfFoodEaten + 1;
      document.getElementById("foodCounterText").textContent = numberOfFoodEaten;
    }
  }
  else if(e.keyCode == 40){
    owl.setAttribute("y", owlYPosition + 1)
    owlYPosition = owlYPosition + 1;

    if(owlXPosition > miceX && owlXPosition < miceX + miceWidth && owlYPosition > miceY &&  owlYPosition < miceY + miceHeight){
      document.getElementById("mice").setAttribute("x", RandomNumberGenertor(0,190));
      console.log("overlap");

      numberOfFoodEaten = numberOfFoodEaten + 1;
      document.getElementById("foodCounterText").textContent = numberOfFoodEaten;
    }
    if(owlXPosition > mice2X && owlXPosition < mice2X + mice2Width && owlYPosition > mice2Y &&  owlYPosition < mice2Y + mice2Height){
      document.getElementById("mice2").setAttribute("x", RandomNumberGenertor(0,190));
      console.log("overlap");

      numberOfFoodEaten = numberOfFoodEaten + 1;
      document.getElementById("foodCounterText").textContent = numberOfFoodEaten;
    }
  }
});
