const net = require('net');
const { setupInput } = require('./play');
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.on("connect", () => {
    console.log("Connection established");
    conn.write("Name: MI");
    
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 50);

    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 100);

    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 50);

  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", (connect) => {
    console.log("Successfully connected to game server");
  });

  conn.setEncoding("utf8");
  return conn;
};
module.exports = {
  connect
};
