//to make this a actual grid, i need to repat the square1 element many time.
/*need to figure out how to make a for loop functional so it repeats the div several different
times to make a grid.*/
var colorArray = ["red", "orange", "yellow", "green", "blue", "purple", "white", "black", "pink", "aqua", "grey"]
var currentColor = ""

for (var i = 0; i <colorArray.length; i++) {
  var divBlock = document.createElement("div");
  divBlock.className = "blocks";
  divBlock.style.backgroundColor = colorArray[i];
  divBlock.onclick = color;
  var contain = document.getElementsByClassName("mainContainer")[0];
  contain.appendChild(divBlock);
}

for(var i = 0; i < 3385; i++) {
    var divBlock = document.createElement("div");
    divBlock.className = "blocks";
    divBlock.onclick = myFunction;
    var contain = document.getElementsByClassName("mainContainer")[0];
    contain.appendChild(divBlock);

}

function myFunction(event) {
    if (this.style.backgroundColor === currentColor) {
      this.style.backgroundColor = "white";
    }else {
      this.style.backgroundColor = currentColor;
    }
}

function color() {
  currentColor = this.style.backgroundColor;
}

/* to make this more than just one color- basically, you need divs that are a
solid color. When you click on the div that is a solid color, then that becomes your
color. each other div becomes that color until you click on another color.*/

/*posiblity, take each background color and put it into an array then use a function
and loop to call each of the different colors to change the click function*/
