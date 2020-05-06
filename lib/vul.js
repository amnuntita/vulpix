const express = require("express"); // เรียกใช้ Express
const mysql = require("mysql"); // เรียกใช้ mysql
const db = mysql.createConnection({
  // config ค่าการเชื่อมต่อฐานข้อมูล
  host: "localhost",
  user: "root",
  password: "",
  database: "vulpix",
});
db.connect(); // เชื่อมต่อฐานข้อมูล
const vulpix = express(); // สร้าง Object เก็บไว้ในตัวแปร app เพื่อนำไปใช้งาน
// Select Data
vulpix.get("res/:appId", (req, res) => {
  // Router เวลาเรียกใช้งาน
  let sql = "SELECT * FROM not_leaked_result WHERE title = " + req.params.appId; // คำสั่ง sql
  let query = db.query(sql, (err, results) => {
    // สั่ง Query คำสั่ง sql
    if (err) {
      console.log(err);
      throw err;
    } // ดัก error
    console.log(results); // แสดงผล บน Console
    return res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
  });
});

module.exports = vulpix;
