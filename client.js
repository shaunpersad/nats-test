const NATS = require('nats');
const nats = NATS.connect({
    url: 'nats://nats:4222',
    json: true
});


nats.requestOne('greeting', {greeting: 'hello'}, {}, 1000, function(response) {

    console.log('hey!');
    if(response.code && response.code === NATS.REQ_TIMEOUT) {
        console.log('Request for help timed out.');
        return;
    }
    console.log('Got a response for help: ', response);
});