let mysql = require("mysql");
let Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "user1",
};

const record = {
  sender: "Pritam",
  reciever: "Prathmesh",
  msg: "Hello",
};

const addRecord = async (record) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  const sql = `insert into message(sender,reciever,msg) values(?,?,?)`;
  await connection.queryAsync(sql, [
    record.sender,
    record.reciever,
    record.msg,
  ]);
  await connection.endAsync();
  console.log("Message recorded successfully!");
};

addRecord(record);

const getRecord = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  const sql = `select * from message`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  console.log("list of records!");
  console.log(list);
  return list;
};
getRecord();

module.exports = { addRecord, getRecord };
