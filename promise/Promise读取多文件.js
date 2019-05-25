const fs = require('fs');
const path = require('path');

function getFileByPath(filename) {
    var promise = new Promise(function (resolve, reject) {
        fs.readFile(filename, 'utf-8', function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
    return promise;
}

getFileByPath('./files/1.txt').then((data) => {
    console.log('success');
    console.log(data);
    return getFileByPath('./files/3.txt');
}, (err) => {
    console.log('fail');
    console.log(err);
    return getFileByPath('./files/3.txt');
}).then((data) => {
    console.log('success');
    console.log(data);
    return getFileByPath('./files/2.txt');
}, (err) => {
    console.log('fail');
    console.log(err);
    return getFileByPath('./files/2.txt');
}).then((data) => {
    console.log('success');
    console.log(data);
}, (err) => {
    console.log('fail');
    console.log(err);
});