const fs = require('fs');
const path = require('path');

function getFileData(file, callback){
    fs.readFile(file, 'utf-8', (err, data) => {
        if(err){
            throw err;
        }
        callback(data);
    });
}
getFileData(path.resolve(__dirname, './files/2.txt'), (data) => {
    console.log(data);
});