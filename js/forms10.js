'use strict';
console.log('forms10.js');


//   #1. nusitaikom i forma (gaunam formos elementa)

const formEl = document.getElementById('loginForm');

const usernameInputEl = document.getElementById('username');
const emailInputEl = document.getElementById('email');

  // galima iskviesti event listener, nenusitaikius i elementa.
// btn.addEventListener('click', function(event){
//   console.log('event ===', event);
// })



//  #2. sukuriam eventListener

formEl.addEventListener('submit', (event) => {
  console.log('submit ivyko');
//  #3. sustabdom formos automatini isiuntima su preventDefault (sustabdo)
  event.preventDefault()
  // clearErrors();
// #4. surenkam input reiksmes. Geriausia surinkti iskarto i viena objekta
const usernameValue = usernameInputEl.value;
const emailValue = emailInputEl.value;
//  #5. pirmine validacija
if(usernameValue.length === 0){
  console.log('iveskite varda');
// #6. nusitaikom i inputEl ir po juo einancius errorFeedback, per nextElementSibling
    usernameInputEl.nextElementSibling.style.display = 'block';
}
if(emailValue.length === 0){
  console.log('iveskite email');
// #6. nusitaikom i inputEl ir po juo einancius errorFeedback, per nextElementSibling
    emailInputEl.nextElementSibling.style.display = 'block';
}
})

// #7. sukuriam funkcija kurioje isvalom susikaupusias klaidas. (querySelector grazina tik pirma rasta elementa);
function clearErrors () {

  const errElArr = document.querySelectorAll('.errorFeedback');

  for(let oneEl of errElArr){
    oneEl.errElArr.display = 'none';
  }
}
