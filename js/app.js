function goBack() {
    window.history.back();
}

// array for background images

const backgroundImage1 = 'https://cdn.glitch.com/96478797-c429-47dc-a2a6-e886b050e1e8%2F49247335772_7b750af39e_k.jpg?v=1577551353699';
const backgroundImage2 = 'timothy-oldfield-luufnHoChRU-unsplash.jpg';
const backgroundImage3 = 'https://cdn.glitch.com/96478797-c429-47dc-a2a6-e886b050e1e8%2F49247335772_7b750af39e_k.jpg?v=1577551353699';


const backgroundImages = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage1];
let counter = 0;

// set background image

(function setBackground() {

    counter = 1;
    console.log('this runs');
    const background = document.createElement("a-sky");
    background.setAttribute("id", "sky"); 
    background.setAttribute("src", backgroundImages[0]);  

    const scene = document.getElementById('scene');
    scene.appendChild(background);
   
})();

// change to previous background image

const previousBtn = document.getElementById('previousBtn');
previousBtn.addEventListener('click', changePreviousBackground, false);

function changePreviousBackground() {


    counter -= 1;
    console.log(counter);
    const background = document.createElement("a-sky");
    background.setAttribute("id", "sky2"); 
    background.setAttribute("src", backgroundImages[counter]);  

    console.log('previous bg3');
    const scene = document.getElementById('scene');
    scene.appendChild(background); 

}

// change to next background image

const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', changeNextBackground, false);

function changeNextBackground() {

    counter += 1;
    console.log(counter);
    console.log('next bg');
    const background = document.createElement("a-sky");
    background.setAttribute("id", "sky2"); 
    background.setAttribute("src", backgroundImages[counter]);  
    const scene = document.getElementById('scene');
    scene.appendChild(background); 

}