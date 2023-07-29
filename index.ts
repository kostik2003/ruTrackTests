const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient("mongodb://127.0.0.1:27017/ParseRuTrack");
//@ts-ignore

client.connect().then((mongoClient) => {
  console.log("Подключение установлено");
  console.log(mongoClient.options.dbName); // получаем имя базы данных
});
