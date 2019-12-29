function goBack() {
    window.history.back();
}

// change to previous background image

const previousBtn = document.getElementById('previousBtn');
previousBtn.addEventListener('click', changePreviousBackground, false);

function changePreviousBackground() {

    console.log('test');

}

// change to next background image

const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', changeNextBackground, false);

function changeNextBackground() {

    console.log('test');

}