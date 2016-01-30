/**
 * Created by eli on 3/23/15.
 */
var router = require('express').Router();
var pg = require('pg');
var connect = require('../../auth');
var winston = require('../../logger');

function Package(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;

    return this;
}


router.get('/', function (req, res, next) {
    res.send('Nothing here, move along');
});

router.post('/', function (req, res, next) {
    var text = "SELECT DISTINCT personid, name, totalSal FROM " + require('../../table');
    var conditions = [];
    var values = [];
    
    var simpleObjs = [];

    if (req.body.name) {
        var names = req.body.name.split(' ');
        var name = names[0] + "%";
        name = names.length === 1 ? "%" + name : name + names[names.length - 1];

        // Don't de-dupe if a name is specified
        text = text.replace(" DISTINCT", "");

        conditions.push('name LIKE');
        values.push(name.replace("'", "''"));

        winston.info({query: name, address: req.connection.remoteAddress});
    }
    if (req.body.dept) {
        conditions.push('department =');
        values.push(' ' + req.body.dept);

        // winston.info(dept);
    }
    if (req.body.campus) {
        conditions.push('campus =');
        values.push(' ' + req.body.campus);
    }
    
    for (var index in conditions) {
        text += [
            ' ' + index === 0 ? 'WHERE' : 'AND',
            conditions[index],
            '$' + (index + 1) // Should this be in the form $1 or ($1) or $1::string
        ].join(' ');
    }

    pg.connect(connect, function(err, client, done) {
        if (err) {
            return winston.error('could not connect to postgres', {error: err});
        }
        var query = client.query(text, values, function(err, result) {
            done();
            
            if (err) {
                return winston.error('error running query', {error: err});
            }
        });
        query.on('row', function(row, result) {
            var person = new Package(row.personid, row.name, row.totalsal);
            simpleObjs.push(person);
            result.addRow(row);
        });
        query.on('end', function(result) {
            res.send(simpleObjs);
            client.end();
        });
    });
});

module.exports = router;
