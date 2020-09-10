var express = require('express')
const app = express()
var bparse = require('body-parser')
var mailer = require('nodemailer')
var password=require('./Functions.js')
password=password.ranPassword()

var mailtransport = mailer.createTransport(
	{
		service: 'gmail',
		auth:
		{
			user: 'souvikmukherjee987@gmail.com',
			pass: 'skmsd41711ppBabai'
		}
	}
)

app.use(bparse.urlencoded({ extended: true }))

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/OTPPage.html")
})

app.post("/getOTP", (req, res) => {
	var toEmail = req.body.email
	console.log(toEmail)
	console.log("RANMDOM PASS:" + ' ' + password)
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
})

app.post("/getOTPkey", (req, res) => {
	var key = req.body.code
	console.log("ENTERRD KEY:" + ' ' + key)
	console.log("RANMDOM PASS:" + ' ' + password)
	if (key == password)
		res.sendFile(__dirname + "/welcome.html")
})
app.listen(3000, (err, data) => {
	if (err) throw err;
	else console.log("Running @3000 Port")
})