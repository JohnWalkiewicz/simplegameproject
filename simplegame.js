

/*OWL MOVEMENT*/
var owlXPosition = Number(owl.getAttribute("x"));
var owlYPosition = Number(owl.getAttribute("y"));
document.addEventListener("keydown", function(e){
  var owl = document.getElementById("owl")

  function RandomNumberGenertor(min,max){
    return Math.floor((Math.random()*(max-min+1)+min));
  }




  var mice = document.getElementById("mice");
  var miceX = Number(mice.getAttribute("x"));
  var miceY = Number(mice.getAttribute("y"));
  var miceWidth = Number(mice.getAttribute("width"))
  var miceHeight = Number(mice.getAttribute("height"));
  if(e.keyCode == 37){
    owl.setAttribute("x", owlXPosition - 1)
    owlXPosition = owlXPosition - 1;

    if(owlXPosition > miceX && owlXPosition < miceX + miceWidth && owlYPosition > miceY &&  owlYPosition < miceY + miceHeight){
      document.getElementById("mice").setAttribute("x", RandomNumberGenertor(0,190));
      console.log("overlap");
    }
  }
  else if(e.keyCode == 39){
    owl.setAttribute("x", owlXPosition + 1)
    owlXPosition = owlXPosition + 1;

    if(owlXPosition > miceX && owlXPosition < miceX + miceWidth && owlYPosition > miceY &&  owlYPosition < miceY + miceHeight){
      document.getElementById("mice").setAttribute("x", RandomNumberGenertor(0,190));
      console.log("overlap");
    }
  }
  else if(e.keyCode == 38){
    owl.setAttribute("y", owlYPosition - 1)
    owlYPosition = owlYPosition - 1;

    if(owlXPosition > miceX && owlXPosition < miceX + miceWidth && owlYPosition > miceY &&  owlYPosition < miceY + miceHeight){
      document.getElementById("mice").setAttribute("x", RandomNumberGenertor(0,190));
      console.log("overlap");
    }
  }
  else if(e.keyCode == 40){
    owl.setAttribute("y", owlYPosition + 1)
    owlYPosition = owlYPosition + 1;

    if(owlXPosition > miceX && owlXPosition < miceX + miceWidth && owlYPosition > miceY &&  owlYPosition < miceY + miceHeight){
      document.getElementById("mice").setAttribute("x", RandomNumberGenertor(0,190));
      console.log("overlap");
    }
  }
});
