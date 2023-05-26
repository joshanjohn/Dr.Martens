
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
};


// resize images so view dont need to scroll so view images. 
// imagefaded, fades once image is open 
window.onload  = function() {
    lightbox.option({ 
        resizeDuration: 200,
        wrapAround: true,
        disableScrolling: true,
        fitImagesInViewport: true,
        imageFadeDuration: 60,
      })



} 

