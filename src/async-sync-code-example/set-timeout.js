console.log("App start");

// setTimeout means run this function in 2 second, not immediately
setTimeout(() => {
    console.log('Inside callback');
}, 2000);

setTimeout(() => {
    console.log('Inside second callback');
}, 0);

console.log("Finish app");
