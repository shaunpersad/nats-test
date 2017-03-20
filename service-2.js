const NATS = require('nats');
const nats = NATS.connect({
    url: 'nats://nats:4222',
    json: true
});

nats.subscribe('greeting', {queue:'service'}, function(request, replyTo) {

    console.log('service 2', request);
    setTimeout(function() {
        nats.publish(replyTo, {
            response: 'I can help too!'
        });
    }, 10000);
});
