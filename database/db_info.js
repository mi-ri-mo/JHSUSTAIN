// db 접속 정보를 모아둠.
module.exports = (function() {
    // 모듈로 사용 가능하도록 함.
    return {
        local: {
            // 해당 변수 안에 배열로 접속 정보 저장
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'mirim2',
            database: 'jhsustain'
        },
        real: {
            host: '',
            port: '',
            user: '',
            password: '',
            database: ''
        },
        staging: {
            host: '',
            port: '',
            user: '',
            password: '',
            database: ''
        },
        dev: {
            host: '',
            port: '',
            user: '',
            password: '',
            database: ''
        }
    }
})();