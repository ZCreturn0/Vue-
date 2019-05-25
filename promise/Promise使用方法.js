const fs = require('fs');

new Promise(function (resolve, reject) {
    fs.readFile('./files/1.txt', 'utf-8', function (err, data) {
        if (err) {
            reject(err);
        }
        else {
            resolve(data);
        }
    });
}).then((data) => {
    console.log('success');
    console.log(data);
}, (err) => {
    console.log('fail');
    console.log(err);
});