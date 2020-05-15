class Car {
    constructor({ title }) {
        this.title = title
    }

    drive() {
        return 'vroom'
    }
}

class Toyota extends Car {
    constructor(options) {
        super(options)
        this.color = options.color
    }
}

const toyota = new Toyota({ title: 'blabla', color: 'black'});
toyota.honk();
toyota.drive();
toyota;