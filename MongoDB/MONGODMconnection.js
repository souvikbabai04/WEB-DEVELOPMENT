const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://souvik:12345@project1.2avwp.mongodb.net/nodedb?retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  dbo.collection("college").find().limit(5).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});