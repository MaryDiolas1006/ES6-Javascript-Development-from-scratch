function car(option) {
    return this.title = options.title
}

car.prototype.drive = function() {
    return 'vroom';
}

function Toyota(options) {
    car.call(this, options);
    this.color = options.color;
};

Toyota.prototype = Object.create(car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function(){
    return 'beep';
}

const toyota = new Toyota({color: 'black', title: 'blabla'});

toyota;
toyota.drivve();
toyota.honk();
