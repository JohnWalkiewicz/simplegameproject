/*BAT MOVEMENT*/
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
