function saveFile(url, data) {
    $.ajax({ url, data, method: 'Post' });
}

const url = 'http://fileupload.com';
const data = { color: 'red'};

saveFile(url, data);