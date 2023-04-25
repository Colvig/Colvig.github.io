// page 3
// top row
const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click' , () => {
        removeActiveClasses()
        panel.classList.add('active')
    })

})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    }) 
}
// bottom row
const panels2 = document.querySelectorAll('.panel2')
panels2.forEach(panel2 => {
    panel2.addEventListener('click' , () => {
        removeActiveClassesSecond()
        panel2.classList.add('active')
    })

})
function removeActiveClassesSecond() {
    panels2.forEach(panel2 => {
        panel2.classList.remove('active')
    }) 
}
// end page 3

var imgs = $("img");


// to be attached to each image's onclick event
function imgScaleToggle() { 
    // get current image size
    var h=$(this).height(); 
    var w=$(this).width(); 
    // scale determines how much the image is to be magnified
    var scale = 5.0;

    // check if image has been clicked before
    if($(this).hasClass("clicked")) {
        var factor=1/scale;
        $(this).removeClass("clicked");
    } else {
        var factor=scale;
        $(this).addClass("clicked");
    }
    $(this).css("height", h*factor); 
    $(this).css("width", w*factor); 
}

// attach the handler to all of the selected images' onclick methods
imgs.click( imgScaleToggle );