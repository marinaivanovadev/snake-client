const net = require('net');
const { IP, PORT } = require("./constants");

// establish connection with server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  

  conn.on("connect", () => {
    console.log("Connection established");
    conn.write("Name: MI");
      
  });
  // listen data from server
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  // confirm successful conection
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  // confirm that connection closed by the server
  conn.on("end", () => {
    console.log("Connection closed by the server.");
  });
  //show if there is an error and show the error
  conn.on("error", (error) => {
    console.log("Connection error:", error);
  });
  conn.on("close", () => {
    console.log("Connection closed.");
    process.exit();
  });

  conn.setEncoding("utf8");
  return conn;
};
module.exports = {
  connect,
};
