function user(id){
    this.id = id;
}

function generatedId() {
    return Math.ramdom() * 777777777
}

function createAdminUser(user = new User(generatedId())) {
    user.admin = true

    return user;
}

const user = new User(generatedId());
createAdminUser(user);
