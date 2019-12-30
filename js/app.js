function goBack() {
    window.history.back();
}

// array containing background images

const backgroundImage1 = 'https://cdn.glitch.com/96478797-c429-47dc-a2a6-e886b050e1e8%2F49247335772_7b750af39e_k.jpg?v=1577551353699';
const backgroundImage2 = 'timothy-oldfield-luufnHoChRU-unsplash.jpg';
const backgroundImage3 = 'https://cdn.glitch.com/96478797-c429-47dc-a2a6-e886b050e1e8%2F49247335772_7b750af39e_k.jpg?v=1577551353699';


const backgroundImages = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage2];
let counter = 0;

// array for containing scene names

const backgroundImage1Name = 'Environment1';
const backgroundImage2Name = 'Environment2';
const backgroundImage3Name = 'Environment3';

const environmentName = [backgroundImage1Name, backgroundImage2Name, backgroundImage3Name, backgroundImage2Name];


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