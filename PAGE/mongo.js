const MongoClient=require('mongodb').MongoClient;
const pat=require('./page.js')
const value=pat.query;
console.log(value)
/* const url = "mongodb+srv://souvik:12345@project1.2avwp.mongodb.net/nodedb?retryWrites=true&w=majority";
MongoClient.connect(url,(err,db)=>
{
	if(err) console.log('Error to Connect DB')
	console.log('Connected')

	var dbo=db.db("nodedb");
	dbo.collection("college").insertOne(value,(err,data)=>
	{
		if(err) console.log("Cannot Upload");
		else	console.log(value);
	})
	db.close();
}) */