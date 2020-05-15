const testingTeam = {
    lead: 'hahha',
    tester: 'lalala'
}


const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'engineering',
    lead: 'Zest',
    manager: 'TingSheng',
    engineer: 'Mary'
}


function* teamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    const testingTeamGenerator = testingTeamIterator(team.testingTeam);
    yield* testingTeamGenerator;
}

function* testingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

const names = [];
for(let name of teamIterator(engineeringTeam)) {
    names.push(name);
}

console.log('names=', names)