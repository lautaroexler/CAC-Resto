const myForm = document.getElementById('myForm');
let formName = document.getElementById('form-name');
let formSurname = document.getElementById('form-surname');
let formEmail = document.getElementById('form-email');
let formPhone = document.getElementById('form-phone');
let formComments = document.getElementById('form-comments')

myForm.addEventListener('submit', submitForm);

const formValues = {};

function submitForm(event) {
    event.preventDefault();

    formValues.name = formName.value;
    formValues.surname = formSurname.value;
    formValues.email = formEmail.value;
    formValues.phone = formPhone.value;
    formValues.comments = formComments.value;

    console.log(formValues);
    myForm.reset();
}