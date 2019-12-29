function goBack() {
    window.history.back();
}

// set background image

(function setBackground() {

    console.log('this runs');
    const background = document.createElement("a-sky");
    background.setAttribute("id", "sky"); 
    background.setAttribute("src", "#sky");  

    const scene = document.getElementById('scene');
    scene.appendChild(background);
   
})();

// change to previous background image

const previousBtn = document.getElementById('previousBtn');
previousBtn.addEventListener('click', changePreviousBackground, false);

function changePreviousBackground() {

    console.log('previous+ bg');
    const background = document.getElementById('sky');
    background.setAttribute("src", "#sky2");  

}

// change to next background image

const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', changeNextBackground, false);

function changeNextBackground() {

    console.log('next bg');
    background.setAttribute("src", "#sky");  

}