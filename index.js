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
