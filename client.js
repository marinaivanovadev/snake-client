const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  
  conn.on("connect", () => {
    console.log("Connection established");
    conn.write("Name: MI");
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
