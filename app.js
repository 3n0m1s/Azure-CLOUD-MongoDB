var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://user:pass==@source.documents.azure.com:10255/?ssl=true",{ useNewUrlParser: true }, function (err, db) {
 
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


