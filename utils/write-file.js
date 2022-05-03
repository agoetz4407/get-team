const fs = require('fs')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message:'Your team profile is done! Open index.html the dist directory to see it.'
            })
        })
    })
}

module.exports = writeFile