var users = [
    { name: 'Mary'},
    { name: 'TingSheng'},
    { name: 'Zest'}
];


var user;

for( var i = 0; i < users.length; i++) {
    if(users[i].name === 'TingSheng'){
        user = users[i];
        break;
    }
}