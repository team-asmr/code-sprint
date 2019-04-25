const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const cors = require('cors');

const sessionController = require('./controllers/sessionController');
const userController = require('./controllers/userController');
const snippetController = require('./controllers/snippetController');

const PORT = 3000;

app.use(bodyparser.json(), cookieparser(), cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/signup', userController.createUser, sessionController.createSession, (req, res) => {
  res.json(res.locals.user.id);
});

app.post('/snippet', snippetController.submitSnippet, (req, res) => {
  res.send('Successfully submitted snippet');
})

app.put('/snippet', snippetController.favoriteSnippet, (req, res) => {
  res.send('Liked Snippet');
})

app.get('/snippet', snippetController.getSnippet, (req, res) => {
  res.json(res.locals.snippets);
});

app.get('/login', sessionController.verifySession, (req, res) => {
  res.json('No session');
});

app.post('/login', userController.verifyUser, sessionController.createSession, (req, res) => {
  res.json(res.locals.user);
});

app.use('*', (req, res) => {
    res.status(404).send('Page Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
})

app.listen(PORT, () => {console.log(`Listening on port ${PORT}...`)});

//  (\____/)
//  (='.'=)
// ('')_('')