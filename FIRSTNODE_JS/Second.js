/* var student={
	name: 'Souvik'
};
console.log(student.name);
 */

/* var http=require('http');
var event=require('events');

var eventmtr=new  event.EventEmitter();

var server=http.createServer(function(req,res)
{
	res.end('Server Works');
	eventmtr.emit('someone request','TEST');
});
eventmtr.on('someone request',function()
{
	console.log("Request done on Server");
});
server.listen(3000,'localhost',function()
{
	console.log('Running in LocalHost');
}); */

var express=require('express');
var app=express();
var http=require('http');
var server=http.createServer(app);
var fs=require('fs');

app.get('/',function(req,rep)
{
	rep.send('<h1>I am IN</h1>');
});

app.get('/tasks',function(req,res)
{
	fs.readFile('db.json',function(err,data)
	{
		if(!err)
		{
			res.send(JSON.parse(data.toString()).tasks);
		}
	});	
});

server.listen(3000,'localhost',function()
{
	console.log('Heloo Bubli');
});