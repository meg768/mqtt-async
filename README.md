# mqtt-async
A simple way to convert the [MQTT.js library](https://www.npmjs.com/package/mqtt) to use async/await. No dependecies. Just a simple function. 
This is a different approach than the [async-mqtt](https://www.npmjs.com/package/async-mqtt) library which encapsulates MQTT.

Create an MQTT instance as normal. Then just call MqttAsync().

```javascript
const Mqtt = require('mqtt');
const MqttAsync = require('mqtt-async');

let mqtt = MqttAsync(Mqtt.connect(...));

await mqtt.subscribe('topic');
await mqtt.publish('topic', 'Hello');

```

This is the complete source code. Nothing more. Just copy it into your project or use this module.

```javascript

module.exports = function MqttAsync(client) {

    let subscribe = client.subscribe;
    let publish = client.publish;
    let unsubscribe = client.unsubscribe;
    let end = client.end;

    client.publish = (...args) => {
        return new Promise((resolve, reject) => {
            publish.call(client, ...args, (error) => {
                error ? reject(error) : resolve();
            });
        });
    }

    client.subscribe = (...args) => {
        return new Promise((resolve, reject) => {
            subscribe.call(client, ...args, (error) => {
                error ? reject(error) : resolve();
            });
        });

    }

    client.unsubscribe = (...args) => {
        return new Promise((resolve, reject) => {
            unsubscribe.call(client, ...args, (error) => {
                error ? reject(error) : resolve();
            });
        });

    }

    client.end = (...args) => {
        return new Promise((resolve, reject) => {
            end.call(client, ...args, (error) => {
                error ? reject(error) : resolve();
            });
        });

    }

    return client;
}

```