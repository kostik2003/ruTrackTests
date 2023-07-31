const axios = require("axios");

const { JSDOM } = require("jsdom");

// const MongoClient = require("mongodb").MongoClient;

// const client = new MongoClient("mongodb://127.0.0.1:27017/ParseRuTrack");

// client.connect().then((mongoClient) => {
//   console.log("Подключение установлено");
//   console.log(mongoClient.options.dbName); // получаем имя базы данных
// });

const setFunc = async () => {
  const res = await axios.get("https://rutracker.org/forum/index.php?c=4");
  let html = res.data;

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const items = document.getElementsByClassName("category");
  const testDivs = Array.prototype.filter.call(
    items,
    (items) => items.nodeName === "DIV"
  );
  const newObj = {};

  testDivs.forEach((node) => {
    newObj[node.id] = {
      id: node.id,
    };
  });
  console.log(newObj);
};

setFunc();
