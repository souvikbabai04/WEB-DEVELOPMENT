var mysql = require('mysql')

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'test'
})

conn.connect(conn, (err, data) => {
	if (err) throw err
	else return data
})

exports.runquery = function (sql) {
	conn.query(sql, (err, data) => {
		if (err) throw err
		else console.log("Task PERFORMED")
	})
}

exports.connection = function () {
	return conn
}