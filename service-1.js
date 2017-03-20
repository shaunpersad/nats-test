const NATS = require('nats');
const nats = NATS.connect({
    url: 'nats://nats:4222',
    json: true
});

nats.subscribe('greeting', {queue:'service'}, function(request, replyTo) {

    console.log('service 1', request);
    nats.publish(replyTo, {
        response: 'I can help!'
    });
});