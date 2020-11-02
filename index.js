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

async function start() {
  const welcomeMessage = `182 Main St.
You are standing on Main Street between Church and South Winooski.
There is a door here. A keypad sits on the handle.
On the door is a handwritten sign.
>_`;
  let answer = await ask(welcomeMessage);
  console.log("You typed: " + answer);
  console.log("Sorry, I don't know what " + answer + " means. goodbye");
  process.exit();
}

/* 

don't be afraid to commit or push, which you can do as many times as you want

only a few additional things at tuesday's class that could help, but you
  should be able to get through the TEN STORIES okay with current knowledg

dozens of different ways to solve this

write everything out literally by hand first
*/
