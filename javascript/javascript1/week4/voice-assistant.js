let name = [];
let todoList = [];
function getReply(command) {
  if (command.toLowerCase().includes("hello my name is")) {
    const newName = command.split(" ")[4];
    const commandWords = command.split(" ");
    if (commandWords.length >= 5 && name.length > 0 && name.includes(newName)) {
      return `Hello again, ${newName}`;
    } else {
      name.push(newName);
      return `Nice to meet you ${newName}`;
    }
  }
  if (command.toLowerCase().includes("what is my name")) {
    return `Your name is ${name}`;
  }
  if (
    command.toLowerCase().includes("add") &&
    command.toLowerCase().includes("todo")
  ) {
    const todoId = command.indexOf("todo");
    const todoItem = command.split(" ")[1];
    todoList.push(todoItem);
    return `${todoItem} added to your todo`;
  }
  if (
    command.toLowerCase().includes("remove") &&
    command.toLowerCase().includes("todo")
  ) {
    const todoId = command.indexOf("todo");
    const todoItem = command.split(" ")[1];
    todoList.splice(todoList.indexOf(todoItem), 1);
    return `${todoItem} removed from your todo`;
  }
  if (command.toLowerCase().includes("what is on my todo?")) {
    return `You have ${todoList.length} todos - ${todoList}`;
  }
  if (command.toLowerCase().includes("what day is it today?")) {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return `${date}.${month}.${year}`;
  }

  if (command.startsWith("What is ")) {
    if (command.includes("+")) {
      let numbers = command.replace("What is ", "").split(" + ");
      let sum = parseInt(numbers[0]) + parseInt(numbers[1]);
      return sum;
    } else if (command.includes("-")) {
      let numbers = command.replace("What is ", "").split(" - ");
      let difference = parseInt(numbers[0]) - parseInt(numbers[1]);
      return difference;
    } else if (command.includes("*")) {
      let numbers = command.replace("What is ", "").split(" * ");
      let product = parseInt(numbers[0]) * parseInt(numbers[1]);
      return product;
    } else if (command.includes("/")) {
      let numbers = command.replace("What is ", "").split(" / ");
      let quotient = parseInt(numbers[0]) / parseInt(numbers[1]);
      return quotient;
    }
  }
  if (command.toLowerCase().includes("set a timer for")) {
    const time = command.split(" ")[4];
    setTimeout(() => {
      console.log(`Timer done`);
    }, time * 1000);
    return `Timer set for ${time} seconds`;
  }
  if (command.toLowerCase().includes("tell me a joke")) {
    const jokes = [
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "What do you get when you cross a snowman and a vampire? Frostbite!",
      "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    ];
  }
  if (command.toLowerCase().includes("Throw a coin")) {
    const random = Math.random();
    if (random > 0.5) {
      return "Heads";
    } else {
      return "Tails";
    }
  }
}
console.log(getReply("Hello my name is Benjamin")); // 'Nice to meet you Benjamin'
console.log(getReply("what is my name")); // 'Your name is Benjamin'
console.log(getReply("add fishing to my todo")); // 'fishing added to your todo'
console.log(todoList); // ['fishing']
console.log(getReply("remove fishing from my todo")); // 'fishing removed from your todo'
console.log(todoList); // []
console.log(getReply("what is on my todo?")); // 'You have 0 todos'
console.log(getReply("what day is it today?")); // '9.3.2021'
console.log(getReply("What is 3 + 3")); // 6
console.log(getReply("What is 4 - 2")); // 2
console.log(getReply("What is 2 * 3")); // 6
console.log(getReply("What is 10 / 2")); // 5
console.log(getReply("set a timer for 4 seconds")); // 'Timer set for 4 seconds'
console.log(getReply("tell me a joke")); // 'Why did the tomato turn red? Because it saw the salad dressing!'
console.log(getReply("Throw a coin")); // 'Heads' or 'Tails'

