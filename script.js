

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



    let index = 0; //counter
    function displayImages() {

  let y;
  const images = document.getElementsByClassName("image-fade");
  for (y = 0; y < images.length; y++) {
    images[y].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
  }

  function displayImages2() {
    let q;
    const images = document.getElementsByClassName("image-fade-2");
    for (q = 0; q < images.length; q++) {
      images[q].style.display = "none";
    }
    index++;
    if (index > images.length) {
      index = 1;
    }
    images[index-1].style.display = "block";
    setTimeout(displayImages2, 2000); 
    }
    
    function displayImages3() {
        let p;
        const images = document.getElementsByClassName("image-fade-3");
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

        function displayImages4() {
            let q;
            const images = document.getElementsByClassName("image-fade-4");
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

            function displayImages5() {
                let q;
                const images = document.getElementsByClassName("image-fade-5");
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
    const b1 = document.querySelectorAll("#onClick");
    let i;
    for (i = 0; i<b1.length; i++){

    if (b1[i].style.display === "none") {
      b1[i].style.display = "block";
    } 
    else {
      b1[i].style.display = "none";
    }
  }

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
  
      } //function
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
    
        } //function
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
      
          } //function
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
        
            } //function

 

// selet all buttons 
// loop through buttons
// hide it in CSS, let it shows in the if statement

lightbox.option({ 
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
    fitImagesInViewport: true,
    imageFadeDuration: 60,
  })
// resize images so view dont need to scroll so view images. 
// imagefaded, fades once image is open 