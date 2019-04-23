const redis = require('redis');
client = redis.createClient();

client.set("ray", "hi", redis.print);
client.get("ray")