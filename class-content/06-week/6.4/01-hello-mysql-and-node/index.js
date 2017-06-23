// ES5
var mysql = require('mysql');

var connection = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: '',
  database: 'inception'
});

connection.connect(function(error) {
  if (error) {
    throw error;
  }
  console.log('Connected to MySQL server, as ID = ', connection.threadId);
  /**
   * CREATE
   */
  connection.query('INSERT INTO `dreams` (`name`) VALUES (?)', ['Fourth Level'],
    function(err, data) {
      if (err) {
        throw err;
      }

      console.log('data', data);
    });

  var search = 'fourth%';
  /**
   * READ
   */
  connection.query('SELECT * FROM `dreams` WHERE `name` LIKE ?', [search],
    function(queryError, response) {
      if (queryError) {
        throw queryError;
      }
      response.forEach(function(row) {
        console.log('response from MySQL server', row.name, 'id', row.id);
      });
    })
  /**
   * UPDATE
   */
  var updateID = 4;
  connection.query('UPDATE `dreams` SET `name` = ? WHERE `id` = ? ',
    ['Fourth Level - Updated', updateID], function(err, data) {
      if (err) {
        throw err;
      }

      console.log('data', data);
    });
  /**
   * DELETE
   */
  var deleteID = 6;
  connection.query('DELETE FROM `dreams` WHERE `id` = ?', [deleteID], function(err, data) {
      if (err) {
        throw err;
      }

      console.log('data', data);
    });
});

