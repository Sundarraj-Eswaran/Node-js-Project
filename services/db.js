const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqli');

/**
 * 
 * @param {Pass the sql query gnerate data dynamically} sql 
 * @returns 
 */
let rawQuery = (sql)=>{
  return new Promise((resolve, reject)=>{
  db.serialize(()=>{
      db.all(sql, (err, rows)=>{
          if (err)
              reject(err)
          resolve(rows)
      })
  });
  })
}

module.exports = {
 
  rawQuery
}