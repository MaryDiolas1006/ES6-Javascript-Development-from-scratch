var saveFiled = {
    extension: 'jpg',
    name: 'repost',
    size: 132292044
}

function fileSummary({ extension, name, size }) {
    return `The file ${name}.${extension} is of size ${size}`
}


fileSummary(saveFiled);