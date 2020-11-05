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

class MainStreet {
  constructor() {
    this.welcomeMessage = `182 Main St.
You are standing on Main Street between Church and South Winooski.
There is a door here. A keypad sits on the handle.
On the door is a handwritten sign.
>_`;
    this.sign = `The sign says "Welcome to Burlington Code Academy!
Come on up to the third floor.
If the door is locked, use the code 12345."`;
  }

  read(thingToRead) {
    return this[thingToRead];
  }

  take() {
    return `That would be selfish. How will other students find their way?`;
  }
}
start();

async function start() {
  let room = new MainStreet();
  let answer = await ask(room.welcomeMessage);
  // answer === "read sig
  while (answer !== "exit") {
    let commands = answer.split(" ");
    let action = commands[0];
    let object = commands[1];
    console.log({ room });
    console.log(room[action](object));
    answer = await ask(`${room.welcomeMessage}`);
  }
  process.exit();
}
