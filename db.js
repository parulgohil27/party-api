const mysql = require("mysql2/promise");
const pool = mysql.createPool({
    user: "DB_USERNAME",
    password: "DB_PASSWORD",
    host: "DB_HOST",
    port: 3307,
    database: "DB_NAME"
})

module.exports = pool;