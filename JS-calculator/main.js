// select all buttons on the calculator and the display screen

const keys = document.querySelectorAll('.btn');
const screen = document.querySelector('.calculator-display');

// add listener 

keys.forEach(function (button){
    button.addEventListener('click', function(event){
    
    console.log('hello');
    })
});