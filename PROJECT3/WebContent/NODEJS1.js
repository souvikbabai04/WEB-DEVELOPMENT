var express = require('express')

const app = express()
var mysql = require('mysql')

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'babai'
})

const sql = "select * from emp"
conn.connect((err, data) => {
	if (err) console.log("Cannot Connect with DB")
	else console.log("Connected with DB")
})
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/view.html")
})

app.get("/display", (req, res) => {
	conn.query(sql, (err, data) => {
		if (err) console.log("Cannot Fetch Data")
		else
		res.send(data)
	})
})
app.listen(3000, (err, data) => {
	if (err) console.log("Not Available")
	else
		console.log("Running @ 3000port")
})