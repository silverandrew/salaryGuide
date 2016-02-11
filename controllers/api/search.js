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
    var text = "SELECT DISTINCT personid, name, totalSal FROM " + require('../../table') + " WHERE ";
    var conditions = [];
    var values = [];
    var paramNum = 0;
    
    var simpleObjs = [];

    if (req.body.name) {

        var name = "%" + req.body.name.split(' ').join("%") + "%";

        // Don't de-dupe if a name is specified
        // If we remove distinct from name list, we end up with a set of
        // the same person keyed to the same idea bc of many appointments
        // Not sure if ideal
        //text = text.replace(" DISTINCT", "");

        conditions.push('name ILIKE $' + ++paramNum);
        values.push(name);

        winston.info({query: name, address: req.connection.remoteAddress});
    }
    if (req.body.dept) {
        conditions.push('department = $' + ++paramNum);
        values.push(req.body.dept);

        // winston.info(dept);
    }
    if (req.body.campus) {
        conditions.push('campus = $' + ++paramNum);
        values.push(" " + req.body.campus);
    }
    
    text += conditions.join(" AND ");

    // This should be reviewed further.
    //if (req.body.sort) {
    //    values.push(req.body.sort.field);
    //    text += " ORDER BY $" + values.length + req.body.sort.desc ? " DESC" : " ASC";
    //}

    pg.connect(connect, function(err, client, done) {
        if (err) {
            return winston.error('could not connect to postgres', {error: err});
        }
        console.log(text, values);
        var query = client.query(text, values, function(err, result) {
            if (err) {
                return winston.error('error running query', {error: err});
            }
            done();
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
