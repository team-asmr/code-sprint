const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');

const sessionController = require('./controllers/sessionController');
const userController = require('./controllers/userController');

const PORT = 3000;

app.use(bodyparser.json(), cookieparser());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/signup', userController.createUser, (req, res) => {
  res.send('Success');
});

app.post('/submitsnippet', userController.submitSnippet, (req, res) => {
  res.send('Successfully submitted snippet')
})

app.put('/favesnippet', userController.favoriteSnippet, (req, res) => {
  res.send('Liked Snippet')
})

app.post('/login', (req, res) => {
  res.send('Success');
});

app.use('*', (req, res) => {
    res.status(404).send('Page Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
})

app.listen(PORT, () => {console.log(`Listening on port ${PORT}...`)});

//   (\__/)
//  (='.'=)
// ('')_('')