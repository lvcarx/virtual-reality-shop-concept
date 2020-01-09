// function for closing the vr experience

function goBack() {
    window.history.back();
}



const backgroundImage1 = 'img/backgroundImages/beach.jpg';
const backgroundImage2 = 'img/backgroundImages/bridge.jpg';
const backgroundImage3 = 'img/backgroundImages/carrousel.jpg';
const backgroundImage4 = 'img/backgroundImages/lake.jpg';
const backgroundImage5 = 'img/backgroundImages/miami.jpg';

// array containing background images
const backgroundImages = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5];

// setting counter variable
let counter = 0;


const backgroundImage1Name = 'Beach';
const backgroundImage2Name = 'Bridge';
const backgroundImage3Name = 'Carrousel';
const backgroundImage4Name = 'Lake';
const backgroundImage5Name = 'Miami';

// array containing scene names
const environmentName = [backgroundImage1Name, backgroundImage2Name, backgroundImage3Name, backgroundImage4Name, backgroundImage5Name];


// this function sets initial background image

(function setBackground() {

    counter = 0;
    const background = document.createElement("a-sky");
    background.setAttribute("id", "sky"); 
    background.setAttribute("src", backgroundImages[0]);  

    const scene = document.getElementById('scene');
    scene.appendChild(background);
   
})();

// this function sets initial environment description

(function setEnvironmentDescription() {

    const environmentDescription = document.getElementById('currentScene');
    environmentDescription.textContent = environmentName[0];

})();

// change to previous (in the array) background image

const previousBtn = document.getElementById('previousBtn');
previousBtn.addEventListener('click', changePreviousBackground, false);

function changePreviousBackground() {

    // is true if counter is higher than zero
    if (counter > 0) {

        higherPreviousArrowOpacity();
        higherNextArrowOpacity();
        const allSkyElements = document.getElementsByTagName('a-sky');

        // removing other sky elements
        for (i = 0; i < allSkyElements.length; i++) {
            allSkyElements[i].remove();
        }

        // reducing counter 
        counter -= 1;

        // creating new background element
        const background = document.createElement("a-sky");
        background.setAttribute("id", "sky"); 
        background.setAttribute("src", backgroundImages[counter]);  

        const scene = document.getElementById('scene');
        scene.appendChild(background); 

        // change environmentDescription
        const environmentDescription = document.getElementById('currentScene');
        environmentDescription.textContent = environmentName[counter];
    
    } else {

        // lowering previous arrow opacity
        lowerPreviousArrowOpacity();

    }

}

// change to next (in the array) background image

const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', changeNextBackground, false);

function changeNextBackground() {

    // is true if counter is lower than length of background images array
    if (counter < (backgroundImages.length - 1)) {    

        higherNextArrowOpacity();
        higherPreviousArrowOpacity();
        const allSkyElements = document.getElementsByTagName('a-sky');
        
        // removing other sky elements
        for (i = 0; i < allSkyElements.length; i++) {
            allSkyElements[i].remove();
        }

        // increasing counter 
        counter += 1;

        // creating new background element
        const background = document.createElement("a-sky");
        background.setAttribute("id", "sky"); 
        background.setAttribute("src", backgroundImages[counter]);  
        const scene = document.getElementById('scene');
        scene.appendChild(background); 

        // change environmentDescription

        const environmentDescription = document.getElementById('currentScene');
        environmentDescription.textContent = environmentName[counter];

    } else if (counter = (backgroundImages.length - 1)) {

        // lowering next arrow opacity
        lowerNextArrowOpacity();

    }

}

// higher the opacity of next button 

function higherNextArrowOpacity() {

    const nextButton = document.getElementById('nextBtn');
    nextButton.classList.remove('lowerOpacity');

}

// higher the opacity of previous button 

function higherPreviousArrowOpacity() {

    const previousButton = document.getElementById('previousBtn');
    previousButton.classList.remove('lowerOpacity');

}

// lower the opacity of next button 

function lowerNextArrowOpacity() {

    const nextButton = document.getElementById('nextBtn');
    nextButton.classList.add('lowerOpacity');

}

// lower the opacity of previous button 

function lowerPreviousArrowOpacity() {

    const previousButton = document.getElementById('previousBtn');
    previousButton.classList.add('lowerOpacity');

}

// sound control

function activateSound() {

    const sounds = document.getElementById('s2');
    sounds.components.sound.playSound();

}

function deactivateSound() {

    const sounds = document.getElementById('s2');
    sounds.components.sound.stopSound();
    console.log('workd');

}