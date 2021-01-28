let button = document.querySelector('button');
let paragraphName = document.getElementById('name');
let paragraphSurname = document.getElementById('surname');
let paragraphPhone = document.getElementById('phone');

button.onclick = function() {
    let formName = document.getElementById('formName');
    paragraphName.textContent = formName.value;     /* '.value' may be here */
    let formSurname = document.getElementById('formSurname').value; /* or here */
    paragraphSurname.textContent = formSurname;
    let formPhone = document.getElementById('formPhone').value;
    paragraphPhone.textContent = formPhone;
}