const fs = require('fs');

const book = {
    title: 'stay true',
    author: 'Hua'
}

fs.writeFileSync('book.json', JSON.stringify(book))