# mqtt-async
A simple way to convert the MQTT library to use async/await. No dependecies. Just a simple function.

Create an MQTT instance as normal. Then just call MqttAsync().

```javascript
const Mqtt = require('mqtt');
const MqttAsync = require('mqtt-async');

let mqtt = MqttAsync(Mqtt.connect(...));

await mqtt.subscribe('topic');
await mqtt.publish('topic', 'Hello');

```

Complete source code

```javascript
module.exports = function MqttAsync(client) {

    let subscribe = client.subscribe;
    let publish = client.publish;
    let unsubscribe = client.unsubscribe;
    let end = client.end;

    client.publish = (...args) => {
        return new Promise((resolve, reject) => {
            publish.call(client, ...args, (error) => {
                if (error)
                    reject(error);
                else
                    resolve();
            });
        });
    }

    client.subscribe = (...args) => {
        return new Promise((resolve, reject) => {
            subscribe.call(client, ...args, (error) => {
                if (error)
                    reject(error);
                else
                    resolve();
            });
        });

    }

    client.unsubscribe = (...args) => {
        return new Promise((resolve, reject) => {
            unsubscribe.call(client, ...args, (error) => {
                if (error)
                    reject(error);
                else
                    resolve();
            });
        });

    }

    client.end = (...args) => {
        return new Promise((resolve, reject) => {
            end.call(client, ...args, (error) => {
                if (error)
                    reject(error);
                else
                    resolve();
            });
        });

    }

    return client;
}

```