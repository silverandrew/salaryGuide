/**
 * Created by eli on 3/23/15.
 */
var router = require('express').Router();
var pg = require('pg');
var connect = require('../../auth');
var winston = require('../../logger');
var table = require('../../table');


router.get('/', function (req, res, next) {
    res.send('Nothing here, move along');
});

function Package(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
    return this;
}


router.post('/', function (req, res, next) {
    // If they searched by name, run this
    if(req.body.name){
        var query;
        var names = req.body.name.split(' ');
        var client = new pg.Client(connect);
        var simpleObjs = [];
        var name;

        if(names.length === 1){
            name = "%" + names[0] + "%";
            name = name.replace("'","''");
        } else {
            name = names[0]+"%"+names[names.length - 1];
            name = name.replace("'","''");
        }

        winston.info({ query: name.replace("''","'"), address: req.connection.remoteAddress });

        query = client.query("SELECT personid, name, totalSal FROM " + table + " WHERE name LIKE '"+name+"'" );
        client.connect(function(err) {
            if(err) {
                winston.error('could not connect to postgres', { error: err });
                return
            }
            query.on('row',function(row,result) {
                var person = new Package(row.id,row.name,row.totalsal);
                simpleObjs.push(person);
                result.addRow(row);

            });
            query.on('error',function(err){
                winston.error({ error: err });
                return;
            })
            query.on('end',function(result){
                res.send(simpleObjs);
                client.end();
            })
        });
    }
    // Triggered by department search
    if(req.body.dept){
        var query;
        var dept = req.body.dept;
        client = new pg.Client(connect);
        var simpleObjs = [];
        winston.info(dept);

        query = client.query("SELECT distinct personid, name, totalSal From "+table+" WHERE department = '"+dept+"'");
        client.connect(function(err){
            if(err) {
                winston.error(err);
                return;
            }
            query.on('row', function(row,result){
                var person = new Package(row.personid,row.name,row.totalsal);
                simpleObjs.push(person);
                result.addRow(row);
            });
            query.on('end',function(result){
                res.send(simpleObjs);
                client.end()
            })
        })

    }
    // Triggered by campus search
    if(req.body.campus){
        var query;
        var campus = req.body.campus;
        client = new pg.Client(connect);
        var simpleObjs = [];
        query = client.query("SELECT distinct personid, name, totalSal FROM "+table+" WHERE campus = ' "+campus+"'"); // PLEASE NOTE THE SPACE BEFORE THE CAMPUS VARIABLE - SOMETHING ISN'T RIGHT IN THE CLEANING SCRIPT
        client.connect(function(err){
            if(err) {
                winston.error(err);
                return;
            }
            query.on('row', function(row,result){
                var person = new Package(row.personid,row.name,row.totalsal);
                simpleObjs.push(person);
                result.addRow(row);
            });
            query.on('end',function(result){
                res.send(simpleObjs);
                client.end()
            })
        })

    }

});

module.exports = router;