var mysql = require('mysql');


//var tableName = "table1";
var appName = process.env.APP_NAME;
var tableName = process.env.TABLE_NAME;
var mysqlHost = process.env.MYSQL_HOST;
var mysqlUser = process.env.MYSQL_USER;
var mysqlPassword = process.env.MYSQL_PASSWORD;
var mysqlDatabase = process.env.MYSQL_DATABASE;


// Create a connection to the database
var con = mysql.createConnection({
  host: mysqlHost,
  user: mysqlUser,
  password: mysqlPassword,
  database: mysqlDatabase
});


let i = 0;


// read all rows from table
async function readAllRows() {
    i += 1;
    //test select
  if(process.env.SELECT_RULE === "true") {
    con.query("SELECT * FROM " + tableName, function (err, result, fields) {
      if (err) {
        console.log("SELECT ERROR");
      } else {
        console.log("SELECT OK");
      }
    });
  }
  //test insert columns: f1, f2, f3 and integer values
  if(process.env.INSERT_RULE === "true") {
    con.query("INSERT INTO " + tableName + " (f1, f2, f3) VALUES (1, 2, 3)", function (err, result, fields) {
      if (err) {
        console.log("INSERT ERROR");
      } else {
        console.log("INSERT OK");
      }
    });
  }

  //test update
  if(process.env.UPDATE_RULE === "true"){
    con.query("UPDATE " + tableName + " SET f1 = 1, f2 = 2, f3 = 3 WHERE f1 = 1 AND f2 = 2 AND f3 = 3", function (err, result, fields) {
      if (err) {
        console.log("UPDATE ERROR");
      } else {
        console.log("UPDATE OK");
      }
    });
  }

  //delete the last row
  if(process.env.DELETE_RULE === "true") {
    con.query("DELETE FROM " + tableName + " WHERE f1 = 1 AND f2 = 2 AND f3 = 3", function (err, result, fields) {
      if (err) {
        console.log("DELETE ERROR");
      } else {
        console.log("DELETE OK");
      }
    });
  }

}

setInterval(() => {
    //console.log('Infinite Loop Test interval n:', i++);
    readAllRows();
    console.log("--------" + i.toString() + " - " + appName + " - " + tableName + " - " + mysqlDatabase + "--------");
}, 5000)


