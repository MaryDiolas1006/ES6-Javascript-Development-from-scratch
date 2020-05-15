class comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }
    *[Symbol.iterator]() {
        yield this.content;
        for(let child of this.children){
            yield* child;
        }
    }
}

const children = [
    new comment ('hahhaah', []),
    new comment ( 'lalallal', []),
    new comment ('nananan', []),
]

const tree = new comment('booooo', children);

const values = [];
for(let value of tree) {
    values.push(value);
}

values;