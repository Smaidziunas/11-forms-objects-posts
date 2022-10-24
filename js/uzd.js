
// 1. Sukurk input į kurį įvestum savo vardą. Submit paspaudus - išoktų alert su tavo vardu.

const formEl = document.getElementById('form');
const btnEl = document.querySelector('.btn');
const nameEl = document.getElementById('firstName');
const containerEl = document.querySelector('.container');

// formEl.addEventListener('submit', (event) => {
//   alert(nameEl.value)})

// 2. Sukurk input į kurį įvesi savo amžių. Padaryk, kad submit paspaudus, viršuj esančiame h1 elemente atsirastų "Tavo amžius: [amžius]".

const ageEl = document.getElementById('age');

// formEl.addEventListener('submit', (event) => {
//   alert(`Tavo amzius yra ${ageEl.value}`)})

// 3. Sukurk du input - į vieną įrašysi savo vardą, į kitą - amžių. Jei daugiau nei 18 - išmeta h1 elemente "Vairuoti gali: [vardas]"; jei nėra išmeta: "Dar mokysis vairuotis: [vardas]".


// formEl.addEventListener('submit', (event) => {

//   event.preventDefault();

//   const ageValueEl = ageEl.value.trim();
//   const nameValueEl = nameEl.value.trim();

//   let h1El = crElement('h1', containerEl, 'mainHeading', 'Vairuoti gali');

//   if (ageValueEl < 18) {
//   h1El.textContent = (`Dar mokysis vairuotis: ${nameValueEl}`)};
  
//   if(ageValueEl > 18) {
//   h1El.textContent = (`Vairuoti gali: ${nameValueEl}`)};
// })


function crElement (tagName, dest, className, text){
  const el = document.createElement(tagName);
  if (className) el.className = className;
  if (text || text === 0) el.textContent = text;
  dest.append(el);
  return el;
}



// 4. Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS  apskaičiuoja kainą ir išmeta ją h1 elemente. Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60. Variable turi būti aprašyti viršuj, kad būtų lengva keist.



// formEl.addEventListener('submit', (event) => {

//   event.preventDefault();

//   const ageValueEl = ageEl.value.trim();
//   const nameValueEl = nameEl.value.trim();

//   const priceEl = 6; 
 
//   let price50 = (+priceEl /  2 );
//   let priceSenior = (+priceEl /  3 );

//   let h1El = crElement('h1', containerEl, 'mainHeading', 'text');

//   if(ageValueEl < 16) {
//     h1El.textContent = `kaina yra ${price50} Eur`
//   } else if(ageValueEl > 60) {
//     h1El.textContent = `kaina yra ${priceSenior} Eur`
//   }

//   else {
//     h1El.textContent = `kaina yra ${priceEl} Eur`
//   }


// });




// 5. Kai kuriose šalyse reikia eiti į kariuomenę, jei tu tarp 18 ir 30, tačiau, jei neturi kriminalinio įrašo. Sukurk programą, kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente). Hint: pasirinkite su querySelector tik pažymėtą radio input (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę.

// const radioEl = document.querySelector('[name=radioButton]:checked').value;

const radioEl = document.querySelector('#radio');

const radioSelected = document.querySelector('input:checked');


// let h1El = crElement('h1', containerEl, 'mainHeading', 'text');

// btnEl.addEventListener('click', () =>{
//   event.preventDefault();

//   const ageValueEl = ageEl.value.trim();
//   const nameValueEl = nameEl.value.trim();

//   if(radioEl.checked === true) {
//     console.log('click veikia');
//     console.log(+ageValueEl);
//     if (ageValueEl > 18 && ageValueEl < 30){
//     h1El.textContent = "gali reiketi kariauti"
//   }
//   }
//   ageEl.value = '';

// })


// 6. Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu. Pvz: [16] => "Jūsų bonusas: 100 eurų".

btnEl.addEventListener('click', () =>{
    preventDefault();
  
    const ageValueEl = ageEl.value.trim();
    const nameValueEl = nameEl.value.trim();

    // for(let numbr)

    // let bonus = ageValueEl >

    // if ageValueEl < 10 = 50
    // if ageValueEl > 10 = 100
    // if ageValueEl > 20 = 200

})

// 7. Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.

// 8. Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.

// 9. Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".

// 10. Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias
// . Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :)
