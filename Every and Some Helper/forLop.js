var  computers = [
    { name: 'apple', ram: 24 },
    { name: 'compaq', ram: 4 },
    { name: 'acer', ram: 32}
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;


for( var i = 0; i < computers.length; i++) {
    var computer = computers[i];

    if(computer.ram < 16 ) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputerCanRunProgram = true
    }
};

console.log('computer=', computer);