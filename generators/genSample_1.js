//Generators is adding a * in a function

function* shopping () {

   const stuffFromStore =  yield 'cash';
   const cleanClothes = yield 'laundry';
   return [stuffFromStore, cleanClothes]

}

const gen = shopping();
gen.next();
gen.next('groceries');
gen.next('clean clothes');
