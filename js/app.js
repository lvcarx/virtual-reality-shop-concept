function goBack() {
    window.history.back();
}

// array for background images

var backgroundImages = ['https://cdn.glitch.com/96478797-c429-47dc-a2a6-e886b050e1e8%2F49247335772_7b750af39e_k.jpg?v=1577551353699', 'img\timothy-oldfield-luufnHoChRU-unsplash.jpg'];

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

    const background2 = document.createElement("a-sky");
    background2.setAttribute("id", "sky2"); 
    background2.setAttribute("src", backgroundImages[1]);  

    console.log('previous bg3');
    const scene = document.getElementById('scene');
    scene.appendChild(background2);

    console.log('previous bg');
    const background = document.getElementById('sky');
    background.setAttribute("src", "#sky2");  

}

// change to next background image

const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', changeNextBackground, false);

function changeNextBackground() {

    console.log('next bg');
    const background = document.getElementById('sky');
    background.setAttribute("src", "#sky2");  

}