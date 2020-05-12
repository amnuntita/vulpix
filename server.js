"use strict";

const Express = require("express");
const mysql = require("mysql");
//const router = require("./lib/index.js");
var cors = require("cors");

const db = mysql.createConnection({
  // config ค่าการเชื่อมต่อฐานข้อมูล
  host: "localhost",
  user: "root",
  password: "",
  database: "vulpixdb",
});
db.connect(); // เชื่อมต่อฐานข้อมูล

const app = Express();
const port = process.env.PORT || 3002;

app.use(cors());

app.get("/app/:appId", (req, res) => {
  // Router เวลาเรียกใช้งาน
  let sql =
    "SELECT DISTINCT `apk`,`title`,`rating`,`download`,`dev`,`icon`,`desc`,`cat`,`policy` FROM app WHERE apk = " +
    '"' +
    req.params.appId +
    '"' +
    "LIMIT 0,1"; // คำสั่ง sql
  let query = db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) {
      console.log(err);
      throw err;
    } // ดัก error
    console.log(results); // แสดงผล บน Console
    res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
  });
});

app.get("/suggest", (req, res) => {
  // Router เวลาเรียกใช้งาน
  let sql =
    "SELECT DISTINCE `title` FROM app WHERE title LIKE " +
    '"' +
    req.query.q +
    '%" LIMIT 0,5'; // คำสั่ง sql
  let query = db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) {
      console.log(err);
      throw err;
    } // ดัก error
    console.log(results); // แสดงผล บน Console
    res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
  });
});

app.get("/search", (req, res) => {
  // Router เวลาเรียกใช้งาน
  let sql =
    "SELECT DISTINCT `apk`,`title`,`rating`,`download`,`dev`,`icon` FROM app WHERE title LIKE " +
    '"%' +
    req.query.q +
    '%"'; // คำสั่ง sql
  let query = db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) {
      console.log(err);
      throw err;
    } // ดัก error
    console.log(results); // แสดงผล บน Console
    res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
  });
});

app.get("/res/", (req, res) => {
  // Router เวลาเรียกใช้งาน
  let sql =
    "SELECT * FROM " +
    req.query.q +
    " WHERE title = " +
    '"' +
    req.query.appId +
    '"'; // คำสั่ง sql
  let query = db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) {
      console.log(err);
      throw err;
    } // ดัก error
    console.log(results); // แสดงผล บน Console
    res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
  });
});

//app.use("/api/", router);
app.use("/public", Express.static(__dirname + "/public"));

app.listen(port, function () {
  console.log("Server started on port", port);
});
