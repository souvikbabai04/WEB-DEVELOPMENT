var express = require('express')
const app = express()
var mysql = require('mysql')
var pathfolder = require('./DB')
var bparser = require('body-parser')
var pathemail=require('./EmailCheck')
const port = 3000

app.use(bparser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/welcomePage.html")
})

app.post("/submitForm", (req, res) => {
	var username = req.body.username
	var password = req.body.password
	var sql = "select count(*) as total from emp1 where Username='" + username + "' and Password='" + password + "'"
	var conn = pathfolder.connection()

	conn.query(sql, (err, data) => {
		data = JSON.parse(JSON.stringify(data))
		var count = data[0].total
		if (count == 0)
			res.sendFile(__dirname+"/welcomePage.html")
		else
			res.sendFile(__dirname + "/Page1.html")
	})
})
app.get("/signin", (req, res) => {
	res.sendFile(__dirname + "/signin.html")
})
app.post("/signupForm", (req, res) => {
	var fname = req.body.fname
	var lname = req.body.lname
	var email = req.body.email
	var username = req.body.username
	var password = req.body.password
	
	var code=req.body.code
	var key=pathemail.check(email)
	console.log("KEY:"+' '+key)
	console.log("CODE:"+' '+code)
	if(key==code)
	{
		var sql = "insert into emp1 values('" + fname + "','" + lname + "','" + email + "','" + username + "','" + password + "')"
		pathfolder.runquery(sql)
	}
	res.sendFile(__dirname + "/welcomePage.html")
})

app.post("/verify",(req,res)=>
{
	var email=req.body.email
	pathemail.check(email)
	//res.sendFile(__dirname+"/signin.html")
})
app.listen(port, 'localhost', (err, data) => {
	if (err) { console.log("Error Occured @" + " " + port + " " + "port") }
	else { console.log("Running @" + " " + port + " " + "port") }
})