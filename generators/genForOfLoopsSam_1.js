function* colors() {
    yield 'black';
    yield 'red';
    yield 'grey'
}

const mycolors = [];

for(let color of colors()) {
    mycolors.push(color);
}

console.log('mycolors=', mycolors);