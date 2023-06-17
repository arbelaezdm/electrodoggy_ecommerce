let eye = document.querySelector('.eye-icon');
let eyeConfirm = document.querySelector('.eye-icon-confirm');
let input = document.getElementById('input-login-password');
let registerInput = document.getElementById('password-register-validation');
let confirmRegisterInput = document.getElementById('confirm-password-register-validation');

// LOGIN EYE
eye.addEventListener('click', function(){
    if(input.type == "password"){
        input.type = "text"
        eye.innerHTML = '<i class="fa-solid fa-eye"></i>'
    } else{
        input.type = "password"
        eye.innerHTML= '<i class="fa-solid fa-eye-slash" id="close-eye"></i>'
    }
});

// REGISTER EYE
eye.addEventListener('click', function(){
    if(registerInput.type == "password"){
        registerInput.type = "text"
        eye.innerHTML = '<i class="fa-solid fa-eye"></i>'
    } else{
        registerInput.type = "password"
        eye.innerHTML= '<i class="fa-solid fa-eye-slash" id="close-eye"></i>'
    };

    if (registerInput.type === 'text') {
        confirmRegisterInput.type = "text"
        eyeConfirm.innerHTML = '<i class="fa-solid fa-eye"></i>'
    }else{
        confirmRegisterInput.type = "password"
        eyeConfirm.innerHTML= '<i class="fa-solid fa-eye-slash" id="close-eye"></i>'
    }
});

// CONFIRM REGISTER EYE
eyeConfirm.addEventListener('click', function(){
    if(confirmRegisterInput.type == "password"){
        confirmRegisterInput.type = "text"
        eyeConfirm.innerHTML = '<i class="fa-solid fa-eye"></i>'
    } else{
        confirmRegisterInput.type = "password"
        eyeConfirm.innerHTML= '<i class="fa-solid fa-eye-slash" id="close-eye"></i>'
    };

    
    if (confirmRegisterInput.type === 'text') {
        registerInput.type = "text"
        eye.innerHTML = '<i class="fa-solid fa-eye"></i>'
    }else{
        registerInput.type = "password"
        eye.innerHTML= '<i class="fa-solid fa-eye-slash" id="close-eye"></i>'
    }
});


