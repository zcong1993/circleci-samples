const mysql = require('mysql2')

setTimeout(() => process.exit(0), 3000)
mysql.createConnection(process.env.MYSQL_DB_URL)
