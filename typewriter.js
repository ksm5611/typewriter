const sentence = "hello there from lighthouse labs";

setTimeout(() => {
  // print the char here
  for (const char of sentence) {
    // console.log(char);
    process.stdout.write(char); //avoid automatically adding an extra "newline character" at the end each time.
  }
  console.log('\n');
}, 1000); // <= 1s delay to make it noticeable. Can dial it down later.
