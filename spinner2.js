const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
let time = 100;
for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}   `);
  }, time)
  time += 200
}

