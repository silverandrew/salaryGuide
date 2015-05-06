var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
var logger = require('./logger');

if (cluster.isMaster) {
    logger.info('Fork %s worker(s) from master', numCPUs);
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('online', function(worker) {
        logger.info('Worker is running on %s pid', worker.process.pid);
    });
    cluster.on('exit', function(worker) {
        logger.info('Worker with %s is closed', worker.process.pid);
    });
} else if (cluster.isWorker) {
    var express = require('express');
    var bodyParser = require('body-parser');
    var app = express();
    var port = 3000;
    var server = app.listen(port);

    app.set('env','production');
    app.set('x-powered-by', false);

    app.use(bodyParser.json());

    app.use(require('./controllers/static'));
    app.use('/api/search', require('./controllers/api/search'));
    app.use('/api/details', require('./controllers/api/details'));
    server;
    logger.info('Worker (%s) is now listening to http://localhost:%s',
        cluster.worker.process.pid, port);
}