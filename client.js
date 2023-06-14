const net = require('net');
const { setupInput } = require('./play');

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  
  conn.on("connect", () => {
    console.log("Connection established");
    conn.write("Name: MI");
    // conn.write("Move: up");
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");

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
