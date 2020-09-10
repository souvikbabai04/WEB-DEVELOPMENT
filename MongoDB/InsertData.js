const mongoClient=require('mongodb').MongoClient;

const uri = "mongodb+srv://souvik:12345@project1.2avwp.mongodb.net/nodedb?retryWrites=true&w=majority";
const value=[{name: "Suravi Das", dept: "ECE", score:10},
{name: "Somnath Das", dept: "CSE", score:6.25},
{name: "Swetanshu Chakladhar", dept: "CSE", score:8.25},
{name: "Subhankar Chakroborty", dept: "ME", score:8.69},
{name: "Babaita Bhakta", dept: "ECE", score:8.98},
{name: "Amit Mitra", dept: "CSE", score:9.56},
{name: "Subhodeep Dutta", dept: "CSE", score:7.56},
{name: "Udity Dutta", dept: "ME", score:8.00},
{name: "Purbita Guhu", dept: "CSE", score:7.65}]

mongoClient.connect(uri,(err,db)=>
{
	if(err) console.log("Cannot Connect");
	var dbo=db.db("nodedb");	
	dbo.collection("college").insertMany(value,(err,data)=>
	{
		if(err) throw err;
		console.log("Uploaded Succesfully");
	})
	db.close();
})