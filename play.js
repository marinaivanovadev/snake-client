
const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 3000,
  });

  conn.setEncoding("utf8");

  return conn;

};

console.log("Connecting ...");
connect();

