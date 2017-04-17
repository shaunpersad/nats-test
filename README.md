# nats-test

This is a small example to show how NATS can be used to communicate with multiple instances of the same service
in a queue format.  

- The client will make a request to any existing subscribers to the "greeting" event.
- Service 1 and Service 2 are both subscribers to the "greeting event", and belong to the same queue.
- When the example runs, only one service (whichever is fastest) will respond.

Run `docker-compose up` to run. Try running multiple times to see how sometimes Service 1 will respond, but other times Service 2 will respond.
