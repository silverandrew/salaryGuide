var router = require('express').Router();
var pg = require('pg');
var connect = require('../../auth');
var winston = require('../../logger');
var table = require('../../table');


router.get('/', function (req, res, next) {
    var query;
    var client = new pg.Client(connect);
    var departments = [];
    query = client.query("SELECT DISTINCT department FROM " + table);
    client.connect(function(err) {
        if(err) {
            winston.error('could not connect to postgres', { error: err });
            return
        }
        query.on('row',function(row,result) {
            departments.push(row.department)
        });
        query.on('error',function(err){
            winston.error({ error: err });
            return;
        });
        query.on('end',function(result){
            res.send(departments);
            client.end();
        })
    });
});

module.exports = router;