function goBack() {
    window.history.back();
}

// array containing background images

const backgroundImage1 = 'img/backgroundImages/vr-image-city-bridge.jpg';
const backgroundImage2 = 'img/backgroundImages/vr-image-coast.jpg';
const backgroundImage3 = 'img/backgroundImages/vr-image-cobblestones.jpg';
const backgroundImage4 = 'img/backgroundImages/vr-image-snowy-mountain.jpg';
const backgroundImage5 = 'img/backgroundImages/vr-image-snowy-mountain(2).jpg';


const backgroundImages = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5];
let counter = 0;

// array for containing scene names

const backgroundImage1Name = 'Bridge';
const backgroundImage2Name = 'Coast';
const backgroundImage3Name = 'City';
const backgroundImage4Name = 'Snowy Mountain at sunset';
const backgroundImage5Name = 'Snowy Mountain at night';

const environmentName = [backgroundImage1Name, backgroundImage2Name, backgroundImage3Name, backgroundImage4Name, backgroundImage5Name];


// set background image

(function setBackground() {

    counter = 0;
    console.log('this runs');
    const background = document.createElement("a-sky");
    background.setAttribute("id", "sky"); 
    background.setAttribute("src", backgroundImages[0]);  

    const scene = document.getElementById('scene');
    scene.appendChild(background);
   
})();

// set environment description

(function setEnvironmentDescription() {

    const environmentDescription = document.getElementById('currentScene');
    environmentDescription.textContent = environmentName[0];
    console.log(environmentName[1]);

})();

// change to previous background image

const previousBtn = document.getElementById('previousBtn');
previousBtn.addEventListener('click', changePreviousBackground, false);

function changePreviousBackground() {

    if (counter > 0) {

        higherPreviousArrowOpacity();
        higherNextArrowOpacity();
        const allSkyElements = document.getElementsByTagName('a-sky');

        for (i = 0; i < allSkyElements.length; i++) {
            allSkyElements[i].remove();
        }
            console.log(allSkyElements);

        counter -= 1;
        console.log(counter);
        const background = document.createElement("a-sky");
        background.setAttribute("id", "sky2"); 
        background.setAttribute("src", backgroundImages[counter]);  

        console.log('previous bg3');
        const scene = document.getElementById('scene');
        scene.appendChild(background); 

        // change environmentDescription

        const environmentDescription = document.getElementById('currentScene');
        environmentDescription.textContent = environmentName[counter];
    
    } else {

        lowerPreviousArrowOpacity();

    }

}

// change to next background image

const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', changeNextBackground, false);

function changeNextBackground() {

    if (counter < (backgroundImages.length - 1)) {    

        higherNextArrowOpacity();
        higherPreviousArrowOpacity();
        const allSkyElements = document.getElementsByTagName('a-sky');
        for (i = 0; i < allSkyElements.length; i++) {
            allSkyElements[i].remove();
        }
        console.log(allSkyElements);

        counter += 1;
        console.log(counter);
        console.log('next bg');
        const background = document.createElement("a-sky");
        background.setAttribute("id", "sky2"); 
        background.setAttribute("src", backgroundImages[counter]);  
        const scene = document.getElementById('scene');
        scene.appendChild(background); 

        // change environmentDescription

        const environmentDescription = document.getElementById('currentScene');
        environmentDescription.textContent = environmentName[counter];

    } else {

        lowerNextArrowOpacity();

    }

}

function higherNextArrowOpacity() {

    const nextButton = document.getElementById('nextBtn');
    nextButton.classList.remove('lowerOpacity');

}

function higherPreviousArrowOpacity() {

    const previousButton = document.getElementById('previousBtn');
    previousButton.classList.remove('lowerOpacity');

}

function lowerNextArrowOpacity() {

    const nextButton = document.getElementById('nextBtn');
    nextButton.classList.add('lowerOpacity');

}

function lowerPreviousArrowOpacity() {

    const previousButton = document.getElementById('previousBtn');
    previousButton.classList.add('lowerOpacity');

}




//


