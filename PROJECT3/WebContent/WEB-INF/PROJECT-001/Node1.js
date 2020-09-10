var express=require('express')
var app=express()
var path=require('./node2')
const port=3000

path
app.listen(port,(err,data)=>
{
	if(err) console.log("Failed to Runn")
	else console.log("Running @3000 Port")
})
