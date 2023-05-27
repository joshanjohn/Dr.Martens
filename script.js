

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
};



window.onload  = function() {
    

    myFunction(); //calling show and hide button function

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

            
      // Show more button function
    function myFunction() {
    const x = document.querySelectorAll("#onClick");
 

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

lightbox.option({ 
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
    fitImagesInViewport: true,
    imageFadeDuration: 60,
  })
// resize images so view dont need to scroll so view images. 
// imagefaded, fades once image is open 