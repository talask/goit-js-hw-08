let throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const inputData = form.childNodes[1].firstElementChild;
const textareaData = form.childNodes[3].firstElementChild;
console.dir(document);

form.addEventListener('input', throttle(fnAddData,500));
form.addEventListener('submit', fnSendForm);

document.addEventListener('DOMContentLoaded',() => {
   
    const {email = '', message = ''} = JSON.parse(localStorage.getItem("feedback-form-state"));
           
    inputData.value = email;
    textareaData.value = message;
    
} );

function fnAddData(e) {
         
    const formData = {
        email: inputData.value,
        message: textareaData.value
    };
    console.log(formData);
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));

    const {email = '', message = ''} = JSON.parse(localStorage.getItem("feedback-form-state"));
    
}

function fnSendForm(e){
    e.preventDefault();
    
    console.log({email: inputData.value, message:       textareaData.value});

    inputData.value = '';
    textareaData.value = '';
    localStorage.removeItem("feedback-form-state")
}