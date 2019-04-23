const bcrypt = require ('bcryptjs');
const SALT_WORK_FACTOR = 10;

const pool = require ('./db');

userController = {};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  password = bcrypt.hashSync(password, SALT_WORK_FACTOR);
  pool.query(`
    INSERT INTO Users (username, password)
    VALUES ($1, $2)
    RETURNING *
  `, [ username, password ])
  .then(resp => {
    console.log('row after creating user', resp.rows[0]);
    res.locals.user = resp.rows[0];
    next();
  })
  .catch(err => {
    console.error(err.stack);
    next('DB create user error');
  })
}

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  pool.query(`
      SELECT * FROM Users
      WHERE username=$1
    `, [username])
    .then(resp => {
      if (resp.rows[0] && bcrypt.compareSync(password, resp.rows[0].password)) next();
      else res.status(401).send('Incorrect username/password');
    })
    .catch(err => {
      console.error(err.stack);
      next('DB verify user error');
    })
}

userController.logoutUser = (req, res, next) => {
console.log('logging out');
}

userController.submitSnippet = (req, res, next) => {
  const { name, content, created_by } = req.body;
  pool.query(`INSERT INTO Snippets VALUES ($1, $2, $3) RETURNING *`, [name, content, created_by])
    .then((resp) => {
      console.log('row after submitting snippet', resp.rows[0])
      next();
    })
    .catch(err => {
      console.error(err)
      return next('Error submitting snippet');
    })
}

userController.favoriteSnippet = (req, res, next) => {
  const { snippetId, userId } = req.body;
  pool.query(`UPDATE Snippets SET num_faves = num_faves + 1 WHERE snippet_id = ${snippetId}`)
    .then((resp) => {
      console.log('row after favoriting snippet', resp.rows[0])
    })
    .catch(err => {
      console.error(err)
      return next('Error favoriting snippet');
    })

  pool.query(`INSERT INTO UserFaveSnippets ($1, $2)`, [snippetId, userId])
    .then((resp) => {
      console.log('row after favoriting snippet in join table', resp.rows[0])
      next();
    })
    .catch(err => {
      console.log(err);
      return next('Error favoriting snippet');
    })
}

module.exports = userController;