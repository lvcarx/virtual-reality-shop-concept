function goBack() {
    window.history.back();
}

// set background image

(function setBackground() {

    console.log('this runs');
    const background = document.createElement("a-sky");
    background.setAttribute("src", "#sky");  
   
})();

// change to previous background image

const previousBtn = document.getElementById('previousBtn');
previousBtn.addEventListener('click', changePreviousBackground, false);

function changePreviousBackground() {

    

}

// change to next background image

const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', changeNextBackground, false);

function changeNextBackground() {

    

}