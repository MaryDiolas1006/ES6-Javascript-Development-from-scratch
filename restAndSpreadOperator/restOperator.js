function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number
    }, 0);
}

addNumbers(1,2,3,4,5,6,7);



function validateShoppingList(...items) {
    if(items.indexOf(milk) < 0) {
        return ['milk', ...item];
    }
    return items;
}

validateShoppingList('nuts', 'almond', 'cereal');