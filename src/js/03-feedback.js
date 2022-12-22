import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const refs = {
    email: document.querySelector('input'),
    message: document.querySelector('textarea')
}

const FEEDBACK_FORM = "feedback-form-state"

formEl.addEventListener('input', throttle(handleFormInput, 500)); 
formEl.addEventListener('submit', handlerFormSubmit);

const formData = {};

function handleFormInput(event){
    formData[event.target.name] = event.target.value;
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
};

function handlerFormSubmit(event){
    console.log(JSON.parce(localStorage.getItem(FEEDBACK_FORM)));
    event.preventDefault();
    formEl.reset();
    localStorage.removeItem(FEEDBACK_FORM);
}

function populateTextarea(){
    if(JSON.parse(localStorage.getItem(FEEDBACK_FORM)) === null){
        return
    }
    refs.message.value = JSON.parse(localStorage.getItem(FEEDBACK_FORM)).message || '' ;
    refs.email.value = JSON.parse(localStorage.getItem(FEEDBACK_FORM)).email || '';
}
populateTextarea();
 
