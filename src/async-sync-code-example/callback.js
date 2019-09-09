let fs = require('fs');
console.time('file-read');

// function doMath(a, b) {
//     console.log('Doing math for', a, b);
//     return a + b;
// }
//
// console.log('Do math');
// doMath(2, 2);
// console.log('End math');

// callback it is a special function that will be executed once your async operation completed
// result of your async function will be pass to callback function
const callback = fs.readFile('../../package.json', 'utf8', (err, data) => {
    // Errors handling
    if (err) throw err;
    console.log(data);
    console.timeEnd('file-read');

        fs.readFile('../../.testcaferc.json', 'utf8', (err, data) => {
            if (err) throw err;
            console.log(data);
        });
});

console.log("callback", callback);