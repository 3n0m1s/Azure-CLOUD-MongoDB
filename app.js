var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://user:pass==@source.documents.azure.com:10255/?ssl=true",{ useNewUrlParser: true }, function (err, db) {
 
var dbo = db.db("admin");
dbo.collection('persone').insertOne( {
        "name": "nome",
        "lastName": "cognome",
        "parents": [
            { "firstName": "giuliano" },
            { "firstName": "loretta" }
        ],
        "children": [
            { "firstName": "", "gender": "male", "grade": 7 }
        ],
        "pets": [
            { "givenName": "silly" }
        ],
        "address": { "country": "ITA", "state": "ITA", "city": "Perugia" }
    }, function(err, result) {
    console.log("Inserted a document into the persone's collection.");
});



dbo.collection("persone").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });

});


