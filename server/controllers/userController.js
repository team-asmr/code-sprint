const { Pool, Client } = require('pg');
const connectionString = "";

const pool = new Pool({
  connectionString: connectionString
});

const client = new Client({
  connectionString: connectionString
})
client.connect()
  .then( () => console.log('Connected to database'))

client.query('SELECT * from users;', (err, res) => {
  if (err) console.log('err:', err)
  if (res) console.log('res.rows:', res.rows)
  client.end()
})

