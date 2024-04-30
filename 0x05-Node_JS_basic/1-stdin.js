console.log('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data}`);
    process.exit
    });

process.stdin.on('exit', () => {
    console.log('This important software is now closing\n');
    });
}    