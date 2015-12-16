var Express = require('express');
var app = Express();
var bodyPArser = require('body-parser');
var fs = require('fs');

var knex = require('./db/knex');
function fascinate() {
  return knex('awesome');
}

app.get('/index', function(req, res){
  fascinate().insert({
    activity: 'test',
    enjoyment: 'test',
    type: 'test',
    hours: 4,
  }, 'id').then(function(result){
    res.json(result);
  });
});

app.get('/:name', function(req, res){
  fascinate().where('name', req.params.name).first().then(function(result){
    res.json(result);
  });
});


app.listen(8080,function(req, res){
  console.log('you are now listening to the sounds of nothing')
})
