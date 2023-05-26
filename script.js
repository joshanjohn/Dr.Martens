function myFunction() {
    var x = document.querySelectorAll("#onClick");

    for (let i = 0; i<x.length; i++){
    if (x[i].style.display === "none") {
      x[i].style.display = "block";
    } else {
      x[i].style.display = "none";
    }
    }
  }
// selet all buttons 
// loop through buttons
// hide it in CSS, let it shows in the if statement
