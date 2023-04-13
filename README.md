# mqtt-async
A simple way to convert the MQTT library to async. Just a function.

Work in progress.

Create an MQTT instance as normal. Then just do this.

```

const Mqtt = reuire('mqtt');
const MqttAsync = require('mqtt-async');

let mqtt = MqttAsync(Mqtt.connect(...));

```
