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

// 1.不需要传rejext    2.加上catch
getFileByPath('./files/1.txt').then((data) => {
    console.log('success');
    console.log(data);
    return getFileByPath('./files/3.txt');
})
.then((data) => {
    console.log('success');
    console.log(data);
    return getFileByPath('./files/2.txt');
})
.then((data) => {
    console.log('success');
    console.log(data);
})
.catch((err) => {
    console.log('fail');
    console.log(err);
});