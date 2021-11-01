const mysql = require('mysql')

const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sqlpassword',
  database: 'sql_crud_api_1_db',
  port: '3307',
  dialect: 'mysql'
})

dbConn.connect(function(error) {
  if(error) throw error
  console.log('Database is connected successfully')
})

module.exports = dbConn