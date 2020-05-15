var users = [
    { name: 'Mary'},
    { name: 'TingSheng'},
    { name: 'Zest'}
];


var user = users.find(function(user) {
    return user.name === 'TingSheng'
});

console.log('user=', user);


var post = { id: 4, title: 'New Post'};

var comments = [
    { postId: 4, content: 'Awesome post'},
    { postId: 3, content: 'Great'},
    { postId: 4, content: 'Neat'}
];

function commentsForPost( post, comments) {
    return comments.find(function(comment) {
        return comment.postId === post.id
    });
}