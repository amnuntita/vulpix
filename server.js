"use strict";

const Express = require("express");
//const mysql = require("mysql");
var cors = require("cors");
const { pool } = require("./config");
const path = require("path");

const app = Express();
const port = process.env.PORT || 3002;

app.use(cors());

app.get("/app/:appId", (req, res) => {
  // Router เวลาเรียกใช้งาน
  const id = req.params.appId;
  let query = pool.query(
    "SELECT DISTINCT * FROM app WHERE apk = $1 LIMIT 1 OFFSET 0",
    [id],
    (err, results) => {
      // สั่ง Query คำสั่ง sql
      if (err) {
        console.log(err);
        throw err;
      } // ดัก error
      console.log(results); // แสดงผล บน Console
      res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
    }
  );
});

app.get("/suggest", (req, res) => {
  // Router เวลาเรียกใช้งาน
  const q = req.query.q + "%";
  let query = pool.query(
    "SELECT DISTINCT title FROM app WHERE lower(title) LIKE lower($1) LIMIT 5 OFFSET 0",
    [q],
    (err, results) => {
      // สั่ง Query คำสั่ง sql
      if (err) {
        console.log(err);
        throw err;
      } // ดัก error
      console.log(results); // แสดงผล บน Console
      res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
    }
  );
});

app.get("/search", (req, res) => {
  // Router เวลาเรียกใช้งาน
  const q = "%" + req.query.q + "%";
  let query = pool.query(
    "SELECT DISTINCT * FROM app WHERE lower(title) LIKE lower($1)",
    [q],
    (err, results) => {
      // สั่ง Query คำสั่ง sql
      if (err) {
        console.log(err);
        throw err;
      } // ดัก error
      console.log(results); // แสดงผล บน Console
      res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
    }
  );
});

app.get("/device/:appId", (req, res) => {
  // Router เวลาเรียกใช้งาน
  const id = req.params.appId;
  let query = pool.query(
    "SELECT advertiser_id,android_id,device_serial_number,google_services_framework_id,imei FROM result WHERE title = $1",
    [id],
    (err, results) => {
      // สั่ง Query คำสั่ง sql
      if (err) {
        console.log(err);
        throw err;
      } // ดัก error
      console.log(results); // แสดงผล บน Console
      res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
    }
  );
});

app.get("/location/:appId", (req, res) => {
  // Router เวลาเรียกใช้งาน
  const id = req.params.appId;
  let query = pool.query(
    "SELECT country,physical_address,time_zone,gps FROM result WHERE title = $1",
    [id],
    (err, results) => {
      // สั่ง Query คำสั่ง sql
      if (err) {
        console.log(err);
        throw err;
      } // ดัก error
      console.log(results); // แสดงผล บน Console
      res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
    }
  );
});

app.get("/media/:appId", (req, res) => {
  // Router เวลาเรียกใช้งาน
  const id = req.params.appId;
  let query = pool.query(
    "SELECT audio_recording,contact_book,photo,sms,web_browsing_log FROM result WHERE title = $1",
    [id],
    (err, results) => {
      // สั่ง Query คำสั่ง sql
      if (err) {
        console.log(err);
        throw err;
      } // ดัก error
      console.log(results); // แสดงผล บน Console
      res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
    }
  );
});

app.get("/simcard/:appId", (req, res) => {
  // Router เวลาเรียกใช้งาน
  const id = req.params.appId;
  let query = pool.query(
    "SELECT mac_address,cell_id,iccid_sim_serial_number,imsi,location_area_code,phone_number FROM result WHERE title = $1",
    [id],
    (err, results) => {
      // สั่ง Query คำสั่ง sql
      if (err) {
        console.log(err);
        throw err;
      } // ดัก error
      console.log(results); // แสดงผล บน Console
      res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
    }
  );
});

app.get("/user/:appId", (req, res) => {
  // Router เวลาเรียกใช้งาน
  const id = req.params.appId;
  let query = pool.query(
    "SELECT age,calendar,contact_book,cvv,date_of_birth,email,gender,name,password,ssn,username FROM result WHERE title = $1",
    [id],
    (err, results) => {
      // สั่ง Query คำสั่ง sql
      if (err) {
        console.log(err);
        throw err;
      } // ดัก error
      console.log(results); // แสดงผล บน Console
      res.json(results); // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
    }
  );
});

if (process.env.NODE_ENV === "production") {
  app.use(Express.static("build"));
  app.get("/", (req, res) => {
    res.sendFile(path.join("build", "index.html"));
  });
}

//app.use("/api/", router);
app.use("/public", Express.static(__dirname + "/public"));

//app.use(Express.static(__dirname + "/"));

app.listen(port, function () {
  console.log("Server started on port", port);
});
