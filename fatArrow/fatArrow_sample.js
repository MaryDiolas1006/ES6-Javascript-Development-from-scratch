const numbers = [1, 2, 3, 4, 5];

 const number = numbers.map(number => 2 * number);

console.log('number=', number);


const team = {
    members: ['Mary', 'Sheng'],
    teamName: 'What the Heck',
    teamSummary: function() {
        //this === team
        return this.members.map(member => {
            return `${member} is on team${this.teamName}`;
        });
    }
};