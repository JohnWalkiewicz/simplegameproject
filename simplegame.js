/*OWL MOVEMENT*/
var owl = document.getElementById("owl")
var owlXPosition = Number(owl.getAttribute("x"));
var owlYPosition = Number(owl.getAttribute("y"));

document.addEventListener("keydown", function(e){
  if(e.keyCode == 37){
    owl.setAttribute("x", owlXPosition - 1)
    owlXPosition = owlXPosition - 1;
  }
  else if(e.keyCode == 39){
    owl.setAttribute("x", owlXPosition + 1)
    owlXPosition = owlXPosition + 1;
  }
  else if(e.keyCode == 38){
    owl.setAttribute("y", owlYPosition - 1)
    owlYPosition = owlYPosition - 1;
  }
  else if(e.keyCode == 40){
    owl.setAttribute("y", owlYPosition + 1)
    owlYPosition = owlYPosition + 1;
  }
});

/*OWL COLLSIONS*/
var mice = document.getElementById("mice");


var miceX = Number(mice.getAttribute("x"));
var miceY = Number(mice.getAttribute("y"));

var miceWidth = Number(owl.getAttribute("width"))
var miceHeight = Number(owl.getAttribute("height"));

if(owlXPosition > miceX && owlXPosition < miceX + miceWidth && owlYPosition > miceY &&  owlYPosition < miceY + miceHeight){
  mice.setAttribute("fill-opacity", "0");
}
else{

}
