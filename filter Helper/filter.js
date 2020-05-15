var products = [
    { name: 'carrots', type: 'vegetable'},
    { name: 'apple', type: 'fruits'},
    { name: 'celery', type: 'vegetable'},
    { name: 'orange', type: 'fruits'}
];

var types = products.filter(function(product) {
    return product.type === 'fruit'
});

console.log('types=', types);


var products = [
    { name: 'carrots', type: 'vegetable', quantity: 5, price: 3},
    { name: 'apple', type: 'fruits', quantity: 13, price: 12},
    { name: 'celery', type: 'vegetable', quatity: 9, price: 6},
    { name: 'orange', type: 'fruits', quantity: 23, price: 13}
];


//type is 'vegetable', quantity is greater than 0, price is less than 10.

products.filter(function(product) {
    return product.type === 'vegetable' && product.quantity > 0 && product.price < 10
});

console.log('products=', products);



var post = { id: 4, title: 'New Post'};

var comments = [
    { postId: 4, content: 'Awesome post'},
    { postId: 3, content: 'Great'},
    { postId: 4, content: 'Neat'}
];

function commentsForPost( post, comments) {
    return comments.filter(function(comment) {
        return comment.postId === post.id
    });

}

