const mongoClient=require('mongodb').MongoClient;
const file=require('fs');
const url="mongodb+srv://souvik:12345@project1.2avwp.mongodb.net/nodedb?retryWrites=true&w=majority";
mongoClient.connect(url,(err,db)=>
{
	if(err) console.log("Cannot Connect to Server DB")
	
	var dbo=db.db("nodedb")
	dbo.collection("college").find({$and:[{"name":"souvik"},{"score":{$gte:8.5}}]}).limit(5).toArray((err,data)=>
	{
		if(err) throw err;
		exports.data;
		db.close();
	})
})