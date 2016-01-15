//to make this a actual grid, i need to repat the square1 element many time.
/*need to figure out how to make a for loop functional so it repeats the div several different
times to make a grid.*/

for(var i = 0; i < 3396; i++) {
    var divBlock = document.createElement("div");
    divBlock.className = "blocks";
    divBlock.onclick = myFunction;
    var contain = document.getElementsByClassName("mainContainer")[0];
    contain.appendChild(divBlock);

}


function myFunction(event) {
    if (this.style.backgroundColor === "red") {
      this.style.backgroundColor = "white";
    }else {
      this.style.backgroundColor = "red";
    }
}

/* to make this more than just one color- basically, you need divs that are a
solid color. When you click on the div that is a solid color, then that becomes your
color. each other div becomes that color until you click on another color.*/
