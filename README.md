# mqtt-async
A simple way to convert the MQTT library to async. Just a function.


Create an MQTT instance as normal. Then just do this.

let Mqtt = reuire('mqtt');
let MqttAsync = require('mqtt-async');

let Mqtt = require('mqtt');
let mqtt = MqttAsync(Mqtt.connect(...));

