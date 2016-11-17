var owl = document.getElementById("owl")
var owlXPosition = Number(owl.getAttribute("x"));
var owlYPosition = Number(owl.getAttribute("y"));

var mice = document.getElementById("mice");
var miceX = Number(mice.getAttribute("x"));
var miceY = Number(mice.getAttribute("y"));
var miceWidth = Number(mice.getAttribute("width"))
var miceHeight = Number(mice.getAttribute("height"));

/*OWL MOVEMENT*/
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
if(owlXPosition > miceX && owlXPosition < miceX + miceWidth && owlXPosition > miceX && owlYPosition < miceY + miceHeight){
  mice.setAttribute("opacity", "0");
  console.log("overlap");
}
else{

}
