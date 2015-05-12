/**
 * Created by eli on 3/26/15.
 */
// HERE IS AN EXAMPLE OF WHAT A PERSON'S DETAILS MAY LOOK LIKE. REFER TO THIS FOR DEBUGGING
//{
//    name: 'Jane Doe',
//        totalSalary: '$100,000',
//    tenureCode: 'A',
//    personID: '2000',
//    howPaid: 'Salary'
//    details: [
//        {
//            position: 'position1',
//            department: 'department1',
//            college: 'college1',
//            campus: 'campus1',
//            class: 'AA',
//            salary: '$50,000'
//        },
//        {
//            position: 'position2',
//            department: 'department2',
//            college: 'college2',
//            campus: 'campus2',
//            class: 'BB',
//            salary: '$50,000'
//        }...]
//}


var router = require('express').Router();
var pg = require('pg');
var connect = require('../../auth');
var logger = require('../../logger');
var table = require('../../table');

var Job = (function () {
    // This function creates a Job for whomever is being searched. A person may hold more than one job. Jobs are then stored in an array in the person object.
    function Job(position, department, college, campus, classCode, positionPay) {
        this.position = position;
        this.department = department;
        this.college = college;
        this.school = campus;
        this.classCode = classCode;
        this.positionPay = positionPay;
    }
    return Job;
})();
var Person = (function () {
    // This function creates a person object to be sent to the client
    function Person(id) {
        this.addPosition = function (position, department, college, campus, classCode, positionPay) {
            var x = new Job(position, department, college, campus, classCode, positionPay);
            this.details.push(x);
        };
        this.name = null;
        this.tenure = null;
        this.salary = null;
        this.id = id;
        this.payType = null;
        this.details = [];
        this.flag = false;
    }
    // Person.flag is how we keep track of whether the person object has been initialized with name/tenure/salary/paytype
    Person.prototype.firstPass = function (name, tenure, salary, payType) {
        this.name = name;
        this.tenure = tenure;
        this.salary = salary;
        this.payType = payType;
        this.flag = true;
    };
    Person.prototype.getPerson = function () {
        return {
            name: this.name,
            salary: this.salary,
            tenure: this.tenure,
            id: this.id,
            payType: this.payType,
            details: this.details
        };
    };
    return Person;
})();
router.get('/', function (req, res, next) {
    res.send('Nothing here, move along');
});
router.post('/', function (req, res, next) {
    var id = req.body.id;
    var query;
    var client = new pg.Client(connect);
    var person = new Person(id);
    query = client.query("SELECT * FROM "+table+" WHERE personid = " + id.toString());
    client.connect(function (err) {
        if (err) {
            return console.error('could not connect to postgres', err);
        }
        query.on('row', function (row, result) {
            // Only triggers the first time a row is returned and sets some info that is the same across all rows
            if (!person.flag) {
                person.firstPass(row.name, row.tenure, row.totalsal, row.howpaid);
            }
            // Triggers for every row that is returned and creates a job from that row
            person.addPosition(row.position, row.deptname, row.collegename, row.campus, row.classcode, row.positionsalary);
            result.addRow(row);
        });
        query.on('end', function (result) {
            logger.info(person.getPerson());
            res.send(person.getPerson());
            client.end();
        });
    });
});
module.exports = router;
