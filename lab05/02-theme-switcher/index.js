/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const de_fault = (ev) => {
   document.querySelector("body").className = "";
};

const desert = (ev) => {
   document.querySelector("body").className = "desert";
};

const ocean = (ev) => {
   document.querySelector("body").className = "ocean";
};

const high_contrast = (ev) => {
   document.querySelector("body").className = "high-contrast";
};


document.querySelector("#default").addEventListener('click', de_fault);
document.querySelector("#desert").addEventListener('click', desert);
document.querySelector("#ocean").addEventListener('click', ocean);
document.querySelector("#high-contrast").addEventListener('click', high_contrast);