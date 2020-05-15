var numbers = [1, 2, 3, 4, 5];



var doubled = numbers.map(function(number) {
    return number * 2
});

console.log('doubled=', doubled);



var cars = [
    { model: toyota, price: Cheap},
    { model: Honda, price: expensive}
];

var prices = cars.map(function(car) {
    return car.price
});

console.log('prices=', prices);