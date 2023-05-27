

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
};



window.onload  = function() {
    

//calling show and hide button function
buttonFunction();

buttonFunction2();

buttonFunction3();

buttonFunction4();

buttonFunction5();

    //    slide show function 
    displayImages(); //calling slide show functions
    displayImages2();
    displayImages3();
    displayImages4();
    displayImages5();


    }



    let index = 0; //set counter
    function displayImages() {

  let y; //set variable y
  const images = document.getElementsByClassName("image-fade"); //set class variable
  for (y = 0; y < images.length; y++) {//loop through the 3 images in each set. (0-1-2).
    images[y].style.display = "none"; //hide the images
  }

  index++;  //add 1 to counter, let index be greater than the image.length which starts at 0.

  if (index > images.length) { //if index is more than the length of image set(3 in each set) which it is from index++. 
    index = 1;  //let counter = 1 ; 
  }
  //index-1 after setting it to 1, so it's now 0.
  //to control the index of the image that is looping once we hide it
  //index should be adding each time the code loops.
  images[index-1].style.display = "block"; //display 
  //loop#1 at index 0. image at index 0 will appear(1st image in the set of 3). 
  setTimeout(displayImages, 2000);  //amount of miliseconds to show each images.
  }

  //same functiuons 
  function displayImages2() {
    let q;
    const images = document.getElementsByClassName("image-fade-2");//set class variable
    for (q = 0; q < images.length; q++) { //for loop
      images[q].style.display = "none";  //hide images for the slidesshow
    }
    index++;
    if (index > images.length) {
      index = 1;
    }
    images[index-1].style.display = "block";
    setTimeout(displayImages2, 2000); 
    }
    
    //same function
    function displayImages3() {
        let p;
        const images = document.getElementsByClassName("image-fade-3");//set class variable
        for (p = 0; p < images.length; p++) {
          images[p].style.display = "none";
        }
        index++;
        if (index > images.length) {
          index = 1;
        }
        images[index-1].style.display = "block";
        setTimeout(displayImages3, 2000); 
        }

        //same
        function displayImages4() {
            let q;
            const images = document.getElementsByClassName("image-fade-4");//set class variable
            for (q = 0; q < images.length; q++) {
              images[q].style.display = "none";
            }
            index++;
            if (index > images.length) {
              index = 1;
            }
            images[index-1].style.display = "block";
            setTimeout(displayImages4, 2000); 
            }
            //same 
            function displayImages5() {
                let q;
                const images = document.getElementsByClassName("image-fade-5");//set class variable
                for (q = 0; q < images.length; q++) {
                  images[q].style.display = "none";
                }
                index++;
                if (index > images.length) {
                  index = 1;
                }
                images[index-1].style.display = "block";
                setTimeout(displayImages5, 2000); 
                }

          
                


      // Show more button functions to hide and show individual buttons
    function buttonFunction() {  
    const b1 = document.querySelectorAll("#onClick");//call paragraph by ID.
    let i; //set variable 
    for (i = 0; i<b1.length; i++){ //loop through the index, should be just 1. 

    if (b1[i].style.display === "none") { //if the content is hidden
      b1[i].style.display = "block";  //we display the content. 
    } 
    else {
      b1[i].style.display = "none"; //else keep it hidden. 
    } //function activates uponclicking the button. 
    //if content is display. click the button(activate function) will display none. 
  }
  //each button has it's own function with the same code. 

    } //function

    function buttonFunction2() {
      const b2 = document.querySelectorAll("#onClick-2");
   let i;
  
  
      for ( i = 0; i<b2.length; i++){
  
      if (b2[i].style.display === "none") {
        b2[i].style.display = "block";
      } 
      else {
        b2[i].style.display = "none";
      }
    }
  
      } //each button has it's own function with the same code. 
      function buttonFunction3() {
        const b3 = document.querySelectorAll("#onClick-3");
     
    let i;
    
        for (i = 0; i<b3.length; i++){
    
        if (b3[i].style.display === "none") {
          b3[i].style.display = "block";
        } 
        else {
          b3[i].style.display = "none";
        }
      }
    
        } ///each button has it's own function with the same code. 
        function buttonFunction4() {
          const b4 = document.querySelectorAll("#onClick-4");
       let i;
      
      
          for ( i = 0; i<b4.length; i++){
      
          if (b4[i].style.display === "none") {
            b4[i].style.display = "block";
          } 
          else {
            b4[i].style.display = "none";
          }
        }
      
          } //same
          function buttonFunction5() {
            const b5 = document.querySelectorAll("#onClick-5");
         
        let i;
        
            for ( i = 0; i<b5.length; i++){
        
            if (b5[i].style.display === "none") {
              b5[i].style.display = "block";
            } 
            else {
              b5[i].style.display = "none";
            }
          }
        
            } //same

 

// lightbox 
lightbox.option({ 
    resizeDuration: 200, // resize images so view dont need to scroll so view images. 
    wrapAround: true, 
    disableScrolling: true, //disable scrolling .
    fitImagesInViewport: true, //image fit viewport. 
    imageFadeDuration: 60, // resize images so view dont need to scroll so view images. 
  })

