var express=require('express')
var app=express()
const port=3000
app.get("/",(req,res)=>
{
	res.sendFile(__dirname+"/HelloWorld.html")
})

app.listen(port,(err,data)=>
{
	if(err) console.log("Failed to Runn")
	else console.log("Running @3000 Ports")
})
