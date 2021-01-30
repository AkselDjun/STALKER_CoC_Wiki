let express = require('express');
const MongoClient = require('mongodb').MongoClient;
let app = express();
let url = 'mongodb://localhost:27017/stalker_call_of_pripyat_wiki';
let database;

app.set('view engine', 'html');
app.get('/tasks/:name', function (request, response) {
    let tasksType = request.params.type;
    database.collection('tasks').find({ type: tasksType }).toArray(function (error, tasks) {
        if (error) return response.status(400).send();
        response.render('index.html', {
            tasks
        });
    });
});

MongoClient.connect(url, function (error, db) {
    useNewUrlParser: true;

    if (error) throw error;
    database = db;
    app.listen(1000);
});