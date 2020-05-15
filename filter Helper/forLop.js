var products = [
    { name: 'carrots', type: 'vegetable'  },
    { name: 'apple', type: 'fruits'},
    { name: 'celery', type: 'vegetable'},
    { name: 'orange', type: 'fruits'}
];

var filteredProducts = [];

for( var i = 0; i < products.length; i++) {
    if(products[i].type === fruit){
        filteredProducts.push(products[i]);
    }
};

console.log('filteredProducts=', filteredProducts);