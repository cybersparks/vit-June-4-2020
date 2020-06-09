//document.addEventListener('DOMContentLoaded', function(){
    //The above function is needed so your code in the script doesn't run before
    //the DOM has time to render your HTML.
    
    document.addEventListener('DOMContentLoaded', function(){

        let changeColorButton = document.querySelector('#changeColor')
      
        let colorDiv = document.querySelector('#colorDiv')
      
        changeColorButton.addEventListener('click', function(){
      
            colorDiv.style.background = 'green'
      
        })
      
      })