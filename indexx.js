const display = document.querySelector(".display");

function toDisplay(input){
 display.value += input;
}
function clearDisplay(){
    display.value= ""

}

function calculate(){
  
      display.value = eval(display.value);

      
  
}
