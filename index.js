var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var dtmfRecieved = [{number:"8875242421",digit:"1"}]

function insertMany(obj){
    MongoClient.connect(url, function(err, mongo) {
      if (err) throw err;
      var dbo = mongo.db("mydb");  
      dbo.collection("customers").insertMany(obj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        mongo.close();
      });
    });
}
  
function finddata(cust){  
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection(cust).find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(`found data ${result.length}`);
        db.close();
      });
    });
  }

  console.log(Date.now())
  insertMany(myobj)
  console.log(Date.now())
  finddata("customers")
  console.log(Date.now())