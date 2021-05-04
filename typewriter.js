const sentence = "hello there from lighthouse labs\n";

let start = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, start);
  start += 50;
}


//     process.stdout.write(char); //avoid automatically adding an extra "newline character" at the end each time.


