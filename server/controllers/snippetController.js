const pool = require('./db');

const snippetController = {};

snippetController.submitSnippet = (req, res, next) => {
  const { name, content, created_by } = req.body;
  pool.query(`INSERT INTO snippets (name, content, created_by, num_faves)
                VALUES ($1, $2, $3, 0) RETURNING *`, [name, content, created_by])
    .then((resp) => {
      console.log('row after submitting snippet', resp.rows[0])
      next();
    })
    .catch(err => {
      console.error(err)
      return next('Error submitting snippet');
    })
}

snippetController.favoriteSnippet = (req, res, next) => {
  const { snippetId, userId } = req.body;

  const catchError = (err) => {
    console.log(err);
    return next('Error favoriting snippet');
  }

  pool.query(`SELECT * FROM userfavesnippets WHERE snippet_id=${snippetId} AND user_id=${userId}`)
    .then(resp => {
      if (resp.rows[0]) {
        res.send('Already liked');
      } else {
        pool.query(`UPDATE snippets SET num_faves = num_faves + 1 WHERE id = ${snippetId} RETURNING *`)
          .then((resp) => {
            console.log('row after favoriting snippet', resp.rows[0])
          })
          .catch(catchError);

        pool.query(`INSERT INTO userfavesnippets (snippet_id, user_id) VALUES ($1, $2) RETURNING *`, [snippetId, userId])
          .then((resp) => {
            console.log('row after favoriting snippet in join table', resp.rows[0])
            next();
          })
          .catch(catchError);
      }
    })
    .catch(catchError);
}

snippetController.getSnippet = (req, res, next) => {
  pool.query(`SELECT * FROM snippets`)
    .then(resp => {
      res.locals.snippets = resp.rows;
      next();
    })
    .catch(err => {
      console.log(err);
      next('Error getting snippet');
    })
}

module.exports = snippetController;