const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start();
// start game
async function start() {
  const welcomeMessage = `182 Main St.
You are standing on Main Street between Church and South Winooski.
There is a door here. A keypad sits on the handle.
On the door is a handwritten sign.
>_`;
  // whatever typed, return 'you typed' and 'answer' and
  // and sorry i don't know what that means
  let answer = await ask(welcomeMessage);
  console.log("You typed: " + answer);
  console.log("Sorry, I don't know what " + answer + " means. ");

  // when you type anything but exit, return same as above
  while (answer !== "exit") {
    answer = await ask(">_ ");
    console.log("You typed: " + answer);
    console.log("Sorry, I don't know what " + answer + " means. ");
  }

  }

  answer = await ask(">_ ");
  process.exit();
}






/* 

SIGN HINT
  while (answer === "read sign") {
    let sign = {
      description: "Welcome to Burlington Code Academy! Come on up to the third floor.\nIf the door is locked, use the code 12345."
    read: () => {
      return this.description
    }

don't be afraid to commit or push, which you can do as many times as you want

only a few additional things at tuesday's class that could help, but you
  should be able to get through the TEN STORIES okay with current knowledg

dozens of different ways to solve this

write everything out literally by hand first
*/
