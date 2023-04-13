
module.exports = function MqttAsync(client) {
    
    let subscribe = client.subscribe;
    let publish = client.publish;
    let unsubscribe = client.unsubscribe;
    let end = client.end;

	client.publish = (topic, value, options) => {
		return new Promise((resolve, reject) => {
			publish.call(client, topic, value, options, (error) => {
				if (error)
					reject(error);
				else 
					resolve();
			});	
		});
	}  

    client.subscribe = (topic, options) => {
		return new Promise((resolve, reject) => {
			subscribe.call(client, topic, options, (error) => {
				if (error)
					reject(error);
				else 
					resolve();
			});
		});

	}

    client.unsubscribe = (topic, options) => {
		return new Promise((resolve, reject) => {
			unsubscribe.call(client, topic, options, (error) => {
				if (error)
					reject(error);
				else 
					resolve();
			});
		});

	}

    client.end = (force, options) => {
		return new Promise((resolve, reject) => {
			end.call(client, force, options, (error) => {
				if (error)
					reject(error);
				else 
					resolve();
			});
		});

	}

    return client;
}
