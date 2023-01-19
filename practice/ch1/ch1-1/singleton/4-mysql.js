// p.022
// mysql의 싱글톤 패턴

const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "example.org",
  user: "kundol",
  password: "secret",
  database: "승절이디비",
});
pool.connect();

// 모듈 A
pool.query(query, function (err, results, fields) {
  if (err) throw err;
  console.log("The solution is : ", results[0].solution);
});

// 모듈 B
pool.query(query, function (err, results, fields) {
  if (err) throw err;
  console.log("The solution is : ", results[0].solution);
});
