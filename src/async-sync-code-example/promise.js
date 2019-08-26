let fs = require('fs');
const util = require('util')
console.time('file-read');

let promise = new Promise(function (resolve, reject) {
    fs.readFile('../../package.json', 'utf8', (err, data) => {
        if (err) {
            reject (err);
        }
        resolve(data);
    });
});

let readFile = util.promisify(fs.readFile());

console.log("pending promise", promise);
promise.then((data) => {
    console.log("promise resolve", promise);
    console.log(data);
}, error => {
    console.log(error)
}).catch(function (error) {
    console.log(error)
});

// simplify code
promise.then((data) => {
    console.log("promise resolve", promise);
    console.log(data);
}, error => console.log(error));

promise.then(console.log, console.log);

promise.then(console.log, console.log)
    .then(() => {
        return 'lol'
});