const axios = require("axios");

const { JSDOM } = require("jsdom");

// const MongoClient = require("mongodb").MongoClient;

// const client = new MongoClient("mongodb://127.0.0.1:27017/ParseRuTrack");

// client.connect().then((mongoClient) => {
//   console.log("Подключение установлено");
//   console.log(mongoClient.options.dbName); // получаем имя базы данных
// });
const res = axios.get("https://rutracker.org/forum/index.php?c=4");
let html = res.data;

const dom = new JSDOM(html);
const document = dom.window.document;
console.log(document);

const items = document.querySelectorAll("[class='category']");
console.log(items.length);
