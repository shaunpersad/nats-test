const NATS = require('nats');
const nats = NATS.connect({
    url: 'nats://nats:4222',
    //json: true
});

nats.on('connect', function() {
    console.log('connected');
});

nats.on('close', function() {
    console.log('nats closed');
});

function once(fn) {

    var called = false;
    var response = null;

    return function() {

        console.log('calling');
        if (called) {
            return response;
        }
        response = fn.apply(this, arguments);
        called = true;
        return response;
    }
}

nats.requestOne('greeting', 'hello', {}, 1000, function(response) {

    console.log('hey!');
    if(response instanceof NATS.NatsError && response.code && response.code === NATS.REQ_TIMEOUT) {
        console.log('Request for help timed out.');
        return;
    }
    console.log('Got a response for help: ', response);
});
