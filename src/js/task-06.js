const validationInput = document.querySelector('#validation-input');


validationInput.addEventListener('blur',onValidationInput);

function onValidationInput(event) {
   
     if (
    event.currentTarget.value.length === Number(validationInput.dataset.length)
  ) {
         validationInput.classList.add("valid");
         validationInput.classList.remove("invalid");
     } else {
         validationInput.classList.add("invalid"); 
         validationInput.classList.add("valid")
    };

    console.log(ev.currentTarget.value);
    
}
    
