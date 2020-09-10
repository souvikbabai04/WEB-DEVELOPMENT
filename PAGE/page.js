const express=require('express')
const app=express()
const bparse=require('body-parser');
const { query } = require('express');

app.use(bparse.urlencoded({extended:false}))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});
 app.post('/submit',data=function(req,res)
{
    var name=req.body.fname+' '+req.body.lname;
    var dept=req.body.dept;
    var score=req.body.score;

    res.send(name+' '+dept+' '+score)
})
app.listen(3000,'localhost',()=>
{
    console.log("Running @ 3000 port")
})
