var bparse = require('body-parser')
var mailer = require('nodemailer')

ranPassword = function () {
	return Math.floor(Math.random() * 10000);
}

var password=ranPassword()

exports.check = function (email) {
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
		var toEmail =email
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
		return password
}