var express = require('express')
var mysql = require('mysql')
const app = express()

var bParser = require('body-parser')
var mailer = require('nodemailer')
var password = require('./Functions.js')
password = password.ranPassword()

var con = mysql.createConnection(
	{
		host: "localhost",
		user: "root",
		password: "",
		database: "babai"
	})
var mailtransport = mailer.createTransport(
	{
		service: 'gmail',
		auth:
		{
			user: 'souvikmukherjee987@gmail.com',
			pass: 'skmsd41711ppBabai'
		}
	})

app.use(bParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/welcome.html")
})

app.post("/add", (req, res) =>
 {
	con.connect((err, data) => 
	{
		if (err) throw err
		else
			console.log("Connected")
		var toEmail = req.body.email
		var mailoption = {
			from: 'souvikmukherjee987@gmail.com',
			to: toEmail,
			subject: 'OTP from my Company @SOUVIK.com',
			text: 'ONE TIME PASSWORD IS' + ' ' + password
		}
		mailtransport.sendMail(mailoption, (err, data) => {
			if (err) console.log("Mail CANNOT send Succesfully")
			else console.log("Mail send Succesfully")
		})
		var key=req.body.code
		if (key == password) {
			const sql = "insert into emp values('" + req.body.fname + "','" + req.body.lname + "','" + req.body.sex + "','" + req.body.email + "','" + req.body.address + "','" + req.body.pnum + "')"
			con.query(sql, (err, data) => {
				if (!err) console.log("Inserted")
				else
					console.log("Cannot Insert in databse")
			})
			}
			else
			console.log("Error")
		})
})
/*app.get("/display", (req, res) => {
	con.connect((err, db) => {
		if (err) console.log("Cannot Connect")
		else
			console.log("Connected")

		const sql = "select * from emp"
		con.query(sql, (err, data) => {
			if (!err) {
				res.send(data)
			}
			else
				console.log("Cannot  Fetch Data from databse")
		})
	})

})*/
app.listen(3000, (err) => {
	if (err) throw err
	console.log("Listenning @ 3000port")
})