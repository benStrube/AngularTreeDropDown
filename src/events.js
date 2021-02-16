const express = require('express');

function createRouter(db) {
    const router = express.Router();
    const owner = '';

    //the routes are defined here

    router.post('/databases', (req,res,next) => {
        db.query(
            'INSERT INTO databases (name, table, column, datatype) VALUES (?,?,?,?)',
            [req.body.name, req.body.table, req.body.column, req.body.datatype],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({status: 'error'});
                } else {
                    res.status(200).json({status: 'ok'});
                }
            }
        );
    });

    router.get('/databases', function (req, res, next) {
        db.query(
          'SELECT name, table, column, datatype FROM databases WHERE name=? ORDER BY datatype LIMIT 10 OFFSET ?',
          [owner, 10*(req.params.page || 0)],
          (error, results) => {
            if (error) {
              console.log(error);
              res.status(500).json({status: 'error'});
            } else {
              res.status(200).json(results);
            }
          }
        );
      });

    return router;
}

module.exports = createRouter;