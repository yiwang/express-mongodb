var app = require('express').createServer();
var ArticleProvider = require('./articleprovider-memory').ArticleProvider;
var articleProvider = new ArticleProvider();

app.get('/', function(req, res){
    articleProvider.findAll(function(error, docs){
        res.send(require('util').inspect(docs));
    })
});

app.listen(3000);

