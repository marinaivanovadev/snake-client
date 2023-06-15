let connection;
let direction = null;


// Setup user input
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(key) {
    if (key === '\u0003') { // Terminate the game with CTRL + C
      process.exit();
    }
    if (key === "w") {
      direction = "up";
    } else if (key === "a") {
      direction = "left";
    } else if (key === "s") {
      direction = "down";
    } else if (key === "d") {
      direction = "right";
    } else if (key === "p") {
      connection.write("Say: Hi, Marina is here!");
    } else if (key === "b") {
      connection.write("Say: Bye, bye!");
    }
  };

  // Always move in one direction
  const moveSnake = function() {
    if (direction !== null) {
      connection.write(`Move: ${direction}`);
    }
  };
    
  const interval = setInterval(moveSnake, 100);
  
  stdin.on("data", (key) => {
    handleUserInput(key);
    // Clear interval when the key released
    if (direction === null) {
      clearInterval(interval);
    }
  });
  return stdin;
};

module.exports = {
  setupInput
};