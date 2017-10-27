var express =require('express');
var router = express.Router();
var fs = require('fs')
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'zhangxiao'
})
/* GET home page. */
router.post('/',function (req,res,next) {
    res.header('Access-Control-Allow-Origin',"*")
    connection.connect();

    connection.query('SELECT * FROM xuesheng.1701', function(err, rows, fields) {
console.log(rows)
        res.send(rows);

    });
    connection.end();
})
// router.post('/', function(req, res, next) {
 module.exports = router;