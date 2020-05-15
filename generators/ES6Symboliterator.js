const testingTeam = {
    lead: 'hahha',
    tester: 'lalala',
    [Symbol.iterator]: function*() {
        yield this.lead;
        yield this.tester;
    }
}


const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'engineering',
    lead: 'Zest',
    manager: 'TingSheng',
    engineer: 'Mary',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
}


const names = [];
for(let name of engineeringTeam) {
    names.push(name);
}

console.log('names=', names)