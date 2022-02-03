/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const de_fault = (ev) => {
   alert('make bigger!');
};

const desert = (ev) => {
   alert('make smaller!');
};

const ocean = (ev) => {
   alert('make smaller!');
};

const high_contrast = (ev) => {
   alert('make smaller!');
};


document.querySelector("default").addEventListener('click', makeBigger);
document.querySelector("desert").addEventListener('click', makeSmaller);
document.querySelector("ocean").addEventListener('click', makeSmaller);
document.querySelector("high-contrast").addEventListener('click', makeSmaller);