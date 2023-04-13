# mqtt-async
Work in progress. A simple way to convert the MQTT library to async. Just a function.

Create an MQTT instance as normal. Then just do this.

```
const Mqtt = require('mqtt');
const MqttAsync = require('mqtt-async');

let mqtt = MqttAsync(Mqtt.connect(...));
```
