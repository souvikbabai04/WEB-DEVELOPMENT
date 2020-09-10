const app=require('./NodeJS(MAIN)')
const port=3030

app.listen(port, 'localhost', (err, data) => {
	if (err) { console.log("Error Occured @" + " " + port + " " + "port") }
	else { console.log("Running @" + " " + port + " " + "port") }
})