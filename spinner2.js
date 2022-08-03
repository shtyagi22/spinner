//process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
//['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|']
let time = 100;
for (const spin of spinner) {
  setTimeout(() => {
    //console.log("spin:", spin)
    process.stdout.write(`\r${spin}   `);
  }, time)
  time += 200
}

