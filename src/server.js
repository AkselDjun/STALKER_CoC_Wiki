const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const objectId = require("mongodb").ObjectID;

const app = express();

const mongoClient = new MongoClient("mongodb://localhost:27017/", { useUnifiedTopology: true });

app.use(express.static(__dirname + "/src"));

mongoClient.connect(function (err, client) {
    if (err) return console.log(err);
    dbClient = client;
    app.locals.collection = client.db("stalker_call_of_pripyat_wiki").collection("tasks");
    app.listen(3000, function () {
        console.log("Сервер ожидает подключения...");
    });
});

app.get("/api/users", function (req, res) {

    const collection = req.app.locals.collection;
    collection.find({}).toArray(function (err, users) {

        if (err) return console.log(err);
        res.send(users)
    });

});

app.get("/api/users/:id", function (req, res) {

    const id = new objectId(req.params.id);
    const collection = req.app.locals.collection;
    collection.findOne({ _id: id }, function (err, user) {

        if (err) return console.log(err);
        res.send(user);
    });
});

app.get("/api/users/:name", function (req, res) {

    const name = new objectId(req.params.name);
    const collection = req.app.locals.collection;
    collection.findOne({ name: name }, function (err, user) {

        if (err) return console.log(err);
        res.send(user);
    });
});

app.get("/api/users/:location", function (req, res) {

    const location = new objectId(req.params.location);
    const collection = req.app.locals.collection;
    collection.findOne({ location: location }, function (err, user) {

        if (err) return console.log(err);
        res.send(user);
    });
});

app.get("/api/users/:gettingTask", function (req, res) {

    const gettingTask = new objectId(req.params.gettingTask);
    const collection = req.app.locals.collection;
    collection.findOne({ gettingTask: gettingTask }, function (err, user) {

        if (err) return console.log(err);
        res.send(user);
    });
});

app.get("/api/users/:сompletingTask", function (req, res) {

    const сompletingTask = new objectId(req.params.сompletingTask);
    const collection = req.app.locals.collection;
    collection.findOne({ сompletingTask: сompletingTask }, function (err, user) {

        if (err) return console.log(err);
        res.send(user);
    });
});