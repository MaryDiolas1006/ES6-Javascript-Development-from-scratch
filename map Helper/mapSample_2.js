// Pluck function. Pluck should accept an array and a string representing 
// a property name and return an array containing that property from each Object.


var paints = [
    {color: 'red'},
    {color: 'blue'},
    {color: 'yellow'}
]

function pluck(array, property) {
    var colors = array.map(function(element) {
        return element[property];
    });
    return colors;
}