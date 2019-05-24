const fs = require('fs');
const path = require('path');

function getFileData(file, successCallback, failCallback){
    fs.readFile(file, 'utf-8', (err, data) => {
        if(err){
            return failCallback(err, data);
        }
        else{
            return successCallback(err, data);
        }
    });
}
getFileData(path.resolve(__dirname, './files/1.txt'), (err, data) => {
    console.log('success');
    console.log(data);
}, (err, data) => {
    console.log('fail');
    console.log(data);
});