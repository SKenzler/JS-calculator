
    // select all buttons on the calculator and the display screen

    const keys = document.querySelectorAll('.btn');
    const equalKey = document.querySelector('.btn-equals');
    const clearKey = document.querySelector('.btn-clear');
    const screen = document.querySelector('.calculator-display');

    // add listener to the operations and number button and display value on the calculator display

    keys.forEach(function (button){
        button.addEventListener('click', function(event){

            let value = event.target.dataset.number;
            screen.innerHTML += value;
        })
    });

    // add listener to the equal button and display value on the calculator display

    equalKey.addEventListener('click', function(event){
        
        let value = screen.innerHTML;

        if(value === ""){
            screen.innerHTML = "";
        }

        else{
            let result = eval(value);
            screen.innerHTML = result;
        }
    });

     // add listener to the clear button and reset calculator display

    clearKey.addEventListener('click', function(event){
        screen.innerHTML = "";
    });
