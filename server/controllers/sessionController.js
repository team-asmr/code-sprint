const redis = require('redis');
client = redis.createClient(); //can take port, host

client.on('connect', ()=>{
  console.log('Connected to Redis.');
});

sessionController = {};

sessionController.createSession = (req, res, next) => {
  client.set(res.locals.ssid, res.locals.user.id, 'EX', 1800);
  return next();
}

sessionController.verifySession = (req, res, next) => {
  const { ssid } = req.cookies;
  client.get(ssid, (err, resp) => {
    if (err) console.log(err);
    if (resp) {
      console.log('verifying session, resp:', resp);
      res.json(resp);
    } else {
      next();
    }
  })
}

module.exports = sessionController;