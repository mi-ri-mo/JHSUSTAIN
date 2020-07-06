var mysql = require('mysql');
// mysql 인스턴스를 가져옴.
var config = require('./db_info').local;
// db 접속 정보를 가져옴.

module.exports = function() {
    return {
        init: function() {
            // mysql 에 접속.
            return mysql.createConnection({
                host: config.host,
                port: config.port,
                user: config.user,
                password: config.password,
                database: config.database
            })
        }
    }
};