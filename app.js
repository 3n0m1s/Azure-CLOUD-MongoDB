var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://epocummongo:r25wD39S6WfTTFSfhouJXtxfvDJyvD7Gr0RhlyQra6kLCNC1IDfOkqLszMTUgCtagTymvqsYZKt2r2yT6yhB0w==@epocummongo.documents.azure.com:10255/?ssl=true",{ useNewUrlParser: true }, function (err, db) {
 
var dbo = db.db("admin");
dbo.collection('persone').insertOne( {
        "id": "AndersenFamily",
        "lastName": "Andersen",
        "parents": [
            { "firstName": "Thomas" },
            { "firstName": "Mary Kay" }
        ],
        "children": [
            { "firstName": "John", "gender": "male", "grade": 7 }
        ],
        "pets": [
            { "givenName": "Fluffy" }
        ],
        "address": { "country": "USA", "state": "WA", "city": "Seattle" }
    }, function(err, result) {
    console.log("Inserted a document into the families collection.");
});



dbo.collection("persone").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });

});


