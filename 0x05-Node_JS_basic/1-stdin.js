process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
    const insert = process.stdin.read();

    if (insert) {
        process.stdout.write(`Your name is: ${insert}`);
    }
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
