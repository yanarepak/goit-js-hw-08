import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
console.log(formEl);

const STORAGE_KEY = "feedback-form-state";
