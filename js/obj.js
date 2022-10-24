'use strict';
console.log('obj.js');


const user = {
  name: 'John',
  age: 34,
  town: 'Vilnius',
};

const user1 = {
  name: 'Mike',
  age: 34,
  town: 'Vilnius',
};


function printName(obj) {
  console.log(obj.name);
  console.log('and the name is', obj.name);
}


// iskviesti funkcija kad ji atspausdintu 'john'

printName(user);

