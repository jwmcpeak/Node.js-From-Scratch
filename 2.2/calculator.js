'use strict';

// Stream : EventEmitter
process.stdin.on('data', (err, chunk) => {
    if (err) {
        throw {message: 'There is something wrong with stdin', err};
    }

    const str = chunk.toString().trim();

    if (str === 'exit') {
        process.exit(0);
    }

    try {
        const value = eval(str);
        console.log(`Result: ${value}`);
    } catch(exception) {
        console.log("I don't know what to do that.");
    }
});

console.log("I'm listening.");