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
