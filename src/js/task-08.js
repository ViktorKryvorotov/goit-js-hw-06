const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    const formData = { email: email.value, password: password.value };
    
    if (email.value === '' || password.value === '') {
        
        alert("Всі поля повинні бути заповнені")
           
    } else {
        console.log(formData);
     
    }
     event.currentTarget.reset();
});
