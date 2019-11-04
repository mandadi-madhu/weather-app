console.log('starting');

setTimeout(() => {
    console.log('two seconds later');
}, 2000);

setTimeout(() => {
    console.log('0 seconds later');
}, 0);

console.log('ending');
